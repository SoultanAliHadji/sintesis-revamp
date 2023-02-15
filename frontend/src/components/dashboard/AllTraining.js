import "../../App.css";
import { trainingData } from "../Data";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

const AllTraining = ({
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

  const filterData =
    currentTrainingTitle == trainingData[0].title
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
            {trainingData[0].category.map((subData) => {
              return (
                <button
                  className={
                    "w-100 text-start d-flex align-items-center px-4 py-2" +
                    (currentSubTrainingTitle == subData.title
                      ? " active-sub-training"
                      : "")
                  }
                  onClick={() => {
                    setCurrentTrainingTitle(data.title);
                    setCurrentSubTrainingTitle(subData.title);
                    window.scrollTo(0, 0);
                  }}
                >
                  <div>{subData.title}</div>
                </button>
              );
            })}
          </div>
        </div>
      );
    }
  });

  const courseArr = (
    currentTrainingTitle == trainingData[0].title
      ? trainingData[0].course
      : currentTrainingTitle == trainingData[1].title
      ? trainingData[1].course
      : currentTrainingTitle == trainingData[2].title
      ? trainingData[2].course
      : currentTrainingTitle == trainingData[3].title
      ? trainingData[3].course
      : trainingData[4].course
  ).map((data) => {
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
            : setFilterTopic();
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
