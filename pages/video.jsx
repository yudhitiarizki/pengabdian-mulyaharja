import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const Video = () => {
  return (
    <Layout header={2} extraClass={"pt-160"}>
      <PageBanner pageTitle={"Video"} />

      {/*====== Start Destination Section ======*/}
      <section className="destination-section pb-100 pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <Link href="video-detail">
                <div className="single-place-item-two mb-30 wow fadeInUp">
                  <div className="place-img">
                    <img
                      src="https://cdn.antaranews.com/cache/1200x800/2019/01/PANEN.jpg"
                      alt="Place Image"
                      style={{ objectFit: "cover", width: "100%" }}
                      height={350}
                    />
                    <span className="tour-count">Tani</span>
                    <div className="place-content">
                      <div className="info text-white">
                        <h3 className="title">Panen Raya</h3>
                        <p className="price">Panen di desa mulaharja</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <Link href="video-detail">
                <div className="single-place-item-two mb-30 wow fadeInUp">
                  <div className="place-img">
                    <img
                      src="https://i.pinimg.com/736x/1a/7c/c9/1a7cc9df25286424770359de5dafeb08.jpg"
                      alt="Place Image"
                      style={{ objectFit: "cover", width: "100%" }}
                      height={350}
                    />
                    <span className="tour-count">Wisata</span>
                    <div className="place-content">
                      <div className="info text-white">
                        <h3 className="title">Bertani</h3>
                        <p className="price">Wisata Mulaharja</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="single-place-item-two mb-30 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="https://i.pinimg.com/564x/a4/8a/de/a48ade9b4ad7f96cafa9c6206044755e.jpg"
                    style={{ objectFit: "cover", width: "100%" }}
                    height={350}
                  />
                  <span className="tour-count">Wisata</span>
                  <div className="place-content">
                    <div className="info text-white">
                      <h3 className="title">Trekking</h3>
                      <p className="price">Wisata Mulaharja</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
              <div className="single-place-item-two mb-30">
                <div className="place-img">
                  <img
                    src="https://disparbud.kotabogor.go.id/asset/images/web/konten/lestarikan-permainan-tradisional,-festival-layangan-hiasi-langit-mulyaharja-kota-bogor.jpeg"
                    style={{ objectFit: "cover", width: "100%" }}
                    height={350}
                  />
                  <span className="tour-count">Wisata</span>
                  <div className="place-content">
                    <div className="info text-white">
                      <h3 className="title">Festival Layang</h3>
                      <p className="price">Wisata Mulaharja</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
              <div className="single-place-item-two mb-30">
                <div className="place-img">
                  <img
                    src="https://asset-2.tstatic.net/banjarmasin/foto/bank/images/prosesi-dari-ritual-kawin-bagunung-perak-dayak-maanyan-warukin_20180728_173211.jpg"
                    style={{ objectFit: "cover", width: "100%" }}
                    height={350}
                  />
                  <span className="tour-count">Wisata</span>
                  <div className="place-content">
                    <div className="info text-white">
                      <h3 className="title">Tarian</h3>
                      <p className="price">Wisata Mulaharja</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
              <div className="single-place-item-two mb-30">
                <div className="place-img">
                  <img
                    src="https://asset.kompas.com/crops/0Pk4mXbmfK87pqjpxU8w_ugNIME=/0x360:1080x1080/750x500/data/photo/2021/02/09/60223b56e7dbb.jpg "
                    style={{ objectFit: "cover", width: "100%" }}
                    height={350}
                  />
                  <span className="tour-count">Wisata</span>
                  <div className="place-content">
                    <div className="info text-white">
                      <h3 className="title">Belajar</h3>
                      <p className="price">Wisata Mulaharja</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
              <div className="single-place-item-two mb-30">
                <div className="place-img">
                  <img
                    src="https://asset.kompas.com/crops/qj6ppahEVO903lvvjnMzOq7B-yM=/97x0:1177x720/750x500/data/photo/2021/02/09/602239889bfbb.jpeg"
                    style={{ objectFit: "cover", width: "100%" }}
                    height={350}
                  />
                  <span className="tour-count">Wisata</span>
                  <div className="place-content">
                    <div className="info text-white">
                      <h3 className="title">Pemandangan</h3>
                      <p className="price">Wisata Mulaharja</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="single-place-item-two mb-30 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="https://bogordaily.net/wp-content/uploads/2022/07/IMG-20220711-WA0014.jpg"
                    style={{ objectFit: "cover", width: "100%" }}
                    height={350}
                  />
                  <span className="tour-count">Wisata</span>
                  <div className="place-content">
                    <div className="info text-white">
                      <h3 className="title">Cafe tengah sawah</h3>
                      <p className="price">Wisata Mulaharja</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single-place-item-two mb-30 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="https://i.pinimg.com/564x/55/6b/75/556b755a7baed18abbf4c03374074f24.jpg"
                    style={{ objectFit: "cover", width: "100%" }}
                    height={350}
                  />
                  <span className="tour-count">Wisata</span>
                  <div className="place-content">
                    <div className="info text-white">
                      <h3 className="title">Homestay</h3>
                      <p className="price">Wisata Mulaharja</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single-place-item-two mb-30 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="https://i.pinimg.com/564x/c8/18/98/c818980efcb42f99106fb458c173450d.jpg"
                    style={{ objectFit: "cover", width: "100%" }}
                    height={350}
                  />
                  <span className="tour-count">Wisata</span>
                  <div className="place-content">
                    <div className="info text-white">
                      <h3 className="title">Perkebunan</h3>
                      <p className="price">Wisata Mulaharja</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="gowilds-pagination wow fadeInUp text-center mt-30">
                <li className="me-2">
                  <a href="#">
                    <i className="far fa-arrow-left" />
                  </a>
                </li>
                <li className="me-2">
                  <a href="#" className="active">
                    01
                  </a>
                </li>
                <li className="me-2">
                  <a href="#">02</a>
                </li>
                <li className="me-2">
                  <a href="#">03</a>
                </li>
                <li className="me-2">
                  <a href="#">04</a>
                </li>
                <li className="me-2">
                  <a href="#">
                    <i className="far fa-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Destination Section ======*/}
    </Layout>
  );
};
export default Video;
