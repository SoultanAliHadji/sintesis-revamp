import "../../../App.css";
import SectionPrePostTest from "./SectionPrePostTest";
import SectionH5P from "./SectionH5P";
import SectionVideo from "./SectionVideo";
import SectionCourse from "./SectionCourse";
import SectionCertificate from "./SectionCertificate";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const Training = ({
  handleRoute,
  trainingTitle,
  courseTitle,
  handleCourseId,
  handleCurrentTrainingPage,
  sectionData,
  setSectionData,
  questionData,
  recordPreTest,
  setRecordPreTest,
  recordPostTest,
  setRecordPostTest,
  highestScorePreTest,
  setHighestScorePreTest,
  highestScorePostTest,
  setHighestScorePostTest,
  progress,
  setProgress,
}) => {
  const [currentSubSection, setCurrentSubSection] = useState();
  const [collapse1, setCollapse1] = useState(false);
  const [currentSection, setCurrentSection] = useState(sectionData[0].section);

  useEffect(() => {
    setCurrentSection(sectionData[0].section);
  }, [courseTitle]);

  const handleUpdateSection5 = (data) => {
    let newArr = [...sectionData];
    newArr[2] = { id: 3, section: "Video Golden Rules", status: data };
    newArr[3] = {
      id: 4,
      section: "KMPD Berbasis Perilaku dan Golden Rules",
      status: data,
    };
    newArr[4] = { id: 5, section: "Post-Test", status: data };
    setSectionData(newArr);
    setProgress(99);
  };

  const handleUpdateSection6 = (data) => {
    let newArr = [...sectionData];
    newArr[5] = {
      id: 6,
      section: "Sertifikat Kelompok Materi Pelatihan Dasar (KMPD)",
      status: data,
    };
    setSectionData(newArr);
    setProgress(100)
  };

  const sectionArr = sectionData.map((data) => {
    return (
      <div>
        {data.section != "Video H5P" ? (
          <button
            className={
              "w-100 text-start d-flex align-items-center px-2 py-3" +
              (currentSection == data.section ? " active-section" : "")
            }
            onClick={() => {
              setCurrentSection(data.section);
              window.scrollTo(0, 0);
            }}
          >
            <div className="check-icon me-1">
              <Icon
                className={"icon " + data.status}
                icon="material-symbols:check-circle-rounded"
              />
            </div>
            <Icon
              className="icon me-1"
              icon={
                data.section == "Pre-Test"
                  ? "fluent:clipboard-task-list-rtl-20-regular"
                  : data.section == "Video Golden Rules"
                  ? "material-symbols:play-circle-outline-rounded"
                  : data.section == "KMPD Berbasis Perilaku dan Golden Rules"
                  ? "bi:filetype-doc"
                  : data.section == "Post-Test"
                  ? "fluent:clipboard-task-list-rtl-20-regular"
                  : data.section ==
                    "Sertifikat Kelompok Materi Pelatihan Dasar (KMPD)"
                  ? "fluent:certificate-24-regular"
                  : ""
              }
            />
            <div>{data.section}</div>
          </button>
        ) : (
          <div className="collapse-section">
            <button
              className={
                "w-100 text-start d-flex align-items-center px-2 py-3" +
                (currentSection == data.section ? " active-section" : "")
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
                  <div>{data.section}</div>
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
                  (currentSection == data.section &&
                  currentSubSection ==
                    "1. Opening dan Perundang-undangan Intera..."
                    ? " active-sub-section"
                    : "")
                }
                onClick={() => {
                  setCurrentSubSection(
                    "1. Opening dan Perundang-undangan Intera..."
                  );
                  setCurrentSection(data.section);
                  window.scrollTo(0, 0);
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
                  (currentSection == data.section &&
                  currentSubSection == "2. Mindset K3"
                    ? " active-sub-section"
                    : "")
                }
                onClick={() => {
                  setCurrentSubSection("2. Mindset K3");
                  setCurrentSection(data.section);
                  window.scrollTo(0, 0);
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
                  (currentSection == data.section &&
                  currentSubSection == "3. Pengertian Kecelakaan Kerja"
                    ? " active-sub-section"
                    : "")
                }
                onClick={() => {
                  setCurrentSubSection("3. Pengertian Kecelakaan Kerja");
                  setCurrentSection(data.section);
                  window.scrollTo(0, 0);
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
                  (currentSection == data.section &&
                  currentSubSection == "4. APD dan Kegunaannya"
                    ? " active-sub-section"
                    : "")
                }
                onClick={() => {
                  setCurrentSubSection("4. APD dan Kegunaannya");
                  setCurrentSection(data.section);
                  window.scrollTo(0, 0);
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
                  (currentSection == data.section &&
                  currentSubSection == "5. Konsep Penataan Lingkungan Kerja"
                    ? " active-sub-section"
                    : "")
                }
                onClick={() => {
                  setCurrentSubSection("5. Konsep Penataan Lingkungan Kerja");
                  setCurrentSection(data.section);
                  window.scrollTo(0, 0);
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
        )}
      </div>
    );
  });

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
                    handleCurrentTrainingPage(null);
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
            <div>{sectionArr}</div>
          </div>
          <div className="col-9 p-4">
            {currentSection == "Pre-Test" || currentSection == "Post-Test" ? (
              <SectionPrePostTest
                questionData={questionData}
                recordPreTest={recordPreTest}
                setRecordPreTest={setRecordPreTest}
                recordPostTest={recordPostTest}
                setRecordPostTest={setRecordPostTest}
                currentSection={currentSection}
                handleUpdateSection5={handleUpdateSection5}
                highestScorePreTest={highestScorePreTest}
                setHighestScorePreTest={setHighestScorePreTest}
                highestScorePostTest={highestScorePostTest}
                setHighestScorePostTest={setHighestScorePostTest}
              />
            ) : currentSection == "Video H5P" &&
              currentSubSection ==
                "1. Opening dan Perundang-undangan Intera..." ? (
              <SectionH5P />
            ) : currentSection == "Video Golden Rules" ? (
              <SectionVideo />
            ) : currentSection == "KMPD Berbasis Perilaku dan Golden Rules" ? (
              <SectionCourse />
            ) : currentSection ==
              "Sertifikat Kelompok Materi Pelatihan Dasar (KMPD)" ? (
              <SectionCertificate
                progress={progress}
                handleUpdateSection6={handleUpdateSection6}
              />
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
