import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const clients = useSelector((state) =>
    state.client_list.map((client_list) => {
      return {
        ...client_list,
        clients: client_list.clients.filter((client) => client.selected),
      };
    })
  );

  const renderClient = (client) => {
    return (
      <div class="alert alert-warning" role="alert">
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
            <hr />
          </div>
        );
      } else {
        return <></>;
      }
    });
  };

  return (
    <div className="col-md-6 my-4">
      <div className="form-cards">
        <div className="container my-4">{renderList()}</div>
      </div>
    </div>
  );
};

export default Result;
