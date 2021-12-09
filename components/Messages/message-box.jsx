import { getFirestore, collection, query, orderBy } from "firebase/firestore";
import { firebaseApp } from "../../firebase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";

export default function MessageBox() {
  const [messages, messagesLoading, messagesError] = useCollection(
    query(
      collection(getFirestore(firebaseApp), "messages"),
      orderBy("timestamp", "desc")
    ),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <div
      className="col-md-7 d-flex flex-column bg-white p-40 full-width"
      style={{
        padding: "20px",
        overflowY: "auto",
        height: "400px",
        border: "1px solid #dce0e0",
      }}
    >
      {messages?.docs?.map((msg, i) => {
        const data = msg?.data();
        return (
          <div className="mb-4" key={i}>
            <b>{data?.name}</b>
            <br />
            {data?.message}
          </div>
        );
      })}
    </div>
  );
}
