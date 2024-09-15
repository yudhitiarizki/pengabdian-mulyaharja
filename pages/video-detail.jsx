import GallerySection from "@/src/components/GallerySection";
import RelatedTours from "@/src/components/sliders/RelatedTours";
import Layout from "@/src/layout/Layout";
import { placeSlider } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import PageBanner from "@/src/components/PageBanner";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { fetchDetailVideos, fetchVideos } from "@/redux/actions/videos";

const VideoDetail = () => {
  const dispatch = useDispatch();

  const { query } = useRouter();
  const { id } = query;

  const videos = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(fetchVideos({}));
  }, [dispatch]);

  useEffect(() => {
    if (id) dispatch(fetchDetailVideos(id));
  }, [dispatch, id]);

  return (
    <Layout header={2} extraClass={"pt-160"}>
      <PageBanner pageTitle={"Video Detail"} />
      {/*====== Start Place Details Section ======*/}
      <section className="place-details-section">
        {/*=== Place Slider ===*/}
        <div className="place-slider-area overflow-hidden wow fadeInUp"></div>
        <div className="container mt-4">
          {/*=== Tour Details Wrapper ===*/}
          <iframe
            width="560"
            height="600"
            src={`https://www.youtube.com/embed/${videos.details?.youtube_id}?si=lm9HkPC7d5B5IRbq`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="tour-details-wrapper pt-50">
            {/*=== Tour Title Wrapper ===*/}
            <div className="tour-title-wrapper pb-10 wow fadeInUp">
              <div className="row">
                <div className="col-xl-6">
                  <div className="tour-title mb-20">
                    <h3 className="title">{videos.details?.title}</h3>
                    <p>
                      <i className="far fa-map-marker-alt" />
                      {videos.details?.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-8">
                <div
                  className="mb-4"
                  dangerouslySetInnerHTML={{
                    __html: videos.details?.description,
                  }}
                />

                {/*===  Comments Form  ===*/}
                <div className="comments-respond mb-30 wow fadeInUp">
                  <h3 className="comments-heading" style={{ marginBottom: 15 }}>
                    Leave a Comments
                  </h3>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="comment-form"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email Address"
                            name="name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Enter Name"
                            name="email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            name="message"
                            className="form_control"
                            rows={4}
                            placeholder="Write Comments"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn primary-btn">
                            Send comments
                            <i className="fas fa-angle-double-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xl-4">
                {/*=== Sidebar Widget Area ===*/}
                <div className="sidebar-widget-area pt-60 pl-lg-30">
                  {/*=== Booking Info Widget ===*/}
                  <div className="sidebar-widget booking-info-widget wow fadeInUp mb-40">
                    <h4 className="widget-title">Video Information</h4>
                    <ul className="info-list">
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          Tanggal<span>{videos.details?.date}</span>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-map-marker-alt" />
                          Lokasi<span>{videos.details?.location}</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/*=== Recent Place Widget ===*/}
                  <div className="sidebar-widget recent-place-widget mb-40 wow fadeInUp">
                    <h4 className="widget-title">Video Lainnya</h4>
                    <ul className="recent-place-list">
                      {videos.data.data && videos.data.data.length > 0
                        ? videos.data.data.slice(0, 2).map((data) => (
                            <li className="place-thumbnail-content">
                              <img src={data.cover} alt="post thumb" />
                              <div className="place-content">
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
                                    <i className="far fa-star" />
                                  </li>
                                </ul>
                                <h5>
                                  <Link
                                    legacyBehavior
                                    href={`/video-detail?id=${data.id}`}
                                  >
                                    <a>{data.title}</a>
                                  </Link>
                                </h5>
                              </div>
                            </li>
                          ))
                        : ""}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Place Details Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <GallerySection />
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default VideoDetail;
