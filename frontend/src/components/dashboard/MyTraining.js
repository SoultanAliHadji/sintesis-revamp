import "../../App.css";

const MyTraining = ({
  setCurrentCourseId,
  setCurrentCourseTitle,
  progress,
}) => {
  const api = [
    { id: 1, title: "Kelompok Materi Pelatihan Dasar (KMPD)" },
    { id: 2, title: "KMKOP Izin Bekerja di Ketinggian" },
    { id: 3, title: "KMKOP Izin Bekerja di Dekat Air" },
    { id: 4, title: "KMKOP Izin Bekerja pada Ruang Terbatas" },
  ];

  const arr = api.map((data) => {
    return (
      <div className="col-6 p-0 my-2">
        <div className="h-100 mx-2">
          <div className="training-item p-3 d-flex align-items-center">
            <div className="row">
              <div className="col-3 d-flex align-items-center">
                <img
                  className="w-75"
                  src={require("../../assets/trainingimg.png")}
                  alt=""
                />
              </div>
              <div className="col-9">
                <div className="content-justify d-flex align-items-start flex-column">
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
                          setCurrentCourseId(data.id);
                          setCurrentCourseTitle(data.title);
                          window.scrollTo(0, 0);
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

export default MyTraining;
