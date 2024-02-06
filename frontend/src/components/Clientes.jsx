import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";

export default class Clients extends Component {
  state = {
    clients: [],
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:7000/clients");
    this.setState({ clients: res.data });
    console.log(this.state.clients);
  }

  deleteuser = async (_id) => {
    await axios.delete("http://localhost:7000/clients/" + _id);
    this.componentDidMount();
  };

  render() {
    return (
      <div>
        <div className="Buttons">
          <Link to="/clientes/new">
            <button type="button" className="btn btn-primary">
              Crear
            </button>
          </Link>
        </div>

        <div className="container">
          <div className="table">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Direccion</th>
                  <th>Telefono</th>
                  <th>Correo</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {this.state.clients.map((client) => (
                  <tr>
                    <td>{client._id}</td>
                    <td>{client.nombre}</td>
                    <td>{client.apellido}</td>
                    <td>{client.direccion}</td>
                    <td>{client.telefono}</td>
                    <td>{client.correo}</td>
                    <td>
                      <button
                        key={client._id}
                        className="delete-button"
                        onClick={() => {
                          if (
                            window.confirm(
                              "¿Esta seguro que desea eliminar este cliente?"
                            )
                          ) {
                            this.deleteuser(client._id);
                          }
                        }}
                      >
                        <FaTrashAlt />
                      </button>
                      <Link
                        key={client._id}
                        to={"/clientes/editar/" + client._id}
                        className="edit-button"
                      >
                        <FaUserEdit />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
