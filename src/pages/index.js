import Head from "next/head";
import { Fragment, useContext } from "react";
import { getProductsBySkin } from "@utils/product";
import { FooterOne as Footer } from "@components/footer";
import { ProductsContext } from "@global/ProductsContext";
import { HeaderThree as Header } from "@components/header";
import { HomePagesNavData as navContent } from "@data/navbar";
import { SliderOne as Slider } from "@components/slider";
import sliderData from "@data/slider/home-one.json";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";
import { BrandsOne as Brands } from "@components/brands";
import { TendingProducts as Tending } from "@components/products";
import Card from "@components/cards/Card";
import Collectioncards from "@components/collectioncards/collectioncards";
import { useState } from "react";
import { useGetAllFavProductsQuery } from "../app/priceSureApi/priceSureApi.js";
import { CartNotification, QuickView } from "@components/modal";
import {
  getProductsByDomain,
  getDiscountedProducts
} from "./api/elasticsearch/getElasticData.js";
import { productsFormatterWithFavProp } from "../global/globalFunctions/productsFormatter.js";
import topDomains from "../data/homePageStaticData/topDomains"
import topVendors from "../data/homePageStaticData/topVendors"
import { generateRandomNumber } from "../global/globalFunctions/randomNumberGenerator"
import { CategoriesTen as Categories } from "@components/categories";
import { BrandsFour as BrandsLogo } from "@components/brands";


const HomeFour = ({
  topdiscounted,
  topDomains,
}) => {
  const allFavProductsApiData = useGetAllFavProductsQuery();

  const topDiscountedProducts = productsFormatterWithFavProp(
    topdiscounted?.hits?.hits,
    allFavProductsApiData?.data
  );

  const topDomainsProducts = productsFormatterWithFavProp(
    topDomains?.hits?.hits,
    allFavProductsApiData?.data
  );
  console.log(topDomainsProducts)

  const logo = "/assets/images/no-placeholder/logo.png";

  return (
    <Fragment>
      <Head>
        <title>
          Pricesure
        </title>
      </Head>

      {/* <Header logo={logo} navData={navContent} /> */}

      <ContentWrapper>

        <Slider
          dots={true}
          arrows={true}
          data={sliderData}
          className="nomargin"
        />

        <Categories
          title="TOP CATEGORIES"
          content=""
        />
        <br />


        <Tending
          title="Ads ."
          // title={`Ads . ${topDomainsProducts[0].fields.domain}`}
          subTitle=""
          data={topDomainsProducts}
        />

        <Tending
          title="DEALS OF THE DAY"
          subTitle=""
          data={topDiscountedProducts}
        />
        <br />

        <BrandsLogo
          title="COLLECTIONS"
          subTitle=""
        />

        {/* <h2 style={{ paddingTop: "40px", textAlign: "center" }}>Top Brands</h2>
        <Card
          smallcardData={aggregationbyProductType?.aggregations?.langs?.buckets}
        /> */}
      </ContentWrapper>

      <Footer logo={logo} />
    </Fragment>
  );
};


export default HomeFour;

export async function getStaticProps() {
  try {
    const randomVendor = topVendors[generateRandomNumber(0, topVendors.length - 1)];
    const randomDomain = topDomains[generateRandomNumber(0, topDomains.length - 1)];

    const discountedProducts = await getDiscountedProducts(randomVendor);
    const domainProducts = await getProductsByDomain(randomDomain);

    return {
      props: {
        topdiscounted: discountedProducts,
        topDomains: domainProducts,
      },
      revalidate: 3 // time in seconds
    };

  } catch (err) {
    console.log(err);
  }
}
