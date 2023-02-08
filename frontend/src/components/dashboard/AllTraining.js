import "../../App.css";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const AllTraining = ({
  handleTrainingTitle,
  handleCourseId,
  handleCourseTitle,
  currentTrainingPage,
}) => {
  const [currentTraining, setCurrentTraining] = useState(
    currentTrainingPage == null
      ? "Pelatihan-Uji Online SIMAK dan KPO"
      : currentTrainingPage
  );
  const progress = 0;
  const [search, setSearch] = useState();
  const [filterCourse, setFilterCourse] = useState();

  const handleSearch = (data) => {
    setSearch(data.target.value);
  };

  const trainingData = [
    { title: "Pelatihan-Uji Online SIMAK dan KPO" },
    { title: "Advance Training" },
    { title: "Program Sintesis" },
    { title: "Weekly Refresh Competency" },
    { title: "SOP" },
  ];

  const courseData =
    currentTraining == "Pelatihan-Uji Online SIMAK dan KPO"
      ? [
          {
            id: 1,
            title: "Kelompok Materi Pelatihan Dasar (KMPD)",
            category: "Kelompok Materi Pelatihan Dasar (KMPD)",
          },
          {
            id: 2,
            title: "KMKOP Izin Bekerja di Ketinggian",
            category:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 3,
            title: "KMKOP Izin Bekerja di Dekat Air",
            category:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 4,
            title: "KMKOP Izin Bekerja pada Ruang Terbatas",
            category:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 5,
            title: "KMKOP Izin Pengangkatan & Pengangkutan Material",
            category:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 6,
            title: "KMKOP Izin Bekerja Pekerjaan Panas",
            category:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 7,
            title:
              "KMKOP Izin Bekerja Di Luar Workshop (Mechanic & Helper Mechanic)",
            category:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 8,
            title: "KMKOP Driver Light Vehicle (LV)",
            category:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 9,
            title: "KMKOP Operator A2B",
            category:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 10,
            title: "KMKOP Alat Angkut (Hauler)",
            category:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 11,
            title: "KMKOP Bekerja Aman Area Taman/ Landscape",
            category:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 12,
            title: "KMKOP Land Clearing",
            category:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 13,
            title: "KMKOP Pengoperasian UVS",
            category:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 14,
            title: "KMKOP Pengelolaan Peledakan (KPP Pertama)",
            category:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 15,
            title: "KMKOP Eksplorasi",
            category:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 16,
            title: "KMKOP Dasar K3 Listrik",
            category:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 17,
            title: "KMKOP Penanganan Hidrocarbon & MSDS",
            category:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 18,
            title: "KPO Maintenance",
            category: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 19,
            title: "KPO Project",
            category: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 20,
            title: "KPO Land Clearing",
            category: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 21,
            title: "KPO Pengupasan Batuan Penutup (OB Removal)",
            category: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 22,
            title: "KPO Eksplorasi",
            category: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 23,
            title: "KPO Penimbunan (Dumping)",
            category: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 24,
            title: "KPO Pengeboran dan Peledakan (Blasting)",
            category: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 25,
            title: "KPO Penambangan (Coal Getting)",
            category: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 26,
            title: "KPO Loading Material Lunak",
            category: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 27,
            title: "KPO Hauling Road Maintenance (HRM)",
            category: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 28,
            title: "KPO Coal Processing Plant (CPP)",
            category: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 29,
            title: "KPO Dewatering",
            category: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 30,
            title: "KPO Limbah Bahan Berbahaya dan Beracun (B3)",
            category: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 31,
            title: "KPO Marine",
            category: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 32,
            title: "KPO Safety",
            category: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 33,
            title: "KMPL Mining Eyes",
            category: "Kelompok Materi Pelatihan Tingkat Lanjut (KMPL)",
          },
          {
            id: 34,
            title: "KMPL Pekerja Konstruksi",
            category: "Kelompok Materi Pelatihan Tingkat Lanjut (KMPL)",
          },
          {
            id: 35,
            title: "KMPL HIRA",
            category: "Kelompok Materi Pelatihan Tingkat Lanjut (KMPL)",
          },
          {
            id: 36,
            title: "KMPL Pekerja Kantor dan Dapur",
            category: "Kelompok Materi Pelatihan Tingkat Lanjut (KMPL)",
          },
          {
            id: 37,
            title: "KMPL Sistem Manajemen Keselamatan Pertambangan (SMKP)",
            category: "Kelompok Materi Pelatihan Tingkat Lanjut (KMPL)",
          },
          {
            id: 38,
            title: "KMPL Investigasi Kecelakaan - Sistem Bekerja Selamat",
            category: "Kelompok Materi Pelatihan Tingkat Lanjut (KMPL)",
          },
          {
            id: 39,
            title: "Trainer Instructor Development Program (TIDP) 2022",
            category: "Trainer Instructor Development Program (TIDP)",
          },
          { id: 40, title: "Fatigue Manajement", category: "Unknown" },
          { id: 41, title: "Pelatihan CPR AED Pengawas", category: "Unknown" },
          { id: 42, title: "Pelatihan Self Evacuation", category: "Unknown" },
          { id: 43, title: "Pelatihan PPGD", category: "Unknown" },
        ]
      : currentTraining == "Advance Training"
      ? [
          { id: 44, title: "Surat Penunjukan Tenaga Teknis" },
          { id: 45, title: "Surat Penunjukan Pengawas Teknis" },
          { id: 46, title: "Surat Penunjukan Pengawas Operasional" },
          { id: 47, title: "E-Induksi BUMA" },
          {
            id: 48,
            title: "Pendidikan dan Pelatihan Pengelola Peledakan (KPP Pertama)",
          },
          { id: 49, title: "Frontline Behavior Based Safety" },
          { id: 50, title: "SINTESIS+" },
        ]
      : currentTraining == "Program Sintesis"
      ? [
          { id: 51, title: "KELOMPOK MATERI PELATIHAN DASAR (KMPD) 2022" },
          {
            id: 52,
            title:
              "Pencegahan Kecelakaan Akibat  Fatigue dengan Konsep SBS (Sistem Bekerja Selamat)",
          },
          {
            id: 53,
            title:
              "Pengawasan Langsung Berjarak: Dalam Meningkatkan Keselamatan Kerja & Produktivitas Tambang",
          },
        ]
      : currentTraining == "Weekly Refresh Competency"
      ? [
          { id: 54, title: "PIT SERVICE - WEEKLY REFRESH COMPETENCY" },
          { id: 55, title: "PLANT - WEEKLY REFRESH COMPETENCY" },
          { id: 56, title: "DO & DON'T EKSPLORASI" },
          { id: 57, title: "Drill & Blast - WEEKLY REFRESH COMPETENCY" },
          {
            id: 58,
            title: "MINING & HAULING OPERATION - WEEKLY REFRESH COMPETENCY",
          },
          { id: 59, title: "DO AND DON'T MARINE - WEEKLY REFRESH COMPETENCY" },
        ]
      : [{ id: 60, title: "Surat Penunjukan Tenaga Teknis" }];

  const trainingArr = trainingData.map((data) => {
    return (
      <button
        className={
          "w-100 text-start py-2 px-4" +
          (currentTraining == data.title ? " active" : "")
        }
        onClick={() => setCurrentTraining(data.title)}
      >
        {data.title}
      </button>
    );
  });

  const courseArr = courseData.map((data) => {
    if (filterCourse != null) {
      if (filterCourse == data.category) {
        return (
          <div className="col-6 p-0 my-2">
            <div className="h-100 mx-2">
              <div className="training-item p-2 d-flex align-items-center">
                <div className="row m-0">
                  <div className="col-3 d-flex align-items-center">
                    <img src={require("../../assets/trainingimg.png")} alt="" />
                  </div>
                  <div className="col-9">
                    <div className="d-flex align-items-start flex-column">
                      <h6 className="mb-4">{data.title}</h6>
                      <div className="mt-auto w-100">
                        <div className="d-flex">
                          <div className="training-progress w-100 px-2 py-1 me-2">
                            <div className="row">
                              <div className="col d-flex justify-content-start mb-2">
                                <label>Progress Training</label>
                              </div>
                              <div className="col d-flex justify-content-end">
                                <label>{progress + "%"}</label>
                              </div>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                style={{ width: progress + "%" }}
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                          <button
                            className="px-3"
                            onClick={() => {
                              handleTrainingTitle(currentTraining);
                              handleCourseId(data.id);
                              handleCourseTitle(data.title);
                              window.scrollTo(0, 0);
                            }}
                          >
                            Lanjutkan
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
      }
    } else if (search != null) {
      if (data.title.toLowerCase().includes(search)) {
        return (
          <div className="col-6 p-0 my-2">
            <div className="h-100 mx-2">
              <div className="training-item p-2 d-flex align-items-center">
                <div className="row m-0">
                  <div className="col-3 d-flex align-items-center">
                    <img src={require("../../assets/trainingimg.png")} alt="" />
                  </div>
                  <div className="col-9">
                    <div className="d-flex align-items-start flex-column">
                      <h6 className="mb-4">{data.title}</h6>
                      <div className="mt-auto w-100">
                        <div className="d-flex">
                          <div className="training-progress w-100 px-2 py-1 me-2">
                            <div className="row">
                              <div className="col d-flex justify-content-start mb-2">
                                <label>Progress Training</label>
                              </div>
                              <div className="col d-flex justify-content-end">
                                <label>{progress + "%"}</label>
                              </div>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                style={{ width: progress + "%" }}
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                          <button
                            className="px-3"
                            onClick={() => {
                              handleTrainingTitle(currentTraining);
                              handleCourseId(data.id);
                              handleCourseTitle(data.title);
                              window.scrollTo(0, 0);
                            }}
                          >
                            Lanjutkan
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
      }
    } else {
      return (
        <div className="col-6 p-0 my-2">
          <div className="h-100 mx-2">
            <div className="training-item p-2 d-flex align-items-center">
              <div className="row m-0">
                <div className="col-3 d-flex align-items-center">
                  <img src={require("../../assets/trainingimg.png")} alt="" />
                </div>
                <div className="col-9">
                  <div className="d-flex align-items-start flex-column">
                    <h6 className="mb-4">{data.title}</h6>
                    <div className="mt-auto w-100">
                      <div className="d-flex">
                        <div className="training-progress w-100 px-2 py-1 me-2">
                          <div className="row">
                            <div className="col d-flex justify-content-start mb-2">
                              <label>Progress Training</label>
                            </div>
                            <div className="col d-flex justify-content-end">
                              <label>{progress + "%"}</label>
                            </div>
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              style={{ width: progress + "%" }}
                              role="progressbar"
                              aria-label="Basic example"
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <button
                          className="px-3"
                          onClick={() => {
                            handleTrainingTitle(currentTraining);
                            handleCourseId(data.id);
                            handleCourseTitle(data.title);
                            window.scrollTo(0, 0);
                          }}
                        >
                          Lanjutkan
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
    }
  });

  return (
    <div className="training-section pt-4">
      <div className="container-lg">
        <div className="row">
          <div className="col-3">
            <div className="training-navigation">{trainingArr}</div>
          </div>
          <div className="col-9">
            <div className="d-flex search-container">
              <form className="mb-1 w-100" role="search">
                <input
                  className="form-control ps-5"
                  type="search"
                  placeholder="Cari kursus yang ingin anda ikuti"
                  aria-label="Search"
                  onChange={handleSearch}
                />
              </form>
              <div className="d-flex align-items-center">
                <Icon className="icon" icon="uil:search" />
              </div>
            </div>
            <div className="topic">
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <label className="me-2">Topik:</label>
                </div>
                <div className="topic-collection d-flex overflow-auto gap-2 p-1">
                  <button
                    className={
                      "px-3 py-1" +
                      (filterCourse == "Kelompok Materi Pelatihan Dasar (KMPD)"
                        ? " filter-course-active"
                        : "")
                    }
                    onClick={() => {
                      filterCourse != "Kelompok Materi Pelatihan Dasar (KMPD)"
                        ? setFilterCourse(
                            "Kelompok Materi Pelatihan Dasar (KMPD)"
                          )
                        : setFilterCourse(null);
                    }}
                  >
                    Kelompok Materi Pelatihan Dasar (KMPD)
                  </button>
                  <button
                    className={
                      "px-3 py-1" +
                      (filterCourse ==
                      "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)"
                        ? " filter-course-active"
                        : "")
                    }
                    onClick={() => {
                      filterCourse !=
                      "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)"
                        ? setFilterCourse(
                            "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)"
                          )
                        : setFilterCourse(null);
                    }}
                  >
                    Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)
                  </button>
                  <button
                    className={
                      "px-3 py-1" +
                      (filterCourse == "Kompetensi Pengawas Operasional (KPO)"
                        ? " filter-course-active"
                        : "")
                    }
                    onClick={() => {
                      filterCourse != "Kompetensi Pengawas Operasional (KPO)"
                        ? setFilterCourse(
                            "Kompetensi Pengawas Operasional (KPO)"
                          )
                        : setFilterCourse(null);
                    }}
                  >
                    Kompetensi Pengawas Operasional (KPO)
                  </button>
                  <button
                    className={
                      "px-3 py-1" +
                      (filterCourse ==
                      "Kelompok Materi Pelatihan Tingkat Lanjut (KMPL)"
                        ? " filter-course-active"
                        : "")
                    }
                    onClick={() => {
                      filterCourse !=
                      "Kelompok Materi Pelatihan Tingkat Lanjut (KMPL)"
                        ? setFilterCourse(
                            "Kelompok Materi Pelatihan Tingkat Lanjut (KMPL)"
                          )
                        : setFilterCourse(null);
                    }}
                  >
                    Kelompok Materi Pelatihan Tingkat Lanjut (KMPL)
                  </button>
                  <button
                    className={
                      "px-3 py-1" +
                      (filterCourse ==
                      "Trainer Instructor Development Program (TIDP)"
                        ? " filter-course-active"
                        : "")
                    }
                    onClick={() => {
                      filterCourse !=
                      "Trainer Instructor Development Program (TIDP)"
                        ? setFilterCourse(
                            "Trainer Instructor Development Program (TIDP)"
                          )
                        : setFilterCourse(null);
                    }}
                  >
                    Trainer Instructor Development Program (TIDP)
                  </button>
                  <button
                    className={
                      "px-3 py-1" +
                      (filterCourse == "Unknown" ? " filter-course-active" : "")
                    }
                    onClick={() => {
                      filterCourse != "Unknown"
                        ? setFilterCourse("Unknown")
                        : setFilterCourse(null);
                    }}
                  >
                    Unknown
                  </button>
                </div>
              </div>
            </div>
            <div className="training-item-container row">{courseArr}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTraining;
