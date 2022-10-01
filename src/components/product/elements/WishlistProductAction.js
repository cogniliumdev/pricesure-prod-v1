import { useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import cogoToast from "cogo-toast";
import Tooltip from "@components/ui/tooltip";
import { WishlistContext } from "@global/WishlistContext";
import {
    useDeleteFavProductMutation,
} from "../../../app/priceSureApi/priceSureApi.js"

const WishlistProductAction = ({ product }) => {
    const [windowSize, setWindowSize] = useState(0);
    // const {removeFromWishlist} = useContext(WishlistContext);
    const [deleteFav, deleteFav_Obj] = useDeleteFavProductMutation();

    useEffect(() => {
        setWindowSize(window.innerWidth);
    }, [windowSize]);

    console.log(product);
    const removeFromWishlist = async () => {
        try {
            const result = await deleteFav(product.id);
            console.log(result);
        } catch (err) {
            console.log(err);
            console.log(deleteFav_Obj.error);
        }
    };

    return (
        <Tooltip
            content="Remove From Wishlist"
            position={windowSize <= 1024 ? 'top' : 'left'}
            className="tt-btn-rmv-wishlist active"
        >
            <span onClick={() => removeFromWishlist()} />
        </Tooltip>
    );
};

WishlistProductAction.propTypes = {
    product: PropTypes.object.isRequired
};

export default WishlistProductAction;