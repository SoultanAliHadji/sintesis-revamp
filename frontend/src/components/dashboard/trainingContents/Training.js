import "../../../App.css";
import SectionPreTest from "./SectionPreTest";
import SectionH5P from "./SectionH5P";
import SectionPostTest from "./SectionPostTest";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import axios from "axios";

const Training = ({
  handleRoute,
  trainingTitle,
  courseTitle,
  handleCourseId,
  handleCurrentTrainingPage,
}) => {
  const [sectionData, setSectionData] = useState();
  const progress = 85;
  const [currentSection, setCurrentSection] = useState("Pre-Test");
  const [currentSubSection, setCurrentSubSection] = useState();
  const [collapse1, setCollapse1] = useState(false);

  useEffect(() => {
    axios
      .get("json/sectiondata.json")
      .then((res) => {
        setSectionData(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  }, []);

  

  return (
    <div className="training-page">
      <div className="header-section py-4">
        <div className="container-lg">
          <div className="title">
            <div className="d-flex mb-4">
              <div className="d-flex align-items-center me-4">
                <a
                  href="#"
                  onClick={() => {
                    handleRoute("landing");
                  }}
                >
                  Home
                </a>
              </div>
              <Icon
                className="icon me-4"
                icon="material-symbols:chevron-right-rounded"
              />
              <div className="d-flex align-items-center me-4">
                <a
                  href="#"
                  onClick={() => {
                    handleCourseId(null);
                  }}
                >
                  Dashboard
                </a>
              </div>
              <Icon
                className="icon me-4"
                icon="material-symbols:chevron-right-rounded"
              />
              <div className="d-flex align-items-center me-4">
                <a
                  href="#"
                  onClick={() => {
                    handleCourseId(null);
                    handleCurrentTrainingPage(trainingTitle);
                  }}
                >
                  {trainingTitle}
                </a>
              </div>
              <Icon
                className="icon me-4"
                icon="material-symbols:chevron-right-rounded"
              />
              <div className="d-flex align-items-center">
                <label>{courseTitle}</label>
              </div>
            </div>
            <div>
              <h5>{courseTitle}</h5>
            </div>
          </div>
          <div>
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
          </div>
        </div>
      </div>
      <div className="test-section">
        <div className="row m-0 p-0">
          <div className="test-nav col-3 p-0">
            <div className="px-2 pt-3 pb-1 d-flex justify-content-center">
              <h6>Summary KMPD</h6>
            </div>
            <div className="line"></div>
            <button
              className={
                "w-100 text-start d-flex align-items-center px-2 py-3" +
                (currentSection == "Pre-Test" ? " active-section" : "")
              }
              onClick={() => {
                setCurrentSection("Pre-Test");
              }}
            >
              <div className="check-icon me-1">
                <Icon
                  className="icon done"
                  icon="material-symbols:check-circle-rounded"
                />
              </div>
              <Icon
                className="icon me-1"
                icon="fluent:clipboard-task-list-rtl-20-regular"
              />
              <div>Pre-Test</div>
            </button>
            <div className="collapse-section">
              <button
                className={
                  "w-100 text-start d-flex align-items-center px-2 py-3" +
                  (currentSection == "Video H5P" ? " active-section" : "")
                }
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={() => {
                  collapse1 == false ? setCollapse1(true) : setCollapse1(false);
                }}
              >
                <div className="row w-100 d-flex align-items-center">
                  <div className="d-flex align-items-center col-6 pe-0">
                    <div className="check-icon me-1">
                      <Icon
                        className="icon done"
                        icon="material-symbols:check-circle-rounded"
                      />
                    </div>
                    <div>Video H5P</div>
                  </div>
                  <div className="collapse-icon d-flex justify-content-end col-6 pe-0">
                    <Icon
                      className={
                        "icon" + (collapse1 == true ? " active-collapse" : "")
                      }
                      icon="material-symbols:chevron-right-rounded"
                    />
                  </div>
                </div>
              </button>
              <div className="collapse" id="collapseExample">
                <button
                  className={
                    "w-100 text-start d-flex align-items-center ps-1 py-3" +
                    (currentSection == "Video H5P" &&
                    currentSubSection ==
                      "1. Opening dan Perundang-undangan Intera..."
                      ? " active-sub-section"
                      : "")
                  }
                  onClick={() => {
                    setCurrentSubSection(
                      "1. Opening dan Perundang-undangan Intera..."
                    );
                    setCurrentSection("Video H5P");
                  }}
                >
                  <div className="check-icon d-flex me-1">
                    <Icon
                      className="icon done"
                      icon="material-symbols:check-circle-rounded"
                    />
                  </div>
                  <Icon
                    className="icon me-1"
                    icon="material-symbols:play-circle-outline-rounded"
                  />
                  <div>1. Opening dan Perundang-undangan Intera...</div>
                </button>
                <button
                  className={
                    "w-100 text-start d-flex align-items-center ps-1 py-3" +
                    (currentSection == "Video H5P" &&
                    currentSubSection == "2. Mindset K3"
                      ? " active-sub-section"
                      : "")
                  }
                  onClick={() => {
                    setCurrentSubSection("2. Mindset K3");
                    setCurrentSection("Video H5P");
                  }}
                >
                  <div className="check-icon d-flex me-1">
                    <Icon
                      className="icon done"
                      icon="material-symbols:check-circle-rounded"
                    />
                  </div>
                  <Icon
                    className="icon me-1"
                    icon="material-symbols:play-circle-outline-rounded"
                  />
                  <div>2. Mindset K3</div>
                </button>
                <button
                  className={
                    "w-100 text-start d-flex align-items-center ps-1 py-3" +
                    (currentSection == "Video H5P" &&
                    currentSubSection == "3. Pengertian Kecelakaan Kerja"
                      ? " active-sub-section"
                      : "")
                  }
                  onClick={() => {
                    setCurrentSubSection("3. Pengertian Kecelakaan Kerja");
                    setCurrentSection("Video H5P");
                  }}
                >
                  <div className="check-icon d-flex me-1">
                    <Icon
                      className="icon done"
                      icon="material-symbols:check-circle-rounded"
                    />
                  </div>
                  <Icon
                    className="icon me-1"
                    icon="material-symbols:play-circle-outline-rounded"
                  />
                  <div>3. Pengertian Kecelakaan Kerja</div>
                </button>
                <button
                  className={
                    "w-100 text-start d-flex align-items-center ps-1 py-3" +
                    (currentSection == "Video H5P" &&
                    currentSubSection == "4. APD dan Kegunaannya"
                      ? " active-sub-section"
                      : "")
                  }
                  onClick={() => {
                    setCurrentSubSection("4. APD dan Kegunaannya");
                    setCurrentSection("Video H5P");
                  }}
                >
                  <div className="check-icon d-flex me-1">
                    <Icon
                      className="icon done"
                      icon="material-symbols:check-circle-rounded"
                    />
                  </div>
                  <Icon
                    className="icon me-1"
                    icon="material-symbols:play-circle-outline-rounded"
                  />
                  <div>4. APD dan Kegunaannya</div>
                </button>
                <button
                  className={
                    "w-100 text-start d-flex align-items-center ps-1 py-3" +
                    (currentSection == "Video H5P" &&
                    currentSubSection == "5. Konsep Penataan Lingkungan Kerja"
                      ? " active-sub-section"
                      : "")
                  }
                  onClick={() => {
                    setCurrentSubSection("5. Konsep Penataan Lingkungan Kerja");
                    setCurrentSection("Video H5P");
                  }}
                >
                  <div className="check-icon d-flex me-1">
                    <Icon
                      className="icon done"
                      icon="material-symbols:check-circle-rounded"
                    />
                  </div>
                  <Icon
                    className="icon me-1"
                    icon="material-symbols:play-circle-outline-rounded"
                  />
                  <div>5. Konsep Penataan Lingkungan Kerja</div>
                </button>
              </div>
            </div>
            <button
              className={
                "w-100 text-start d-flex align-items-center px-2 py-3" +
                (currentSection == "Video Golden RUles"
                  ? " active-section"
                  : "")
              }
              onClick={() => {
                setCurrentSection("Video Golden RUles");
              }}
            >
              <div className="check-icon me-1">
                <Icon
                  className="icon done"
                  icon="material-symbols:check-circle-rounded"
                />
              </div>
              <Icon
                className="icon me-1"
                icon="material-symbols:play-circle-outline-rounded"
              />
              <div>Video Golden Rules</div>
            </button>
            <button
              className={
                "w-100 text-start d-flex align-items-center px-2 py-3" +
                (currentSection == "KMPD Berbasis Perilaku dan Golden Rules"
                  ? " active-section"
                  : "")
              }
              onClick={() => {
                setCurrentSection("KMPD Berbasis Perilaku dan Golden Rules");
              }}
            >
              <div className="check-icon me-1">
                <Icon
                  className="icon done"
                  icon="material-symbols:check-circle-rounded"
                />
              </div>
              <Icon className="icon me-1" icon="bi:filetype-doc" />
              <div>KMPD Berbasis Perilaku dan Golden Rules</div>
            </button>
            <button
              className={
                "w-100 text-start d-flex align-items-center px-2 py-3" +
                (currentSection == "Post-Test" ? " active-section" : "")
              }
              onClick={() => {
                setCurrentSection("Post-Test");
              }}
            >
              <div className="check-icon me-1">
                <Icon
                  className="icon done"
                  icon="material-symbols:check-circle-rounded"
                />
              </div>
              <Icon
                className="icon me-1"
                icon="fluent:clipboard-task-list-rtl-20-regular"
              />
              <div>Post-Test</div>
            </button>
            <button
              className={
                "w-100 text-start d-flex align-items-center px-2 py-3" +
                (currentSection == "Sertifikat" + { courseTitle }
                  ? " active-section"
                  : "")
              }
              onClick={() => {
                setCurrentSection("Sertifikat" + { courseTitle });
              }}
            >
              <div className="check-icon me-1">
                <Icon
                  className="icon done"
                  icon="material-symbols:check-circle-rounded"
                />
              </div>
              <Icon
                className="icon me-1"
                icon="fluent:certificate-24-regular"
              />
              <div>Sertifikat {courseTitle}</div>
            </button>
          </div>
          <div className="col-9 p-4">
            {currentSection == "Pre-Test" ? (
              <SectionPreTest />
            ) : currentSubSection ==
              "1. Opening dan Perundang-undangan Intera..." ? (
              <SectionH5P />
            ) : currentSection == "Post-Test" ? (
              <SectionPostTest />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
