import "../App.css";
import Landing from "./Landing";
import Dashboard from "./dashboard/Dashboard";
import { trainingData } from "./Data";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const Component = () => {
  const [login, setLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState("landing");
  const [currentPageDetail, setCurrentPageDetail] = useState();
  const [currentCourseId, setCurrentCourseId] = useState();
  const [currentCourseTitle, setCurrentCourseTitle] = useState();
  const [progress, setProgress] = useState(35);
  const [navOption, setNavOption] = useState();
  const [searchNow, setSearchNow] = useState(false);
  const [highestMarkPostTest, setHighestMarkPostTest] = useState();
  const [highestScorePreTest, setHighestScorePreTest] = useState();
  const [highestScorePostTest, setHighestScorePostTest] = useState();

  const [currentTrainingTitle, setCurrentTrainingTitle] = useState(
    trainingData[0].title
  );
  const [currentSubTrainingTitle, setCurrentSubTrainingTitle] = useState(
    trainingData[0].category[0].title
  );

  const courseArr1 = trainingData[0].category.map((data) => {
    return (
      <li>
        <a
          className="dropdown-item"
          href="#"
          onClick={() => {
            setCurrentPageDetail("allTraining");
            setCurrentTrainingTitle(trainingData[0].title);
            setCurrentSubTrainingTitle(data.title);
            setCurrentCourseId();
            setCurrentCourseTitle();
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

  const courseArr2 = trainingData[1].course.map((data) => {
    return (
      <li>
        <a
          className="dropdown-item"
          href="#"
          onClick={() => {
            setCurrentPageDetail("allTraining");
            setCurrentTrainingTitle(trainingData[1].title);
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

  const courseArr3 = trainingData[2].course.map((data) => {
    return (
      <li>
        <a
          className="dropdown-item"
          href="#"
          onClick={() => {
            setCurrentPageDetail("allTraining");
            setCurrentTrainingTitle(trainingData[2].title);
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

  const courseArr4 = trainingData[3].course.map((data) => {
    return (
      <li>
        <a
          className="dropdown-item"
          href="#"
          onClick={() => {
            setCurrentPageDetail("allTraining");
            setCurrentTrainingTitle(trainingData[3].title);
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

  const courseArr5 = trainingData[4].course.map((data) => {
    return (
      <li>
        <a
          className="dropdown-item"
          href="#"
          onClick={() => {
            setCurrentPageDetail("allTraining");
            setCurrentTrainingTitle(trainingData[4].title);
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

  const [sectionData, setSectionData] = useState([
    {
      id: 1,
      section: "Pre-Test",
      status: "done",
    },
    {
      id: 2,
      section: "Video H5P",
      status: "done",
    },
    {
      id: 3,
      section: "Video Golden Rules",
      status: "not yet",
    },
    {
      id: 4,
      section: "KMPD Berbasis Perilaku dan Golden Rules",
      status: "not yet",
    },
    {
      id: 5,
      section: "Post-Test",
      status: "not yet",
    },
    {
      id: 6,
      section: "Sertifikat Kelompok Materi Pelatihan Dasar (KMPD)",
      status: "not yet",
    },
  ]);

  const questionData = [
    {
      id: "1",
      question:
        "Sebagai seorang pekerja yang mengalami kurang waktu tidurnya, apa yang semestinya anda lakukan",
      subquestion: "Pilih salah satu:",
      answeroption: [
        "Langsung istirahat",
        "Diam saja dan tetap bekerja",
        "Langsung pulang",
        "Melapor kepada atasannya",
      ],
      trueanswer: "Melapor kepada atasannya",
    },
    {
      id: "2",
      question: "APD apa yang harus dipakai saat anda terpapar kebisingan",
      subquestion: "Pilih salah satu:",
      answeroption: [
        "Safety full body harness",
        "Sepatu safety",
        "Ear plug",
        "Pelampung",
      ],
      trueanswer: "Ear plug",
    },
    {
      id: "3",
      question:
        "Bagaimana sikap anda terhadap teman sekerja yang pernah mengalami kecelakaan kerja",
      subquestion: "Pilih salah satu:",
      answeroption: [
        "Menjauhi teman tersebut dan tidak ingin bekerja sama dengannya",
        "Tidak ingin bekerja satu shift dengannya",
        "Membimbingnya dan saling bekerja sama",
        "a dan b benar",
      ],
      trueanswer: "Membimbingnya dan saling bekerja sama",
    },
  ];

  const [recordPreTest, setRecordPreTest] = useState([
    {
      id: 1,
      state: "Selesai",
      time: "Terkumpul Monday, 22 August 2022, 17.37",
      mark: "20,00",
      score: "66,00",
      review: "Tidak diizinkan",
    },
    {
      id: 2,
      state: "Selesai",
      time: "Terkumpul Wednesday, 24 August 2022, 13:49",
      mark: "10,00",
      score: "33,00",
      review: "Tidak diizinkan",
    },
    {
      id: 3,
      state: "Selesai",
      time: "Terkumpul Thursday, 20 October 2022, 03:00",
      mark: "20,00",
      score: "66,00",
      review: "Tidak diizinkan",
    },
    {
      id: 4,
      state: "Selesai",
      time: "Terkumpul Thursday, 27 October 2022, 16:57",
      mark: "20,00",
      score: "66,00",
      review: "Tidak diizinkan",
    },
  ]);

  const [recordPostTest, setRecordPostTest] = useState([]);

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
                setCurrentPageDetail();
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
                        className="btn dropdown-toggler text-start"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="row p-0">
                          <div className="col-8">
                            Pelatihan-Ujian SIMAK dan KPO
                          </div>
                          <div className="col-4 d-flex justify-content-end align-items-center">
                            <Icon
                              className="icon"
                              icon="material-symbols:chevron-right-rounded"
                            />
                          </div>
                        </div>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-child">
                        <div className="custom-dropdown">{courseArr1}</div>
                      </ul>
                    </li>
                    <li className="btn-group dropend dropdown-child d-flex">
                      <button
                        type="button"
                        className="btn dropdown-toggler text-start"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="row p-0">
                          <div className="col-8">Advance Training</div>
                          <div className="col-4 d-flex justify-content-end align-items-center">
                            <Icon
                              className="icon"
                              icon="material-symbols:chevron-right-rounded"
                            />
                          </div>
                        </div>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-child">
                        <div className="custom-dropdown">{courseArr2}</div>
                      </ul>
                    </li>
                    <li className="btn-group dropend dropdown-child d-flex">
                      <button
                        type="button"
                        className="btn dropdown-toggler text-start"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="row p-0">
                          <div className="col-8">Program Sintesis</div>
                          <div className="col-4 d-flex justify-content-end align-items-center">
                            <Icon
                              className="icon"
                              icon="material-symbols:chevron-right-rounded"
                            />
                          </div>
                        </div>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-child">
                        <div className="custom-dropdown">{courseArr3}</div>
                      </ul>
                    </li>
                    <li className="btn-group dropend dropdown-child d-flex">
                      <button
                        type="button"
                        className="btn dropdown-toggler text-start"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="row p-0">
                          <div className="col-8">Weekly Refresh Competency</div>
                          <div className="col-4 d-flex justify-content-end align-items-center">
                            <Icon
                              className="icon"
                              icon="material-symbols:chevron-right-rounded"
                            />
                          </div>
                        </div>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-child">
                        <div className="custom-dropdown">{courseArr4}</div>
                      </ul>
                    </li>
                    <li className="btn-group dropend dropdown-child d-flex">
                      <button
                        type="button"
                        className="btn dropdown-toggler text-start"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="row p-0">
                          <div className="col-8">SOP</div>
                          <div className="col-4 d-flex justify-content-end align-items-center">
                            <Icon
                              className="icon"
                              icon="material-symbols:chevron-right-rounded"
                            />
                          </div>
                        </div>
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
                      setCurrentCourseId();
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
                          window.scroll(0, 0);
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
                              setNavOption();
                              setCurrentPageDetail();
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
            <Landing
              login={login}
              setLogin={setLogin}
              setCurrentPage={setCurrentPage}
              currentPageDetail={currentPageDetail}
              setCurrentPageDetail={setCurrentPageDetail}
              navOption={navOption}
              setNavOption={setNavOption}
              setCurrentCourseId={setCurrentCourseId}
              setCurrentCourseTitle={setCurrentCourseTitle}
              setCurrentTrainingTitle={setCurrentTrainingTitle}
              setCurrentSubTrainingTitle={setCurrentSubTrainingTitle}
            />
          ) : currentPage == "dashboard" &&
            (navOption == "op1" || currentPageDetail == "myCertificate") ? (
            <Dashboard
              setCurrentPage={setCurrentPage}
              currentPageDetail={currentPageDetail}
              setCurrentPageDetail={setCurrentPageDetail}
              currentTrainingTitle={currentTrainingTitle}
              setCurrentTrainingTitle={setCurrentTrainingTitle}
              currentSubTrainingTitle={currentSubTrainingTitle}
              setCurrentSubTrainingTitle={setCurrentSubTrainingTitle}
              currentCourseId={currentCourseId}
              setCurrentCourseId={setCurrentCourseId}
              currentCourseTitle={currentCourseTitle}
              setCurrentCourseTitle={setCurrentCourseTitle}
              highestMarkPostTest={highestMarkPostTest}
              setHighestMarkPostTest={setHighestMarkPostTest}
              highestScorePreTest={highestScorePreTest}
              setHighestScorePreTest={setHighestScorePreTest}
              highestScorePostTest={highestScorePostTest}
              setHighestScorePostTest={setHighestScorePostTest}
              sectionData={sectionData}
              setSectionData={setSectionData}
              questionData={questionData}
              recordPreTest={recordPreTest}
              setRecordPreTest={setRecordPreTest}
              recordPostTest={recordPostTest}
              setRecordPostTest={setRecordPostTest}
              progress={progress}
              setProgress={setProgress}
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
                    <a
                      className="d-flex"
                      href="https://www.facebook.com/profile.php?id=100063531310402"
                    >
                      <Icon className="icon me-1" icon="uil:facebook-f" />
                      <div className="d-flex align-items-center">
                        <div>Kawan.K3l</div>
                      </div>
                    </a>
                    <br />
                    <a
                      className="d-flex"
                      href="https://www.instagram.com/kawan.k3l"
                    >
                      <Icon className="icon me-1" icon="mdi:instagram" />
                      <div className="d-flex align-items-center">
                        <div>@kawan.k3l</div>
                      </div>
                    </a>
                    <br />
                    <a
                      className="d-flex"
                      href="https://www.tiktok.com/@kawan.k3l"
                    >
                      <Icon className="icon me-1" icon="ic:baseline-tiktok" />
                      <div className="d-flex align-items-center">
                        <div>kawan.k3l</div>
                      </div>
                    </a>
                    <br />
                    <a
                      className="d-flex"
                      href="https://www.youtube.com/@SINTESISPLUS"
                    >
                      <Icon className="icon me-1" icon="vaadin:youtube" />
                      <div className="d-flex align-items-center">
                        <div>@SINTESISPLUS</div>
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
