import Link from "next/link";
import Menu from "../Menu";
const DefaultHeader = () => {
  return (
    <header className="header-area header-three">
      {/*====== Header Top Bar ======*/}
      <div className="header-top-bar pt-30 pb-30 px-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 d-none d-xl-block">
              {/*====== Site Branding ======*/}
              <div className="site-brading">
                <Link legacyBehavior href="/index-3">
                  <a className="brand-logo">
                    <img
                      src="assets/images/logo/logo.png"
                      alt="Logo"
                      height={80}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-9 col-lg-12">
              {/*====== Information Wrapper ======*/}
              <div className="information-wrapper">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="single-info-item-two">
                      <div className="inner-info">
                        <div className="icon">
                          <i className="far fa-map-marker-alt" />
                        </div>
                        <div className="info">
                          <span className="title">Lokasi</span>
                          <h5>Mulyaharja, Kota Bogor</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-info-item-two">
                      <div className="inner-info">
                        <div className="icon">
                          <i className="far fa-envelope" />
                        </div>
                        <div className="info">
                          <span className="title">Email Address</span>
                          <h5>
                            <a href="mailto:support@gmail.com">
                              Mulyaharja@gmail.com
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-info-item-two">
                      <div className="inner-info">
                        <div className="icon">
                          <i className="far fa-phone-plus" />
                        </div>
                        <div className="info">
                          <span className="title">Contact</span>
                          <h5>
                            <a href="tel:+000(123)45688">(+62) 123 456 789</a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====== Header Navigation ======*/}
      <div className="header-navigation">
        <div className="nav-overlay" />
        <div className="container-fluid">
          <div className="primary-menu gray-bg">
            {/*====== Site Branding ======*/}
            <div className="site-brading d-block d-xl-none">
              <Link legacyBehavior href="/index-3">
                <a className="brand-logo">
                  <img
                    src="assets/images/logo/logo.png"
                    alt="Logo"
                    height={50}
                  />
                </a>
              </Link>
            </div>
            {/*====== Nav Menu ======*/}
            <div className="nav-menu">
              {/*====== Site Branding ======*/}
              <div className="mobile-logo mb-30 d-block d-xl-none">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                    <img
                      src="assets/images/logo/logo.png"
                      alt="Site Logo"
                      height={50}
                    />
                  </a>
                </Link>
              </div>
              {/*=== Nav Search ===*/}
              <div className="nav-search mb-30 d-block d-xl-none ">
                <form>
                  <div className="form_group">
                    <input
                      type="email"
                      className="form_control"
                      placeholder="Search Here"
                      name="email"
                      required
                    />
                    <button className="search-btn">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </form>
              </div>
              {/*====== Main Menu ======*/}
              <Menu />
              {/*====== Menu Button ======*/}
            </div>
            {/*====== Nav Right Item ======*/}
            <div className="nav-right-item">
              <div className="lang-dropdown"></div>
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default DefaultHeader;
