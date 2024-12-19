const Table = ({ data }: { data: any[] }) => {
  //   const convertedData = Array.from(data);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        {data && data.length > 0 ? (
          data.map((item) => (
            <tr key={item}>
              <td>{item}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
