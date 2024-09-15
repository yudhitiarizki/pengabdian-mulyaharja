import Slider from "react-slick";
import { sliderActive5Item } from "../sliderProps";
import { useSelector } from "react-redux";
const GallerySection = () => {
  const gallery = useSelector((state) => state.gallery);

  return (
    <section className="gallery-section mbm-150">
      <div className="container-fluid">
        <Slider
          {...sliderActive5Item}
          className="slider-active-5-item wow fadeInUp"
        >
          {gallery.data && gallery.data.length > 0
            ? gallery.data.slice(0, 9).map((data) => (
                <div className="single-gallery-item" key={data.id}>
                  <div className="gallery-img">
                    <img
                      src={data.image_url}
                      alt="Gallery Image"
                      style={{ objectFit: "cover", height: "235px" }}
                    />
                    <div className="hover-overlay">
                      <a href={data.image_url} className="icon-btn img-popup">
                        <i className="far fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
              ))
            : ""}
        </Slider>
      </div>
    </section>
  );
};
export default GallerySection;
