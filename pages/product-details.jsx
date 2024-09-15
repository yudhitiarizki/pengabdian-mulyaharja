import { fetchDetailProduct, fetchProduct } from "@/redux/actions/product";
import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import ProductDetailsSlider from "@/src/components/sliders/ProductDetailsSlider";
import Layout from "@/src/layout/Layout";
import { sliderActive3Item, sliderActive5Item } from "@/src/sliderProps";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Nav, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
const ProductDetails = () => {
  const dispatch = useDispatch();

  const { query } = useRouter();
  const { id } = query;

  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct({}));
  }, [dispatch]);

  useEffect(() => {
    if (id) dispatch(fetchDetailProduct(id));
  }, [dispatch, id]);

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
                <ProductDetailsSlider data={product.details} />
              </div>
              <div className="col-lg-6">
                <div className="product-info mb-50 pl-lg-70 wow fadeInRight">
                  <h4 className="title">{product.details?.name}</h4>
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
                      <a href="#">4.9</a>
                    </li>
                  </ul>
                  <span className="price">
                    <span className="currency">Rp</span>
                    {product.details?.price?.toLocaleString("id-ID")}
                  </span>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product.details?.description,
                    }}
                  />
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
                        {/* <Nav.Item as={"li"} className="nav-item">
                          <Nav.Link
                            as={"a"}
                            className="nav-link"
                            href="#reviews"
                            eventKey="reviews"
                          >
                            Reviews (2)
                          </Nav.Link>
                        </Nav.Item> */}
                      </Nav>
                    </div>
                    <Tab.Content className="tab-content wow fadeInUp">
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="descrptions"
                      >
                        <div className="content-box">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: product.details?.description,
                            }}
                          />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="information"
                      >
                        <div className="content-box">
                          <p>{product.details?.addtional_info}</p>
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
                        Reviews
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
                              <button
                                className="main-btn primary-btn"
                                type="button"
                              >
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
                {product.data.data && product.data.data.length > 0 ? (
                  <div className="sidebar-widget-area pl-lg-45 mt-30">
                    {/*=== Banner Widget ===*/}
                    <div className="sidebar-widget widget-product-banner mb-40 wow fadeInUp">
                      <div className="banner-content text-center">
                        <h4 className="title">{product.data.data[0].name}</h4>
                        <img
                          src={product.data.data[0].cover}
                          alt="Banner Image"
                        />
                        <Link
                          legacyBehavior
                          href={`/product-details?id=${product.data.data[0].id}`}
                        >
                          <a className="main-btn secondary-btn">
                            Shop Now
                            <i className="far fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
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
            {product.data.data && product.data.data.length > 0 ? (
              product.data.data.map((data) => (
                <div
                  className="single-product-item mb-50 wow fadeInUp"
                  key={data.id}
                >
                  <div className="img-holder">
                    <img
                      height={400}
                      style={{ objectFit: "cover", width: "100%" }}
                      src={data.cover}
                      alt="Product Image"
                    />
                    <div className="tag"></div>
                    <div className="content-hover">
                      <Link
                        href={`/product-details?id=${data.id}`}
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
                        <Link
                          legacyBehavior
                          href={`/product-details?id=${data.id}`}
                        >
                          <a>{data.name}</a>
                        </Link>
                      </h4>
                      <span className="price">
                        {/* <span className="prev-price">
                          <span className="currency">Rp</span>28.00
                        </span> */}
                        <span className="currency">Rp</span>
                        {data.price.toLocaleString("id-ID")}
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
              ))
            ) : (
              <div className="col-12">
                <p>No data available.</p>
              </div>
            )}
          </Slider>
        </div>
      </section>
      {/*====== End Recent Product Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <GallerySection />
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default ProductDetails;
