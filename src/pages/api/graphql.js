import { ApolloServer, gql } from "apollo-server-micro";
import cors from "micro-cors";

import {
  MultiMatchQuery,
  RefinementSelectFacet,
  RangeFacet,
  SearchkitSchema,
  DateRangeFacet,
  SearchkitResolver,
  GeoBoundingBoxFilter,
} from "@searchkit/schema";
class CustomFilter {
  excludeOwnFilters = false;

  constructor() {}

  getIdentifier() {
    return "CustomFilter";
  }

  getFilters(filters) {
    console.log(filters);
    console.log("#####################\n");
    // console.log(filters);
    var returnedObj = filters.map((filter) => {
      return filter.value;
    });

    returnedObj = returnedObj.shift();
    // console.log( returnedObj)

    var returnedObjJson = JSON.parse(returnedObj);

    console.log(returnedObjJson, "post parse");

    var reactMetaData = { queryType: "getTopBrands" };
    var q2 = { bool: {} };
    return q2;
  }

  // powers the appliedFilters type for all filters added
  getSelectedFilter(filterSet) {
    return {
      type: "ValueSelectedFilter",
      id: `${this.getIdentifier()}_${filterSet.value}`,
      identifier: this.getIdentifier(),
      label: "Custom Filter",
      value: filterSet.value,
      display: "Custom",
    };
  }
}

const searchkitConfig = {
  // host: process.env.ES_HOST || "http://43.251.253.107:2500",
  host: process.env.ELASTIC_SEARCH_URL || "https://hklnu053kl:nzh7zulpaj@paid-3-node-9829273760.us-east-1.bonsaisearch.net:443",
  index: process.env.ELASTIC_SEARCH_INDEX,
  // index: "pricesure",
  hits: {
    fields: [
      "title",
      "image",
      "vendor",
      "price",
      "price_before_sale",
      "is_on_sale",
      "domain",
      "category",
      "updatedAt",
      "discount",
      "sku",
      "rating",
      "product_url",
    ],
  },
  filters: [
    // new MustNotContainDomainsFilter()
    new CustomFilter(),
  ],
  sortOptions: [
    {
      id: "relevance",
      label: "Relevance",
      field: [{ _score: "desc" }],
      defaultOption: true,
    },
    {
      id: "price_desc",
      label: "Price (hight to low)",
      field: { price: "desc" },
    },
    {
      id: "price_asc",
      label: "Price (low to high)",
      field: { price: "asc" },
    },
    {
      id: "discount_asc",
      label: "Discount (low to high)",
      field: { discount: "asc" },
    },
    {
      id: "discount_desc",
      label: "discount (hight to low)",
      field: { discount: "desc" },
    },
    // {
    //   id: "discount",
    //   label: "Discount",
    //   field: { discount: "desc" },
    // },
  ],
  query: new MultiMatchQuery({
    fields: ["title"],
  }),
  facets: [

    new RefinementSelectFacet({
      field: "vendor",
      identifier: "vendor",
      label: "vendor",
    }),

    new RefinementSelectFacet({
      field: "domain",
      identifier: "domain",
      label: "domain",
    }),

    new RefinementSelectFacet({
      field: "category",
      identifier: "category",
      label: "category",
    }),

    new DateRangeFacet({
      field: "updatedAt",
      identifier: "updatedAt",
      label: "Date",
    }),

  ],
};

const { typeDefs, withSearchkitResolvers, context } = SearchkitSchema({
  config: searchkitConfig,
  typeName: "ResultSet",
  hitTypeName: "ResultHit",
  addToQueryType: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = new ApolloServer({
  typeDefs: [
    gql`
      type Query {
        root: String
      }

      type Mutation {
        root: String
      }

      type ResultHit implements SKHit {
        id: ID!
        fields: HitFields
        customField: String
      }

      type HitFields {
        title: String
        image: String
        vendor: String
        price: String
        price_before_sale: String
        is_on_sale: Boolean
        domain: String
        category: String
        updatedAt: String
        sku: String
        rating: String
        product_url: String
        discount: String
      }
    `,
    ...typeDefs,
  ],
  resolvers: withSearchkitResolvers({
    ResultHit: {
      customField: (parent) => `parent id ${parent.id}`,
    },
  }),
  introspection: true,
  playground: true,
  context: {
    ...context,
  },
});
const startServer = server.start();
export default async function handler(req, res) {
  await startServer;
  await server.createHandler({
    path: "/api/graphql",
  })(req, res);
}

