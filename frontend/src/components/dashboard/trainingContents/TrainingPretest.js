import "../../../App.css";
import { useState, useEffect } from "react";

const TrainingPretest = () => {
  const [doTest, setDoTest] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [activeAnswer, setActiveAnswer] = useState();

  const attempt = [
    {
      id: 1,
      state: "Selesai",
      time: "Terkumpul Monday, 22 August 2022. 17.37",
      mark: "25,00",
      score: "83,00",
      review: "Tidak diizinkan",
    },
    {
      id: 2,
      state: "Selesai",
      time: "Terkumpul Wednesday, 24 August 2022, 13:49",
      mark: "25,00",
      score: "93,00",
      review: "Tidak diizinkan",
    },
    {
      id: 3,
      state: "Selesai",
      time: "Terkumpul Thursday, 20 October 2022, 03:00",
      mark: "25,00",
      score: "83,00",
      review: "Tidak diizinkan",
    },
    {
      id: 4,
      state: "Selesai",
      time: "Terkumpul Thursday, 27 October 2022, 16:57",
      mark: "25,00",
      score: "83,00",
      review: "Tidak diizinkan",
    },
  ];

  const [attemptNumber, setAttemptNumber] = useState(attempt.length);

  const question = [
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

  const tableArr = attempt.map((data) => {
    return (
      <tr>
        <th className="text-center" scope="row">
          {data.id}
        </th>
        <td>
          <div>{data.state}</div>
          <div className="table-state">{data.time}</div>
        </td>
        <td className="text-center">{data.mark}</td>
        <td className="text-center">{data.score}</td>
        <td className="table-review text-center">{data.review}</td>
      </tr>
    );
  });

  const questionArr = question
    .slice(currentQuestion - 1, currentQuestion)
    .map((data) => {
      return (
        <div className="col-9 d-grid gap-3">
          <div className="question">
            <div className="px-3 pt-3">
              <h6>Soal No. {data.id}</h6>
            </div>
            <hr />
            <div className="px-3">
              <p>{data.question}</p>
              <p>{data.subquestion}</p>
            </div>
          </div>
          <div className="answer px-3 py-3">
            <div
              class="form-check"
              onClick={() => {
                setActiveAnswer(1);
              }}
            >
              <input
                class={
                  "form-check-input" +
                  (activeAnswer == 1 ? " active-answer" : "")
                }
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked={true}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                a. {data.answeroption[0]}
              </label>
            </div>
            <div
              class="form-check"
              onClick={() => {
                setActiveAnswer(2);
              }}
            >
              <input
                class={
                  "form-check-input" +
                  (activeAnswer == 2 ? " active-answer" : "")
                }
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                b. {data.answeroption[1]}
              </label>
            </div>
            <div
              class="form-check"
              onClick={() => {
                setActiveAnswer(3);
              }}
            >
              <input
                class={
                  "form-check-input" +
                  (activeAnswer == 3 ? " active-answer" : "")
                }
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
              />
              <label class="form-check-label" for="flexRadioDefault3">
                c. {data.answeroption[2]}
              </label>
            </div>
            <div
              class="form-check"
              onClick={() => {
                setActiveAnswer(4);
              }}
            >
              <input
                class={
                  "form-check-input" +
                  (activeAnswer == 4 ? " active-answer" : "")
                }
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault4"
              />
              <label class="form-check-label" for="flexRadioDefault4">
                d. {data.answeroption[3]}
              </label>
            </div>
          </div>
          <div className="indicator-button row">
            <div className="col d-flex justify-content-start">
              <div>
                {currentQuestion != 1 ? (
                  <button
                    className="next-prev-question py-1"
                    onClick={() => {
                      setCurrentQuestion(currentQuestion - 1);
                    }}
                  >
                    Soal Sebelumnya
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div>
                <button className="hesitant py-1">Ragu-Ragu</button>
              </div>
            </div>
            <div className="col d-flex justify-content-end">
              <div>
                {currentQuestion != question.length ? (
                  <button
                    className="next-prev-question py-1"
                    onClick={() => {
                      setCurrentQuestion(currentQuestion + 1);
                    }}
                  >
                    Soal Berikutnya
                  </button>
                ) : (
                  <div>
                    <button
                      className="next-prev-question py-1"
                      data-bs-toggle="modal"
                      data-bs-target="#finishExam"
                    >
                      Selesaikan Ujian
                    </button>
                    <div
                      class="modal fade"
                      id="finishExam"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered d-flex justify-content-center">
                        <div class="modal-content">
                          <div class="modal-body">
                            <div className="d-flex justify-content-center">
                              <img
                                src={require("../../../assets/testmodalimg.png")}
                                alt=""
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <h6>Selesaikan Ujian?</h6>
                            </div>
                            <div className="mb-4">
                              <label>
                                Setelah Anda kirim, Anda tidak lagi dapat
                                mengubah jawaban anda untuk upaya ini.
                              </label>
                            </div>
                            <div className="row">
                              <div className="col-6">
                                <button
                                  class="disagree-button w-100 px-2 py-1"
                                  data-bs-dismiss="modal"
                                  onClick={() => {
                                    setDoTest(true);
                                  }}
                                >
                                  Tidak
                                </button>
                              </div>
                              <div className="col-6">
                                <button
                                  class="agree-button w-100 px-2 py-1"
                                  data-bs-dismiss="modal"
                                  onClick={() => {
                                    setDoTest(false);
                                    window.scrollTo(0, 0);
                                  }}
                                >
                                  Kumpulkan dan selesai
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div className="training-pretest">
      {doTest == false ? (
        <div className="training-container px-3 py-4 h-100 d-flex align-items-center">
          <div className="w-100">
            <div className="training-pretest-title text-center">
              <div className="d-grid gap-2">
                <label>Jumlah percobaan yang diperbolehkan: 5</label>
                <label>
                  This quiz opened at Wednesday, 30 December 2020, 13:46
                </label>
                <label>Waktu pengerjaan: 25 min</label>
                <label>Metode penilaian: Nilai Tertinggi</label>
              </div>
            </div>
            {attemptNumber > 0 ? (
              <div className="summary-table mt-5">
                <div className="mb-3">
                  <h6>Ringkasan usaha-usaha sebelumnya</h6>
                </div>
                <table class="table table-striped border">
                  <thead>
                    <tr>
                      <th scope="col">
                        <div className="text-center">Upaya</div>
                      </th>
                      <th scope="col">Keadaan</th>
                      <th scope="col">
                        <div className="text-center">Tanda/30,00</div>
                      </th>
                      <th scope="col">
                        <div className="text-center">Nilai/100,00</div>
                      </th>
                      <th scope="col">
                        <div className="text-center">Ulasan</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="align-middle">{tableArr}</tbody>
                </table>
                <label>Nilai Tertinggi: 93,33 / 100,00.</label>
              </div>
            ) : (
              ""
            )}
            {attemptNumber < 5 ? (
              <div className="do-test d-flex justify-content-center mt-5">
                <button
                  className="modal-button px-3 py-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => {setCurrentQuestion(1)}}
                >
                  Kerjakan Kuis Sekarang
                </button>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered d-flex justify-content-center">
                    <div class="modal-content">
                      <div class="modal-body">
                        <div className="d-flex justify-content-center">
                          <img
                            src={require("../../../assets/testmodalimg.png")}
                            alt=""
                          />
                        </div>
                        <div className="d-flex justify-content-center">
                          <h6>Mulai Ujian</h6>
                        </div>
                        <div className="d-grid gap-2 mb-4">
                          <label>
                            Upaya Anda akan memiliki batas waktu 25 min. Saat
                            Anda mulai, penghitung waktu akan mulai menghitung
                            mundur dan tidak dapat dijeda. Anda harus
                            menyelesaikan upaya Anda sebelum kedaluwarsa.
                          </label>
                          <label>
                            Apakah Anda yakin ingin memulainya sekarang?
                          </label>
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <button
                              class="disagree-button w-100 px-2 py-1"
                              data-bs-dismiss="modal"
                              onClick={() => {
                                setDoTest(false);
                              }}
                            >
                              Tidak
                            </button>
                          </div>
                          <div className="col-6">
                            <button
                              class="agree-button w-100 px-2 py-1"
                              data-bs-dismiss="modal"
                              onClick={() => {
                                setDoTest(true);
                                window.scrollTo(0, 0);
                              }}
                            >
                              Ya
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div className="row">
          {questionArr}
          <div className="col-3">
            <div className="test-summary h-100">
              <div className="px-3 pt-3">
                <h6>Soal No. 1</h6>
              </div>
              <hr />
              <div className="px-3">
                <div className="jump-to-button d-flex gap-2">
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                </div>
                <div className="indicator-finish-section d-grid align-items-end mb-3">
                  <div>
                    <div className="indicator-desc d-grid gap-1">
                      <div>
                        <label className="green-indicator px-1">Hijau</label>
                        {" = "}
                        <label>Sudah dijawab</label>
                      </div>
                      <div>
                        <label className="orange-indicator px-1">Orange</label>
                        {" = "}
                        <label>Ragu-ragu</label>
                      </div>
                      <div>
                        <label className="grey-indicator px-1">Abu-abu</label>
                        {" = "}
                        <label>Belum dijawab</label>
                      </div>
                    </div>
                    <div className="finish-test-button mt-3 d-flex align-items-end">
                      <button className="w-100 py-1">Selesaikan Ujian</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingPretest;
