import { useEffect, useState } from "react";
import Slider from "react-slick";

const ProductDetailsSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });
  const thumbs = {
    dots: false,
    arrows: false,
    speed: 800,
    autoplay: true,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const slider = {
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="product-gallery-area mb-50 wow fadeInLeft">
      <Slider
        {...slider}
        asNavFor={nav2}
        ref={(slider) => setSlider1(slider)}
        className="product-big-slider mb-30"
      >
        <div className="product-img">
          <a
            href="https://i.pinimg.com/564x/38/ea/d4/38ead46865dcbf746118cfc72097f12c.jpg"
            className="img-popup"
          >
            <img
              height={360}
              style={{ objectFit: "cover", width: "100%" }}
              src="https://i.pinimg.com/564x/38/ea/d4/38ead46865dcbf746118cfc72097f12c.jpg"
              alt="Product"
            />
          </a>
        </div>
        <div className="product-img">
          <a
            href="https://i.pinimg.com/564x/d4/c9/38/d4c9382829756a3a0cecd99d3df58710.jpg"
            className="img-popup"
          >
            <img
              height={360}
              style={{ objectFit: "cover", width: "100%" }}
              src="https://i.pinimg.com/564x/d4/c9/38/d4c9382829756a3a0cecd99d3df58710.jpg"
              alt="Product"
            />
          </a>
        </div>
        <div className="product-img">
          <a
            href="https://i.pinimg.com/736x/17/c0/c6/17c0c6d8d9331cd5cdef3886e8f4846d.jpg"
            className="img-popup"
          >
            <img
              height={360}
              style={{ objectFit: "cover", width: "100%" }}
              src="https://i.pinimg.com/736x/17/c0/c6/17c0c6d8d9331cd5cdef3886e8f4846d.jpg"
              alt="Product"
            />
          </a>
        </div>
      </Slider>
      <Slider
        {...thumbs}
        asNavFor={nav1}
        ref={(slider) => setSlider2(slider)}
        className="product-thumb-slider"
      >
        <div className="product-img">
          <img
            height={360}
            style={{ objectFit: "cover", width: "100%" }}
            src="https://i.pinimg.com/564x/38/ea/d4/38ead46865dcbf746118cfc72097f12c.jpg"
            alt="Product"
          />
        </div>
        <div className="product-img">
          <img
            height={360}
            style={{ objectFit: "cover", width: "100%" }}
            src="https://i.pinimg.com/564x/d4/c9/38/d4c9382829756a3a0cecd99d3df58710.jpg"
            alt="Product"
          />
        </div>
        <div className="product-img">
          <img
            height={360}
            style={{ objectFit: "cover", width: "100%" }}
            src="https://i.pinimg.com/736x/17/c0/c6/17c0c6d8d9331cd5cdef3886e8f4846d.jpg"
            alt="Product"
          />
        </div>
      </Slider>
    </div>
  );
};
export default ProductDetailsSlider;
