import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { firebaseApp } from "../../firebase/clientApp";

export default function MessageForm({ config }) {
  useEffect(() => {
    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    nameInput(params.get("from"));
  }, []);

  const [nameData, nameInput] = useState();
  const [messageData, messageInput] = useState();

  const db = getFirestore(firebaseApp);

  const addMessage = async (name, message) => {
    if (name && message) {
      await addDoc(collection(db, "messages"), {
        name,
        message,
        timestamp: serverTimestamp(),
      }).then(() => {
        nameInput("");
        messageInput("");
      });
    }
  };

  return (
    <div className="col-md-5 d-flex flex-column">
      <div className="form-group">
        <input
          name="name"
          type="text"
          className="form-control"
          placeholder={config.name_placeholder}
          value={nameData}
          onChange={(e) => nameInput(e.target.value)}
        />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          className="form-control"
          placeholder={config.message_placeholder}
          cols="30"
          rows="8"
          style={{ height: "280px" }}
          value={messageData}
          onChange={(e) => messageInput(e.target.value)}
        />
      </div>
      <div className="form-group text-right">
        <button
          className="btn btn-sm btn-block btn-primary"
          type="submit"
          onClick={() => {
            addMessage(nameData, messageData);
          }}
        >
          {config.button_text}
        </button>
      </div>
    </div>
  );
}
