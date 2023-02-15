import "../../App.css";
import AllTraining from "./AllTraining";
import MyTraining from "./MyTraining";
import MyCertificate from "./MyCertificate";
import Training from "./training/Training";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const Dashboard = ({
  setCurrentPage,
  currentPageDetail,
  setCurrentPageDetail,
  trainingData,
  currentTrainingTitle,
  setCurrentTrainingTitle,
  currentSubTrainingTitle,
  setCurrentSubTrainingTitle,
  currentCourseId,
  setCurrentCourseId,
  currentCourseTitle,
  setCurrentCourseTitle,
  highestMarkPostTest,
  setHighestMarkPostTest,
  highestScorePreTest,
  setHighestScorePreTest,
  highestScorePostTest,
  setHighestScorePostTest,
  sectionData,
  setSectionData,
  questionData,
  recordPreTest,
  setRecordPreTest,
  recordPostTest,
  setRecordPostTest,
  progress,
  setProgress,
}) => {
  return (
    <div>
      {currentCourseId == null ? (
        <div className="dashboard-page">
          <div className="account-section pt-4">
            <div className="container-lg">
              <div className="title d-flex mb-4">
                <div className="d-flex align-items-center me-4">
                  <a
                    href="#"
                    onClick={() => {
                      setCurrentPage("landing");
                      setCurrentPageDetail(null);
                    }}
                  >
                    Home
                  </a>
                </div>
                <Icon
                  className="icon me-4"
                  icon="material-symbols:chevron-right-rounded"
                />
                <div className="d-flex align-items-center">
                  <label>Dashboard</label>
                </div>
              </div>
              <div className="account d-flex mb-4">
                <img
                  className="me-3"
                  src={require("../../assets/user.png")}
                  alt=""
                />
                <div className="d-flex align-items-center">
                  <div>
                    <h5>Jhon Doe</h5>
                    <a href="#" className="d-flex">
                      <div className="d-flex align-items-center">
                        <Icon className="icon me-2" icon="mdi:pencil-outline" />
                      </div>
                      <div className="d-flex align-items-center">
                        <div>Edit Profile</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="navigation row">
                <div className="col-6">
                  <div className="row">
                    <div
                      className={
                        "col-3" +
                        (currentPageDetail == "allTraining" ? " active" : "")
                      }
                    >
                      <div className="d-flex justify-content-center mb-1">
                        <label
                          onClick={() => {
                            setCurrentPageDetail("allTraining");
                            setCurrentTrainingTitle(
                              "Pelatihan-Uji Online SIMAK dan KPO"
                            );
                            setCurrentSubTrainingTitle(
                              "Pelatihan-Uji Online SIMAK dan KPO 2022"
                            );
                          }}
                        >
                          Semua Training
                        </label>
                      </div>
                      <div className="line"></div>
                    </div>
                    <div
                      className={
                        "col-3" +
                        (currentPageDetail == "myTraining" ? " active" : "")
                      }
                    >
                      <div className="d-flex justify-content-center mb-1">
                        <label
                          onClick={() => {
                            setCurrentPageDetail("myTraining");
                          }}
                        >
                          Training Saya
                        </label>
                      </div>
                      <div className="line"></div>
                    </div>
                    <div
                      className={
                        "col-3" +
                        (currentPageDetail == "myCertificate" ? " active" : "")
                      }
                    >
                      <div className="d-flex justify-content-center mb-1">
                        <label
                          onClick={() => {
                            setCurrentPageDetail("myCertificate");
                          }}
                        >
                          Sertifikat Saya
                        </label>
                      </div>
                      <div className="line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            {currentPageDetail == "allTraining" ? (
              <AllTraining
                trainingData={trainingData}
                currentTrainingTitle={currentTrainingTitle}
                setCurrentTrainingTitle={setCurrentTrainingTitle}
                currentSubTrainingTitle={currentSubTrainingTitle}
                setCurrentSubTrainingTitle={setCurrentSubTrainingTitle}
                setCurrentCourseId={setCurrentCourseId}
                setCurrentCourseTitle={setCurrentCourseTitle}
                progress={progress}
              />
            ) : currentPageDetail == "myTraining" ? (
              <MyTraining
                setCurrentCourseId={setCurrentCourseId}
                setCurrentCourseTitle={setCurrentCourseTitle}
                progress={progress}
              />
            ) : (
              <MyCertificate />
            )}
          </div>
        </div>
      ) : (
        <Training
          setCurrentPage={setCurrentPage}
          currentPageDetail={currentPageDetail}
          setCurrentPageDetail={setCurrentPageDetail}
          currentTrainingTitle={currentTrainingTitle}
          setCurrentTrainingTitle={setCurrentTrainingTitle}
          setCurrentCourseId={setCurrentCourseId}
          currentCourseTitle={currentCourseTitle}
          sectionData={sectionData}
          setSectionData={setSectionData}
          questionData={questionData}
          highestMarkPostTest={highestMarkPostTest}
          setHighestMarkPostTest={setHighestMarkPostTest}
          highestScorePreTest={highestScorePreTest}
          setHighestScorePreTest={setHighestScorePreTest}
          highestScorePostTest={highestScorePostTest}
          setHighestScorePostTest={setHighestScorePostTest}
          recordPreTest={recordPreTest}
          setRecordPreTest={setRecordPreTest}
          recordPostTest={recordPostTest}
          setRecordPostTest={setRecordPostTest}
          progress={progress}
          setProgress={setProgress}
        />
      )}
    </div>
  );
};

export default Dashboard;
