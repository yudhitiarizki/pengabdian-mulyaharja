import { fetchActivity } from "@/redux/actions/activity";
import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "@/lib/methods";
const Kegiatan = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const activity = useSelector((state) => state.activity);

  useEffect(() => {
    dispatch(fetchActivity({ currentPage }));
  }, [dispatch, currentPage]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  return (
    <Layout header={2} extraClass={"pt-160"}>
      <PageBanner pageTitle={"Kegiatan Mulyaharja"} />
      {/*====== Start Places Section ======*/}
      <section className="places-section pb-100 pt-100">
        <div className="container">
          <div className="row justify-content-center">
            {activity.data.data && activity.data.data.length > 0 ? (
              activity.data.data.map((data) => (
                <div
                  className="col-xl-4 col-md-6 col-sm-12 places-column"
                  key={data.id}
                >
                  {/*=== Single Place Item ===*/}
                  <div className="single-place-item mb-60 wow fadeInUp">
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
                            <a>{data.title}</a>
                          </Link>
                        </h4>
                        <p className="location">
                          <i className="far fa-map-marker-alt" />
                          {data.location}
                        </p>
                        <p className="price">
                          <i className="fas fa-calendar-alt" />
                          {formatDate(data.date)}
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
                </div>
              ))
            ) : (
              <div className="col-12">
                <p>No data available.</p>
              </div>
            )}
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              {activity.data.data && activity.data.data.length > 0 ? (
                <ReactPaginate
                  className="gowilds-pagination"
                  previousLabel={<i className="far fa-arrow-left" />}
                  nextLabel={<i className="far fa-arrow-right" />}
                  breakLabel={"..."}
                  pageCount={activity.data.last_page}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </section>
      {/*====== End Places Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <GallerySection />
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default Kegiatan;
