import "../../App.css";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const AllTraining = ({
  handleTrainingTitle,
  handleCourseId,
  handleCourseTitle,
  currentTrainingPage,
  progress,
}) => {
  const [collapse, setCollapse] = useState(false);
  const [search, setSearch] = useState();
  const [filterCourse, setFilterCourse] = useState();

  const handleSearch = (data) => {
    setSearch(data.target.value);
  };

  const trainingData = [
    {
      title: "Pelatihan-Uji Online SIMAK dan KPO",
      sub: [
        "Pelatihan-Uji Online SIMAK dan KPO 2022",
        "Trainer Instructor Development Program (TIDP)",
        "Fatigue Management",
        "Pelatihan Emergency Response",
      ],
    },
    { title: "Advance Training" },
    { title: "Program Sintesis" },
    { title: "Weekly Refresh Competency" },
    { title: "SOP" },
  ];

  const [currentTraining, setCurrentTraining] = useState(
    currentTrainingPage == null ? trainingData[0].title : currentTrainingPage
  );
  const [currentSubTraining, setCurrentSubTraining] = useState(
    trainingData[0].sub[0]
  );

  useEffect(() => {
    setFilterCourse(null);
  }, [currentTraining]);

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
          {
            id: 44,
            title: "Surat Penunjukan Tenaga Teknis",
            category: "Unknown",
          },
          {
            id: 45,
            title: "Surat Penunjukan Pengawas Teknis",
            category: "Unknown",
          },
          {
            id: 46,
            title: "Surat Penunjukan Pengawas Operasional",
            category: "Unknown",
          },
          { id: 47, title: "E-Induksi BUMA", category: "Unknown" },
          {
            id: 48,
            title: "Pendidikan dan Pelatihan Pengelola Peledakan (KPP Pertama)",
            category: "Unknown",
          },
          {
            id: 49,
            title: "Frontline Behavior Based Safety",
            category: "Unknown",
          },
          { id: 50, title: "SINTESIS+", category: "Unknown" },
        ]
      : currentTraining == "Program Sintesis"
      ? [
          {
            id: 51,
            title: "KELOMPOK MATERI PELATIHAN DASAR (KMPD) 2022",
            category: "Unknown",
          },
          {
            id: 52,
            title:
              "Pencegahan Kecelakaan Akibat  Fatigue dengan Konsep SBS (Sistem Bekerja Selamat)",
            category: "Unknown",
          },
          {
            id: 53,
            title:
              "Pengawasan Langsung Berjarak: Dalam Meningkatkan Keselamatan Kerja & Produktivitas Tambang",
            category: "Unknown",
          },
        ]
      : currentTraining == "Weekly Refresh Competency"
      ? [
          {
            id: 54,
            title: "PIT SERVICE - WEEKLY REFRESH COMPETENCY",
            category: "Unknown",
          },
          {
            id: 55,
            title: "PLANT - WEEKLY REFRESH COMPETENCY",
            category: "Unknown",
          },
          { id: 56, title: "DO & DON'T EKSPLORASI", category: "Unknown" },
          {
            id: 57,
            title: "Drill & Blast - WEEKLY REFRESH COMPETENCY",
            category: "Unknown",
          },
          {
            id: 58,
            title: "MINING & HAULING OPERATION - WEEKLY REFRESH COMPETENCY",
            category: "Unknown",
          },
          {
            id: 59,
            title: "DO AND DON'T MARINE - WEEKLY REFRESH COMPETENCY",
            category: "Unknown",
          },
        ]
      : [
          {
            id: 60,
            title: "Surat Penunjukan Tenaga Teknis",
            category: "Unknown",
          },
        ];

  const filterData =
    currentTraining == "Pelatihan-Uji Online SIMAK dan KPO"
      ? [
          { id: 1, category: "Kelompok Materi Pelatihan Dasar (KMPD)" },
          {
            id: 2,
            category:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          { id: 3, category: "Kompetensi Pengawas Operasional (KPO)" },
          {
            id: 4,
            category: "Kelompok Materi Pelatihan Tingkat Lanjut (KMPL)",
          },
          { id: 5, category: "Trainer Instructor Development Program (TIDP)" },
          { id: 6, category: "Unknown" },
        ]
      : [{ id: 1, category: "Unknown" }];

  const trainingArr = trainingData.map((data, index) => {
    if (index != 0) {
      return (
        <button
          className={
            "w-100 text-start px-3 py-2" +
            (currentTraining == data.title ? " active" : "")
          }
          onClick={() => {
            setCurrentTraining(data.title);
            setCurrentSubTraining();
            window.scrollTo(0, 0);
          }}
        >
          {data.title}
        </button>
      );
    } else {
      return (
        <div className="collapse-section">
          <button
            className={
              "collapse-button w-100 text-start px-3 py-2 d-flex" +
              (currentTraining == data.title ? " active" : "")
            }
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={() => {
              setCollapse(collapse == false ? true : false);
            }}
          >
            <div className="row">
              <div className="col-10">{data.title}</div>
              <div className="collapse-icon d-flex justify-content-end align-items-center col-2">
                <Icon
                  className={
                    "icon" + (collapse == true ? " active-collapse" : "")
                  }
                  icon="material-symbols:chevron-right-rounded"
                />
              </div>
            </div>
          </button>
          <div className="collapse" id="collapseExample">
            {trainingData[0].sub.map((subData) => {
              return (
                <button
                  className={
                    "w-100 text-start d-flex align-items-center px-4 py-2" +
                    (currentSubTraining == subData
                      ? " active-sub-training"
                      : "")
                  }
                  onClick={() => {
                    setCurrentTraining(data.title);
                    setCurrentSubTraining(subData);
                    window.scrollTo(0, 0);
                  }}
                >
                  <div>{subData}</div>
                </button>
              );
            })}
          </div>
        </div>
      );
    }
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

  const filterArr = filterData.map((data) => {
    return (
      <button
        className={
          "px-3 py-1" +
          (filterCourse == data.category ? " filter-course-active" : "")
        }
        onClick={() => {
          filterCourse != data.category
            ? setFilterCourse(data.category)
            : setFilterCourse(null);
        }}
      >
        {data.category}
      </button>
    );
  });

  return (
    <div className="training-section pt-4">
      <div className="container-lg">
        <div className="row">
          <div className="col-3">
            <div className="training-navigation px-1 py-3 d-grid gap-2">
              {trainingArr}
            </div>
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
                  {filterArr}
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
