import React from "react";
import { itemClicked } from "../redux/Action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Form_components = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.client_list);

  const itemSelected = (event) => {
    dispatch(itemClicked(event.target.name));
  };

  const renderClient = (client) => {
    return (
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          id={client.id}
          name={client.id}
          checked={client.selected}
          onChange={(event) => itemSelected(event)}
        />
        <label className="custom-control-label" for={client.id}>
          {client.name}
        </label>
      </div>
    );
  };

  const renderClients = (clients) => {
    return clients.map((client) => {
      return renderClient(client);
    });
  };

  const renderList = () => {
    return countries.map((country) => {
      if (country.clients.length > 0) {
        return (
          <div className="form-cards">
            <p className="font-weight-bold">{country.country}</p>
            <section className="section-preview">
              {renderClients(country.clients)}
            </section>
          </div>
        );
      } else {
        return <></>;
      }
    });
  };

  return (
    <div className="col-md-6 my-4 ">
      <div className="col-div">
      <div className="form-cards">
        <section className="section-preview">{renderList()}</section>
      </div>
      </div>
    </div>
  );
};

export default Form_components;
