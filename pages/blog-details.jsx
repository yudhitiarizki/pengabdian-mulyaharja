import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailNews, fetchRecentNews } from "@/redux/actions/news";
import { useEffect } from "react";
import { formatDate } from "@/lib/methods";

const BlogDetails = () => {
  const dispatch = useDispatch();

  const { query } = useRouter();
  const { id } = query;

  const news = useSelector((state) => state.news);
  const category = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchRecentNews());
  }, [news.recent, dispatch]);

  useEffect(() => {
    if (id) dispatch(fetchDetailNews(id));
  }, [dispatch, id]);

  return (
    <Layout header={2} extraClass={"pt-160"}>
      <PageBanner pageTitle={news.details?.title} />
      {/*====== Start Blog Details Section ======*/}
      <section className="blog-details-section pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              {/*=== Blog Details Wrapper ===*/}
              <div className="blog-details-wrapper pr-lg-50">
                <div className="blog-post mb-60 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img src={news.details?.cover} alt="Blog Image" />
                  </div>
                  <div className="post-meta text-center pt-25 pb-15 mb-25">
                    <span>
                      <i className="far fa-calendar-alt" />
                      <a href="#">{news.details?.date}</a>
                    </span>
                    {/* <span>
                      <i className="far fa-comment" />
                      <a href="#">Comments (05)</a>
                    </span> */}
                  </div>
                  <div className="main-post">
                    <div className="entry-content">
                      {/* <h3 className="title">{news.details.title}</h3> */}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: news.details?.description,
                        }}
                      />
                    </div>
                  </div>
                  <div className="entry-footer wow fadeInUp">
                    <div className="tag-links">
                      <h6>Tag</h6>
                      {news.details?.tags
                        ? news.details?.tags
                            .split("|")
                            .map((tag) => <a href="#">{tag}</a>)
                        : ""}
                    </div>
                    <div className="social-share">
                      <h6>Share News :</h6>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>

                {/*===  Post Navigation  ===*/}
                {/* <div className="post-navigation-item pb-30 mb-55 wow fadeInUp">
                  <div className="prev-post post-nav-item d-flex mb-30">
                    <div className="thumb">
                      <img
                        src="assets/images/blog/prev-post.jpg"
                        alt="Post Thumb"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            Web Quality Assurance Requirements To Web Dev Risk
                            Manage
                          </a>
                        </Link>
                      </h6>
                      <span className="post-date">
                        <a href="#">
                          <i className="far fa-calendar-alt" />
                          November 23,2022
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="next-post post-nav-item d-flex mb-30">
                    <div className="thumb">
                      <img
                        src="assets/images/blog/next-post.jpg"
                        alt="Post Thumb"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            Deep Dive Into Wonder World Of Displaements
                            Filtering
                          </a>
                        </Link>
                      </h6>
                      <span className="post-date">
                        <a href="#">
                          <i className="far fa-calendar-alt" />
                          November 23,2022
                        </a>
                      </span>
                    </div>
                  </div>
                </div> */}
                {/*===  Comments Area  ===*/}
                {/* <div className="comments-area mb-60 wow fadeInUp">
                  <h5 className="comments-title mb-40">Popular Comments</h5>
                  <ul className="comments-list">
                    <li>
                      <div className="comment">
                        <div className="comment-avatar">
                          <img
                            src="assets/images/blog/comment-1.jpg"
                            alt="comment author"
                          />
                        </div>
                        <div className="comment-wrap">
                          <div className="comment-author-content">
                            <span className="author-name">
                              Jonathan M. Dickinson
                              <span className="date">September 25, 2022</span>
                            </span>
                            <p>
                              Nov ut perspiciatis unde omnis iste natus sit
                              voluptatem accusantium doloremque laudantium,
                              totam rem aperiam quae abillo inventore veritatis
                            </p>
                            <a href="#" className="btn-link">
                              Reply
                              <i className="far fa-angle-double-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <ul className="comment-reply">
                        <li>
                          <div className="comment">
                            <div className="comment-avatar">
                              <img
                                src="assets/images/blog/comment-2.jpg"
                                alt="comment author"
                              />
                            </div>
                            <div className="comment-wrap">
                              <div className="comment-author-content">
                                <span className="author-name">
                                  Jonathan M. Dickinson
                                  <span className="date">
                                    September 25, 2022
                                  </span>
                                </span>
                                <p>
                                  Nov ut perspiciatis unde omnis iste natus sit
                                  voluptatem accusantium doloremque laudantium,
                                  totam rem aperiam quae abillo inventore
                                  veritatis
                                </p>
                                <a href="#" className="btn-link">
                                  Reply
                                  <i className="far fa-angle-double-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="comment">
                        <div className="comment-avatar">
                          <img
                            src="assets/images/blog/comment-3.jpg"
                            alt="comment author"
                          />
                        </div>
                        <div className="comment-wrap">
                          <div className="comment-author-content">
                            <span className="author-name">
                              Michael C. Paille
                              <span className="date">September 25, 2022</span>
                            </span>
                            <p>
                              Nov ut perspiciatis unde omnis iste natus sit
                              voluptatem accusantium doloremque laudantium,
                              totam rem aperiam quae abillo inventore veritatis
                            </p>
                            <a href="#" className="btn-link">
                              Reply
                              <i className="far fa-angle-double-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div> */}
                {/*===  Comments Form  ===*/}

                <div
                  className="comments-respond mb-30 wow fadeInUp"
                  id="comment-respond"
                >
                  <h3 className="comments-heading">Tinggalkan Komentar</h3>
                  <p>Kirimkan kami masukkan</p>
                  <form className="comment-form">
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
                          <button
                            type="button"
                            className="main-btn primary-btn"
                          >
                            Kirim Komentar
                            <i className="fas fa-angle-double-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
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
      {/*====== End Blog Details Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <GallerySection />
    </Layout>
  );
};
export default BlogDetails;
