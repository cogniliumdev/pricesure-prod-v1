import PropTypes from "prop-types";
import { Fragment, useEffect, useState } from "react";
import { withSearchkit, withSearchkitRouting } from "@searchkit/client";
import { Container, Col, Row } from "react-bootstrap";
import { useSort, useFilter, useWindowSize } from "@hooks";
import withApollo from "../../hocs/withApollo";
import LoadMore from "@components/shop/elements/LoadMore";
import ShopOptions from "@components/shop/elements/ShopOptions";
import ShopFilters from "@components/shop/elements/ShopFilters";
import ShopProducts from "@components/shop/elements/ShopProducts";
import { gql, useQuery } from "@apollo/client";
import { useSearchkitVariables, useSearchkit } from "@searchkit/client";
import { useRouter } from "next/router";
import { useGetAllFavProductsQuery } from "../../app/priceSureApi/priceSureApi.js";
import { productsFormatterWithFavProp } from "../../global/globalFunctions/productsFormatter.js"
import ReactLoading from 'react-loading';
import CustomPagination from "../pagination/customPagination"


// const gqlquery = gql`
//   query resultSet(
//     $query: String
//     $filters: [SKFiltersSet]
//     $page: SKPageInput
//     $sortBy: String
//   ) {
//     results(query: $query, filters: $filters) {
//       summary {
//         total
//         appliedFilters {
//           id
//           identifier
//           display
//           label
//           ... on DateRangeSelectedFilter {
//             dateMin
//             dateMax
//             __typename
//           }
//           ... on NumericRangeSelectedFilter {
//             min
//             max
//             __typename
//           }
//           ... on ValueSelectedFilter {
//             value
//             __typename
//           }
//           __typename
//         }
//         sortOptions {
//           id
//           label
//           __typename
//         }
//         query
//         __typename
//       }
//       hits(page: $page, sortBy: $sortBy) {
//         page {
//           total
//           totalPages
//           pageNumber
//           from
//           size
//           __typename
//         }
//         sortedBy
//         items {
//           ... on ResultHit {
//             id
//             fields {
//               title
//               image
//               vendor
//               price
//               price_before_sale
//               domain
//               category
//               is_on_sale
//               updatedAt
//               rating
//               discount
//               sku
//               product_url
//               __typename
//             }
//             __typename
//           }
//           __typename
//         }
//         __typename
//       }
//       facets {
//         identifier
//         type
//         label
//         display
//         entries {
//           label
//           count
//           __typename
//         }
//         __typename
//       }
//       __typename
//     }
//   }
// `;


