import "../App.css";
import Calendar from "react-calendar";
import { Icon } from "@iconify/react";
import CountUp, { useCountUp } from "react-countup";
import { useState, useEffect } from "react";
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import { trainingData, events, resources } from "./Data";
import { format, parse, startOfWeek, getDay } from "date-fns";

const locales = {
  "en-US": require("date-fns"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const Landing = ({
  login,
  setLogin,
  setCurrentPage,
  currentPageDetail,
  setCurrentPageDetail,
  navOption,
  setNavOption,
  setCurrentCourseId,
  setCurrentCourseTitle,
  setCurrentTrainingTitle,
  setCurrentSubTrainingTitle,
}) => {
  const [filterDate, setFilterDate] = useState(new Date());
  const [searchEvent, setSearchEvent] = useState();
  const [calendarEvents, setCalendarEvents] = useState(events);
  const [trainerContact, setTrainerContact] = useState();

  const eventPropGetter = (data) => {
    var backgroundColor = "#" + data.hexColor;
    var style = {
      backgroundColor: backgroundColor,
      opacity: 0.8,
      color: "white",
    };
    return {
      style: style,
    };
  };

  const handleSelectedEvent = (event) => {
    setCurrentPageDetail("allTraining");
    setCurrentTrainingTitle(event.training);
    setCurrentCourseId(event.id);
    setCurrentCourseTitle(event.title);
    setNavOption("op1");
    login == true ? setCurrentPage("dashboard") : setCurrentPage("landing");
    window.scroll(0, 0);
  };

  const handleSearchEvent = (data) => {
    setSearchEvent(data.target.value);
  };

  const handleEventCheckBox = (data) => {
    if (!calendarEvents.includes(data)) {
      setCalendarEvents((arr) => [...arr, events[events.indexOf(data)]]);
    } else {
      setCalendarEvents(calendarEvents.filter((arr) => arr != data));
    }
  };

  const eventArr = events.map((data) => {
    if (searchEvent == null) {
      return (
        <div
          className="event mt-2"
          onClick={() => {
            handleEventCheckBox(data);
          }}
        >
          <div className="d-flex">
            <div className="me-2 d-flex align-items-center">
              <input
                type="checkbox"
                checked={calendarEvents.includes(data) ? true : false}
                style={{ accentColor: "#" + data.hexColor }}
              />
            </div>
            <label>{data.title}</label>
          </div>
        </div>
      );
    } else {
      if (data.title.toLowerCase().includes(searchEvent)) {
        return (
          <div
            className="event mt-2"
            onClick={() => {
              handleEventCheckBox(data);
            }}
          >
            <div className="d-flex">
              <div className="me-2 d-flex align-items-center">
                <input
                  type="checkbox"
                  checked={calendarEvents.includes(data) ? true : false}
                  style={{ accentColor: "#" + data.hexColor }}
                />
              </div>
              <label>{data.title}</label>
            </div>
          </div>
        );
      }
    }
  });

  return (
    <div className="landing-page">
      <div className="container-lg">
        <div className="pt-5 pb-4">
          <div
            id="carouselExample"
            className="carousel slide mb-3"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <div className="d-flex align-items-center">
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="0"
                  className="active mt-5"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
              </div>
              <div className="d-flex align-items-center">
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="1"
                  className="mt-5"
                  aria-label="Slide 2"
                ></button>
              </div>
              <div className="d-flex align-items-center">
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="2"
                  className="mt-5"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="d-flex align-items-center">
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="3"
                  className="mt-5"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div className="d-flex align-items-center">
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="4"
                  className="mt-5"
                  aria-label="Slide 5"
                ></button>
              </div>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="7000">
                <img
                  src={require("../assets/carousel1.jpg")}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="7000">
                <img
                  src={require("../assets/carousel2.jpeg")}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="7000">
                <img
                  src={require("../assets/carousel3.JPG")}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="7000">
                <img
                  src={require("../assets/carousel4.jpeg")}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="7000">
                <img
                  src={require("../assets/carousel5.jpg")}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev d-none d-lg-block d-print-block"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next d-none d-lg-block d-print-block"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-lg">
        <div className="calendar py-5">
          <div className="title mb-5">
            <div className="d-flex justify-content-center">
              <div>
                <div className="d-flex justify-content-center mb-2">
                  <div className="line"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <h2 className="fw-bold">KALENDER</h2>
                </div>
                <div className="d-flex justify-content-center">
                  <label>
                    Cari kegiatan pada tanggal tertentu dan cek detailnya dengan
                    mudah
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-3">
                <div>
                  <Calendar onChange={setFilterDate} value={filterDate} />
                </div>
                <div className="calendar-event mt-4 p-3">
                  <div className="d-flex justify-content-center">
                    <h6>Jadwal Kegiatan</h6>
                  </div>
                  <div className="mt-2 search-bar">
                    <input
                      className="form-control ps-4 mb-1 w-100"
                      type="search"
                      placeholder="Cari kegiatan anda"
                      aria-label="Search"
                      onChange={handleSearchEvent}
                    />
                    <div className="d-flex align-items-center">
                      <Icon className="icon" icon="uil:search" />
                    </div>
                  </div>
                  <div className="event overflow-auto mt-2 d-grid gap-2">
                    {eventArr}
                  </div>
                </div>
              </div>
              <div className="col-9">
                <div className="big-calendar p-3">
                  <div
                    data-bs-toggle={login == false ? "modal" : ""}
                    data-bs-target={login == false ? "#loginModal" : ""}
                  >
                    <BigCalendar
                      onSelectEvent={(event) => handleSelectedEvent(event)}
                      events={
                        searchEvent == null
                          ? calendarEvents
                          : calendarEvents.filter((arr) =>
                              arr.title.toLowerCase().includes(searchEvent)
                            )
                      }
                      localizer={localizer}
                      defaultDate={new Date()}
                      style={{ height: 660 }}
                      eventPropGetter={eventPropGetter}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="category py-5">
        <div className="container-lg">
          <div className="title mb-5">
            <div className="d-flex justify-content-center">
              <div>
                <div className="d-flex justify-content-center mb-2">
                  <div className="line"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <h2 className="fw-bold">KATEGORI</h2>
                </div>
                <div className="d-flex justify-content-center">
                  <label>
                    Terdapat banyak kelompok materi yang dapat anda akses pada
                    laman ini
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-end mb-3">
              <a
                className="see-all-button d-flex"
                onClick={() => {
                  setCurrentPageDetail("allTraining");
                  setCurrentCourseId();
                  setCurrentCourseTitle();
                  setNavOption("op1");
                  setCurrentTrainingTitle(trainingData[0].title);
                  setCurrentSubTrainingTitle(trainingData[0].category[0].title);
                  login == true
                    ? setCurrentPage("dashboard")
                    : setCurrentPage("landing");
                  window.scroll(0, 0);
                }}
                data-bs-toggle={login == false ? "modal" : ""}
                data-bs-target={login == false ? "#loginModal" : ""}
              >
                <div className="d-flex align-items-center">
                  <div>Lihat semua</div>
                </div>
                <div className="d-flex align-items-center">
                  <Icon
                    className="icon"
                    icon="material-symbols:chevron-right-rounded"
                  />
                </div>
              </a>
            </div>
            <div className="row">
              <div className="col-3">
                <div className="box">
                  <img
                    className="w-100 mb-2"
                    src={require("../assets/categoryimg1.png")}
                    alt=""
                  />
                  <div className="category-desc">
                    <div className="d-flex justify-content-center px-3">
                      <h6 className="text-center">
                        Kelompok Materi Pelatihan Dasar
                      </h6>
                    </div>
                    <div className="d-flex justify-content-center px-5">
                      <p className="text-center">
                        Peraturan dan Perundang - Undangan Macam macam APD dan
                        Kegunaannya Nilai dan Mindset
                      </p>
                    </div>
                  </div>
                  <div className="category-readmore-button d-flex justify-content-center py-3">
                    <button
                      className="px-2 py-1"
                      onClick={() => {
                        setCurrentPageDetail("allTraining");
                        setCurrentCourseId();
                        setCurrentCourseTitle();
                        setNavOption("op1");
                        setCurrentTrainingTitle(trainingData[0].title);
                        setCurrentSubTrainingTitle(
                          trainingData[0].category[0].title
                        );
                        login == true
                          ? setCurrentPage("dashboard")
                          : setCurrentPage("landing");
                        window.scroll(0, 0);
                      }}
                      data-bs-toggle={login == false ? "modal" : ""}
                      data-bs-target={login == false ? "#loginModal" : ""}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="box">
                  <img
                    className="w-100 mb-2"
                    src={require("../assets/categoryimg2.png")}
                    alt=""
                  />
                  <div className="category-desc">
                    <div className="d-flex justify-content-center px-3">
                      <h6 className="text-center">
                        Kelompok Materi Pelatihan Pengawas
                      </h6>
                    </div>
                    <div className="d-flex justify-content-center px-5">
                      <p className="text-center">
                        Peraturan dan Perundang - Undangan Macam macam APD dan
                        Kegunaannya Nilai dan Mindset
                      </p>
                    </div>
                  </div>
                  <div className="category-readmore-button d-flex justify-content-center py-3">
                    <button
                      className="px-2 py-1"
                      onClick={() => {
                        setCurrentPageDetail("allTraining");
                        setCurrentCourseId();
                        setCurrentCourseTitle();
                        setNavOption("op1");
                        setCurrentTrainingTitle(trainingData[0].title);
                        setCurrentSubTrainingTitle(
                          trainingData[0].category[0].title
                        );
                        login == true
                          ? setCurrentPage("dashboard")
                          : setCurrentPage("landing");
                        window.scroll(0, 0);
                      }}
                      data-bs-toggle={login == false ? "modal" : ""}
                      data-bs-target={login == false ? "#loginModal" : ""}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="box">
                  <img
                    className="w-100 mb-2"
                    src={require("../assets/categoryimg3.png")}
                    alt=""
                  />
                  <div className="category-desc">
                    <div className="d-flex justify-content-center px-3">
                      <h6 className="text-center">
                        Kelompok Materi Pelatihan Umum
                      </h6>
                    </div>
                    <div className="d-flex justify-content-center px-5">
                      <p className="text-center">
                        Peraturan dan Perundang - Undangan Macam macam APD dan
                        Kegunaannya Nilai dan Mindset
                      </p>
                    </div>
                  </div>
                  <div className="category-readmore-button d-flex justify-content-center py-3">
                    <button
                      className="px-2 py-1"
                      onClick={() => {
                        setCurrentPageDetail("allTraining");
                        setCurrentCourseId();
                        setCurrentCourseTitle();
                        setNavOption("op1");
                        setCurrentTrainingTitle(trainingData[0].title);
                        setCurrentSubTrainingTitle(
                          trainingData[0].category[0].title
                        );
                        login == true
                          ? setCurrentPage("dashboard")
                          : setCurrentPage("landing");
                        window.scroll(0, 0);
                      }}
                      data-bs-toggle={login == false ? "modal" : ""}
                      data-bs-target={login == false ? "#loginModal" : ""}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="box">
                  <img
                    className="w-100 mb-2"
                    src={require("../assets/categoryimg4.png")}
                    alt=""
                  />
                  <div className="category-desc">
                    <div className="d-flex justify-content-center px-3">
                      <h6 className="text-center">
                        Kelompok Materi Keselamatan Operasional Kerja
                      </h6>
                    </div>
                    <div className="d-flex justify-content-center px-5">
                      <p className="text-center">
                        Peraturan dan Perundang - Undangan Macam macam APD dan
                        Kegunaannya Nilai dan Mindset
                      </p>
                    </div>
                  </div>
                  <div className="category-readmore-button d-flex justify-content-center py-3">
                    <button
                      className="px-2 py-1"
                      onClick={() => {
                        setCurrentPageDetail("allTraining");
                        setCurrentCourseId();
                        setCurrentCourseTitle();
                        setNavOption("op1");
                        setCurrentTrainingTitle(trainingData[0].title);
                        setCurrentSubTrainingTitle(
                          trainingData[0].category[0].title
                        );
                        login == true
                          ? setCurrentPage("dashboard")
                          : setCurrentPage("landing");
                        window.scroll(0, 0);
                      }}
                      data-bs-toggle={login == false ? "modal" : ""}
                      data-bs-target={login == false ? "#loginModal" : ""}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="trainer py-5">
        <div className="container-lg">
          <div className="title mb-5">
            <div className="d-flex justify-content-center">
              <div>
                <div className="d-flex justify-content-center mb-2">
                  <div className="line"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <h2 className="fw-bold">TRAINING CENTER TEAM</h2>
                </div>
                <div className="d-flex justify-content-center">
                  <label>Profesional Instruktur Berbagai Bidang</label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              id="carouselExampleDark"
              className="carousel slide mb-3"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <div className="d-flex align-items-center">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    className="active mt-5"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                </div>
                <div className="d-flex align-items-center">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    className="mt-5"
                    aria-label="Slide 2"
                  ></button>
                </div>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="7000">
                  <div className="row">
                    <div className="col d-block d-flex justify-content-end">
                      <div className="box mb-2">
                        <div
                          className="trainer-img mb-3"
                          onMouseOver={() => {
                            setTrainerContact("trainer1");
                          }}
                          onMouseOut={() => {
                            setTrainerContact();
                          }}
                        >
                          <img
                            className="w-100"
                            src={require("../assets/trainer1.png")}
                            alt=""
                          />
                          {trainerContact == "trainer1" ? (
                            <div className="trainer-contact w-100 d-flex justify-content-center gap-2 pt-5 pb-3">
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="codicon:twitter" />
                              </div>
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="ri:instagram-line" />
                              </div>
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="ri:linkedin-fill" />
                              </div>
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="typcn:social-facebook" />
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="trainer-desc">
                          <div className="d-flex justify-content-center px-3">
                            <h6 className="text-center">Jainal Abidin</h6>
                          </div>
                          <div className="d-flex justify-content-center px-3">
                            <p className="text-center">
                              Spesialisasi K3 Transportasi
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col d-block d-flex justify-content-center">
                      <div className="box mb-2">
                        <div
                          className="trainer-img mb-3"
                          onMouseOver={() => {
                            setTrainerContact("trainer2");
                          }}
                          onMouseOut={() => {
                            setTrainerContact();
                          }}
                        >
                          <img
                            className="w-100"
                            src={require("../assets/trainer2.png")}
                            alt=""
                          />
                          {trainerContact == "trainer2" ? (
                            <div className="trainer-contact w-100 d-flex justify-content-center gap-2 pt-5 pb-3">
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="codicon:twitter" />
                              </div>
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="ri:instagram-line" />
                              </div>
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="ri:linkedin-fill" />
                              </div>
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="typcn:social-facebook" />
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="trainer-desc">
                          <div className="d-flex justify-content-center px-3">
                            <h6 className="text-center">Franky Kodoatie</h6>
                          </div>
                          <div className="d-flex justify-content-center px-3">
                            <p className="text-center">
                              Spesialisasi K3 Tambang
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col d-block d-flex justify-content-start">
                      <div className="box mb-2">
                        <div
                          className="trainer-img mb-3"
                          onMouseOver={() => {
                            setTrainerContact("trainer3");
                          }}
                          onMouseOut={() => {
                            setTrainerContact();
                          }}
                        >
                          <img
                            className="w-100"
                            src={require("../assets/trainer3.png")}
                            alt=""
                          />
                          {trainerContact == "trainer3" ? (
                            <div className="trainer-contact w-100 d-flex justify-content-center gap-2 pt-5 pb-3">
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="codicon:twitter" />
                              </div>
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="ri:instagram-line" />
                              </div>
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="ri:linkedin-fill" />
                              </div>
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="typcn:social-facebook" />
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="trainer-desc">
                          <div className="d-flex justify-content-center px-3">
                            <h6 className="text-center">Budi Satiyawan</h6>
                          </div>
                          <div className="d-flex justify-content-center px-3">
                            <p className="text-center">Senior Trainer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="7000">
                  <div className="row">
                    <div className="col d-block d-flex justify-content-end">
                      <div className="box mb-2">
                        <div
                          className="trainer-img mb-3"
                          onMouseOver={() => {
                            setTrainerContact("trainer4");
                          }}
                          onMouseOut={() => {
                            setTrainerContact();
                          }}
                        >
                          <img
                            className="w-100"
                            src={require("../assets/trainer4.png")}
                            alt=""
                          />
                          {trainerContact == "trainer4" ? (
                            <div className="trainer-contact w-100 d-flex justify-content-center gap-2 pt-5 pb-3">
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="codicon:twitter" />
                              </div>
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="ri:instagram-line" />
                              </div>
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="ri:linkedin-fill" />
                              </div>
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="typcn:social-facebook" />
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="trainer-desc">
                          <div className="d-flex justify-content-center px-3">
                            <h6 className="text-center">Sonny Widjajanto</h6>
                          </div>
                          <div className="d-flex justify-content-center px-3">
                            <p className="text-center">Associate Trainer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col d-block d-flex justify-content-center">
                      <div className="box mb-2">
                        <div
                          className="trainer-img mb-3"
                          onMouseOver={() => {
                            setTrainerContact("trainer5");
                          }}
                          onMouseOut={() => {
                            setTrainerContact();
                          }}
                        >
                          <img
                            className="w-100"
                            src={require("../assets/trainer5.png")}
                            alt=""
                          />
                          {trainerContact == "trainer5" ? (
                            <div className="trainer-contact w-100 d-flex justify-content-center gap-2 pt-5 pb-3">
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="codicon:twitter" />
                              </div>
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="ri:instagram-line" />
                              </div>
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="ri:linkedin-fill" />
                              </div>
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="typcn:social-facebook" />
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="trainer-desc">
                          <div className="d-flex justify-content-center px-3">
                            <h6 className="text-center">Adi Tono</h6>
                          </div>
                          <div className="d-flex justify-content-center px-3">
                            <p className="text-center">
                              Spesialisasi K3 Konstruksi
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col d-block d-flex justify-content-start">
                      <div className="box mb-2">
                        <div
                          className="trainer-img mb-3"
                          onMouseOver={() => {
                            setTrainerContact("trainer6");
                          }}
                          onMouseOut={() => {
                            setTrainerContact();
                          }}
                        >
                          <img
                            className="w-100"
                            src={require("../assets/trainer6.png")}
                            alt=""
                          />
                          {trainerContact == "trainer6" ? (
                            <div className="trainer-contact w-100 d-flex justify-content-center gap-2 pt-5 pb-3">
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="codicon:twitter" />
                              </div>
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="ri:instagram-line" />
                              </div>
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="ri:linkedin-fill" />
                              </div>
                              <div className="icon-container d-flex justify-content-center align-items-center">
                                <Icon icon="typcn:social-facebook" />
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="trainer-desc">
                          <div className="d-flex justify-content-center px-3">
                            <h6 className="text-center">Lukman Rahim</h6>
                          </div>
                          <div className="d-flex justify-content-center px-3">
                            <p className="text-center">
                              Spesialisasi K3 Mekanik
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="statistic">
        <div className="py-5">
          <div className="title mb-5">
            <div className="d-flex justify-content-center">
              <div>
                <div className="d-flex justify-content-center mb-2">
                  <div className="line"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <h2 className="fw-bold">STATISTIK</h2>
                </div>
                <div className="d-flex justify-content-center">
                  <label>Statistik Kursus SIMAK K3L</label>
                </div>
              </div>
            </div>
          </div>
          <div className="container-lg">
            <div className="d-flex justify-content-center gap-5">
              <div className="px-4">
                <div className="d-flex justify-content-center">
                  <h2>
                    <CountUp
                      end={277000}
                      duration="3"
                      separator=","
                      enableScrollSpy
                    />
                    +
                  </h2>
                </div>
                <div className="d-flex justify-content-center">
                  <label>Peserta</label>
                </div>
              </div>
              <div className="px-4">
                <div className="d-flex justify-content-center">
                  <h2>
                    <CountUp end={46} duration="3" enableScrollSpy />+
                  </h2>
                </div>
                <div className="d-flex justify-content-center">
                  <label>Kursus</label>
                </div>
              </div>
              <div className="px-4">
                <div className="d-flex justify-content-center">
                  <h2>
                    <CountUp
                      end={9064}
                      duration="3"
                      separator=","
                      enableScrollSpy
                    />
                    +
                  </h2>
                </div>
                <div className="d-flex justify-content-center">
                  <label>Event</label>
                </div>
              </div>
              <div className="px-4">
                <div className="d-flex justify-content-center">
                  <h2>
                    <CountUp
                      end={82046}
                      duration="3"
                      separator=","
                      enableScrollSpy
                    />
                    +
                  </h2>
                </div>
                <div className="d-flex justify-content-center">
                  <label>Sertifikat telah diterbitkan</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partner py-5">
        <div className="container-lg">
          <div className="title mb-5">
            <div className="d-flex justify-content-center">
              <div>
                <div className="d-flex justify-content-center mb-2">
                  <div className="line"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <h2 className="fw-bold">PARTNER</h2>
                </div>
                <div className="d-flex justify-content-center">
                  <label>Partner Utama Kami</label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-center gap-5">
              <div className="px-3">
                <div className="d-flex justify-content-center align-items-center">
                  <img src={require("../assets/partner1.png")} alt="" />
                </div>
              </div>
              <div className="px-3">
                <div className="d-flex justify-content-center align-items-center">
                  <img src={require("../assets/partner2.png")} alt="" />
                </div>
              </div>
              <div className="px-3">
                <div className="d-flex justify-content-center align-items-center">
                  <img src={require("../assets/partner3.png")} alt="" />
                </div>
              </div>
              <div className="px-3">
                <div className="d-flex justify-content-center align-items-center">
                  <img src={require("../assets/partner4.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                        <label for="exampleInputEmail1" className="form-label">
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
  );
};

export default Landing;
