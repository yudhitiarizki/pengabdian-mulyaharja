import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const BlogDetails = () => {
  return (
    <Layout header={2} extraClass={"pt-160"}>
      <PageBanner pageTitle={"Detail Berita"} />
      {/*====== Start Blog Details Section ======*/}
      <section className="blog-details-section pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              {/*=== Blog Details Wrapper ===*/}
              <div className="blog-details-wrapper pr-lg-50">
                <div className="blog-post mb-60 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img
                      src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_1024/v1634025439/01gb9nxgctzhzsq0kgr9rgn71f.jpg"
                      alt="Blog Image"
                    />
                  </div>
                  <div className="post-meta text-center pt-25 pb-15 mb-25">
                    <span>
                      <i className="far fa-calendar-alt" />
                      <a href="#">November 23,2022</a>
                    </span>
                    <span>
                      <i className="far fa-comment" />
                      <a href="#">Comments (05)</a>
                    </span>
                  </div>
                  <div className="main-post">
                    <div className="entry-content">
                      <h3 className="title">
                        Pengalaman baru melalui edukasi pertanian di Desa
                        Mulyaharja
                      </h3>
                      <p>
                        Di Desa Wisata Mulyaharja, Anda dapat merasakan
                        pengalaman mendalam melalui kegiatan edukasi pertanian.
                        Wisatawan diajak untuk terjun langsung ke sawah,
                        memegang cangkul, dan merasakan sensasi membajak tanah
                        seperti petani tradisional. Kegiatan ini dimulai dengan
                        membajak sawah menggunakan mesin atau bahkan kerbau,
                        tergantung pada metode yang dipilih. Setelah itu, Anda
                        akan belajar cara menanam padi, dengan memperhatikan
                        jarak tanam yang tepat agar tanaman dapat tumbuh dengan
                        optimal. consectetur sed.
                      </p>
                      <h4>Desa Mulaharja</h4>
                      <p>
                        Selama kegiatan ini, para petani lokal akan mendampingi
                        dan memberikan penjelasan mengenai berbagai teknik
                        bertani, termasuk cara menjaga kesuburan tanah dan
                        bagaimana memanfaatkan metode pertanian organik yang
                        ramah lingkungan. Kegiatan ini tidak hanya menyenangkan,
                        tetapi juga memberikan wawasan mendalam tentang
                        pentingnya pertanian dalam kehidupan sehari-hari, serta
                        bagaimana desa ini mempertahankan praktik-praktik
                        pertanian yang berkelanjutan. Kegiatan ini cocok untuk
                        semua usia, menjadikannya aktivitas yang sempurna untuk
                        keluarga atau kelompok yang ingin belajar lebih banyak
                        tentang kehidupan pedesaan dan pertanian organik.
                      </p>
                      <blockquote className="block-quote">
                        <img
                          src="assets/images/blog/quote.png"
                          alt="quote image"
                        />
                        <h3>
                          Pengalaman baru melalui edukasi pertanian di Desa
                          Mulyaharja
                        </h3>
                        <span>Yudhitia, Rizki</span>
                      </blockquote>
                    </div>
                  </div>
                  <div className="entry-footer wow fadeInUp">
                    <div className="tag-links">
                      <h6>Tag Populer</h6>
                      <a href="#">Edukasi</a>
                      <a href="#">Spot Foto</a>
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
                <div className="post-navigation-item pb-30 mb-55 wow fadeInUp">
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
                </div>
                {/*===  Comments Area  ===*/}
                <div className="comments-area mb-60 wow fadeInUp">
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
                </div>
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
                          <button className="main-btn primary-btn">
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
                    <li>
                      <a href="#">
                        Edukasi
                        <i className="far fa-arrow-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Kuliner
                        <i className="far fa-arrow-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Spot Foto
                        <i className="far fa-arrow-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Wisata
                        <i className="far fa-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/*=== Recent Post Widget ===*/}
                <div className="sidebar-widget recent-post-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">Recent News</h4>
                  <ul className="recent-post-list">
                    <li className="post-thumbnail-content">
                      <img
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHCgB012oZ_twpYtRwlD-X29mRyg8pUYn9pMBn3vcPfuwPsuk_-EHMweq0MOjr1oXLL8llQ_ECAefMlTRuVK-Z6CF-lFtDiWGhAujiaQLLwRqJlGXQQtd7xQMZKw7mgekJkZdl5UOsSndcjnw_aLP2iOzTRNTvzMI2Mt-Iqf7Xt6NPkJjULzaDPWpf1QUH/s1314/trekking%20kampung%20wisata%20mulyaharja%20bogor%206.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <h5>
                          <Link legacyBehavior href="/blog-details">
                            Sensasi trekking menikmati keindahan desa mulyaharja
                          </Link>
                        </h5>
                        <span className="posted-on">
                          <i className="far fa-calendar-alt" />
                          <a href="#">November 23,2022</a>
                        </span>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="https://assets.kompasiana.com/items/album/2021/07/09/img-1903-60e7f58d591cb162567eba82.jpg?t=o&v=555"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <h5>
                          <Link legacyBehavior href="/blog-details">
                            Kegiatan belajar langsung bertani dan berkebun
                          </Link>
                        </h5>
                        <span className="posted-on">
                          <i className="far fa-calendar-alt" />
                          <a href="#">November 23,2022</a>
                        </span>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="https://asset-2.tstatic.net/tribunnews/foto/images/preview/obyek-wisata-kampung-tematik-mulyaharja-bogor_20210602_191117.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <h5>
                          <Link legacyBehavior href="/blog-details">
                            Spot selfie yang instagramable
                          </Link>
                        </h5>
                        <span className="posted-on">
                          <i className="far fa-calendar-alt" />
                          <a href="#">November 23,2022</a>
                        </span>
                      </div>
                    </li>
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
