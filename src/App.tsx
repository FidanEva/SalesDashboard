import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/order.json")
      .then((response) => response.json())
      .then((d) => {
        setData(d);
        setFilteredData(d);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Filter onFilter={() => console.log("filtered")} />
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className="content">
          <p>{filteredData.length}</p>
          <Table data={filteredData} />
        </div>
      )}
    </>
  );
}

export default App;
