import "../../App.css";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const Training = ({ handleRoute, trainingTitle, courseTitle, handleCourseId }) => {
  const progress = 85;

  return (
    <div className="training-page">
      <div className="header-section py-4">
        <div className="container-lg">
          <div className="title">
            <div className="d-flex mb-4">
              <div className="d-flex align-items-center me-4">
                <a href="#" onClick={() => {handleRoute("landing")}}>Home</a>
              </div>
              <Icon
                className="icon me-4"
                icon="material-symbols:chevron-right-rounded"
              />
              <div className="d-flex align-items-center me-4">
                <a href="#" onClick={() => {handleCourseId(null)}}>Dashboard</a>
              </div>
              <Icon
                className="icon me-4"
                icon="material-symbols:chevron-right-rounded"
              />
              <div className="d-flex align-items-center me-4">
                <a href="#" onClick={() => {handleCourseId(null)}}>{trainingTitle}</a>
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
          <div className="col-3 p-0">
            <div className="px-2 pt-3 pb-1 d-flex justify-content-center">
              <h6>Summary KMPD</h6>
            </div>
            <div className="line"></div>
            <button className="w-100 text-start d-flex align-items-center px-2 py-3">
              <div className="check-icon d-flex me-1">
                <Icon
                  className="icon active"
                  icon="material-symbols:check-circle-rounded"
                />
              </div>
              <div className="d-flex me-1">
                <Icon
                  className="icon"
                  icon="fluent:clipboard-task-list-rtl-20-regular"
                />
              </div>
              <div className="d-flex">
                <div>Pre-Test</div>
              </div>
            </button>
            <button className="w-100 text-start d-flex align-items-center px-2 py-3">
              <div className="check-icon d-flex me-1">
                <Icon
                  className="icon active"
                  icon="material-symbols:check-circle-rounded"
                />
              </div>
              <div className="d-flex me-1">
                <Icon
                  className="icon"
                  icon="material-symbols:play-circle-outline-rounded"
                />
              </div>
              <div className="d-flex">
                <div>Video H5P</div>
              </div>
            </button>
            <button className="w-100 text-start d-flex align-items-center px-2 py-3">
              <div className="check-icon d-flex me-1">
                <Icon
                  className="icon"
                  icon="material-symbols:check-circle-rounded"
                />
              </div>
              <div className="d-flex me-1">
                <Icon
                  className="icon"
                  icon="material-symbols:play-circle-outline-rounded"
                />
              </div>
              <div className="d-flex">
                <div>Video Golden RUles</div>
              </div>
            </button>
            <button className="w-100 text-start d-flex align-items-center px-2 py-3">
              <div className="check-icon d-flex me-1">
                <Icon
                  className="icon"
                  icon="material-symbols:check-circle-rounded"
                />
              </div>
              <div className="d-flex me-1">
                <Icon className="icon" icon="bi:filetype-doc" />
              </div>
              <div className="d-flex">
                <div>KMPD Berbasis Perilaku dan Golden Rules</div>
              </div>
            </button>
            <button className="w-100 text-start d-flex align-items-center px-2 py-3">
              <div className="check-icon d-flex me-1">
                <Icon
                  className="icon"
                  icon="material-symbols:check-circle-rounded"
                />
              </div>
              <div className="d-flex me-1">
                <Icon
                  className="icon"
                  icon="fluent:clipboard-task-list-rtl-20-regular"
                />
              </div>
              <div className="d-flex">
                <div>Post-Test</div>
              </div>
            </button>
            <button className="w-100 text-start d-flex align-items-center px-2 py-3">
              <div className="check-icon d-flex me-1">
                <Icon
                  className="icon"
                  icon="material-symbols:check-circle-rounded"
                />
              </div>
              <div className="d-flex me-1">
                <Icon className="icon" icon="fluent:certificate-24-regular" />
              </div>
              <div className="d-flex">
                <div>
                  Sertifikat Kelompok Materi Pelatihan Dasar (KMPD) 2022
                </div>
              </div>
            </button>
          </div>
          <div className="col-9 p-0">sjn</div>
        </div>
      </div>
    </div>
  );
};

export default Training;
