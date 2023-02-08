import "../App.css";
import Landing from "./landing/Landing";
import Dashboard from "./dashboard/Dashboard";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const Component = () => {
  const [login, setLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState("landing");
  const [currentPageDetail, setCurrentPageDetail] = useState();
  const [currentPageDetailTraining, setCurrentPageDetailTraining] = useState(false)
  const [navOption, setNavOption] = useState();
  const [searchNow, setSearchNow] = useState(false);

  const handleRoute = (data) => {
    setCurrentPage(data);
  };

  const handleRouteDetail = (data) => {
    setCurrentPageDetail(data);
  };

  return (
    <div className="component">
      <div className="navigation-bar">
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
          <div className="container-lg">
            <a
              className="navbar-brand pe-4"
              href="#"
              onClick={() => {
                setCurrentPage("landing");
                setCurrentPageDetail(null);
                window.scrollTo(0, 0);
              }}
            >
              <img src={require("../assets/logo.png")} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-lg-0 gap-3">
                <li className="nav-item dropdown dropdown-parent">
                  <a
                    className="nav-link active dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Kategori
                  </a>
                  <ul className="dropdown-menu dropdown-menu-parent">
                    <li className="btn-group dropend dropdown-child d-flex">
                      <button
                        type="button"
                        className="btn dropdown-toggle text-start"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Pelatihan-Ujian SIMAK dan KPO
                      </button>
                      <ul className="dropdown-menu dropdown-menu-child">
                        <div className="custom-dropdown">
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={() => {
                                setCurrentPageDetail("allTraining");
                                setCurrentPageDetailTraining(currentPageDetailTraining == false ? true : false)
                                setNavOption("op1");
                                login == true
                                  ? setCurrentPage("dashboard")
                                  : setCurrentPage("landing");
                                window.scrollTo(0, 0);
                              }}
                              data-bs-toggle={login == false ? "modal" : ""}
                              data-bs-target={
                                login == false ? "#loginModal" : ""
                              }
                            >
                              Pelatihan-Uji Online SIMAK dan KPO 2022
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Trainer Instructor Development Program (TIDP)
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Fatigue Management
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Pelatihan Emergency Response
                            </a>
                          </li>
                        </div>
                      </ul>
                    </li>
                    {/*<li className="btn-group dropend dropdown-child d-flex">
                      <button
                        type="button"
                        className="btn dropdown-toggle text-start"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Sosialisasi Prosedur Pengawasan
                      </button>
                      <ul className="dropdown-menu dropdown-menu-child">
                        <div className="custom-dropdown">
                          <li>
                            <a className="dropdown-item" href="#">
                              P-SFO-01 Prosedur Pengoperasian Ken...
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              P-MNO-10 Prosedur Penimbunan di Ar...
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              P-ENV-02 Prosedur Pengelolaan B3 da...
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              P-SFO-02 Prosedur Komunikasi Radio
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              P-DCR-02 Prosedur Pengelolaan Fatigu...
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              P-CMP-10 Prosedur Manajemen Peran...
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              P-SFO-04 Prosedur Pengawasan Lang...
                            </a>
                          </li>
                        </div>
                      </ul>
                    </li>*/}
                    <li className="btn-group dropend dropdown-child d-flex">
                      <button
                        type="button"
                        className="btn dropdown-toggle text-start"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Advance Training
                      </button>
                      <ul className="dropdown-menu dropdown-menu-child">
                        <div className="custom-dropdown">
                          <li>
                            <a className="dropdown-item" href="#">
                              Surat Penunjukan Tenaga Teknis
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Surat Penunjukan Pengawas Teknis
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Surat Penunjukan Pengawas Operasional
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              E-Induksi BUMA
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Pendidikan dan Pelatihan Pengelola Peledakan (KPP
                              Pertama)
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Frontline Behavior Based Safety
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              SINTESIS+
                            </a>
                          </li>
                        </div>
                      </ul>
                    </li>
                    <li className="btn-group dropend dropdown-child d-flex">
                      <button
                        type="button"
                        className="btn dropdown-toggle text-start"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Program Sintesis
                      </button>
                      <ul className="dropdown-menu dropdown-menu-child">
                        <div className="custom-dropdown">
                          <li>
                            <a className="dropdown-item" href="#">
                              K3L Audit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              SOP REFRESHMENT
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Radio Digital
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Kartu Pengawas Coal Getting BMO2
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              SINTESIS+ Webinar
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              HSE Committee Meeting Tingkat 1
                            </a>
                          </li>
                        </div>
                      </ul>
                    </li>
                    <li className="btn-group dropend dropdown-child d-flex">
                      <button
                        type="button"
                        className="btn dropdown-toggle text-start"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Weekly Refresh Competency
                      </button>
                      <ul className="dropdown-menu dropdown-menu-child">
                        <div className="custom-dropdown">
                          <li>
                            <a className="dropdown-item" href="#">
                              Weekly Refresh Competency
                            </a>
                          </li>
                        </div>
                      </ul>
                    </li>
                    {/*<li className="btn-group dropend dropdown-child d-flex">
                      <button
                        type="button"
                        className="btn dropdown-toggle text-start"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dokumen
                      </button>
                      <ul className="dropdown-menu dropdown-menu-child">
                        <div className="custom-dropdown">
                          <li>
                            <a className="dropdown-item" href="#">
                              HIRA Internal
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Dokumen BeGeMS Internal
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              HIRA Mitra Kerja
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Dokumen BeGeMS Mitra Kerja
                            </a>
                          </li>
                        </div>
                      </ul>
                    </li>*/}
                    <li className="btn-group dropdown-child d-flex">
                      <button type="button" className="btn text-start">
                        SOP
                      </button>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Pendaftaran Training
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    onClick={() => {
                      setCurrentPageDetail("myCertificate");
                      login == true
                        ? setCurrentPage("dashboard")
                        : setCurrentPage("landing");
                    }}
                    data-bs-toggle={login == false ? "modal" : ""}
                    data-bs-target={login == false ? "#loginModal" : ""}
                  >
                    Cek Sertifikat
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Berita
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Panduan
                  </a>
                  {currentPageDetailTraining}
                </li>
              </ul>
              <div className="d-flex justify-content-end align-items-center gap-2">
                <div className="d-flex">
                  <form role="search">
                    {searchNow == true ? (
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    ) : (
                      ""
                    )}
                  </form>
                  {searchNow == false ? (
                    <button
                      className="search-nav-button"
                      onClick={() => {
                        setSearchNow(true);
                      }}
                    >
                      <Icon icon="uil:search" />
                    </button>
                  ) : (
                    <button
                      className="search-nav-button"
                      onClick={() => {
                        setSearchNow(false);
                      }}
                    >
                      <Icon icon="ph:x-bold" />
                    </button>
                  )}
                </div>
                <ul className="navbar-nav me-auto mb-lg">
                  <li className="nav-item dropdown dropdown-parent">
                    <a
                      className="language-button nav-link active dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <Icon className="icon" icon="ph:globe" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-parent">
                      <li>
                        <a className="dropdown-item" href="#">
                          English
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Bahasa Indonesia
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                {login == false ? (
                  <ul className="navbar-nav me-auto mb-lg">
                    <li className="nav-item">
                      <button
                        className="login-button d-flex align-items-center py-2 px-3"
                        data-bs-toggle="modal"
                        data-bs-target="#loginModal"
                        onClick={() => {
                          setNavOption();
                        }}
                      >
                        <Icon className="icon me-1" icon="radix-icons:person" />
                        <div>Masuk</div>
                      </button>
                    </li>
                  </ul>
                ) : (
                  <ul className="navbar-nav me-auto mb-lg account-dropdown">
                    <li className="nav-item dropdown">
                      <a
                        className="account-button nav-link active"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={require("../assets/user.png")} alt="" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit Profile
                          </a>
                        </li>
                        <li>
                          <a
                            className="logout dropdown-item"
                            href="#"
                            onClick={() => {
                              setLogin(false);
                              setCurrentPage("landing");
                              setNavOption(null);
                              setCurrentPageDetail(null);
                            }}
                          >
                            Logout
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </nav>
        <div
          className="modal fade modal-lg"
          id="loginModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row">
                  <div className="col-6">
                    <img
                      className="w-100"
                      src={require("../assets/loginimg.png")}
                      alt=""
                    />
                  </div>
                  <div className="col-6 d-flex justify-content-center align-items-center">
                    <div>
                      <label>Selamat datang</label>
                      <h4 className="mb-4">Masuk ke akun Anda</h4>
                      <form>
                        <div className="mb-3">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Username
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Nomor SID/KTP"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            for="exampleInputPassword1"
                            className="form-label"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                          />
                        </div>
                      </form>
                      <div className="d-flex justify-content-end mb-4">
                        <a href="">Forget password?</a>
                      </div>
                      <br />
                      <button
                        className="w-100 py-2"
                        type="submit"
                        data-bs-dismiss="modal"
                        onClick={() => {
                          setLogin(true);
                          navOption == "op1" || currentPageDetail != null
                            ? setCurrentPage("dashboard")
                            : setCurrentPage("landing");
                        }}
                      >
                        Masuk
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-2">
        <div>
          {currentPage == "landing" ? (
            <Landing handleRoute={handleRoute} />
          ) : currentPage == "dashboard" && navOption == "op1" ? (
            <Dashboard
              handleRoute={handleRoute}
              handleRouteDetail={handleRouteDetail}
              currentPageDetail={currentPageDetail}
              currentPageDetailTraining={currentPageDetailTraining}
            />
          ) : currentPage == "dashboard" &&
            currentPageDetail == "myCertificate" ? (
            <Dashboard
              handleRoute={handleRoute}
              handleRouteDetail={handleRouteDetail}
              currentPageDetail={currentPageDetail}
              currentPageDetailTraining={currentPageDetailTraining}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        className={
          "footer px-5 py-5" + (currentPage != "landing" ? " mt-4" : "")
        }
      >
        <div className="container-lg px-5">
          <div className="footer-logo row mb-3">
            <div className="col-8 d-flex align-items-center">
              <img
                className="sintesis-text w-10"
                src={require("../assets/sintesisfooterlogo1.png")}
                alt=""
              />
            </div>
            <div className="col-4 d-flex align-items-center">
              <img
                className="sintesis-img-text"
                src={require("../assets/sintesisfooterlogo2.png")}
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="row">
                <div className="footer-about col">
                  <label className="mb-3">Sintesis+</label>
                  <br />
                  <a href="#">Tentang Kami</a>
                  <br />
                  <a href="#">Profile Trainer</a>
                  <br />
                  <a href="#">Mulai Pelatihan</a>
                  <br />
                  <a href="#">Jadwal dan Agenda</a>
                  <br />
                  <a href="#">Kabar Terbaru</a>
                  <br />
                  <a href="#">Kontak</a>
                </div>
                <div className="footer-help col">
                  <label className="mb-3">Bantuan</label>
                  <br />
                  <a href="#">Kirim Email</a>
                  <br />
                  <a href="#">Kirim Whatsapp</a>
                </div>
                <div className="footer-account col">
                  <div>
                    <label className="mb-3">Ikuti Kami</label>
                    <br />
                    <a className="d-flex" href="#">
                      <Icon className="icon me-1" icon="uil:facebook-f" />
                      <div className="d-flex align-items-center">
                        <div>Kawan.K3l</div>
                      </div>
                    </a>
                    <br />
                    <a className="d-flex" href="#">
                      <Icon className="icon me-1" icon="mdi:instagram" />
                      <div className="d-flex align-items-center">
                        <div>@kawan.k3l</div>
                      </div>
                    </a>
                    <br />
                    <a className="d-flex" href="#">
                      <Icon className="icon me-1" icon="ic:baseline-tiktok" />
                      <div className="d-flex align-items-center">
                        <div>kawan.k3l</div>
                      </div>
                    </a>
                    <br />
                    <a className="d-flex" href="#">
                      <Icon className="icon me-1" icon="vaadin:youtube" />
                      <div className="d-flex align-items-center">
                        <div>Sintesis</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <label className="footer-department mb-3">
                HSE Certification & Training Department PT Berau Coal
              </label>
              <div className="row">
                <div className="footer-training-office col-6">
                  <div className="mb-3">
                    <label>Training Office</label>
                  </div>
                  <label>Berau Training Centre</label>
                  <br />
                  <label>Samburakat, Berau,</label>
                  <br />
                  <label>Kaltim</label>
                  <br />
                  <label>Ext. 5719</label>
                  <br />
                  <label>Email:</label>
                  <br />
                  <a
                    className="footer-email"
                    href="mailto:adm.hset@beraucoal.co.id"
                    target="_blank"
                    rel="noreferrer"
                  >
                    adm.hset@beraucoal.co.id
                  </a>
                </div>
                <div className="footer-head-office col-6">
                  <div className="mb-3">
                    <label>Head Office</label>
                  </div>
                  <label>Jl. Pemuda No. 40</label>
                  <br />
                  <label>Tanjung Redep, Berau,</label>
                  <br />
                  <label>Kaltim</label>
                  <br />
                  <label>Ext. 5375</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="helpdesk-button fixed-bottom d-flex justify-content-end mb-4 me-4">
          <button className="px-3 py-2">
            <div className="d-flex py-1">
              <Icon className="icon me-2" icon="ic:baseline-whatsapp" />
              <div className="d-flex align-items-center">
                <div>Bantuan</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Component;
