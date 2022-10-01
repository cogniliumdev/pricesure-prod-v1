import Slider from "react-slick";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { getRandomImage } from "@global/globalFunctions/getRandomImage"


const ProductDetailsThumbnail = ({ thumbImages, productName }) => {

    const [gallerySlider, setGallerySlider] = useState(null);
    const [navSlider, setNavSlider] = useState(null);
    let gallerySliderRef = []
    let navSliderRef = []

    const navSliderOptions = {
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        slidesToScroll: 1,
        focusOnSelect: true,
        swipeToSlide: true,
        asNavFor: gallerySlider
    }

    const gallerySliderOptions = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: navSlider
    }

    useEffect(() => {
        setGallerySlider(gallerySliderRef);
        setNavSlider(navSliderRef);
    }, [gallerySliderRef, navSliderRef]);

    return (
        <React.Fragment>

            <div className="tt-product-vertical-layout">
                <div className="tt-product-single-img">
                    <Slider
                        {...gallerySliderOptions}
                        ref={slider => (gallerySliderRef = slider)}
                        className="w-100 h-100"
                    >
                        {thumbImages.map((image, i) => (
                            <Image className="w-10" key={i} src={image} alt={productName} />
                        ))}
                    </Slider>
                </div>

                <div className="tt-product-single-carousel-vertical">
                    <Slider
                        {...navSliderOptions}
                        slidesToShow={thumbImages.length < 4 ? thumbImages.length : 4}
                        ref={slider => (navSliderRef = slider)}
                        className="tt-slick-button-vertical"
                    >
                        {thumbImages.map((image, i) => (
                            <Image className="w-100" key={i} src={image} alt={productName} />
                        ))}
                    </Slider>
                </div>


            </div>
        </React.Fragment>
    );
};


const Image = ({ className, key, src, alt, }) => {
    const [imgURL, setImgURL] = useState(src);
    return (
        <img
            className={className ? className : ""}
            key={key}
            src={imgURL}
            alt={alt}
            onError={() => setImgURL(getRandomImage())}
        />
    );
}

ProductDetailsThumbnail.propTypes = {
    thumbImages: PropTypes.array.isRequired,
    productName: PropTypes.string.isRequired
}

export default ProductDetailsThumbnail;