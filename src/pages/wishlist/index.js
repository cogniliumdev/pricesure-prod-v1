import Head from "next/head";
import { Fragment, useContext } from "react";
import Breadcrumb from "@components/ui/breadcrumb";
import { HeaderOne as Header } from "@components/header";
import { FooterOne as Footer } from "@components/footer";
import { WishlistContext } from "@global/WishlistContext";
import { HomePagesNavData as navContent } from "@data/navbar";
import EmptyWishlist from "@components/wishlist/EmptyWishlist";
import WishlistProducts from "@components/wishlist/WishlistProducts";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";
import { useGetAllFavProductsQuery } from "../../app/priceSureApi/priceSureApi.js"
import { getSession } from "next-auth/react";
import {productsFormatter} from "../../global/globalFunctions/productsFormatter.js"

const WishlistPage = () => {

  const allFavProductsApiData = useGetAllFavProductsQuery();
  const { wishlist } = useContext(WishlistContext);
  const logo = "/assets/images/no-placeholder/logo.png"
  const products = productsFormatter(allFavProductsApiData.data);
  console.log(products);

  return (
    <Fragment>
      <Head>
        <title>Wishlist - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
      </Head>

      {/* <Header
        logo={logo}
        navbar={true}
        navData={navContent}
        navbarAlignment="left"
      /> */}
      
      <ContentWrapper>
        <Breadcrumb />

        <div className="wishlist-page-content content-indent">
          {allFavProductsApiData?.data?.length > 0 && <WishlistProducts products={products} />}
        </div>

        {allFavProductsApiData?.data?.length === 0 && (
          <div className="empty-wishlist-wrapper border">
            <EmptyWishlist />
          </div>
        )}
      </ContentWrapper>
      <Footer logo={logo} />
    </Fragment>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session: session },
  };
};

export default WishlistPage;

