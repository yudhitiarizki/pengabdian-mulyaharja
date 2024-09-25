import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, fetchRecentNews } from "@/redux/actions/news";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import { fetchDetailCategory } from "@/redux/actions/category";
import { formatDate } from "@/lib/methods";

const BlogList = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { kategori } = query;

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState(null);

  const category = useSelector((state) => state.category);
  const news = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews({ currentPage, kategori, search }));
  }, [dispatch, currentPage, kategori, search]);

  useEffect(() => {
    dispatch(fetchRecentNews());
  }, [news.recent, dispatch]);

  useEffect(() => {
    if (kategori) dispatch(fetchDetailCategory(kategori));
  }, [dispatch, kategori]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  return (
    <Layout header={2} extraClass={"pt-160"}>
      <PageBanner pageTitle={"Berita"} />
      {/*====== Start Blog Section ======*/}
      <section className="blog-list-section pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="w-100  text-center">
                {kategori ? (
                  <h4 className="mb-4">
                    Search by Kategori : {category.details.name}
                  </h4>
                ) : (
                  ""
                )}
              </div>

              {/*=== Blog List Wrapper ===*/}
              <div className="blog-list-wrapper">
                {news.data.data && news.data.data.length > 0 ? (
                  news.data.data.map((data) => (
                    <div
                      className="single-blog-post-four mb-30 wow fadeInDown"
                      key={data.id}
                    >
                      <div className="post-thumbnail">
                        <img
                          height={400}
                          style={{ objectFit: "cover", width: "100%" }}
                          src={data.cover}
                          alt="Post Image"
                        />
                      </div>
                      <div className="entry-content">
                        <div className="post-meta">
                          <span>
                            <i className="far fa-calendar-alt" />
                            <a href="#">{formatDate(data.date)}</a>
                          </span>
                        </div>
                        <h3 className="title">
                          <Link
                            legacyBehavior
                            href={`/blog-details?id=${data.id}`}
                          >
                            <a>{data.title}</a>
                          </Link>
                        </h3>
                        <h6 className="author">
                          <i className="far fa-location" />
                          <a href="#">{data.location}</a>
                        </h6>
                        <Link
                          legacyBehavior
                          href={`/blog-details?id=${data.id}`}
                        >
                          <a className="main-btn filled-btn">
                            Selengkapnya
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12">
                    <p>No data available.</p>
                  </div>
                )}
              </div>

              {news.data.data && news.data.data.length > 0 ? (
                <ReactPaginate
                  className="gowilds-pagination"
                  previousLabel={<i className="far fa-arrow-left" />}
                  nextLabel={<i className="far fa-arrow-right" />}
                  breakLabel={"..."}
                  pageCount={news.data.last_page}
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
            <div className="col-xl-4">
              <div className="sidebar-widget-area">
                {/*=== Search Widget ===*/}
                <div className="sidebar-widget search-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Cari</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <label>
                        <i className="far fa-search" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Kata Kunci"
                        name="search"
                        required
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </form>
                </div>
                {/*=== Category Widget ===*/}
                <div className="sidebar-widget category-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Kategori</h4>
                  <ul className="category-nav">
                    {category.data.data && category.data.data.length > 0 ? (
                      category.data.data.map((data) => (
                        <li key={data.id}>
                          <a href={`/blog-list?kategori=${data.id}`}>
                            {data.name}
                            <i className="far fa-arrow-right" />
                          </a>
                        </li>
                      ))
                    ) : (
                      <div className="col-12">
                        <p>No data available.</p>
                      </div>
                    )}
                  </ul>
                </div>
                {/*=== Recent Post Widget ===*/}
                <div className="sidebar-widget recent-post-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">Recent News</h4>
                  <ul className="recent-post-list">
                    {news.recent && news.recent.length > 0 ? (
                      news.recent.map((data) => (
                        <li className="post-thumbnail-content" key={data.id}>
                          <img src={data.cover} alt="post thumb" />
                          <div className="post-title-date">
                            <h5>
                              <Link
                                legacyBehavior
                                href={`/blog-details?id=${data.id}`}
                              >
                                {data.title}
                              </Link>
                            </h5>
                            <span className="posted-on">
                              <i className="far fa-calendar-alt" />
                              <a href="#">{formatDate(data.date)}</a>
                            </span>
                          </div>
                        </li>
                      ))
                    ) : (
                      <div className="col-12">
                        <p>No data available.</p>
                      </div>
                    )}
                  </ul>
                </div>

                {/*=== Tag Widget ===*/}
                <div className="sidebar-widget tag-cloud-widget gray-bg mb-40 wow fadeInUp">
                  <h4 className="widget-title">Tagar</h4>
                  <a href="#">Edukasi</a>
                  <a href="#">Kuliner</a>
                  <a href="#">Spot Foto</a>
                  <a href="#">Wisata</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Blog Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <GallerySection />
    </Layout>
  );
};
export default BlogList;
