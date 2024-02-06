import React from "react";

import {
  BsFillArchiveFill,
  BsPersonFill,
  BsFillBellFill,
  BsBagDashFill,
} from "react-icons/bs";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

export default function Home() {
  const data = [
    {
      name: "Pagina A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Pagina B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Pagina C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Pagina D",
      uv: 2780,
      pv: 3800,
      amt: 2000,
    },
    {
      name: "Pagina E",
      uv: 1780,
      pv: 4800,
      amt: 2180,
    },
    {
      name: "Pagina F",
      uv: 2380,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Pagina G",
      uv: 3780,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>CLIENTES</h3>
            <BsPersonFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>PRODUCTOS</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>150</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>VENTAS</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>50</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>RECAUDO </h3>
            <BsBagDashFill className="card_icon" />
          </div>
          <h1>50</h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer white="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#8884d8" />
            <Bar dataKey="pv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }}/>
            <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}


