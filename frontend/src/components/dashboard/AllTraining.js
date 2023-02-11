import "../../App.css";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

const AllTraining = ({
  trainingData,
  currentTrainingTitle,
  setCurrentTrainingTitle,
  currentSubTrainingTitle,
  setCurrentSubTrainingTitle,
  setCurrentCourseId,
  setCurrentCourseTitle,
  progress,
}) => {
  const [collapse, setCollapse] = useState(false);
  const [search, setSearch] = useState();
  const [filterTopic, setFilterTopic] = useState();

  const handleSearch = (data) => {
    setSearch(data.target.value);
  };

  useEffect(() => {
    setFilterTopic(null);
  }, [currentTrainingTitle]);

  const courseData =
    currentTrainingTitle == "Pelatihan-Uji Online SIMAK dan KPO"
      ? [
          {
            id: 1,
            title: "Kelompok Materi Pelatihan Dasar (KMPD)",
            topic: "Kelompok Materi Pelatihan Dasar (KMPD)",
          },
          {
            id: 2,
            title: "KMKOP Izin Bekerja di Ketinggian",
            topic:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 3,
            title: "KMKOP Izin Bekerja di Dekat Air",
            topic:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 4,
            title: "KMKOP Izin Bekerja pada Ruang Terbatas",
            topic:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 5,
            title: "KMKOP Izin Pengangkatan & Pengangkutan Material",
            topic:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 6,
            title: "KMKOP Izin Bekerja Pekerjaan Panas",
            topic:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 7,
            title:
              "KMKOP Izin Bekerja Di Luar Workshop (Mechanic & Helper Mechanic)",
            topic:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 8,
            title: "KMKOP Driver Light Vehicle (LV)",
            topic:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 9,
            title: "KMKOP Operator A2B",
            topic:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 10,
            title: "KMKOP Alat Angkut (Hauler)",
            topic:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 11,
            title: "KMKOP Bekerja Aman Area Taman/ Landscape",
            topic:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 12,
            title: "KMKOP Land Clearing",
            topic:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 13,
            title: "KMKOP Pengoperasian UVS",
            topic:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 14,
            title: "KMKOP Pengelolaan Peledakan (KPP Pertama)",
            topic:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 15,
            title: "KMKOP Eksplorasi",
            topic:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 16,
            title: "KMKOP Dasar K3 Listrik",
            topic:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 17,
            title: "KMKOP Penanganan Hidrocarbon & MSDS",
            topic:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          {
            id: 18,
            title: "KPO Maintenance",
            topic: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 19,
            title: "KPO Project",
            topic: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 20,
            title: "KPO Land Clearing",
            topic: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 21,
            title: "KPO Pengupasan Batuan Penutup (OB Removal)",
            topic: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 22,
            title: "KPO Eksplorasi",
            topic: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 23,
            title: "KPO Penimbunan (Dumping)",
            topic: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 24,
            title: "KPO Pengeboran dan Peledakan (Blasting)",
            topic: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 25,
            title: "KPO Penambangan (Coal Getting)",
            topic: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 26,
            title: "KPO Loading Material Lunak",
            topic: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 27,
            title: "KPO Hauling Road Maintenance (HRM)",
            topic: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 28,
            title: "KPO Coal Processing Plant (CPP)",
            topic: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 29,
            title: "KPO Dewatering",
            topic: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 30,
            title: "KPO Limbah Bahan Berbahaya dan Beracun (B3)",
            topic: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 31,
            title: "KPO Marine",
            topic: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 32,
            title: "KPO Safety",
            topic: "Kompetensi Pengawas Operasional (KPO)",
          },
          {
            id: 33,
            title: "KMPL Mining Eyes",
            topic: "Kelompok Materi Pelatihan Tingkat Lanjut (KMPL)",
          },
          {
            id: 34,
            title: "KMPL Pekerja Konstruksi",
            topic: "Kelompok Materi Pelatihan Tingkat Lanjut (KMPL)",
          },
          {
            id: 35,
            title: "KMPL HIRA",
            topic: "Kelompok Materi Pelatihan Tingkat Lanjut (KMPL)",
          },
          {
            id: 36,
            title: "KMPL Pekerja Kantor dan Dapur",
            topic: "Kelompok Materi Pelatihan Tingkat Lanjut (KMPL)",
          },
          {
            id: 37,
            title: "KMPL Sistem Manajemen Keselamatan Pertambangan (SMKP)",
            topic: "Kelompok Materi Pelatihan Tingkat Lanjut (KMPL)",
          },
          {
            id: 38,
            title: "KMPL Investigasi Kecelakaan - Sistem Bekerja Selamat",
            topic: "Kelompok Materi Pelatihan Tingkat Lanjut (KMPL)",
          },
          {
            id: 39,
            title: "Trainer Instructor Development Program (TIDP) 2022",
            topic: "Trainer Instructor Development Program (TIDP)",
          },
          { id: 40, title: "Fatigue Manajement", topic: "Unknown" },
          { id: 41, title: "Pelatihan CPR AED Pengawas", topic: "Unknown" },
          { id: 42, title: "Pelatihan Self Evacuation", topic: "Unknown" },
          { id: 43, title: "Pelatihan PPGD", topic: "Unknown" },
        ]
      : currentTrainingTitle == "Advance Training"
      ? [
          {
            id: 44,
            title: "Surat Penunjukan Tenaga Teknis",
            topic: "Unknown",
          },
          {
            id: 45,
            title: "Surat Penunjukan Pengawas Teknis",
            topic: "Unknown",
          },
          {
            id: 46,
            title: "Surat Penunjukan Pengawas Operasional",
            topic: "Unknown",
          },
          { id: 47, title: "E-Induksi BUMA", topic: "Unknown" },
          {
            id: 48,
            title: "Pendidikan dan Pelatihan Pengelola Peledakan (KPP Pertama)",
            topic: "Unknown",
          },
          {
            id: 49,
            title: "Frontline Behavior Based Safety",
            topic: "Unknown",
          },
          { id: 50, title: "SINTESIS+", topic: "Unknown" },
        ]
      : currentTrainingTitle == "Program Sintesis"
      ? [
          {
            id: 51,
            title: "KELOMPOK MATERI PELATIHAN DASAR (KMPD) 2022",
            topic: "Unknown",
          },
          {
            id: 52,
            title:
              "Pencegahan Kecelakaan Akibat  Fatigue dengan Konsep SBS (Sistem Bekerja Selamat)",
            topic: "Unknown",
          },
          {
            id: 53,
            title:
              "Pengawasan Langsung Berjarak: Dalam Meningkatkan Keselamatan Kerja & Produktivitas Tambang",
            topic: "Unknown",
          },
        ]
      : currentTrainingTitle == "Weekly Refresh Competency"
      ? [
          {
            id: 54,
            title: "PIT SERVICE - WEEKLY REFRESH COMPETENCY",
            topic: "Unknown",
          },
          {
            id: 55,
            title: "PLANT - WEEKLY REFRESH COMPETENCY",
            topic: "Unknown",
          },
          { id: 56, title: "DO & DON'T EKSPLORASI", topic: "Unknown" },
          {
            id: 57,
            title: "Drill & Blast - WEEKLY REFRESH COMPETENCY",
            topic: "Unknown",
          },
          {
            id: 58,
            title: "MINING & HAULING OPERATION - WEEKLY REFRESH COMPETENCY",
            topic: "Unknown",
          },
          {
            id: 59,
            title: "DO AND DON'T MARINE - WEEKLY REFRESH COMPETENCY",
            topic: "Unknown",
          },
        ]
      : [
          {
            id: 60,
            title: "Surat Penunjukan Tenaga Teknis",
            topic: "Unknown",
          },
        ];

  const filterData =
    currentTrainingTitle == "Pelatihan-Uji Online SIMAK dan KPO"
      ? [
          { id: 1, topic: "Kelompok Materi Pelatihan Dasar (KMPD)" },
          {
            id: 2,
            topic:
              "Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)",
          },
          { id: 3, topic: "Kompetensi Pengawas Operasional (KPO)" },
          {
            id: 4,
            topic: "Kelompok Materi Pelatihan Tingkat Lanjut (KMPL)",
          },
          { id: 5, topic: "Trainer Instructor Development Program (TIDP)" },
          { id: 6, topic: "Unknown" },
        ]
      : [{ id: 1, topic: "Unknown" }];

  const trainingArr = trainingData.map((data, index) => {
    if (index != 0) {
      return (
        <button
          className={
            "w-100 text-start px-3 py-2" +
            (currentTrainingTitle == data.title ? " active" : "")
          }
          onClick={() => {
            setCurrentTrainingTitle(data.title);
            setCurrentSubTrainingTitle();
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
              (currentTrainingTitle == data.title ? " active" : "")
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
              <div className="col-9">{data.title}</div>
              <div className="collapse-icon d-flex justify-content-end align-items-center col-3">
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
                    (currentSubTrainingTitle == subData
                      ? " active-sub-training"
                      : "")
                  }
                  onClick={() => {
                    setCurrentTrainingTitle(data.title);
                    setCurrentSubTrainingTitle(subData);
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
    if (filterTopic != null) {
      if (filterTopic == data.topic) {
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
                              setCurrentTrainingTitle(currentTrainingTitle);
                              setCurrentCourseTitle(data.title);
                              setCurrentCourseId(data.id);
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
                              setCurrentTrainingTitle(currentTrainingTitle);
                              setCurrentCourseTitle(data.title);
                              setCurrentCourseId(data.id);
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
                            setCurrentTrainingTitle(currentTrainingTitle);
                            setCurrentCourseTitle(data.title);
                            setCurrentCourseId(data.id);
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
          (filterTopic == data.topic ? " filter-course-active" : "")
        }
        onClick={() => {
          filterTopic != data.topic
            ? setFilterTopic(data.topic)
            : setFilterTopic(null);
        }}
      >
        {data.topic}
      </button>
    );
  });

  return (
    <div className="training-section pt-4">
      <div className="container-lg">
        <div className="row">
          <div className="col-3">
            <div className="training-navigation">
              <div className="d-flex justify-content-center pt-3 pb-1">
                <h6>Kategori</h6>
              </div>
              <div className="d-grid">{trainingArr}</div>
            </div>
          </div>
          <div className="col-9">
            <div className="d-flex search-container mb-1">
              <form className="mb-1 w-100" role="search">
                <input
                  className="form-control ps-5"
                  type="search"
                  placeholder="Cari kursus yang ingin anda ikuti"
                  aria-label="Search"
                  onClick={() => {
                    setFilterTopic();
                  }}
                  onChange={handleSearch}
                />
              </form>
              <div className="d-flex align-items-center">
                <Icon className="icon" icon="uil:search" />
              </div>
            </div>
            <div className="topic px-2 py-1 mb-2">
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <label className="me-2">Topik:</label>
                </div>
                <ScrollContainer className="scroll-container topic-collection d-flex overflow-auto gap-2 p-1">
                  {filterArr}
                </ScrollContainer>
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
