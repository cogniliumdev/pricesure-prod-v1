import Slider from "react-slick";
import { Container } from "react-bootstrap";
import SlideContent from "@components/slider/elements/SlideContent";

const SliderOne = ({
  className,
  data,
  arrows,
  dots,
  sliderWrapper,
  contentAlign,
}) => {
  const settings = {
    dots: dots,
    arrows: arrows,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className={`container-indent ${className}`}>
        <div className={`slider-wrapper  ${sliderWrapper ? sliderWrapper : ""}`}>
          <Slider {...settings}>
            {
              data.map((slide) => {
                return (
                  <div key={slide.id}>
                    <img src={slide?.bgImage} />
                  </div>
                );
              })
            }

          </Slider>
        </div>
      </div>
    </>
  );
};

SliderOne.defaultProps = {
  arrows: true,
  dots: true,
  data: [],
  contentAlign: "center",
};

export default SliderOne;
