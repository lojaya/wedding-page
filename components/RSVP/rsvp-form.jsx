import { useState } from "react";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { firebaseApp } from "../../firebase/clientApp";

export default function RsvpForm({ config }) {
  const [nameData, nameInput] = useState();
  const [phoneData, phoneInput] = useState();
  const [attendData, attendInput] = useState();
  const [attendNumberData, attendNumberInput] = useState();

  const db = getFirestore(firebaseApp);

  const addRsvp = async (name, phone, attend, number) => {
    if (name && phone & number) {
      await addDoc(collection(db, "rsvp"), {
        name,
        phone,
        attend,
        number,
        timestamp: serverTimestamp(),
      }).then(() => {
        nameInput("");
        phoneInput("");
        attendInput("");
        attendNumberInput("");
      });
    }
  };

  return (
    <>
      <div className="form-group">
        <label>{config.name_label}</label>
        <input
          name="name"
          type="text"
          className="form-control form-control-lg"
          placeholder={config.name_placeholder}
          value={nameData}
          onChange={(e) => nameInput(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>{config.phone_label}</label>
        <input
          name="phone-number"
          type="phone"
          className="form-control form-control-lg"
          placeholder={config.phone_placeholder}
          value={phoneData}
          onChange={(e) => phoneInput(e.target.value)}
        />
      </div>
      <div className="row">
        <div className="col-12">
          <div className="form-group mb-1">
            <label>{config.registry_label}</label>
          </div>
        </div>
        <div className="col">
          <div className="form-group rounded bg-white p-2 border">
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="atttending-yes"
                name="atttending"
                className="custom-control-input"
                onChange={(e) => attendInput(true)}
              />
              <label className="custom-control-label" htmlFor="atttending-yes">
                {config.registry_radio_label_yes}
              </label>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="form-group rounded bg-white p-2 border">
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="atttending-no"
                name="atttending"
                className="custom-control-input"
                onChange={(e) => attendInput(false)}
              />
              <label className="custom-control-label" htmlFor="atttending-no">
                {config.registry_radio_label_no}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label>{config.total_attend_label}</label>
        <input
          name="number"
          type="number"
          min="1"
          max="2"
          className="form-control form-control-lg"
          placeholder={config.total_attend_placeholder}
          value={attendNumberData}
          onChange={(e) => attendNumberInput(e.target.value)}
        />
      </div>
      <div className="form-group text-center">
        <button
          className="btn btn-lg btn-block btn-primary"
          type="submit"
          onClick={() => {
            addRsvp(nameData, phoneData, attendData, attendNumberData);
          }}
        >
          {config.button_text}
        </button>
        <small className="mt-2 text-dark-gray opacity-8">
          {config.submission_info}
        </small>
      </div>
    </>
  );
}
