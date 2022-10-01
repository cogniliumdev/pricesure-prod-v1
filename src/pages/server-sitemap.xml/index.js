import { MongoClient } from 'mongodb'
import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (context) => {
    try {
        const url = process.env.MONGO_URL;
        const dbName = "pricesure";
        const client = new MongoClient(url);
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("sitemapdata");
        const db_data = await collection.find(
            {},
            { projection: { search_term_url: 1, _id: 0 } }
        ).toArray();
        await client.close();    
        
        const fields = db_data.map((currentIndex) => {
            const search_term = currentIndex.search_term_url;
            return {
                loc: `${process.env.DOMAIN}/products/${search_term}`,
                lastmod: new Date().toISOString(),
            }
        });

        return getServerSideSitemap(context, fields);

    } catch (err) {
        console.log(err);
    }
};

export default function Site() { }