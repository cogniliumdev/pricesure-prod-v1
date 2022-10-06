import React from "react";
import { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import CartContextProvider from "@global/CartContext";
import CompareContextProvider from "@global/CompareContext";
import ProductsContextProvider from "@global/ProductsContext";
import WishlistContextProvider from "@global/WishlistContext";
import "react-tippy/dist/tippy.css";
import "@assets/scss/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/cards/cards.css";
import "../components/slider/SliderOne.css";
import "../components/categories-menu/temp.css";
import "../components/collectioncards/CollectionCards.css";
import "../components/shop/elements/Shop.css";
import { store, persistor } from "../app/store.js";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { HeaderThree as Header } from "@components/header";
import { HomePagesNavData as navContent } from "@data/navbar";


const Wokiee = ({ Component, pageProps }) => {

  // to top hydration error 
  const [showChild, setShowChild] = useState(false);
  const logo = "/assets/images/no-placeholder/logo.png";

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  }
  else {
    return (
      <Fragment>
        <Head>
          <title>pricesure</title>
        </Head>

        <Header logo={logo} navData={navContent} />

        <CartContextProvider>
          <CompareContextProvider>
            <Provider store={store}>
              <PersistGate  loading={null} persistor={persistor}>
              <WishlistContextProvider>
                <ProductsContextProvider>
                  <Component {...pageProps} />
                </ProductsContextProvider>
              </WishlistContextProvider>
              </PersistGate>
            </Provider>
          </CompareContextProvider>
        </CartContextProvider>
      </Fragment>
    )
  };
};

export default Wokiee;
