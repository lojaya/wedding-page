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
    <div className="col-md-7 d-flex flex-column">
      <div className="bg-white messages-box">
        {messages?.docs?.map((msg, i) => {
          const data = msg?.data();
          return (
            <div className="mb-4" key={i}>
              <b>{data?.name}</b>
              <br />
              <p className="mb-5">{data?.message}</p>
              <div className="messages-divider"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
