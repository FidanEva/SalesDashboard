import React, { ChangeEvent, useState } from "react";

interface FilterData {
  [key: string]: string;
}

const filterFields = [
  { name: "name", type: "text", placeholder: "Name" },
  { name: "amount", type: "number", placeholder: "Amount" },
  { name: "date", type: "date", placeholder: "Date" },
];

function Filter({ onFilter }: { onFilter: (data: FilterData) => void }) {
  const [filteredData, setFilteredData] = useState<FilterData>(
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
    <form onSubmit={handleSubmit} className="filter">
      {filterFields.map(({ name, type, placeholder }) => (
        <input
          key={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
        ></input>
      ))}
      <button type="submit">Filter</button>
    </form>
  );
}
export default Filter;
