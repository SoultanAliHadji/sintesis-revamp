import "../../../App.css";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const SectionCertificate = ({ progress }) => {
  return (
    <div className="section-certificate px-3 py-4 h-100">
      <div className="row">
        <div className="col-7">
          <div className="certificate-container">
            <div className="img-container p-4">
              <img
                className="w-100 h-100"
                src={require("../../../assets/certificate.png")}
                alt=""
              />
              <div className="d-flex justify-content-center mt-3">
                <button className="px-3 py-2">Download Sertifikat</button>
              </div>
            </div>
            {progress < 100 ? (
              <div className="certificate-lock w-100 h-100 d-flex justify-content-center align-items-center">
                <div>
                  <div className="d-flex justify-content-center">
                    <Icon className="icon mb-3" icon="bxs:lock-alt" />
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="progress me-3">
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
                    <label>3/5 Activity</label>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="col">
          <div className="certificate-desc h-100 py-2">
            <div className="w-100">
              <div className="mb-5">
                <h6>Selamat! Anda sudah lulus Training ini</h6>
                <label>Silahkan unduh sertifikat anda</label>
              </div>
              <div className="row text-center">
                <div className="col d-grid">
                  <div>
                    <label className="label-bold">Benar</label>{" "}
                    <label>/ 30,00</label>
                  </div>
                  <div className="mark-score-container">
                    <label>30,00</label>
                    {progress < 100 ? (
                      <div className="d-flex justify-content-center">
                        <div className="mark-score-lock px-2">
                          <label>30,00</label>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="col d-grid">
                  <div>
                    <label className="label-bold">Nilai</label>{" "}
                    <label>/ 100,00</label>
                  </div>
                  <div className="mark-score-container">
                    <label>100,00</label>
                    {progress < 100 ? (
                      <div className="d-flex justify-content-center">
                        <div className="mark-score-lock px-2">
                          <label>100,00</label>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCertificate;
