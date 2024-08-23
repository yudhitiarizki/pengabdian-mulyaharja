import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const Tour = () => {
  return (
    <Layout header={2} extraClass={"pt-160"}>
      <PageBanner pageTitle={"Kegiatan Mulaharja"} />
      {/*====== Start Places Section ======*/}
      <section className="places-section pb-100 pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
              {/*=== Single Place Item ===*/}
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    height={280}
                    style={{ objectFit: "cover", width: "100%" }}
                    src="https://jadesta.kemenparekraf.go.id/imgpost/67341.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
                    <h4 className="title">
                      <Link legacyBehavior href="/kegiatan-detail">
                        <a>Festival layang-layang</a>
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
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
              {/*=== Single Place Item ===*/}
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    height={280}
                    style={{ objectFit: "cover", width: "100%" }}
                    src="https://v-images2.antarafoto.com/panen-raya-padi-qe68jk-hl.jpg "
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
                    <h4 className="title">
                      <Link legacyBehavior href="/kegiatan-detail">
                        <a>Panen raya</a>
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
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
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
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
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
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
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
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
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
                        <a>Trekking ditemani dengan pemandu warga lokal</a>
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
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/*=== Gowilds Pagination ===*/}
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
      {/*====== End Places Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <GallerySection />
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default Tour;
