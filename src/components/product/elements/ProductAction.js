import PropTypes from 'prop-types';
import { useProduct } from "@hooks";
import Tooltip from "@components/ui/tooltip";
import { getWishCompareProduct } from "@utils/product";
import { CompareContext } from "@global/CompareContext";
import { WishlistContext } from "@global/WishlistContext";
import { Fragment, useContext, useEffect, useState } from "react";
import { getSession } from 'next-auth/react';
import {
  useCreateFavouritesMutation,
  useDeleteFavProductMutation,
} from "../../../app/priceSureApi/priceSureApi.js";
import SignInModal from "@components/modal/SignInModal";
import { addProduct, removeProduct } from "../../../app/compareListSlice/compareListSlice.js";
import { useSelector, useDispatch } from 'react-redux'

const ProductAction = ({ product, modalQuickViewHandler }) => {
  const [modalShow, setModalShow] = useState(false);
  const [windowSize, setWindowSize] = useState(0);
  const [createFav, createFav_Obj] = useCreateFavouritesMutation();
  const [deleteFav, deleteFav_Obj] = useDeleteFavProductMutation();
  const dispatch = useDispatch();
  // const {wishlist} = useContext(WishlistContext);
  // const {compareList} = useContext(CompareContext);
  // const isInWishlist = getWishCompareProduct(wishlist, product);
  // const isInCompare = getWishCompareProduct(compareList, product);
  // const {compareHandler, wishlistHandler} = useProduct(product);

  const isInWishlist = product?.isAddedToFav;
  console.log(product);
  const compareList = useSelector((state) => state.compareList.products);
  console.log(compareList)
  const isInCompareList = compareList.find((x) => product.id == x.id ? true : false);



  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, [windowSize]);


  const addToFav = async () => {
    try {
      const user = await getSession();
      if (!user) {
        setModalShow(true);
      }
      else {
        const result = await createFav({ product });
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handelDeleteFav = async () => {
    try {
      const result = await deleteFav(product._id || product.id);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <Fragment >
      <SignInModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {/* <Tooltip
        content="Quick View"
        position={windowSize <= 1024 ? "top" : "left"}
        className="tt-btn-quickview"
      >
        <span onClick={modalQuickViewHandler}/>
      </Tooltip> */}

      <Tooltip
        content={!isInCompareList ? "Add to Compare" : "Remove From Compare"}
        position={windowSize <= 1024 ? "top" : "left"}
        className={`tt-btn-compare ${isInCompareList ? 'active' : ''}`}
      >
        {isInCompareList ?
          <span onClick={() => dispatch(removeProduct(product))} /> :
          <span onClick={() => dispatch(addProduct(product))} />}
      </Tooltip>


      <Tooltip
        // content={"Add to Wishlist"}
        content={isInWishlist ? 'Remove From Wishlist' : 'Add to Wishlist'}
        position={windowSize <= 1024 ? "top" : "left"}
        className={`tt-btn-wishlist ${isInWishlist ? 'active' : ''}`}
      >
        {isInWishlist ?
          <span onClick={(() => handelDeleteFav())} /> :
          <span onClick={(() => addToFav())} />}
      </Tooltip>

    </Fragment>
  );
};

// ProductAction.propTypes = {
//     product: PropTypes.object.isRequired,
//     modalQuickViewHandler: PropTypes.func.isRequired
// };

export default ProductAction;