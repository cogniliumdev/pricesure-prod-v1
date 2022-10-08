import Head from "next/head";
import { Fragment} from "react";
import Breadcrumb from "@components/ui/breadcrumb";
import ShopGrid from "@components/shop/ShopGrid";
import { HeaderOne as Header } from "@components/header";
import { HeaderThree as Header3 } from "@components/header";
import { FooterOne as Footer } from "@components/footer";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";
import { useRouter } from "next/router";


const Shop = () => {
  const router = useRouter();

  const logo = "/assets/images/no-placeholder/logo.png";
  const { category, searchQuery } = router.query;

  return (
    <Fragment>
      <Head>
        <title>
          Pricesure - {searchQuery ? searchQuery : category ? category : ""}
        </title>
        <meta
          name="description"
          content="Pricesure"
        />
      </Head>

      {/* <Header
        logo={logo}
        navbar={true}
        navData={navContent}
        navbarAlignment="left"
      />

      <Header3 logo={logo} navData={navContent} /> */}

      <ContentWrapper>
        <Breadcrumb />

        <ShopGrid
          // products={products}
          sidebar={true}
          sidebarPosition="left"
          containerFluid={false}
        />
      </ContentWrapper>

      <Footer logo={logo} />
    </Fragment>
  );
};

// export default PageShopLeftSidebar;
export default Shop;
