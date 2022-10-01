import Link from "next/link";
import cogoToast from "cogo-toast";
import PropTypes from "prop-types";
import { useProduct } from "@hooks";
import { CURRENCY } from "@utils/constant";
import { Fragment, useContext } from "react";
import { CartContext } from "@global/CartContext";
import { toCapitalize } from "@utils/toCapitalize";
import ProductSize from "./elements/ProductSize";
import ProductColor from "./elements/ProductColor";
import ProductThumb from "./elements/ProductThumb";
import ProductAction from "./elements/ProductAction";
import ProductRatings from "./elements/ProductRatings";
import ProductMaterial from "./elements/ProductMaterial";
import { CartNotification, QuickView } from "@components/modal";
import ProductSaleCountdown from "./elements/ProductSaleCountdown";
import { getCartProductQuantity, getCartProduct } from "@utils/product";
import WishlistProductAction from "@components/product/elements/WishlistProductAction";
import { truncateText } from "../../global/globalFunctions/truncateText.js"

const ProductOne = ({ product, page, showVariant, className }) => {
  // const {badge, discount, discountDuration, name, ratings, thumbs, variations, vendor} = product;

  // const {
  //     slug,
  //     productSize,
  //     productColor,
  //     productPrice,
  //     discountedPrice,
  //     productStock,
  //     modalCartAdded,
  //     modalQuickView,
  //     productMaterial,
  //     productQuantity,
  //     productColorImage,
  //     productSizeHandler,
  //     productColorHandler,
  //     modalQuickViewHandler,
  //     modalCartAddedHandler,
  //     productMaterialHandler
  // } = useProduct(product);
  const badge = "new";
  const discount = product?.fields?.discount;
  const discountDuration = "2022-05-27";
  const productStock = 20;
  const cartProductQuantity = 10;

  // const { modalQuickViewHandler, slug, modalQuickView } = useProduct(
  //   product?.fields
  // );

  // const {shoppingCart, addToCart} = useContext(CartContext);
  // const isInCart = getCartProduct(shoppingCart, product, productColor, productSize, productMaterial);
  // const cartProductQuantity = getCartProductQuantity(shoppingCart, product, productColor, productSize);
  console.log(product.id, product);



  return (
    <Fragment>

      <div className={`tt-product thumbprod-center ${className}`}>
        <div className="tt-image-box">
          {page === "wishlist" ? (
            <WishlistProductAction product={product} />
          ) : (
            <ProductAction
              product={product}
            // modalQuickViewHandler={modalQuickViewHandler}
            />
          )}

          <Link href={{
            pathname: `/product/${product.id}`,
            query: { product: JSON.stringify(product) }
          }}>
            <a>
              <ProductThumb
                thumbs={[product?.fields?.image]}
                productName={product?.fields?.title}
              />

              <div className="tt-label-location">
                {/* {badge && (
                    <span className={`tt-label-${badge.toLowerCase()}`}>
                      {toCapitalize(badge)}
                    </span>
                  )} */}
                {discount !== "0" && discount !== 0 && (
                  <span className={`tt-label-sale`}>Sale {discount}%</span>
                )}
                {/* {!productStock && (
                    <span className={`tt-label-out-stock`}>Out Of Stock</span>
                  )} */}
              </div>
            </a>
          </Link>
        </div>

        <div className={`tt-description active d-flex flex-column justify-content-start align-items-start`}>
          {discount && discountDuration && (
            <div className="tt-countdown_box">
              {/* {<ProductSaleCountdown date={discountDuration} />} */}
            </div>
          )}

          <div className="tt-row">
            <ul className="tt-add-info text-start">
              <li>
                <Link href="/">
                  <a>{product?.fields?.vendor}</a>
                </Link>
              </li>
            </ul>

            <ProductRatings ratings={product?.fields?.rating} />
          </div>

          <h2
            className="tt-title text-start"
            style={{ height: "32px" }}
            title={product?.fields?.title}
          >
            <Link href={"/"}>
              <a>
                {truncateText(product?.fields?.title, 45)}
              </a>
            </Link>
          </h2>

          {/* <div className="tt-price mt-1">
            <Fragment>
              <span className="new-price">
                { product?.fields?.price}
              </span>
            </Fragment>
          </div> */}

          <div className="tt-price mt-1">
            {discount === "0" || discount === 0 ? (
              <span className="new-price">
                {CURRENCY + product?.fields?.price}
              </span>
            ) : (
              <Fragment>
                <span className="new-price">
                  {CURRENCY + product?.fields?.price}
                </span>
                <span className="old-price">
                  {CURRENCY + product?.fields?.price_before_sale}
                </span>
              </Fragment>
            )}
          </div>

          {/* 
            {showVariant && variations && (
              <div className="tt-option-block">
                <ProductColor
                  product={product}
                  productColor={productColor}
                  productColorHandler={productColorHandler}
                />

                <ProductSize
                  className="mt-3"
                  product={product}
                  productColor={productColor}
                  productSize={productSize}
                  productSizeHandler={productSizeHandler}
                />

                <ProductMaterial
                  className="mt-3"
                  product={product}
                  productColor={productColor}
                  productMaterial={productMaterial}
                  productMaterialHandler={productMaterialHandler}
                />
              </div>
            )} */}

          {/* <div className="tt-product-inside-hover">
            <div className="tt-row-btn">
              <button
                className={`tt-btn-addtocart thumbprod-button-bg ${productStock === cartProductQuantity ? "disable" : ""
                  }`}
                onClick={() => {
                  // addToCart({
                  //   ...product,
                  //   price: discountedPrice ? discountedPrice : productPrice,
                  //   color: productColor,
                  //   size: productSize,
                  //   material: productMaterial,
                  //   quantity: productQuantity,
                  // });
                  // !isInCart
                  //   ? modalCartAddedHandler()
                  //   : cogoToast.success(
                  //       `Your Item "${product.name}" already added.`,
                  //       {
                  //         position: "bottom-right",
                  //         heading: "Added to Cart!",
                  //         hideAfter: 4,
                  //       }
                  //     );
                }}
              >
                {productStock === cartProductQuantity
                  ? "SOLD OUT"
                  : "ADD TO CART"}
              </button>
            </div>

            <div className="tt-row-btn d-md-none">
              {page === "wishlist" ? (
                <WishlistProductAction product={product} />
              ) : (
                <ProductAction
                  product={product}
                // modalQuickViewHandler={modalQuickViewHandler}
                />
              )}
            </div>
          </div> */}
        </div>
      </div>
      {/* {modalQuickView && (
          <QuickView
            product={product.fields}
            modalShow={modalQuickView}
            modalOnHide={modalQuickViewHandler}
          />
        )} */}
      {/* {modalCartAdded && (
          <CartNotification
            product={isInCart}
            modalShow={modalCartAdded}
            modalOnHide={modalCartAddedHandler}
          />
        )} */}
    </Fragment>
  );
};

ProductOne.propTypes = {
  product: PropTypes.object.isRequired,
  showVariant: PropTypes.bool.isRequired,
  page: PropTypes.string,
};

ProductOne.defaultProps = {
  showVariant: true,
};

export default ProductOne;
