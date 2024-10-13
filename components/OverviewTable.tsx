import { Table } from "antd";
const dataSource = [
  { title: "Service A", quantity: 12, price: 2000 },
  { title: "Service B", quantity: 12, price: 2000 },
  { title: "Service C", quantity: 12, price: 2000 },
  { title: "Service D", quantity: 12, price: 2000 },
  { title: "Service E", quantity: 12, price: 2000 },
  { title: "Service F", quantity: 12, price: 2000 },
  { title: "Service G", quantity: 12, price: 2000 },
  { title: "Service H", quantity: 12, price: 2000 },
  { title: "Service I", quantity: 12, price: 2000 },
  { title: "Service J", quantity: 12, price: 2000 },
];
export default function OverviewTable() {
  return (
    <Table
      columns={[
        {
          title: "Title",
          dataIndex: "title",
        },
        {
          title: "Quantity",
          dataIndex: "quantity",
        },
        {
          title: "Price",
          dataIndex: "price",
        },
      ]}
      dataSource={dataSource}
      pagination={{
        pageSize: 4,
        position: ["bottomCenter"],
      }}
      className="mt-6 w-1/2"
    ></Table>
  );
}
