import "../../App.css";
import AllTraining from "./AllTraining";
import MyTraining from "./MyTraining";
import MyCertificate from "./MyCertificate";
import Training from "./trainingComponents/Training";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const Dashboard = ({
  handleRoute,
  handleRouteDetail,
  currentPageDetail,
  currentTrainingTitle,
  currentCourseTitle,
  currentCourseId,
}) => {
  const [currentPage, setCurrentPage] = useState(
    currentPageDetail == null ? "allTraining" : currentPageDetail
  );
  const [trainingTitle, setTrainingTitle] = useState();
  const [courseId, setCourseId] = useState();
  const [courseTitle, setCourseTitle] = useState();
  const [currentTrainingPage, setCurrentTrainingPage] = useState();
  const [highestScorePreTest, setHighestScorePreTest] = useState();
  const [highestScorePostTest, setHighestScorePostTest] = useState();
  const [progress, setProgress] = useState(35);

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

  const handleTrainingTitle = (data) => {
    setTrainingTitle(data);
  };

  const handleCourseId = (data) => {
    setCourseId(data);
  };

  const handleCourseTitle = (data) => {
    setCourseTitle(data);
  };

  const handleCurrentTrainingPage = (data) => {
    setCurrentTrainingPage(data);
  };

  useEffect(() => {
    setCurrentPage(currentPageDetail);
    setCourseId(null);
  }, [currentPageDetail]);

  useEffect(() => {
    setTrainingTitle(currentTrainingTitle);
    setCourseTitle(currentCourseTitle);
    setCourseId(currentCourseId);
  }, [currentCourseTitle]);

  return (
    <div>
      {courseId == null ? (
        <div className="dashboard-page">
          <div className="account-section pt-4">
            <div className="container-lg">
              <div className="title d-flex mb-4">
                <div className="d-flex align-items-center me-4">
                  <a
                    href="#"
                    onClick={() => {
                      handleRoute("landing");
                      handleRouteDetail(null);
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
                        (currentPage == "allTraining" ? " active" : "")
                      }
                    >
                      <div className="d-flex justify-content-center mb-1">
                        <label
                          onClick={() => {
                            setCurrentPage("allTraining");
                            handleRouteDetail("allTraining");
                          }}
                        >
                          Semua Training
                        </label>
                      </div>
                      <div className="line"></div>
                    </div>
                    <div
                      className={
                        "col-3" + (currentPage == "myTraining" ? " active" : "")
                      }
                    >
                      <div className="d-flex justify-content-center mb-1">
                        <label
                          onClick={() => {
                            setCurrentPage("myTraining");
                            handleRouteDetail("myTraining");
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
                        (currentPage == "myCertificate" ? " active" : "")
                      }
                    >
                      <div className="d-flex justify-content-center mb-1">
                        <label
                          onClick={() => {
                            setCurrentPage("myCertificate");
                            handleRouteDetail("myCertificate");
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
            {currentPage == "allTraining" ? (
              <AllTraining
                handleTrainingTitle={handleTrainingTitle}
                handleCourseId={handleCourseId}
                handleCourseTitle={handleCourseTitle}
                currentTrainingPage={currentTrainingPage}
                progress={progress}
              />
            ) : currentPage == "myTraining" ? (
              <MyTraining
                handleCourseId={handleCourseId}
                handleCourseTitle={handleCourseTitle}
                progress={progress}
              />
            ) : (
              <MyCertificate />
            )}
          </div>
        </div>
      ) : (
        <Training
          handleRoute={handleRoute}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          trainingTitle={trainingTitle}
          courseTitle={courseTitle}
          handleCourseId={handleCourseId}
          handleCurrentTrainingPage={handleCurrentTrainingPage}
          sectionData={sectionData}
          setSectionData={setSectionData}
          questionData={questionData}
          recordPreTest={recordPreTest}
          setRecordPreTest={setRecordPreTest}
          recordPostTest={recordPostTest}
          setRecordPostTest={setRecordPostTest}
          highestScorePreTest={highestScorePreTest}
          setHighestScorePreTest={setHighestScorePreTest}
          highestScorePostTest={highestScorePostTest}
          setHighestScorePostTest={setHighestScorePostTest}
          progress={progress}
          setProgress={setProgress}
        />
      )}
    </div>
  );
};

export default Dashboard;
