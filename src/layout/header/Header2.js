import Link from "next/link";
import Menu from "../Menu";
import { useSelector } from "react-redux";
const Header2 = () => {
  const { details } = useSelector((state) => state.profile);
  return (
    <header className="header-area header-one transparent-header">
      {/*====== Header Navigation ======*/}
      <div className="header-navigation navigation-white">
        <div className="nav-overlay" />
        <div className="container-fluid">
          <div className="primary-menu">
            {/*====== Site Branding ======*/}
            <div className="site-branding">
              <Link legacyBehavior href="/">
                <a className="brand-logo">
                  <img src={details.logo} alt="Site Logo" height={50} />
                </a>
              </Link>
            </div>
            {/*====== Nav Menu ======*/}
            <div className="nav-menu">
              {/*====== Site Branding ======*/}
              <div className="mobile-logo mb-30 d-block d-xl-none">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                    <img src={details.logo} alt="Site Logo" height={50} />
                  </a>
                </Link>
              </div>
              {/*====== main Menu ======*/}
              <Menu />
            </div>
            {/*====== Nav Right Item ======*/}
            <div className="nav-right-item">
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
export default Header2;
