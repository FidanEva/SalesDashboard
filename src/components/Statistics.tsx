import "bootstrap/dist/css/bootstrap.min.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Order } from "../types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Statistics({ data }: { data: Order[] }) {
  const salesByDate: Record<string, number> = {};
  data.forEach((item) => {
    salesByDate[item.order_date] =
      (salesByDate[item.order_date] || 0) + item.order_amount;
  });

  let maxSaledProduct = data.reduce((accumulator, currentValue) => {
    if (accumulator.order_amount < currentValue.order_amount)
      return currentValue;
    return accumulator;
  }, data[0]);

  let mostSaledDate = {
    date: "",
    amount: 0,
  };
  for (const [date, amount] of Object.entries(salesByDate)) {
    if (mostSaledDate.amount < amount) {
      mostSaledDate.date = date;
      mostSaledDate.amount = amount;
    }

    const chartData = {
      labels: Object.keys(salesByDate),
      datasets: [
        {
          label: "Sales Count",
          data: Object.values(salesByDate),
          borderColor: "orange",
          backgroundColor: "rgba(255, 165, 0, 0.5)",
        },
      ],
    };

    return (
      <div className="container border">
        <div className="row justify-content-center">
          <h3>Statistics</h3>
          <h5>
            The Most Saled Product:{" "}
            <strong>{maxSaledProduct.product_name}</strong>
          </h5>
          <h5>
            The Most Saled Date: <strong>{mostSaledDate.date}</strong>
          </h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <Line data={chartData}></Line>
          </div>
        </div>
      </div>
    );
  }
}
export default Statistics;
