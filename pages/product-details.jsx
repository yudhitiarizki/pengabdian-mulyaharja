import PageBanner from "@/src/components/PageBanner";
import ProductDetailsSlider from "@/src/components/sliders/ProductDetailsSlider";
import Layout from "@/src/layout/Layout";
import { sliderActive3Item, sliderActive5Item } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
const ProductDetails = () => {
  return (
    <Layout header={2} extraClass={"pt-160"}>
      <PageBanner pageTitle={"Product Details"} />
      {/*====== Start Shop Details Section ======*/}
      <section className="shop-details-section pt-100 pb-50">
        <div className="container">
          <div className="product-details-wrapper">
            <div className="row align-items-xl-center">
              <div className="col-lg-6">
                {/*=== Product Gallery ===*/}
                <ProductDetailsSlider />
              </div>
              <div className="col-lg-6">
                <div className="product-info mb-50 pl-lg-70 wow fadeInRight">
                  <h4 className="title">Beras Organik</h4>
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
                    <li>
                      <a href="#">4.9(Customer Reviews)</a>
                    </li>
                  </ul>
                  <span className="price">
                    <span className="currency">Rp</span>232.000
                  </span>
                  <p>
                    Beras organik dari Desa Wisata Mulyaharja merupakan produk
                    unggulan yang dihasilkan melalui praktik pertanian ramah
                    lingkungan. Beras ini ditanam tanpa menggunakan pestisida
                    atau pupuk kimia sintetis, sehingga menjaga kesuburan tanah
                    dan keberlanjutan lingkungan. Diproses dengan metode
                    tradisional, beras ini dikenal memiliki rasa yang lebih
                    pulen dan aroma yang khas.
                  </p>
                  <p>
                    Beras organik dari Desa Wisata Mulyaharja merupakan produk
                    unggulan yang dihasilkan melalui praktik pertanian ramah
                    lingkungan.
                  </p>
                  <div className="product-cart mt-20 mb-30">
                    <ul>
                      <li>
                        <div className="quantity-input">
                          <button className="quantity-down">
                            <i className="far fa-minus" />
                          </button>
                          <input
                            className="quantity"
                            type="text"
                            defaultValue={1}
                            name="quantity"
                          />
                          <button className="quantity-up">
                            <i className="fas fa-plus" />
                          </button>
                        </div>
                      </li>
                      <li>
                        <button className="main-btn primary-btn">
                          Checkout
                          <i className="far fa-paper-plane" />
                        </button>
                      </li>
                    </ul>
                  </div>
                  {/* <ul className="product-meta pb-35 mb-40">
                    <li>
                      <span>Categories</span>
                      <a href="#">Restaurant</a>
                    </li>
                    <li>
                      <span>Tags</span>
                      <a href="#">Pizza, Burger, Soup</a>
                    </li>
                  </ul> */}
                  <ul className="social-link">
                    <li>
                      <span>Share</span>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8">
                <Tab.Container defaultActiveKey={"descrptions"}>
                  <div className="description-wrapper mt-30 wow fadeInUp">
                    <div className="description-tabs mb-10">
                      <Nav as={"ul"} className="nav">
                        <Nav.Item as={"li"} className="nav-item">
                          <Nav.Link
                            as={"a"}
                            className="nav-link"
                            href="#descrptions"
                            eventKey="descrptions"
                          >
                            Description
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as={"li"} className="nav-item">
                          <Nav.Link
                            as={"a"}
                            className="nav-link"
                            href="#information"
                            eventKey="information"
                          >
                            Additional Information
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as={"li"} className="nav-item">
                          <Nav.Link
                            as={"a"}
                            className="nav-link"
                            href="#reviews"
                            eventKey="reviews"
                          >
                            Reviews (2)
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                    <Tab.Content className="tab-content wow fadeInUp">
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="descrptions"
                      >
                        <div className="content-box">
                          <p>
                            Beras organik dari Desa Wisata Mulyaharja merupakan
                            produk unggulan yang dihasilkan melalui praktik
                            pertanian ramah lingkungan. Beras ini ditanam tanpa
                            menggunakan pestisida atau pupuk kimia sintetis,
                            sehingga menjaga kesuburan tanah dan keberlanjutan
                            lingkungan. Diproses dengan metode tradisional,
                            beras ini dikenal memiliki rasa yang lebih pulen dan
                            aroma yang khas.
                          </p>
                          <p>
                            Beras organik dari Desa Wisata Mulyaharja merupakan
                            produk unggulan yang dihasilkan melalui praktik
                            pertanian ramah lingkungan.miliki rasa yang lebih
                            pulen dan aroma yang khas.
                          </p>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="information"
                      >
                        <div className="content-box">
                          <p>
                            Beras organik dari Desa Wisata Mulyaharja merupakan
                            produk unggulan yang dihasilkan melalui praktik
                            pertanian ramah lingkungan. Beras ini ditanam tanpa
                            menggunakan pestisida atau pupuk kimia sintetis,
                            sehingga menjaga kesuburan tanah dan keberlanjutan
                            lingkungan. Diproses dengan metode tradisional,
                            beras ini dikenal memiliki rasa yang lebih pulen dan
                            aroma yang khas.
                          </p>
                          <p>
                            Dictum ultrices et suspendisse amet mattis in
                            pellentesque. Vulputate arcu, consectetur odio donec
                            nec duis ultrices facilisi. Mauris cursus elit diam,
                            urna suspendisse et, amet. Vitae ligula ultrices
                            nulla justo, enim lorem duis. Volutpat sit et neque
                            aliquam diam at at neque acus augue
                          </p>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane className="tab-pane fade" eventKey="reviews">
                        <div className="content-box">
                          <p>
                            Beras organik dari Desa Wisata Mulyaharja merupakan
                            produk unggulan yang dihasilkan melalui praktik
                            pertanian ramah lingkungan. Beras ini ditanam tanpa
                            menggunakan pestisida atau pupuk kimia sintetis,
                            sehingga menjaga kesuburan tanah dan keberlanjutan
                            lingkungan. Diproses dengan metode tradisional,
                            beras ini dikenal memiliki rasa yang lebih pulen dan
                            aroma yang khas.
                          </p>
                          <p>
                            Beras organik dari Desa Wisata Mulyaharja merupakan
                            produk unggulan yang dihasilkan melalui praktik
                            pertanian ramah lingkungan. Beras ini ditanam tanpa
                            menggunakan pestisida atau pupuk kimia sintetis,
                            sehingga menjaga kesuburan tanah dan keberlanjutan
                            lingkungan. Diproses dengan metode tradisional,
                            beras ini dikenal memiliki rasa yang lebih pulen dan
                            aroma yang khas.
                          </p>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                    {/*=== Review Form ===*/}
                    <div className="review-form-area wow fadeInUp mt-50 mb-40">
                      <h3 className="title">Kirimkan kami review</h3>
                      <p>
                        We have 3k+ 5star Reviews
                        <img src="assets/images/shop/rate.png" alt />
                      </p>
                      <form className="review-form">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form_group">
                              <input
                                type="text"
                                className="form_control"
                                placeholder="Full Name"
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
                                placeholder="Email Address"
                                name="email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form_group">
                              <input
                                type="url"
                                className="form_control"
                                placeholder="Website"
                                name="website"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form_group">
                              <textarea
                                name="message"
                                className="form_control"
                                placeholder="Write Message"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form_group">
                              <button className="main-btn primary-btn">
                                Send Reviews
                                <i className="fas fa-paper-plane" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </Tab.Container>
              </div>
              <div className="col-xl-4">
                <div className="sidebar-widget-area pl-lg-45 mt-30">
                  {/*=== Banner Widget ===*/}
                  <div className="sidebar-widget widget-product-banner mb-40 wow fadeInUp">
                    <div className="banner-content text-center">
                      <h4 className="title">Souvenir Local</h4>
                      <img
                        src="https://i0.wp.com/shopee.co.id/inspirasi-shopee/wp-content/uploads/2018/08/accessories-bags-design-1118715.jpg?fit=1600%2C1067&ssl=1"
                        alt="Banner Image"
                      />
                      <Link legacyBehavior href="/contact">
                        <a className="main-btn secondary-btn">
                          Shop Now
                          <i className="far fa-paper-plane" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Shop Details Section ======*/}
      {/*====== Start Recent Product Section ======*/}
      <section className="recent-product-section pb-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-50">
                <h2>Related Products</h2>
              </div>
            </div>
          </div>
          <Slider
            {...sliderActive3Item}
            className="slider-active-3-item wow fadeInDown"
          >
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
                  <Link href="product-details" className="main-btn primary-btn">
                    Cek Detail
                    <i className="far fa-shopping-bag" />
                  </Link>
                </div>
              </div>
              <div className="content">
                <div className="info">
                  <h4 className="title">
                    <Link legacyBehavior href="/products-details">
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
                  <Link href="product-details" className="main-btn primary-btn">
                    Cek Detail
                    <i className="far fa-shopping-bag" />
                  </Link>
                </div>
              </div>
              <div className="content">
                <div className="info">
                  <h4 className="title">
                    <Link legacyBehavior href="/products-details">
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
                  <Link href="product-details" className="main-btn primary-btn">
                    Cek Detail
                    <i className="far fa-shopping-bag" />
                  </Link>
                </div>
              </div>
              <div className="content">
                <div className="info">
                  <h4 className="title">
                    <Link legacyBehavior href="/products-details">
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
                  <Link href="product-details" className="main-btn primary-btn">
                    Cek Detail
                    <i className="far fa-shopping-bag" />
                  </Link>
                </div>
              </div>
              <div className="content">
                <div className="info">
                  <h4 className="title">
                    <Link legacyBehavior href="/products-details">
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
          </Slider>
        </div>
      </section>
      {/*====== End Recent Product Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <section className="gallery-section mbm-150">
        <div className="container-fluid">
          <Slider
            {...sliderActive5Item}
            className="slider-active-5-item fadeInUp"
          >
            {/*=== Single Gallery Item ===*/}
            <div className="single-gallery-item">
              <div className="gallery-img">
                <img src="assets/images/gallery/gl-1.jpg" alt="Gallery Image" />
                <div className="hover-overlay">
                  <a
                    href="assets/images/gallery/gl-1.jpg"
                    className="icon-btn img-popup"
                  >
                    <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
            {/*=== Single Gallery Item ===*/}
            <div className="single-gallery-item">
              <div className="gallery-img">
                <img src="assets/images/gallery/gl-2.jpg" alt="Gallery Image" />
                <div className="hover-overlay">
                  <a
                    href="assets/images/gallery/gl-2.jpg"
                    className="icon-btn img-popup"
                  >
                    <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
            {/*=== Single Gallery Item ===*/}
            <div className="single-gallery-item">
              <div className="gallery-img">
                <img src="assets/images/gallery/gl-3.jpg" alt="Gallery Image" />
                <div className="hover-overlay">
                  <a
                    href="assets/images/gallery/gl-3.jpg"
                    className="icon-btn img-popup"
                  >
                    <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
            {/*=== Single Gallery Item ===*/}
            <div className="single-gallery-item">
              <div className="gallery-img">
                <img src="assets/images/gallery/gl-4.jpg" alt="Gallery Image" />
                <div className="hover-overlay">
                  <a
                    href="assets/images/gallery/gl-4.jpg"
                    className="icon-btn img-popup"
                  >
                    <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
            {/*=== Single Gallery Item ===*/}
            <div className="single-gallery-item">
              <div className="gallery-img">
                <img src="assets/images/gallery/gl-5.jpg" alt="Gallery Image" />
                <div className="hover-overlay">
                  <a
                    href="assets/images/gallery/gl-5.jpg"
                    className="icon-btn img-popup"
                  >
                    <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
            {/*=== Single Gallery Item ===*/}
            <div className="single-gallery-item">
              <div className="gallery-img">
                <img src="assets/images/gallery/gl-3.jpg" alt="Gallery Image" />
                <div className="hover-overlay">
                  <a
                    href="assets/images/gallery/gl-3.jpg"
                    className="icon-btn img-popup"
                  >
                    <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default ProductDetails;
