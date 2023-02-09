import "../App.css";
import Landing from "./landing/Landing";
import Dashboard from "./dashboard/Dashboard";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const Component = () => {
  const [login, setLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState("landing");
  const [currentPageDetail, setCurrentPageDetail] = useState();
  const [currentTrainingTitle, setCurrentTrainingTitle] = useState();
  const [currentCourseId, setCurrentCourseId] = useState();
  const [currentCourseTitle, setCurrentCourseTitle] = useState();
  const [navOption, setNavOption] = useState();
  const [searchNow, setSearchNow] = useState(false);

  const handleRoute = (data) => {
    setCurrentPage(data);
  };

  const handleRouteDetail = (data) => {
    setCurrentPageDetail(data);
  };

  const courseData1 = [
    { id: 1, title: "Pelatihan-Uji Online SIMAK dan KPO 2022" },
    { id: 2, title: "Trainer Instructor Development Program (TIDP)" },
    { id: 3, title: "Fatigue Management" },
    { id: 4, title: "Pelatihan Emergency Response" },
  ];

  const courseData2 = [
    {
      id: 44,
      title: "Surat Penunjukan Tenaga Teknis",
      training: "Advance Training",
    },
    {
      id: 45,
      title: "Surat Penunjukan Pengawas Teknis",
      training: "Advance Training",
    },
    {
      id: 46,
      title: "Surat Penunjukan Pengawas Operasional",
      training: "Advance Training",
    },
    { id: 47, title: "E-Induksi BUMA", training: "Advance Training" },
    {
      id: 48,
      title: "Pendidikan dan Pelatihan Pengelola Peledakan (KPP Pertama)",
      training: "Advance Training",
    },
    {
      id: 49,
      title: "Frontline Behavior Based Safety",
      training: "Advance Training",
    },
    {
      id: 50,
      title: "SINTESIS+",
      training: "Advance Training",
      training: "Advance Training",
    },
  ];

  const courseData3 = [
    {
      id: 51,
      title: "KELOMPOK MATERI PELATIHAN DASAR (KMPD) 2022",
      training: "Program Sintesis",
    },
    {
      id: 52,
      title:
        "Pencegahan Kecelakaan Akibat  Fatigue dengan Konsep SBS (Sistem Bekerja Selamat)",
      training: "Program Sintesis",
    },
    {
      id: 53,
      title:
        "Pengawasan Langsung Berjarak: Dalam Meningkatkan Keselamatan Kerja & Produktivitas Tambang",
      training: "Program Sintesis",
    },
  ];

  const courseData4 = [
    {
      id: 54,
      title: "PIT SERVICE - WEEKLY REFRESH COMPETENCY",
      training: "Weekly Refresh Competency",
    },
    {
      id: 55,
      title: "PLANT - WEEKLY REFRESH COMPETENCY",
      training: "Weekly Refresh Competency",
    },
    {
      id: 56,
      title: "DO & DON'T EKSPLORASI",
      training: "Weekly Refresh Competency",
    },
    {
      id: 57,
      title: "Drill & Blast - WEEKLY REFRESH COMPETENCY",
      training: "Weekly Refresh Competency",
    },
    {
      id: 58,
      title: "MINING & HAULING OPERATION - WEEKLY REFRESH COMPETENCY",
      training: "Weekly Refresh Competency",
    },
    {
      id: 59,
      title: "DO AND DON'T MARINE - WEEKLY REFRESH COMPETENCY",
      training: "Weekly Refresh Competency",
    },
  ];

  const courseData5 = [
    { id: 60, title: "Surat Penunjukan Tenaga Teknis", training: "SOP" },
  ];

  const courseArr1 = courseData1.map((data) => {
    return (
      <li>
        <a
          className="dropdown-item"
          href="#"
          onClick={() => {
            setCurrentPageDetail("allTraining");
            setCurrentCourseTitle(null);
            setNavOption("op1");
            login == true
              ? setCurrentPage("dashboard")
              : setCurrentPage("landing");
            window.scrollTo(0, 0);
          }}
          data-bs-toggle={login == false ? "modal" : ""}
          data-bs-target={login == false ? "#loginModal" : ""}
        >
          {data.title}
        </a>
      </li>
    );
  });

  const courseArr2 = courseData2.map((data) => {
    return (
      <li>
        <a
          className="dropdown-item"
          href="#"
          onClick={() => {
            setCurrentPageDetail("allTraining");
            setCurrentTrainingTitle(data.training);
            setCurrentCourseTitle(data.title);
            setCurrentCourseId(data.id);
            setNavOption("op1");
            login == true
              ? setCurrentPage("dashboard")
              : setCurrentPage("landing");
            window.scrollTo(0, 0);
          }}
          data-bs-toggle={login == false ? "modal" : ""}
          data-bs-target={login == false ? "#loginModal" : ""}
        >
          {data.title}
        </a>
      </li>
    );
  });

  const courseArr3 = courseData3.map((data) => {
    return (
      <li>
        <a
          className="dropdown-item"
          href="#"
          onClick={() => {
            setCurrentPageDetail("allTraining");
            setCurrentTrainingTitle(data.training);
            setCurrentCourseTitle(data.title);
            setCurrentCourseId(data.id);
            setNavOption("op1");
            login == true
              ? setCurrentPage("dashboard")
              : setCurrentPage("landing");
            window.scrollTo(0, 0);
          }}
          data-bs-toggle={login == false ? "modal" : ""}
          data-bs-target={login == false ? "#loginModal" : ""}
        >
          {data.title}
        </a>
      </li>
    );
  });

  const courseArr4 = courseData4.map((data) => {
    return (
      <li>
        <a
          className="dropdown-item"
          href="#"
          onClick={() => {
            setCurrentPageDetail("allTraining");
            setCurrentTrainingTitle(data.training);
            setCurrentCourseTitle(data.title);
            setCurrentCourseId(data.id);
            setNavOption("op1");
            login == true
              ? setCurrentPage("dashboard")
              : setCurrentPage("landing");
            window.scrollTo(0, 0);
          }}
          data-bs-toggle={login == false ? "modal" : ""}
          data-bs-target={login == false ? "#loginModal" : ""}
        >
          {data.title}
        </a>
      </li>
    );
  });

  const courseArr5 = courseData5.map((data) => {
    return (
      <li>
        <a
          className="dropdown-item"
          href="#"
          onClick={() => {
            setCurrentPageDetail("allTraining");
            setCurrentTrainingTitle(data.training);
            setCurrentCourseTitle(data.title);
            setCurrentCourseId(data.id);
            setNavOption("op1");
            login == true
              ? setCurrentPage("dashboard")
              : setCurrentPage("landing");
            window.scrollTo(0, 0);
          }}
          data-bs-toggle={login == false ? "modal" : ""}
          data-bs-target={login == false ? "#loginModal" : ""}
        >
          {data.title}
        </a>
      </li>
    );
  });

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
                        <div className="custom-dropdown">{courseArr1}</div>
                      </ul>
                    </li>
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
                        <div className="custom-dropdown">{courseArr2}</div>
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
                        <div className="custom-dropdown">{courseArr3}</div>
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
                        <div className="custom-dropdown">{courseArr4}</div>
                      </ul>
                    </li>
                    <li className="btn-group dropdown-child d-flex">
                      <button
                        type="button"
                        className="btn dropdown-toggle text-start"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        SOP
                      </button>
                      <ul className="dropdown-menu dropdown-menu-child">
                        <div className="custom-dropdown">{courseArr5}</div>
                      </ul>
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
                          setCurrentPage("landing");
                          setCurrentPageDetail();
                          setNavOption();
                          setCurrentTrainingTitle();
                          setCurrentCourseId();
                          setCurrentCourseTitle();
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
              currentTrainingTitle={currentTrainingTitle}
              currentCourseId={currentCourseId}
              currentCourseTitle={currentCourseTitle}
            />
          ) : currentPage == "dashboard" &&
            currentPageDetail == "myCertificate" ? (
            <Dashboard
              handleRoute={handleRoute}
              handleRouteDetail={handleRouteDetail}
              currentPageDetail={currentPageDetail}
              currentTrainingTitle={currentTrainingTitle}
              currentCourseId={currentCourseId}
              currentCourseTitle={currentCourseTitle}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="footer px-5 py-5">
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
