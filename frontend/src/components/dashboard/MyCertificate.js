import "../../App.css";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const MyCertificate = () => {
  const progress = 78;
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const api = [
    {
      id: 1,
      title: "KELOMPOK MATERI PELATIHAN DASAR (KMPD) 2022",
      date: "Tanggal diperoleh : Tuesday, 23 August 2022, 13:48",
    },
    {
      id: 2,
      title:
        "Pencegahan Kecelakaan Akibat  Fatigue dengan Konsep SBS (Sistem Bekerja Selamat)",
      date: "Tanggal diperoleh : Thursday, 20 October 2022, 14:24",
    },
    {
      id: 3,
      title:
        "Pencegahan Kecelakaan Akibat  Fatigue dengan Konsep SBS (Sistem Bekerja Selamat)",
      date: "Tanggal diperoleh : Thursday, 20 October 2022, 14:24",
    },
    {
      id: 4,
      title:
        "Pengawasan Langsung Berjarak: Dalam Meningkatkan Keselamatan Kerja & Produktivitas Tambang",
      date: "Tanggal diperoleh : Thursday, 20 October 2022, 14:23",
    },
  ];

  const arr = api.map((data) => {
    return (
      <div className="col-3 p-0 my-2">
        <div className="h-100 mx-2">
          <div
            className="certificate-item training-item p-2"
            data-bs-toggle="modal"
            data-bs-target="#certificateModal"
            onClick={() => {
              setTitle(data.title);
              setDate(data.date);
            }}
          >
            <img src={require("../../assets/certificate.png")} alt="" />
            <div className="mt-2">
              <div className="certificate-desc d-flex align-items-start flex-column">
                <h6>{data.title}</h6>
                <div className="mt-auto">
                  <label className="mt-2 mb-4">{data.date}</label>
                  <button className="py-2 w-100">Download</button>
                </div>
              </div>
              <div
                className="modal fade modal-lg"
                id="certificateModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-8">
                          <div className="modal-img-container p-4">
                            <img
                              src={require("../../assets/certificate.png")}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-4 d-flex align-items-center">
                          <div>
                            <h6>{title}</h6>
                            <label>{date}</label>
                            <div className="w-100">
                              <button className="py-2 w-100">Download</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="training-section pt-3">
      <div className="container-lg">
        <div className="row">
          <div className="col">
            <div className="training-item-container row">{arr}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCertificate;
