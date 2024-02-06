import React, { Component } from "react";
import axios from "axios";

export default class CreateClients extends Component {
  state = {
    client:[],
    _id: "",
    nombre: "",
    apellido: "",
    direccion: "",
    telefono: "",
    correo: "",
  };


  async componentDidMount() {
    const res = await axios.get("http://localhost:7000/clients");
    this.setState({ clients: res.data });
    console.log(this.state.clients);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const newClient = {
      _id: this.state._id,
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      direccion: this.state.direccion,
      telefono: this.state.telefono,
      correo: this.state.correo,
    };

    await axios.post("http://localhost:7000/clients", newClient);

    this.setState({
      _id: "",
      nombre: "",
      apellido: "",
      direccion: "",
      telefono: "",
      correo: "",
    });
  };

  render() {
    return (
      <div className="col4">
        <div>



        </div>

        <h2>Clientes</h2>
        <form>
          <div className="from-group">
            <label>ID:</label>
            <input
              type="text"
              className="form-control"
              name="_id"
              value={this.state._id}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="from-group">
            <label>Nombre:</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              value={this.state.nombre}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="from-group">
            <label>Apellido:</label>
            <input
              type="text"
              className="form-control"
              name="apellido"
              value={this.state.apellido}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="from-group">
            <label>Direccion:</label>
            <input
              type="text"
              className="form-control"
              name="direccion"
              value={this.state.direccion}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="from-group">
            <label>Telefono:</label>
            <input
              type="text"
              className="form-control"
              name="telefono"
              value={this.state.telefono}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="from-group">
            <label>Correo:</label>
            <input
              type="email"
              className="form-control"
              name="correo"
              value={this.state.correo}
              onChange={this.onChange}
              required
            />
          </div>
          <button
            onClick={this.onSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Guardar
          </button>
        </form>
      </div>
    );
  }
}
