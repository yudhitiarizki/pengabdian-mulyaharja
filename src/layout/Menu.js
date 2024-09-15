import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import SearchModal from "./SearchModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryProduct } from "@/redux/actions/product";

const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};
export default Menu;

const DeskTopMenu = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);

  useEffect(() => {
    if (product.status === "idle") {
      dispatch(fetchCategoryProduct());
    }
  }, [dispatch, product.status]);

  return (
    <Fragment>
      <nav className="main-menu d-none d-xl-block">
        <ul>
          <li className="menu-item">
            <Link href="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link href="blog-list">Berita</Link>
          </li>
          <li className="menu-item">
            <Link href="kegiatan">Kegiatan</Link>
          </li>
          <li className="menu-item">
            <Link href="gallery">Gallery</Link>
          </li>
          <li className="menu-item has-children">
            <Link href="shop">
              Produk
              <span className="dd-trigger">
                <i className="far fa-angle-down" />
              </span>
            </Link>
            <ul className="sub-menu">
              {product.category && product.category.length > 0 ? (
                product.category.map((data) => (
                  <li key={data.id}>
                    <Link href={`shop?kategori=${data.id}`}>{data.name}</Link>
                  </li>
                ))
              ) : (
                <></>
              )}
            </ul>
          </li>
          <li className="menu-item">
            <Link href="video">Video</Link>
          </li>
          <li className="menu-item">
            <Link href="contact">Kontak</Link>
          </li>

          {/* <li className="menu-item has-children">
            <a href="#">
              Destination
              <span className="dd-trigger">
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="sub-menu">
              <li>
                <Link href="destination">Destination</Link>
              </li>
              <li>
                <Link href="destination-details">Destination Details</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item has-children">
            <a href="#">
              Blog
              <span className="dd-trigger">
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="sub-menu">
              <li>
                <Link href="blog-list">Blog List</Link>
              </li>
              <li>
                <Link href="blog-details">Blog Details</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item has-children">
            <a href="#">
              Pages
              <span className="dd-trigger">
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="sub-menu">
              <li>
                <Link href="about">About Us</Link>
              </li>
              <li>
                <Link href="gallery">Our Gallery</Link>
              </li>
              <li>
                <Link href="events">Our Events</Link>
              </li>
              <li>
                <Link href="shop">Our Shop</Link>
              </li>
              <li>
                <Link href="product-details">Product Details</Link>
              </li>
              <li>
                <Link href="contact">Contact</Link>
              </li>
            </ul>
          </li> */}
        </ul>
      </nav>
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const product = useSelector((state) => state.product);

  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu d-block d-xl-none">
      <ul>
        <li className="menu-item">
          <Link href="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link href="blog-list">Berita</Link>
        </li>
        <li className="menu-item">
          <Link href="kegiatan">Kegiatan</Link>
        </li>
        <li className="menu-item has-children">
          <Link href="shop">
            Produk
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </Link>
          <ul className="sub-menu">
            {product.category && product.category.length > 0 ? (
              product.category.map((data) => (
                <li key={data.id}>
                  <Link href={`shop?kategori=${data.id}`}>{data.name}</Link>
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </li>
        <li className="menu-item">
          <Link href="video">Video</Link>
        </li>
        <li className="menu-item">
          <Link href="contact">Kontak</Link>
        </li>
      </ul>
    </nav>
  );
};
