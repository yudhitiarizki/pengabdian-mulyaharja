import { fetchVideos } from "@/redux/actions/videos";
import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
const Video = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const videos = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(fetchVideos({ currentPage }));
  }, [dispatch, currentPage]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  return (
    <Layout header={2} extraClass={"pt-160"}>
      <PageBanner pageTitle={"Video"} />

      {/*====== Start Destination Section ======*/}
      <section className="destination-section pb-100 pt-100">
        <div className="container">
          <div className="row justify-content-center">
            {videos.data.data && videos.data.data.length > 0 ? (
              videos.data.data.map((data) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                  key={data.id}
                >
                  <Link href={`/video-detail?id=${data.id}`}>
                    <div className="single-place-item-two mb-30 wow fadeInUp">
                      <div className="place-img">
                        <img
                          src={data.cover}
                          alt="Place Image"
                          style={{ objectFit: "cover", width: "100%" }}
                          height={350}
                        />
                        <span className="tour-count">
                          {data.category?.name}
                        </span>
                        <div className="place-content">
                          <div className="info text-white">
                            <h3 className="title">{data.title}</h3>
                            <p className="price">{data.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
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
              {videos.data.data && videos.data.data.length > 0 ? (
                <ReactPaginate
                  className="gowilds-pagination"
                  previousLabel={<i className="far fa-arrow-left" />}
                  nextLabel={<i className="far fa-arrow-right" />}
                  breakLabel={"..."}
                  pageCount={videos.data.last_page}
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
      {/*====== End Destination Section ======*/}
    </Layout>
  );
};
export default Video;
