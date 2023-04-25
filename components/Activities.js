import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);

const Activities = ({ date_object }) => {

  const data = {
    labels: ["week 1", "week 2", "week 3", "week 4"],
    datasets: [
      {
        label: "Guest",
        data: [400, 200, 500, 300],
        borderColor: "#E9A0A0",
        tension: 0.4,
      },
      {
        label: "User",
        data: [400, 100, 300, 200],
        borderColor: "#9BDD7C",
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales:{
        y : {
            min: 0,
            gridLines: {
                display: false,
                drawBorder: false,
            },
        },
        x : {
            min: 0,
            gridLines: {
                display: false,
                drawBorder: false,
            },
        },
    },
    maintainAspectRatio: false,
    
    plugins: {
        legend: {
          display: false
        }
      }     
    
  };

  return (
    <>
      <div id="Subheader" className="flex justify-between">
        <div className="text-lg font-bold">Activities</div>
        <div>
          <div className="rounded-2xl bg-red-300 w-2 h-2 inline-block mr-2"></div>
          <p className="inline mr-8">Guest</p>
          <div className="rounded-2xl bg-emerald-300 w-2 h-2 inline-block mr-2"></div>
          <p className="inline mr-8">User</p>
        </div>
      </div>
      <div id="Drop_down" className="w-32">
        <select className="rounded-lg text-gray-600 font-normal border-none">
          {date_object.map((item, index) => (
            <option key={index}>{item.value}</option>
          ))}
        </select>
      </div>

      {/* Actual chart */}
      <div id="Chart" className="h-48 w-full">
        <Line data={data} options={options}></Line>
      </div>
    </>
  );
      
};

export default Activities;
