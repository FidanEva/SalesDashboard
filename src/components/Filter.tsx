import React, { ChangeEvent, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const filterFields = [
  { name: "product_name", type: "text", placeholder: "Name" },
  { name: "order_amount", type: "number", placeholder: "Amount" },
  { name: "order_date", type: "date", placeholder: "Date" },
];

function Filter({
  onFilter,
}: {
  onFilter: (data: { [key: string]: string }) => void;
}) {
  const [filteredData, setFilteredData] = useState<{ [key: string]: string }>(
    filterFields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilteredData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFilter(filteredData);
  };

  return (
    <form onSubmit={handleSubmit} className="filter container">
      <div className="row">
        {filterFields.map(({ name, type, placeholder }) => (
          <div className="col">
            <input
              className="form-control"
              key={name}
              name={name}
              type={type}
              placeholder={placeholder}
              onChange={handleChange}
            ></input>
          </div>
        ))}
        <button type="submit" className="col btn btn-primary">
          Filter
        </button>
      </div>
    </form>
  );
}
export default Filter;
