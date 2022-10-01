import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { Fragment } from "react";
import products from '@data/products';
import Breadcrumb from "@components/ui/breadcrumb";
import SocialShare from "@components/social-share";
import { RelatedProducts } from "@components/products";
import { FooterOne as Footer } from "@components/footer";
import { HeaderOne as Header } from "@components/header";
import ProductDetails from "@components/product-details";
import { HomePagesNavData as navContent } from "@data/navbar";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";
import { json } from "micro";
import { useGetRelatedProductsQuery } from "../../app/elasticSearchRestApi/elasticSearchRestApi.js"
import { useGetAllFavProductsQuery } from "../../app/priceSureApi/priceSureApi.js"
import { productsFormatterWithFavProp } from "../../global/globalFunctions/productsFormatter.js"

const PageProductDetails = ({ product }) => {

    const getdata = useGetRelatedProductsQuery(product.fields.title)
    const allFavProductsApiData = useGetAllFavProductsQuery();

    const newProducts = productsFormatterWithFavProp(
      getdata.data?.hits?.hits,
      allFavProductsApiData?.data
    );
    // const {categories, excerpt, name, tags} = product;
    const slug = `/product/${name.toLowerCase().split(' ').join('-')}`;
    const logo = "/assets/images/no-placeholder/logo.png"

    return (
        <Fragment>
            <Head>
                <title>{name + ' - Wokiee :: React Next JS Multipurpose eCommerce Template'}</title>
                <meta
                    name="description"
                // content={excerpt}
                />
            </Head>

            {/* <Header
                logo={logo}
                navbar={true}
                navData={navContent}
                navbarAlignment="left"
            /> */}

            <ContentWrapper>
                <Breadcrumb />

                <ProductDetails product={product} />

                {/* <SocialShare url={slug} content={name} /> */}

                <RelatedProducts
                    products={newProducts}
                // categories={categories}
                // tags={tags}
                />
            </ContentWrapper>

            <Footer logo={logo} />
        </Fragment>
    );
};

export function getServerSideProps(context) {
    const product = JSON.parse(context.query.product);
    return {
        props: {
            product: product
        }
    }
}

// export const getStaticProps = async ({params}) => {
//     const product = products.find(product => product.name.toLowerCase().split(' ').join('-') === params.slug);
//     return {
//         props: {
//             product
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     return {
//         paths: products.map(product => {
//             return {
//                 params: {
//                     slug: product.name.toLowerCase().split(' ').join('-')
//                 }
//             }
//         }),
//         fallback: false
//     }
// }

export default PageProductDetails;