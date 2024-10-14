import UsersTable from "@/components/UsersTable";
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/users", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};
export default async function Users() {
  const userData = await getData();
  return (
    <div>
      <h1 className="text-blue-700 mb-7">USERS</h1>
      <UsersTable userData={userData} />
    </div>
  );
}
