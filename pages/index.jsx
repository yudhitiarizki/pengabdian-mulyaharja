import GallerySection from "@/src/components/GallerySection";
import Layout from "@/src/layout/Layout";
import {
  home2Slider,
  sliderActive3Item,
  home1Slider,
  sliderActive4Item,
} from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "@/redux/actions/videos";
import { fetchNews } from "@/redux/actions/news";
import { useEffect } from "react";

const index = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const videos = useSelector((state) => state.videos);
  const news = useSelector((state) => state.news);

  useEffect(() => {
    if (videos.status === "idle") {
      dispatch(fetchVideos({}));
    }
  }, [videos.status, dispatch]);

  useEffect(() => {
    dispatch(fetchNews({}));
  }, [dispatch]);

  return (
    <Layout header={2} extraClass={"pt-160"}>
      {/*====== Start Hero Section ======*/}
      <section className="hero-section">
        {/*=== Hero Wrapper ===*/}
        <div className="hero-wrapper-two">
          {/*=== Hero Slider ===*/}
          <Slider {...home2Slider} className="hero-slider-two">
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(https://asset.kompas.com/crops/qj6ppahEVO903lvvjnMzOq7B-yM=/97x0:1177x720/750x500/data/photo/2021/02/09/602239889bfbb.jpeg)",
                }}
              />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-xl-9">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white text-center">
                      <span className="ribbon">Wisata &amp; Travels</span>
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Visit Kampung Tematik Mulaharja
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Hero Section ======*/}

      {/*====== Start About Section ======*/}
      <section className="about-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6">
              {/*=== About Content Box ===*/}
              <div className="about-two_content-box mb-35 wow fadeInLeft">
                <div className="section-title mb-30">
                  <span className="sub-title">Tentang Kampung</span>
                  <h2>Pesona asri & Edukatif desa mulyaharja</h2>
                </div>
                <p>
                  Deskripsi Kampung tematik mulyaharjaDeskripsi Kampung tematik
                  mulyaharjaDeskripsi Kampung tematik mulyaharjaDeskripsi
                  Kampung tematik mulyaharja
                </p>
                <div className="card-list">
                  <div className="card-item">
                    <i className="fas fa-badge-check" />
                    Edukasi
                  </div>
                  <div className="card-item">
                    <i className="fas fa-badge-check" />
                    Wisata
                  </div>
                  <div className="card-item">
                    <i className="fas fa-badge-check" />
                    Kuliner
                  </div>
                  <div className="card-item">
                    <i className="fas fa-badge-check" />
                    Treking
                  </div>
                  <div className="card-item">
                    <i className="fas fa-badge-check" />
                    Spot Foto
                  </div>
                  <div className="card-item">
                    <i className="fas fa-badge-check" />
                    Agrowisata
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== About Image Box ===*/}
              <div className="about-one_image-box mb-50 wow fadeInRight">
                <img
                  src="https://wisata-id.com/wp-content/uploads/2023/01/fb-awe-hermawan-02.jpg"
                  className="radius-top-left-right-288"
                  alt="About image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}

      {/*====== Start Features Section ======*/}
      <section className="features-section pt-50 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-45 wow fadeInDown">
                <span className="sub-title">Kegiatan</span>
                <h2>Explore Kampung Tematik</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {category.data &&
            category.data.data &&
            category.data.data.length > 0 ? (
              category.data.data.map((data) => (
                <div className="col-xl-3 col-md-6 col-sm-12" key={data.id}>
                  {/*=== Features Image Item ===*/}
                  <div className="single-features-item-two mb-40 wow fadeInUp">
                    <div className="img-holder">
                      <img
                        height={360}
                        style={{ objectFit: "cover", width: "100%" }}
                        src={data.image_url}
                        alt="Features Image"
                      />
                      <div className="item-overlay">
                        <div className="content">
                          <h3 className="title">{data.name}</h3>
                        </div>
                      </div>
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
        </div>
      </section>
      {/*====== End Features Section ======*/}

      {/*====== Start Services Section ======*/}
      <section className="services-section black-bg pt-100 pb-100">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              {/*=== Section Title ===*/}
              <div className="section-title text-center text-white mb-50 wow fadeInDown">
                <span className="sub-title">Video Mulaharja</span>
                <h2>Explore Setiap Video Mulaharja</h2>
              </div>
            </div>
          </div>
          {/*=== Service Slider One ===*/}
          <Slider {...home1Slider} className="hero-slider-one bg-services">
            {videos.data.data && videos.data.data.length > 0 ? (
              videos.data.data.map((data) => (
                <div
                  className="single-service-item-two video-section"
                  key={data.id}
                >
                  <div className="section-title text-center text-white mb-50 wow fadeInDown">
                    <h2>Mengenal Panen di Mulaharja</h2>
                  </div>
                  <iframe
                    width="560"
                    height="600"
                    src={`https://www.youtube.com/embed/${data.youtube_id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
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
      {/*====== End Services Section ======*/}

      {/*====== Start Blog Section ======*/}
      <section className="blog-section pt-100 pb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              {/*=== Blog Content Box ===*/}
              <div className="blog-content-box mb-40 wow fadeInLeft">
                {/*=== Section Title ===*/}
                <div className="section-title mb-30">
                  <span className="sub-title">Berita &amp; Kegiatan</span>
                  <h2>
                    Berita &amp; Blog untuk Setiap Pembaruan Artikel & Tips
                    Terbaru
                  </h2>
                </div>
                <p className="mb-20">
                  Jangan lewatkan highlight bulanan kami! Dapatkan berita dan
                  artikel terbaru mengenai acara-acara spesial, festival budaya,
                  dan aktivitas seru di Desa Wisata Mulyaharja yang akan membuat
                  pengalaman Anda menjadi tak terlupakan
                </p>
                <Link legacyBehavior href="/blog-list">
                  <a className="btn-link">
                    Lihat semua berita <i className="far fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-6">
              {news.data.data && news.data.data.length > 0 ? (
                news.data.data.slice(0, 2).map((data) => (
                  <div
                    className="single-blog-post-two mb-40 wow fadeInUp"
                    key={data.id}
                  >
                    <div className="post-thumbnail">
                      <img src={data.cover} alt="Blog Image" />
                    </div>
                    <div className="entry-content">
                      <div className="post-meta">
                        <span>
                          <i className="far fa-calendar-alt" />
                          <a href="#">{data.date}</a>
                        </span>
                        <h3 className="title">
                          <Link
                            legacyBehavior
                            href={`/blog-details?id=${data.id}`}
                          >
                            <a className="title-span">{data.title}</a>
                          </Link>
                        </h3>
                        <Link
                          legacyBehavior
                          href={`/blog-details?id=${data.id}`}
                        >
                          <a className="main-btn filled-btn">
                            Read More
                            <i className="far fa-paper-plane" />
                          </a>
                        </Link>
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
          </div>

          <Slider
            {...sliderActive4Item}
            className="slider-active-4-item wow fadeInUp"
          >
            {news.data.data && news.data.data.length > 0 ? (
              news.data.data.map((data) => (
                <div className="single-features-item mb-40" key={data.id}>
                  <div className="img-holder">
                    <img
                      height={360}
                      style={{ objectFit: "cover", width: "100%" }}
                      src={data.cover}
                      alt="Features Image"
                    />
                    <div className="content">
                      <div className="text">
                        <h4 className="title title-span">{data.title}</h4>
                        <Link
                          href={`/blog-details?id=${data.id}`}
                          className="icon-btn"
                        >
                          <i className="far fa-arrow-right" />
                        </Link>
                      </div>
                      <p>{data.subtitle}</p>
                      <p className="text-cyan">
                        <i className="far fa-calendar" /> {data.date}
                      </p>
                    </div>
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
      {/*====== End Blog Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <GallerySection />
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default index;
