import { Table } from "antd";
// const dataSource = [
//   { title: "Service A", quantity: 12, price: 2000 },
//   { title: "Service B", quantity: 12, price: 2000 },
//   { title: "Service C", quantity: 12, price: 2000 },
//   { title: "Service D", quantity: 12, price: 2000 },
//   { title: "Service E", quantity: 12, price: 2000 },
//   { title: "Service F", quantity: 12, price: 2000 },
//   { title: "Service G", quantity: 12, price: 2000 },
//   { title: "Service H", quantity: 12, price: 2000 },
//   { title: "Service I", quantity: 12, price: 2000 },
//   { title: "Service J", quantity: 12, price: 2000 },
// ];
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

export default async function OverviewTable() {
  const dataSource = await getData();
  return (
    <Table
      columns={[
        {
          title: "Title",
          dataIndex: "title",
          key:"title"
        },
        {
          title: "Quantity",
          dataIndex: "quantity",
          key:"quantity"
        },
        {
          title: "Price",
          dataIndex: "price",
          key:"price"
        },
      ]}
      rowKey="id"
      dataSource={dataSource}
      pagination={{
        pageSize: 4,
        position: ["bottomCenter"],
      }}
      className="mt-6 w-1/2"
    ></Table>
  );
}
