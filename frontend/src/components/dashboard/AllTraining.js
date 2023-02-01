import "../../App.css";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import Training from "./Training";

const AllTraining = ({ handleTrainingTitle, handleCourseId, handleCourseTitle }) => {
  const [currentTraining, setCurrentTraining] = useState(
    "Pelatihan-Uji Online SIMAK dan KPO"
  );
  const progress = 0;
  const trainingApi = [
    { title: "Pelatihan-Uji Online SIMAK dan KPO" },
    { title: "Advance Training" },
    { title: "Program Sintesis" },
    { title: "Weekly Refresh Competency" },
    { title: "SOP" },
  ];
  const courseApi =
    currentTraining == "Pelatihan-Uji Online SIMAK dan KPO"
      ? [
          { id: 1, title: "Kelompok Materi Pelatihan Dasar (KMPD)" },
          { id: 2, title: "KMKOP Izin Bekerja di Ketinggian" },
          { id: 3, title: "KMKOP Izin Bekerja di Dekat Air" },
          { id: 4, title: "KMKOP Izin Bekerja pada Ruang Terbatas" },
          { id: 5, title: "KMKOP Izin Pengangkatan & Pengangkutan Material" },
          { id: 6, title: "KMKOP Izin Bekerja Pekerjaan Panas" },
          {
            id: 7,
            title:
              "KMKOP Izin Bekerja Di Luar Workshop (Mechanic & Helper Mechanic)",
          },
          { id: 8, title: "KMKOP Driver Light Vehicle (LV)" },
          { id: 9, title: "KMKOP Operator A2B" },
          { id: 10, title: "KMKOP Alat Angkut (Hauler)" },
          { id: 11, title: "KMKOP Bekerja Aman Area Taman/ Landscape" },
          { id: 12, title: "KMKOP Land Clearing" },
          { id: 13, title: "KMKOP Pengoperasian UVS" },
          { id: 14, title: "KMKOP Pengelolaan Peledakan (KPP Pertama)" },
          { id: 15, title: "KMKOP Eksplorasi" },
          { id: 16, title: "KMKOP Dasar K3 Listrik" },
          { id: 17, title: "KMKOP Penanganan Hidrocarbon & MSDS" },
          { id: 18, title: "KPO Maintenance" },
          { id: 19, title: "KPO Project" },
          { id: 20, title: "KPO Land Clearing" },
          { id: 21, title: "KPO Pengupasan Batuan Penutup (OB Removal)" },
          { id: 22, title: "KPO Eksplorasi" },
          { id: 23, title: "KPO Penimbunan (Dumping)" },
          { id: 24, title: "KPO Pengeboran dan Peledakan (Blasting)" },
          { id: 25, title: "KPO Penambangan (Coal Getting)" },
          { id: 26, title: "KPO Loading Material Lunak" },
          { id: 27, title: "KPO Hauling Road Maintenance (HRM)" },
          { id: 28, title: "KPO Coal Processing Plant (CPP)" },
          { id: 29, title: "KPO Dewatering" },
          { id: 30, title: "KPO Limbah Bahan Berbahaya dan Beracun (B3)" },
          { id: 31, title: "KPO Marine" },
          { id: 32, title: "KPO Safety" },
          { id: 33, title: "KMPL Mining Eyes" },
          { id: 34, title: "KMPL Pekerja Konstruksi" },
          { id: 35, title: "KMPL HIRA" },
          { id: 36, title: "KMPL Pekerja Kantor dan Dapur" },
          {
            id: 37,
            title: "KMPL Sistem Manajemen Keselamatan Pertambangan (SMKP)",
          },
          {
            id: 38,
            title: "KMPL Investigasi Kecelakaan - Sistem Bekerja Selamat",
          },
          {
            id: 39,
            title: "Trainer Instructor Development Program (TIDP) 2022",
          },
          { id: 40, title: "Fatigue Manajement" },
          { id: 41, title: "Pelatihan CPR AED Pengawas" },
          { id: 42, title: "Pelatihan Self Evacuation" },
          { id: 43, title: "Pelatihan PPGD" },
        ]
      : currentTraining == "Advance Training"
      ? [
          { title: "Surat Penunjukan Tenaga Teknis" },
          { title: "Surat Penunjukan Pengawas Teknis" },
          { title: "Surat Penunjukan Pengawas Operasional" },
          { title: "E-Induksi BUMA" },
          {
            title: "Pendidikan dan Pelatihan Pengelola Peledakan (KPP Pertama)",
          },
          { title: "Frontline Behavior Based Safety" },
          { title: "SINTESIS+" },
        ]
      : currentTraining == "Program Sintesis"
      ? [
          { title: "KELOMPOK MATERI PELATIHAN DASAR (KMPD) 2022" },
          {
            title:
              "Pencegahan Kecelakaan Akibat  Fatigue dengan Konsep SBS (Sistem Bekerja Selamat)",
          },
          {
            title:
              "Pengawasan Langsung Berjarak: Dalam Meningkatkan Keselamatan Kerja & Produktivitas Tambang",
          },
        ]
      : currentTraining == "Weekly Refresh Competency"
      ? [
          { title: "PIT SERVICE - WEEKLY REFRESH COMPETENCY" },
          { title: "PLANT - WEEKLY REFRESH COMPETENCY" },
          { title: "DO & DON'T EKSPLORASI" },
          { title: "Drill & Blast - WEEKLY REFRESH COMPETENCY" },
          { title: "MINING & HAULING OPERATION - WEEKLY REFRESH COMPETENCY" },
          { title: "DO AND DON'T MARINE - WEEKLY REFRESH COMPETENCY" },
        ]
      : [{ title: "Surat Penunjukan Tenaga Teknis" }];

  const trainingArr = trainingApi.map((data) => {
    return (
      <button
        className={
          "w-100 text-start py-2 px-4" +
          (currentTraining == data.title ? " active" : "")
        }
        onClick={() => setCurrentTraining(data.title)}
      >
        {data.title}
      </button>
    );
  });

  const courseArr = courseApi.map((data) => {
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
                          handleTrainingTitle(currentTraining)
                          handleCourseId(data.id);
                          handleCourseTitle(data.title);
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
  });

  return (
    <div className="training-section pt-4">
      <div className="container-lg">
        <div className="row">
          <div className="col-3">
            <div className="training-navigation">{trainingArr}</div>
          </div>
          <div className="col-9">
            <div className="d-flex">
              <form className="mb-1 w-100" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Cari kursus yang ingin anda ikuti"
                  aria-label="Search"
                />
              </form>
              <button className="search-button d-flex align-items-center">
                <Icon icon="uil:search" />
              </button>
            </div>
            <div className="topic">
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <label className="me-2">Topik:</label>
                </div>
                <div className="topic-collection d-flex overflow-auto gap-2 p-1">
                  <button className="px-3 py-1">
                    Kelompok Materi Pelatihan Dasar (KMPD)
                  </button>
                  <button className="px-3 py-1">
                    Kelompok Materi Keselamatan Operasional Pertambangan (KMKOP)
                  </button>
                  <button className="px-3 py-1">
                    Kelompok Materi Pelatihan Tingkat Lanjut (KMPL)
                  </button>
                  <button className="px-3 py-1">
                    Kompetensi Pengawas Operasional (KPO)
                  </button>
                </div>
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
