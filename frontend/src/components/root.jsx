import { Outlet, Link } from "react-router-dom";
import {
  BsCart,
  BsBarChartFill,
  BsPersonCheckFill,
  BsBox,
  BsPersonXFill,
} from "react-icons/bs";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Administrador</h1>
        <div></div>
        <nav>
          <ul>
            <li className="sidebar-list-item">
              <Link to="/Dashboard" className="sidebar-link">
                <div className="icon-container">
                  <BsBarChartFill className="icon" />
                  <span>Dashboard</span>
                </div>
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Compra" className="sidebar-link">
                <div className="icon-container">
                  <BsCart className="icon" />
                  <span>Compra</span>
                </div>
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/clientes" className="sidebar-link">
                <div className="icon-container">
                  <BsPersonCheckFill className="icon" />
                  <span>Clientes</span>
                </div>
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Productos" className="sidebar-link">
                <div className="icon-container">
                  <BsBox className="icon" />
                  <span>Productos</span>
                </div>
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/Empleados" className="sidebar-link">
                <div className="icon-container">
                  <BsPersonXFill className="icon" />
                  <span>Empleados</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
