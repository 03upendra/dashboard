import OverviewCards from "@/components/OverviewCards";
// import OverviewChart from "@/components/OverviewChart";
import OverviewTable from "@/components/OverviewTable";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function Overview() {
  return (
    <div>
      <h1 className="text-blue-700">OVERVIEW</h1>
      <div className="flex justify-evenly mt-7">
        <OverviewCards
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Orders"}
          value={1255}
        />
        <OverviewCards
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Inventory"}
          value={4000}
        />
        <OverviewCards
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Users"}
          value={1250}
        />
        <OverviewCards
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Revenue"}
          value={25000}
        />
      </div>
        <div className="flex justify-evenly">
        <OverviewTable />
        {/* <OverviewChart/> */}

        </div>
    </div>
  );
}
