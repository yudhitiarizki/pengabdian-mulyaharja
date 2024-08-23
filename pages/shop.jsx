import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const Shop = () => {
  return (
    <Layout header={2} extraClass={"pt-160"}>
      <PageBanner pageTitle={"Produk"} />
      {/*====== Start Products Section ======*/}
      <section className="products-section pt-100 pb-90">
        <div className="container">
          {/*====== Products Filter ======*/}
          <div className="page-item-filter mb-40 wow fadeInUp">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                {/*====== Show Text ======*/}
                <div className="show-text mb-20">
                  <h6>Showing Results 09 Of 55</h6>
                </div>
              </div>
              <div className="col-md-5">
                {/*====== Product Dropdown ======*/}
                <div className="product-dropdown float-md-end">
                  <span className="title">Sort By</span>
                  <select className="wide">
                    <option data-display="Default">Default</option>
                    <option value={1}>Best Products</option>
                    <option value={2}>Highest Price</option>
                    <option value={3}>Lowest Price</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/*=== Single Product Item ===*/}
              <div className="single-product-item mb-50 wow fadeInUp">
                <div className="img-holder">
                  <img
                    height={400}
                    style={{ objectFit: "cover", width: "100%" }}
                    src="https://blog.wellfarm.id/wp-content/uploads/2021/02/6.png"
                    alt="Product Image"
                  />
                  <div className="tag">
                    <span className="off">10% OFF</span>
                  </div>
                  <div className="content-hover">
                    <Link
                      href="product-details"
                      className="main-btn primary-btn"
                    >
                      Cek Detail
                      <i className="far fa-shopping-bag" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <div className="info">
                    <h4 className="title">
                      <Link legacyBehavior href="/product-details">
                        <a>Beras organik</a>
                      </Link>
                    </h4>
                    <span className="price">
                      <span className="prev-price">
                        <span className="currency">Rp</span>28.00
                      </span>
                      <span className="currency">Rp</span>25.00
                    </span>
                  </div>
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
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/*=== Single Product Item ===*/}
              <div className="single-product-item mb-50 wow fadeInUp">
                <div className="img-holder">
                  <img
                    height={400}
                    style={{ objectFit: "cover", width: "100%" }}
                    src="https://www.simalemfarm.com/assets/uploads/paket-pupuk-horti-buah-horti-sayur-cabe-tomat-terong-bawang-dll-232-zoom-11.jpg"
                    alt="Product Image"
                  />
                  <div className="tag"></div>
                  <div className="content-hover">
                    <Link
                      href="product-details"
                      className="main-btn primary-btn"
                    >
                      Cek Detail
                      <i className="far fa-shopping-bag" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <div className="info">
                    <h4 className="title">
                      <Link legacyBehavior href="/product-details">
                        <a>Sayur dan buah organik</a>
                      </Link>
                    </h4>
                    <span className="price">
                      <span className="prev-price">
                        <span className="currency">Rp</span>28.00
                      </span>
                      <span className="currency">Rp</span>25.00
                    </span>
                  </div>
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
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/*=== Single Product Item ===*/}
              <div className="single-product-item mb-50 wow fadeInUp">
                <div className="img-holder">
                  <img
                    height={400}
                    style={{ objectFit: "cover", width: "100%" }}
                    src="https://sweetrip.id/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-29-at-15.25.25.jpeg"
                    alt="Product Image"
                  />
                  <div className="tag"></div>
                  <div className="content-hover">
                    <Link
                      href="product-details"
                      className="main-btn primary-btn"
                    >
                      Cek Detail
                      <i className="far fa-shopping-bag" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <div className="info">
                    <h4 className="title">
                      <Link legacyBehavior href="/product-details">
                        <a>Nasi liwet dan nasi tutug oncom</a>
                      </Link>
                    </h4>
                    <span className="price">
                      <span className="prev-price">
                        <span className="currency">Rp</span>28.00
                      </span>
                      <span className="currency">Rp</span>25.00
                    </span>
                  </div>
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
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/*=== Single Product Item ===*/}
              <div className="single-product-item mb-50 wow fadeInUp">
                <div className="img-holder">
                  <img
                    height={400}
                    style={{ objectFit: "cover", width: "100%" }}
                    src="https://i0.wp.com/shopee.co.id/inspirasi-shopee/wp-content/uploads/2018/08/accessories-bags-design-1118715.jpg?fit=1600%2C1067&ssl=1"
                    alt="Product Image"
                  />
                  <div className="tag"></div>
                  <div className="content-hover">
                    <Link
                      href="product-details"
                      className="main-btn primary-btn"
                    >
                      Cek Detail
                      <i className="far fa-shopping-bag" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <div className="info">
                    <h4 className="title">
                      <Link legacyBehavior href="/product-details">
                        <a>Souvenir lokal</a>
                      </Link>
                    </h4>
                    <span className="price">
                      <span className="prev-price">
                        <span className="currency">Rp</span>28.00
                      </span>
                      <span className="currency">Rp</span>25.00
                    </span>
                  </div>
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
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/*=== Single Product Item ===*/}
              <div className="single-product-item mb-50 wow fadeInUp">
                <div className="img-holder">
                  <img
                    height={400}
                    style={{ objectFit: "cover", width: "100%" }}
                    src="https://img-global.cpcdn.com/recipes/a429865aad8d7900/680x482cq70/kremesan-renyah-bersarang-ala-tintin-rayner-foto-resep-utama.jpg"
                    alt="Product Image"
                  />
                  <div className="tag"></div>
                  <div className="content-hover">
                    <Link
                      href="product-details"
                      className="main-btn primary-btn"
                    >
                      Cek Detail
                      <i className="far fa-shopping-bag" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <div className="info">
                    <h4 className="title">
                      <Link legacyBehavior href="/product-details">
                        <a>Keremes</a>
                      </Link>
                    </h4>
                    <span className="price">
                      <span className="prev-price">
                        <span className="currency">Rp</span>28.00
                      </span>
                      <span className="currency">Rp</span>25.00
                    </span>
                  </div>
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
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/*=== Single Product Item ===*/}
              <div className="single-product-item mb-50 wow fadeInUp">
                <div className="img-holder">
                  <img
                    height={400}
                    style={{ objectFit: "cover", width: "100%" }}
                    src="https://bandunginfogaya.com/images/sampul-1647-1647591010.jpg"
                    alt="Product Image"
                  />
                  <div className="tag"></div>
                  <div className="content-hover">
                    <Link
                      href="product-details"
                      className="main-btn primary-btn"
                    >
                      Cek Detail
                      <i className="far fa-shopping-bag" />
                    </Link>
                  </div>
                </div>
                <div className="content">
                  <div className="info">
                    <h4 className="title">
                      <Link legacyBehavior href="/product-details">
                        <a>Kue tradisional</a>
                      </Link>
                    </h4>
                    <span className="price">
                      <span className="prev-price">
                        <span className="currency">Rp</span>28.00
                      </span>
                      <span className="currency">Rp</span>25.00
                    </span>
                  </div>
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
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="gowilds-pagination wow fadeInUp text-center">
                <li>
                  <a href="#">
                    <i className="far fa-arrow-left" />
                  </a>
                </li>
                <li>
                  <a href="#" className="active">
                    01
                  </a>
                </li>
                <li>
                  <a href="#">02</a>
                </li>
                <li>
                  <a href="#">03</a>
                </li>
                <li>
                  <a href="#">04</a>
                </li>
                <li>
                  <a href="#">
                    <i className="far fa-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Products Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <GallerySection />
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default Shop;
