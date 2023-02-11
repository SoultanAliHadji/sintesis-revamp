import "../../App.css";
import AllTraining from "./AllTraining";
import MyTraining from "./MyTraining";
import MyCertificate from "./MyCertificate";
import Training from "./trainingComponents/Training";
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
  progress,
  setProgress,
}) => {
  const [highestMarkPostTest, setHighestMarkPostTest] = useState();
  const [highestScorePreTest, setHighestScorePreTest] = useState();
  const [highestScorePostTest, setHighestScorePostTest] = useState();

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
