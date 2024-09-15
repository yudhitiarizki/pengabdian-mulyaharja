import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { useSelector } from "react-redux";
const Gallery = () => {
  const gallery = useSelector((state) => state.gallery);
  return (
    <Layout header={2}>
      <PageBanner pageTitle={"Gallery"} />
      {/*====== Start Gallery Section ======*/}
      <section className="gallery-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            {gallery.data && gallery.data.length > 0
              ? gallery.data.map((data) => (
                  <div className="col-lg-4 col-md-6 col-sm-12" key={data.id}>
                    {/*=== Single Gallery Item ===*/}
                    <div className="single-gallery-item mb-30 wow fadeInUp">
                      <div className="gallery-img">
                        <img
                          src={data.image_url}
                          alt="Gallery Image"
                          style={{ objectFit: "cover", height: "400px" }}
                        />
                        <div className="hover-overlay">
                          <a
                            href={data.image_url}
                            className="icon-btn img-popup"
                          >
                            <i className="far fa-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </section>
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default Gallery;
