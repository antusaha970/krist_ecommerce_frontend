import { useEffect, useState } from "react";
import AdminDashBoardMenu from "../AdminDashBoardMenu/AdminDashBoardMenu";
import client from "../../../api_client/api_client";

const ViewClientMessage = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const getAllMessages = async () => {
      try {
        const response = await client.get("/api/admin/messages/");
        setMessages(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getAllMessages();
  }, []);

  console.log(messages);

  return (
    <section className="container-fluid my-5">
      <div className="row g-2">
        <div className="col-md-2 col-sm-12 col-12 shadow-sm ps-4 text-center">
          <AdminDashBoardMenu />
        </div>
        <div className="col-md-10 col-sm-12 col-12">
          <div className="row g-2">
            {messages?.map((message, id) => (
              <div key={id} className="col-md-4 col-sm-12 col-12 shadow-lg p-3">
                <h5> {message?.name} </h5>
                <p> {message?.email} </p>
                <p> {message?.message.substring(0, 50)}... </p>
                <button className=" base_button_2">Read Message</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewClientMessage;
