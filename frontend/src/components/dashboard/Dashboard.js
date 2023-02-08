import "../../App.css";
import AllTraining from "./AllTraining";
import MyTraining from "./MyTraining";
import MyCertificate from "./MyCertificate";
import Training from "./trainingContents/Training";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const Dashboard = ({
  handleRoute,
  handleRouteDetail,
  currentPageDetail,
  currentPageDetailTraining,
}) => {
  const [currentPage, setCurrentPage] = useState(
    currentPageDetail == null ? "allTraining" : currentPageDetail
  );
  const [trainingTitle, setTrainingTitle] = useState();
  const [courseId, setCourseId] = useState();
  const [courseTitle, setCourseTitle] = useState();
  const [currentTrainingPage, setCurrentTrainingPage] = useState();

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
    setCourseId(null)
  }, [currentPageDetailTraining]);

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
          <div>
            {currentPage == "allTraining" ? (
              <AllTraining
                handleTrainingTitle={handleTrainingTitle}
                handleCourseId={handleCourseId}
                handleCourseTitle={handleCourseTitle}
                currentTrainingPage={currentTrainingPage}
              />
            ) : currentPage == "myTraining" ? (
              <MyTraining />
            ) : (
              <MyCertificate />
            )}
          </div>
        </div>
      ) : (
        <Training
          handleRoute={handleRoute}
          trainingTitle={trainingTitle}
          courseTitle={courseTitle}
          handleCourseId={handleCourseId}
          handleCurrentTrainingPage={handleCurrentTrainingPage}
        />
      )}
    </div>
  );
};

export default Dashboard;
