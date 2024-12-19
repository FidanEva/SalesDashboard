import { Order } from "../types";
import "bootstrap/dist/css/bootstrap.min.css";

const Table = ({ data }: { data: Order[] }) => {
  return (
    <div className="container mt-5">
      <div className="">
        <div className="table-responsive">
          <table className="table  table-bordered">
            {/* table-striped can be added to look striped */}
            <thead className="table-light">
              <tr>
                <th>Product Name</th>
                <th>Order Date</th>
                <th>Order Amount</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.product_name}</td>
                    <td>{item.order_date}</td>
                    <td>{item.order_amount}</td>
                    <td>${item.total_price.toFixed(2)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
