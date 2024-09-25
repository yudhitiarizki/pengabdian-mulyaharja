import { useSelector } from "react-redux";

const Footer = ({ bg, extraClass }) => {
  const { details } = useSelector((state) => state.profile);

  return (
    <footer
      className={`main-footer ${bg ? bg : "black"}-bg ${
        extraClass ? extraClass : ""
      }`}
    >
      <div className="container">
        {/*=== Footer CTA ===*/}
        <div className="footer-cta pt-80 pb-40">
          <div className="row">
            <div className="col-lg-6">
              {/*=== Single CTA Item ===*/}
              <div className="single-cta-item pr-lg-60 mb-40">
                <div className="icon">
                  <img src="assets/images/icon/support.png" alt="Icon" />
                </div>
                <div className="content">
                  <h3 className="title">Butuh Bantuan ?</h3>
                  <a href="#" className="icon-btn">
                    <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Single CTA Item ===*/}
              <div className="single-cta-item pl-lg-60 mb-40">
                <div className="icon">
                  <img src="assets/images/icon/travel.png" alt="Icon" />
                </div>
                <div className="content">
                  <h3 className="title">
                    Bersiap Liburan ke Wisata Mulyaharja!
                  </h3>
                  <a href="#" className="icon-btn">
                    <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=== Footer Widget ===*/}
        <div className="footer-widget-area pt-75 pb-30">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget about-company-widget mb-40">
                <h4 className="widget-title">Tentang</h4>
                <div className="footer-content">
                  <p>{details.description}</p>
                  <a href="#" className="footer-logo">
                    <img
                      className="mr-10"
                      src={details.logo}
                      height={60}
                      alt="Site Logo"
                    />
                    <img
                      src="assets/images/logo/logo_sv.png"
                      height={45}
                      alt="Site Logo"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget service-nav-widget mb-40 pl-lg-70">
                <h4 className="widget-title">Halaman</h4>
                <div className="footer-content">
                  <ul className="footer-widget-nav">
                    <li>
                      <a href="#">Berita</a>
                    </li>
                    <li>
                      <a href="#">Kegiatan</a>
                    </li>
                    <li>
                      <a href="#">Gallery</a>
                    </li>
                    <li>
                      <a href="#">Produk</a>
                    </li>
                    <li>
                      <a href="#">Video</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget footer-newsletter-widget mb-40 pl-lg-100">
                <h4 className="widget-title">Berita Harian</h4>
                <div className="footer-content">
                  {/* <p>
                    Which of us ever undertake laborious physical exercise
                    except obtain
                  </p> */}
                  <form>
                    <div className="form_group">
                      <label>
                        <i className="far fa-paper-plane" />
                      </label>
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=== Footer Copyright ===*/}
        <div className="footer-copyright">
          <div className="row">
            <div className="col-lg-6">
              {/*=== Footer Text ===*/}
              <div className="footer-text">
                <p>
                  Copyright @2024{" "}
                  <span style={{ color: "#F7921E" }}>{details.name}</span>, All
                  Right Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Footer Nav ===*/}
              <div className="footer-nav float-lg-end">
                <ul>
                  <li>
                    <a href="#">Faqs</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