const gqlquery = gql`
  query resultSet(
    $query: String
    $filters: [SKFiltersSet]
    $page: SKPageInput
    $sortBy: String
  ) {
    results(query: $query, filters: $filters) {
      summary {
        total
        appliedFilters {
          id
          identifier
          display
          label
          ... on DateRangeSelectedFilter {
            dateMin
            dateMax
            __typename
          }
          ... on ValueSelectedFilter {
            value
            __typename
          }
          __typename
        }
        sortOptions {
          id
          label
          __typename
        }
        query
        __typename
      }
      hits(page: $page, sortBy: $sortBy) {
        page {
          total
          totalPages
          pageNumber
          from
          size
          __typename
        }
        sortedBy
        items {
          ... on ResultHit {
            id
            fields {
              title
              image
              vendor
              price
              price_before_sale
              domain
              category
              is_on_sale
              updatedAt
              rating
              discount
              sku
              product_url
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
      facets {
        identifier
        type
        label
        display
        entries {
          label
          count
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;

const ShopGrid = ({
  // products,
  pageTitle,
  sidebar,
  sidebarPosition,
  containerFluid,
}) => {
  const [windowSize] = useWindowSize();
  const [productPerPage, setProductPerPage] = useState(containerFluid ? 12 : 8);
  const [layout, setLayout] = useState(
    sidebar ? "tt-col-three" : "tt-col-four"
  );
  const allFavProductsApiData = useGetAllFavProductsQuery();
  let allFavProductsId = {};
  let newProducts;



  // const { allProducts, filterPanelShow, filterPanelHandler, getFilterParam } =
  //   useFilter(products);
  // const { onSortHandler, sortProducts } = useSort(allProducts);

  const getLayout = (col) => {
    setLayout(col);
  };

  const onProductPerPageHandler = (e) => {
    const value = parseInt(e.target.value, 10);
    setProductPerPage(value);
  };

  // const onLoadMorHandler = async () => {
  //   const productShowPerPage = (prevValue) =>
  //     prevValue < allProducts.length
  //       ? allProducts.length - prevValue > 4
  //         ? (prevValue += 4)
  //         : (prevValue += allProducts.length - prevValue)
  //       : prevValue;
  //   setProductPerPage((prevState) => productShowPerPage(prevState));
  // };

  useEffect(() => {
    // Window Viewport specific product grid
    if (!sidebar) {
      if (!containerFluid) {
        (windowSize <= 499 && setLayout("tt-col-one")) ||
          (windowSize > 499 && windowSize <= 799 && setLayout("tt-col-two")) ||
          (windowSize > 800 &&
            windowSize <= 1024 &&
            setLayout("tt-col-three")) ||
          (windowSize >= 1025 && setLayout("tt-col-four"));
      } else {
        (windowSize <= 499 && setLayout("tt-col-one")) ||
          (windowSize > 499 && windowSize <= 799 && setLayout("tt-col-two")) ||
          (windowSize > 800 &&
            windowSize <= 1024 &&
            setLayout("tt-col-three")) ||
          (windowSize >= 1025 && setLayout("tt-col-six"));
      }
    }
    // } else {
    //   (windowSize <= 499 && setLayout("tt-col-one")) ||
    //     (windowSize > 499 && windowSize <= 799 && setLayout("tt-col-two")) ||
    //     (windowSize > 800 && setLayout("tt-col-three"));
    // }
  }, [windowSize]);

  const variables = useSearchkitVariables();
  const {
    previousData,
    data = previousData,
    loading,
    error
  } = useQuery(gqlquery, {
    variables: variables,
  });

  const api = useSearchkit();
  const router = useRouter();
  const { vendor, page, domain, minprice, maxprice, category, price, searchQuery, sortby } = router.query;

  const products = productsFormatterWithFavProp(data?.results?.hits?.items, allFavProductsApiData?.data);

  useEffect(() => {
    if (api.canResetSearch()) {
      api.setQuery("");
      api.search();
    }
  }, []);

  useEffect(() => {
    const customState = {
      query: "",
      sortBy: "",
      filters: [],
      page: {
        size: 12,
        from: 0,
      },
    };

    if (searchQuery) {
      customState.query = searchQuery;
    }

    if (vendor) {
      customState.filters.push({
        identifier: "vendor",
        value: vendor,
      });
    }

    if (page) {
      const sum = page * 12 - 12;
      customState.page.from = sum;
    }

    if (domain) {
      customState.filters.push({
        identifier: "domain",
        value: domain,
      });
    }

    if (minprice && maxprice) {
      console.log(minprice, maxprice)
      customState.filters.push(
        {
          identifier: "price",
          min: parseInt(minprice),
          max: parseInt(maxprice),
        }
      );
    }

    if (category) {
      customState.filters.push({
        identifier: "category",
        value: category,
      });
    }

    if (sortby) {
      customState.sortBy = sortby;
    }

    api.setSearchState(customState);
    api.search();

  }, [vendor, page, minprice, maxprice, category, domain, price, searchQuery, sortby]);


  console.log(error);
  // console.log(data);
  // console.log(products, "@@@@@@@@@@@@@@");


  return (
    <Fragment>
      {!loading ? (
        <div className="content-indent shop-no-sidebar">
          <Container
            fluid={containerFluid}
            className="container-fluid-custom-mobile-padding"
          >
            <Row
              className={
                sidebar && sidebarPosition === "right"
                  ? "flex-sm-row-reverse"
                  : ""
              }
            >
              <Col
                md={4}
                lg={3}
              // className={`leftColumn ${
              //   sidebar && sidebarPosition === "right" ? "rightColumn" : ""
              // } aside ${!sidebar ? "desktop-no-sidebar" : ""} ${
              //   filterPanelShow ? "column-open" : "column-close"
              // }`}
              >
                <ShopFilters
                  sidebar={sidebar}
                  // onSortHandler={onSortHandler}
                  // getFilterParam={getFilterParam}
                  productPerPage={productPerPage}
                  // filterPanelHandler={filterPanelHandler}
                  onProductPerPageHandler={onProductPerPageHandler}
                />

              </Col>

              <Col xs={12} lg={sidebar ? 9 : 12}>
                <div className="content-indent container-fluid-custom-mobile-padding-02">

                  <ShopOptions
                    layout={layout}
                    sidebar={sidebar}
                    pageTitle={pageTitle}
                    getLayout={getLayout}
                    // onSortHandler={onSortHandler}
                    productPerPage={productPerPage}
                    productLength={data?.results?.hits?.items?.length}
                    // productLength={allProducts.length}
                    // filterPanelHandler={filterPanelHandler}
                    onProductPerPageHandler={onProductPerPageHandler}
                  />

                  <ShopProducts
                    layout={layout}
                    products={products}
                    productPerPage={12}
                  />

                  {/* <LoadMore
                className="mt-5"
                productPerPage={productPerPage}
                productLength={allProducts.length}
                onLoadMorHandler={onLoadMorHandler}
              /> */}
                </div>
              </Col>
            </Row>
            <div className="d-flex justify-content-center mt-5 mb-5">
              <CustomPagination data={data?.results} />
            </div>
          </Container>
        </div>
      ) : (
        <div className="d-flex justify-content-center mt-5 mb-5">
          <ReactLoading type={"bubbles"} color={"#0d6efd"} height={80} width={80} />
        </div>
      )}
    </Fragment>
  );
};


export default withApollo(withSearchkit(ShopGrid));
