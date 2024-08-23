import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { sliderActive3Item, sliderActive3ItemDot } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const KegiatanDetail = () => {
  return (
    <Layout header={2} extraClass={"pt-160"}>
      <PageBanner pageTitle={"Detail Kegiatan"} />
      {/*====== Start Destination Details Section ======*/}
      <section className="destination-details-section pt-100 pb-70">
        <div className="container">
          <div className="destination-details-wrapper">
            <div className="destination-info wow fadeInUp">
              <h3 className="title">
                Festival Layang-Layang: Atraksi Wisata Tahunan di Desa
                Mulyaharja
              </h3>
              <div className="meta">
                <span className="location">
                  <i className="fas fa-map-marker-alt" />
                  Kampung Mulaharja
                </span>
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
              <p>
                Setiap tahunnya, Desa Wisata Mulyaharja di Bogor menggelar acara
                yang sangat dinantikan oleh warga lokal dan wisatawan: Festival
                Layang-Layang. Festival ini diadakan dua kali setahun, pada
                musim kemarau dan menjelang akhir tahun, saat angin kencang
                mengalir lembut di atas persawahan dan perkebunan desa. Festival
                layang-layang Mulyaharja menampilkan berbagai jenis
                layang-layang unik, mulai dari layang-layang naga, layang-layang
                hias, layang-layang aduan, dan layang-layang purba. Festival
                Layang-Layang ini tidak hanya menjadi ajang kompetisi, tetapi
                juga sebagai sarana untuk mempererat tali silaturahmi antarwarga
                dan pengunjung. Setiap festival diakhiri dengan acara penyerahan
                hadiah untuk layang-layang terbaik, disertai dengan hiburan
                musik tradisional dan bazar kuliner lokal yang meriah. Datanglah
                dan nikmati keindahan langit Desa Mulyaharja yang penuh warna
                dalam Festival Layang-Layang, sebuah pengalaman yang tidak akan
                Anda lupakan!
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <img
                    src="https://jadesta.kemenparekraf.go.id/imgpost/67341.jpg"
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
                <div className="col-lg-6">
                  <img
                    src="https://pict.sindonews.net/size/1280/salsabila/photo/2022/02/20/1/25495/G-festival-layangan-di-bogor-ong.jpg"
                    className="rounded mb-40"
                    alt="Features Image"
                  />
                </div>
              </div>
              <h3>Festival Layang</h3>
              <p>
                Festival Layang-Layang ini tidak hanya menjadi ajang kompetisi,
                tetapi juga sebagai sarana untuk mempererat tali silaturahmi
                antarwarga dan pengunjung. Setiap festival diakhiri dengan acara
                penyerahan hadiah untuk layang-layang terbaik, disertai dengan
                hiburan musik tradisional dan bazar kuliner lokal yang meriah.
                Datanglah dan nikmati keindahan langit Desa Mulyaharja yang
                penuh warna dalam Festival Layang-Layang, sebuah pengalaman yang
                tidak akan Anda lupakan!
              </p>
              {/* <ul className="features-list mb-40">
                <li>
                  <span>
                    <i className="fas fa-badge-check" />
                    Family Camping
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fas fa-badge-check" />
                    Wild Camping
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fas fa-badge-check" />
                    Fishing
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fas fa-badge-check" />
                    Mountain Biking
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fas fa-badge-check" />
                    Free Wi-fi Internet
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fas fa-badge-check" />
                    Transportation
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fas fa-badge-check" />
                    Spa &amp; GYM
                  </span>
                </li>
              </ul> */}
            </div>
            <div className="gallery-area wow fadeInUp">
              <Slider {...sliderActive3Item} className="slider-active-3-item">
                {/*=== Single Gallery Item ===*/}
                <div className="single-gallery-item mb-30">
                  <div className="gallery-img">
                    <img
                      src="assets/images/gallery/gallery-1.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="assets/images/gallery/gallery-1.jpg"
                        className="icon-btn img-popup"
                      >
                        <i className="far fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
                {/*=== Single Gallery Item ===*/}
                <div className="single-gallery-item mb-30">
                  <div className="gallery-img">
                    <img
                      src="assets/images/gallery/gallery-2.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="assets/images/gallery/gallery-2.jpg"
                        className="icon-btn img-popup"
                      >
                        <i className="far fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
                {/*=== Single Gallery Item ===*/}
                <div className="single-gallery-item mb-30">
                  <div className="gallery-img">
                    <img
                      src="assets/images/gallery/gallery-3.jpg"
                      alt="Gallery Image"
                    />
                    <div className="hover-overlay">
                      <a
                        href="assets/images/gallery/gallery-3.jpg"
                        className="icon-btn img-popup"
                      >
                        <i className="far fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Destination Details Section ======*/}

      {/*====== Start Places Section ======*/}
      <section className="places-seciton pt-95 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*====== Section Title ======*/}
              <div className="section-title text-center mb-45 wow fadeInDown">
                <h2>Kegiatan Lainnya</h2>
              </div>
            </div>
          </div>
          <Slider
            {...sliderActive3ItemDot}
            className="slider-active-3-item-dot wow fadeInUp"
          >
            {/*=== Single Place Item ===*/}
            <div className="single-place-item mb-60 wow fadeInUp">
              <div className="place-img">
                <img
                  height={280}
                  style={{ objectFit: "cover", width: "100%" }}
                  src="https://asset.kompas.com/crops/CIYiYoD4AR3yh39YDsSg7hElgjQ=/0x119:585x509/750x500/data/photo/2021/02/09/60223b6377948.jpg"
                  alt="Place Image"
                />
              </div>
              <div className="place-content">
                <div className="info">
                  <h4 className="title">
                    <Link legacyBehavior href="/kegiatan-detail">
                      <a className="title-span">
                        Trekking ditemani dengan pemandu warga lokal
                      </a>
                    </Link>
                  </h4>
                  <p className="location">
                    <i className="far fa-map-marker-alt" />
                    Desa Mulaharja
                  </p>
                  <p className="price">
                    <i className="fas fa-calendar-alt" />
                    20 November 2024
                  </p>
                  <div className="meta">
                    <span>
                      <Link legacyBehavior href="/kegiatan-detail">
                        <a>
                          Details
                          <i className="far fa-long-arrow-right" />
                        </a>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Place Item ===*/}
            <div className="single-place-item mb-60 wow fadeInUp">
              <div className="place-img">
                <img
                  height={280}
                  style={{ objectFit: "cover", width: "100%" }}
                  src="https://asset.kompas.com/crops/ARg5zRRUJaVgrrFK27ZL2JoTdhk=/0x0:1080x720/750x500/data/photo/2021/02/09/60223b69c168f.jpg"
                  alt="Place Image"
                />
              </div>
              <div className="place-content">
                <div className="info">
                  <h4 className="title">
                    <Link legacyBehavior href="/kegiatan-detail">
                      <a>Edukasi Pertanian</a>
                    </Link>
                  </h4>
                  <p className="location">
                    <i className="far fa-map-marker-alt" />
                    Desa Mulaharja
                  </p>
                  <p className="price">
                    <i className="fas fa-calendar-alt" />
                    20 November 2024
                  </p>
                  <div className="meta">
                    <span>
                      <Link legacyBehavior href="/kegiatan-detail">
                        <a>
                          Details
                          <i className="far fa-long-arrow-right" />
                        </a>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Place Item ===*/}
            <div className="single-place-item mb-60 wow fadeInUp">
              <div className="place-img">
                <img
                  height={280}
                  style={{ objectFit: "cover", width: "100%" }}
                  src="https://bogoraya.co/wp-content/uploads/2021/09/18-B1-Kampung-Tematik-Ngariung-ditengah-sawah-Salah-satu-spot-foto-Kartika-Indah-scaled.jpg"
                  alt="Place Image"
                />
              </div>
              <div className="place-content">
                <div className="info">
                  <h4 className="title">
                    <Link legacyBehavior href="/kegiatan-detail">
                      <a>Bike Shelter Point </a>
                    </Link>
                  </h4>
                  <p className="location">
                    <i className="far fa-map-marker-alt" />
                    Desa Mulaharja
                  </p>
                  <p className="price">
                    <i className="fas fa-calendar-alt" />
                    20 November 2024
                  </p>
                  <div className="meta">
                    <span>
                      <Link legacyBehavior href="/kegiatan-detail">
                        <a>
                          Details
                          <i className="far fa-long-arrow-right" />
                        </a>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Place Item ===*/}
            <div className="single-place-item mb-60 wow fadeInUp">
              <div className="place-img">
                <img
                  height={280}
                  style={{ objectFit: "cover", width: "100%" }}
                  src="https://jadesta.kemenparekraf.go.id/imgpost/73442.jpg"
                  alt="Place Image"
                />
              </div>
              <div className="place-content">
                <div className="info">
                  <h4 className="title">
                    <Link legacyBehavior href="/kegiatan-detail">
                      <a>Tarian selamat datang</a>
                    </Link>
                  </h4>
                  <p className="location">
                    <i className="far fa-map-marker-alt" />
                    Desa Mulaharja
                  </p>
                  <p className="price">
                    <i className="fas fa-calendar-alt" />
                    20 November 2024
                  </p>
                  <div className="meta">
                    <span>
                      <Link legacyBehavior href="/kegiatan-detail">
                        <a>
                          Details
                          <i className="far fa-long-arrow-right" />
                        </a>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Places Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <GallerySection />
    </Layout>
  );
};
export default KegiatanDetail;
