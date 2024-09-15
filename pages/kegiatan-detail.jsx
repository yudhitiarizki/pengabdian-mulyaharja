import { fetchActivity, fetchDetailActivity } from "@/redux/actions/activity";
import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { sliderActive3Item, sliderActive3ItemDot } from "@/src/sliderProps";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
const KegiatanDetail = () => {
  const dispatch = useDispatch();

  const { query } = useRouter();
  const { id } = query;

  const activity = useSelector((state) => state.activity);

  useEffect(() => {
    dispatch(fetchActivity({}));
  }, [dispatch]);

  useEffect(() => {
    if (id) dispatch(fetchDetailActivity(id));
  }, [dispatch, id]);

  return (
    <Layout header={2} extraClass={"pt-160"}>
      <PageBanner pageTitle={"Detail Kegiatan"} />
      {/*====== Start Destination Details Section ======*/}
      <section className="destination-details-section pt-100 pb-70">
        <div className="container">
          <div className="destination-details-wrapper">
            <div className="destination-info wow fadeInUp">
              <h3 className="title">{activity.details?.title}</h3>
              <div className="meta">
                <span className="location">
                  <i className="fas fa-map-marker-alt" />
                  {activity.details?.location}
                </span>
                <ul className="ratings">
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                </ul>
              </div>
              <div className="entry-content">
                {/* <h3 className="title">{news.details.title}</h3> */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: activity.details?.description,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Destination Details Section ======*/}

      {/*====== Start Places Section ======*/}
      <section className="places-seciton pt-95 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*====== Section Title ======*/}
              <div className="section-title text-center mb-45 wow fadeInDown">
                <h2>Kegiatan Lainnya</h2>
              </div>
            </div>
          </div>
          <Slider
            {...sliderActive3ItemDot}
            className="slider-active-3-item-dot wow fadeInUp"
          >
            {activity.data.data && activity.data.data.length > 0 ? (
              activity.data.data.map((data) => (
                <div
                  className="single-place-item mb-60 wow fadeInUp"
                  key={data.id}
                >
                  <div className="place-img">
                    <img
                      height={280}
                      style={{ objectFit: "cover", width: "100%" }}
                      src={data.cover}
                      alt="Place Image"
                    />
                  </div>
                  <div className="place-content">
                    <div className="info">
                      <h4 className="title">
                        <Link
                          legacyBehavior
                          href={`/kegiatan-detail?id=${data.id}`}
                        >
                          <a className="title-span">{data.title}</a>
                        </Link>
                      </h4>
                      <p className="location">
                        <i className="far fa-map-marker-alt" />
                        {data.location}
                      </p>
                      <p className="price">
                        <i className="fas fa-calendar-alt" />
                        {data.date}
                      </p>
                      <div className="meta">
                        <span>
                          <Link
                            legacyBehavior
                            href={`/kegiatan-detail?id=${data.id}`}
                          >
                            <a>
                              Details
                              <i className="far fa-long-arrow-right" />
                            </a>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <p>No data available.</p>
              </div>
            )}
          </Slider>
        </div>
      </section>
      {/*====== End Places Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <GallerySection />
    </Layout>
  );
};
export default KegiatanDetail;
