import Slider from "react-slick";
import {useContext} from "react";
import {CompareContext} from "@global/CompareContext";
import CompareProduct from "@components/compare/CompareProduct";
import { useSelector, useDispatch } from 'react-redux'


const CompareProducts = () => {

    // const {compareList} = useContext(CompareContext);
    const compareList = useSelector((state) => state.compareList.products);

    const sliderOptions = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToScroll: 1,
        adaptiveHeight: true,
        drag: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 790,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    return (
        <div className="tt-col-item">
            <Slider
                {...sliderOptions}
                slidesToShow={compareList.length < 3 ? compareList.length : 3}
                className="compare-init-slider w-100"
            >
                {compareList.map(product => (
                    <CompareProduct
                        key={product.id}
                        product={product}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default CompareProducts;