import axios from 'axios';
import { MongoClient } from 'mongodb'
import { useGetAllFavProductsQuery } from "../../app/priceSureApi/priceSureApi.js"
import { productsFormatterWithFavProp } from "../../global/globalFunctions/productsFormatter.js"
import { TendingProducts as Tending } from "@components/products";
import ProductsSummary from "@components/productsSummary/productsSummary";


const ProductName = ({ product, relatedProducts }) => {
    const relatedProducts_JSON = JSON.parse(relatedProducts);
    const product_JSON = JSON.parse(product);
    const allFavProductsApiData = useGetAllFavProductsQuery();

    const newProducts = productsFormatterWithFavProp(
        relatedProducts_JSON?.hits?.hits,
        allFavProductsApiData?.data
    );

    return (<>
        <ProductsSummary details={product_JSON} />
        <br />
        <Tending
            title="Related"
            subTitle="Most Related Results"
            data={newProducts}
        />
    </>)
}

export const getStaticPaths = () => {
    return {
        paths: [
            { params: { productName: "A1-Smart-Watch" } },
            { params: { productName: "A4-Paper" } },
            { params: { productName: "A4tech-Bloody" } },
        ],
        fallback: "blocking"
    }
};


export const getStaticProps = async (context) => {
    try {
        const productName = context.params.productName;
        const dbName = "pricesure";
        const client = new MongoClient(process.env.MONGO_URL);
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("sitemapdata");

        const db_data = await collection.findOne({ search_term_url: productName });

        const elasticURL = `https://paid-3-node-9829273760.us-east-1.bonsaisearch.net/pricesure_v2/_doc/_search?q=title:${db_data.search_term_elastic}`;
        const relatedProducts = await axios.get(elasticURL, {
            headers: {
                "authorization": "Basic aGtsbnUwNTNrbDpuemg3enVscGFq"
            }
        })

        await client.close();

        if (!db_data) {
            return {
                notFound: true,
            }
        }

        return {
            props: {
                product: JSON.stringify(db_data),
                relatedProducts: JSON.stringify(relatedProducts.data),
            },
        }

    } catch (err) {
        console.log(err)
    }

};

export default ProductName