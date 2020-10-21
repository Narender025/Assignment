import React from "react";
import { itemClicked } from "../redux/Action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import $ from "jquery";

const Result = () => {
  const dispatch = useDispatch();
  const clients = useSelector((state) =>
    state.client_list.map((client_list) => {
      return {
        ...client_list,
        clients: client_list.clients.filter((client) => client.selected),
      };
    })
  );

  const handleClick = (event) => {
    let clintID = event.target.value; 
    dispatch(itemClicked(clintID));
  }

  const renderClient = (client) => {
    return (
      <div class="alert alert-warning" role="alert">
       
        <button type="button" class="close" value= {client.id} onClick={handleClick}>
          &times;
        </button>
       
        {client.name}
      </div>
    );
  };

  const renderClients = (clients) => {
    return clients.map((client) => {
      return renderClient(client);
    });
  };

  const renderList = () => {
    return clients.map((client) => {
      if (client.clients.length > 0) {
        return (
          <div className="form-cards">
            <p className="font-weight-bold">{client.country}</p>
            <section className="section-preview">
              {renderClients(client.clients)}
            </section>
          </div>
        );
      } else {
        return <></>;
      }
    });
  };

  return (
    <div className="col-md-6 my-4">
      <div className="col-div">
        <div className="form-cards">
          <div className="container my-4">{renderList()}</div>
          {/* <div className="container my-4 result"><p>No value selected</p></div> */}
        </div>
      </div>
    </div>
  );
};

export default Result;
