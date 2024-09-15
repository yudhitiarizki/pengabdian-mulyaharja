import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "@/redux/actions/product";
import Select from "react-select";
import ReactPaginate from "react-paginate";

const Shop = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { kategori } = query;

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct({ currentPage, kategori, sorting: selectedOption }));
  }, [dispatch, currentPage, kategori, selectedOption]);

  useEffect(() => {
    if (kategori && product.category.length > 0) {
      const detail = product.category.find((data) => data.id == kategori);
      setCategory(detail);
    } else {
      setCategory(null);
    }
  }, [kategori, product.category.length]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  const options = [
    { value: null, label: "Default" },
    { value: "desc", label: "Highest to Lowest Price" },
    { value: "asc", label: "Lowest to Highest Price" },
  ];

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
                  {category ? <h6> Kategori: {category.name}</h6> : ""}
                </div>
              </div>
              <div className="col-md-5">
                {/*====== Product Dropdown ======*/}
                <div className="product-dropdown float-md-end">
                  <span className="title" style={{ marginBottom: "0px" }}>
                    Sort By
                  </span>
                  <div style={{ width: "200px" }}>
                    <Select
                      options={options}
                      value={selectedOption}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {product.data.data && product.data.data.length > 0 ? (
              product.data.data.map((data) => (
                <div className="col-xl-4 col-md-6 col-sm-12" key={data.id}>
                  {/*=== Single Product Item ===*/}
                  <div className="single-product-item mb-50 wow fadeInUp">
                    <div className="img-holder">
                      <img
                        height={400}
                        style={{ objectFit: "cover", width: "100%" }}
                        src={data.cover}
                        alt="Product Image"
                      />
                      <div className="tag">
                        <span className="off">{data.category?.name}</span>
                      </div>
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
                </div>
              ))
            ) : (
              <div className="col-12">
                <p>No data available.</p>
              </div>
            )}
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              {product.data.data && product.data.data.length > 0 ? (
                <ReactPaginate
                  className="gowilds-pagination"
                  previousLabel={<i className="far fa-arrow-left" />}
                  nextLabel={<i className="far fa-arrow-right" />}
                  breakLabel={"..."}
                  pageCount={product.data.last_page}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                />
              ) : (
                <></>
              )}
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
