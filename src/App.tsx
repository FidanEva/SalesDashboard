import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Table from "./components/Table";
import Statistics from "./components/Statistics";
import { Order } from "./types";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState<Order[]>([]);
  const [filteredData, setFilteredData] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/order.json")
      .then((response) => response.json())
      .then((d) => {
        setData(d.orders || []);
        setFilteredData(d.orders || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleFilter = (filters: { [key: string]: string }) => {
    let updatedData = data;

    if (filters.product_name) {
      updatedData = updatedData.filter((item) =>
        item.product_name
          .toLowerCase()
          .includes(filters.product_name.toLowerCase())
      );
    }

    if (filters.order_amount) {
      updatedData = updatedData.filter(
        (item) => item.order_amount === Number(filters.order_amount)
      );
    }

    if (filters.order_date) {
      updatedData = updatedData.filter(
        (item) => item.order_date === filters.order_date
      );
    }

    setFilteredData([...updatedData]);
  };

  return (
    <>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col">
              <Filter onFilter={handleFilter} />
              <Table data={filteredData} />
            </div>
            <div className="col">
              <Statistics data={filteredData} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
