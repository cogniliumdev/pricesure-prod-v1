import Link from "next/link";
import cogoToast from "cogo-toast";
import {CURRENCY} from "@utils/constant";
import {Fragment, useContext} from "react";
import {useProduct} from "@hooks";
import {CartContext} from "@global/CartContext";
import {toCapitalize} from "@utils/toCapitalize";
import {CompareContext} from "@global/CompareContext";
import ProductThumb from "@components/product/elements/ProductThumb";
import {getCartProduct, getDiscountPrice, getProductUniqueMaterials, getProductUniqueSizes} from "@utils/product";
import {CartNotification} from "@components/modal";
import { removeProduct } from "../../app/compareListSlice/compareListSlice.js";
import { useDispatch } from 'react-redux'

const CompareProduct = ({product}) => {
    const dispatch = useDispatch();
    console.log(product);
    const {excerpt, name, thumbs, variations, } = product;
    const {title, discount,price,price_before_sale,vendor,image,domain} =  product?.fields;
    const {
        productSize,
        productColor,
        productPrice,
        modalCartAdded,
        productQuantity,
        productMaterial,
        modalCartAddedHandler
    } = useProduct(product);

    // const {shoppingCart, addToCart} = useContext(CartContext);
    // const {removeFromCompare} = useContext(CompareContext);

    // const isInCart = getCartProduct(shoppingCart, product, productColor, productSize, productMaterial);
    // const slug = `/product/${name.toLowerCase().split(' ').join('-')}`;
    // const discountedPrice = getDiscountPrice(productPrice, discount);
    // const materials = getProductUniqueMaterials(product);
    // const sizes = getProductUniqueSizes(product);

    return (
        <Fragment>
        <div className="tt-item">
            <div className="tt-image-box compare_row compare_row_01">
                <button
                    className="tt-remove-item js-remove-item"
                    onClick={() =>dispatch(removeProduct(product))}
                />
                <Link href={"#"}>
                    <a><ProductThumb thumbs={[image]} productName={title}/></a>
                </Link>
                <h2 className="tt-title mt-3">
                    <Link href={"#"}><a>{" "}</a></Link>
                </h2>
                <div className="tt-price mt-1">
                    {!discount ? (
                        CURRENCY + price
                    ) : (
                        <Fragment>
                        <span className="new-price">
                            {CURRENCY + price}
                        </span>
                            <span className="old-price">
                            {CURRENCY + price_before_sale}
                        </span>
                        </Fragment>
                    )}
                </div>
            </div>
            <div className="tt-value compare_row compare_row_02">
                <p className="mt-0">{title}</p>
            </div>
            <div className="tt-value compare_row compare_row_03">{vendor}</div>
            <div className="tt-value compare_row compare_row_04">
              {domain}
            </div>
        </div>

        {modalCartAdded && (
            <CartNotification
                product={isInCart}
                modalShow={modalCartAdded}
                modalOnHide={modalCartAddedHandler}
            />
        )}
    </Fragment>
    );
}

export default CompareProduct;