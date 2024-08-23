import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const BlogList = () => {
  return (
    <Layout header={2} extraClass={"pt-160"}>
      <PageBanner pageTitle={"Berita"} />
      {/*====== Start Blog Section ======*/}
      <section className="blog-list-section pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              {/*=== Blog List Wrapper ===*/}
              <div className="blog-list-wrapper">
                {/*=== Single Blog Post ===*/}
                <div className="single-blog-post-four mb-30 wow fadeInDown">
                  <div className="post-thumbnail">
                    <img
                      height={400}
                      style={{ objectFit: "cover", width: "100%" }}
                      src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_1024/v1634025439/01gbc7c3bzdpterc4j8z242dzg.jpg"
                      alt="Post Image"
                    />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <span>
                        <i className="far fa-calendar-alt" />
                        <a href="#">November 15, 2022</a>
                      </span>
                    </div>
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Rasakan Pengalaman Autentik Bertani di Desa Wisata
                          Mulyaharja
                        </a>
                      </Link>
                    </h3>
                    <h6 className="author">
                      <i className="far fa-location" />
                      <a href="#">Mulaharja</a>
                    </h6>
                    <Link legacyBehavior href="/blog-details">
                      <a className="main-btn filled-btn">
                        Selengkapnya
                        <i className="fas fa-paper-plane" />
                      </a>
                    </Link>
                  </div>
                </div>
                {/*=== Single Blog Post ===*/}
                <div className="single-blog-post-four mb-30 wow fadeInDown">
                  <div className="post-thumbnail">
                    <img
                      height={400}
                      style={{ objectFit: "cover", width: "100%" }}
                      src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_1024/v1634025439/01gb9nxgctzhzsq0kgr9rgn71f.jpg"
                      alt="Post Image"
                    />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <span>
                        <i className="far fa-calendar-alt" />
                        <a href="#">November 15, 2022</a>
                      </span>
                    </div>
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Edukasi Pertanian: Menanam Padi dan Membajak Sawah di
                          Mulyaharja
                        </a>
                      </Link>
                    </h3>
                    <h6 className="author">
                      <i className="far fa-location" />
                      <a href="#">Mulaharja</a>
                    </h6>
                    <Link legacyBehavior href="/blog-details">
                      <a className="main-btn filled-btn">
                        Selengkapnya
                        <i className="fas fa-paper-plane" />
                      </a>
                    </Link>
                  </div>
                </div>
                {/*=== Single Blog Post ===*/}
                <div className="single-blog-post-four mb-30 wow fadeInDown">
                  <div className="post-thumbnail">
                    <img
                      height={400}
                      style={{ objectFit: "cover", width: "100%" }}
                      src="https://asset.kompas.com/crops/CIYiYoD4AR3yh39YDsSg7hElgjQ=/0x119:585x509/750x500/data/photo/2021/02/09/60223b6377948.jpg"
                      alt="Post Image"
                    />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <span>
                        <i className="far fa-calendar-alt" />
                        <a href="#">November 15, 2022</a>
                      </span>
                    </div>
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Petualangan Trekking Menembus Hutan dan Perkebunan di
                          Desa Mulyaharja
                        </a>
                      </Link>
                    </h3>
                    <h6 className="author">
                      <i className="far fa-location" />
                      <a href="#">Mulaharja</a>
                    </h6>
                    <Link legacyBehavior href="/blog-details">
                      <a className="main-btn filled-btn">
                        Selengkapnya
                        <i className="fas fa-paper-plane" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              {/*=== Pagination ===*/}
              <ul className="gowilds-pagination wow fadeInDown mt-60 mb-30">
                <li className="me-2">
                  <a href="#">
                    <i className="far fa-arrow-left" />
                  </a>
                </li>
                <li className="me-2">
                  <a href="#" className="active">
                    01
                  </a>
                </li>
                <li className="me-2">
                  <a href="#">02</a>
                </li>
                <li className="me-2">
                  <a href="#">03</a>
                </li>
                <li className="me-2">
                  <a href="#">04</a>
                </li>
                <li className="me-2">
                  <a href="#">
                    <i className="far fa-arrow-right" />
                  </a>
                </li>
              </ul>
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
      {/*====== End Blog Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <GallerySection />
    </Layout>
  );
};
export default BlogList;
