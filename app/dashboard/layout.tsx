import DashboardNavLink from "@/components/DashboardNavLink";
// import DashboardSideMenu from "@/components/DashBoardSideMenu";
import {
  AppstoreOutlined,
  BankOutlined,
  BugOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Space } from "antd";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex  bg-blue-100 w-full p-4">
      <aside className="flex-[1] mr-2">
        <nav>
          <ul className="grid gap-3">
            <li>
              <DashboardNavLink href="/dashboard/overview">
                <Space>
                  <AppstoreOutlined style={{ fontSize: "16px" }} />
                  <h1>Overview</h1>
                </Space>
              </DashboardNavLink>
            </li>
            <li>
              <DashboardNavLink href="/dashboard/inventory">
                <Space>
                  <BankOutlined style={{ fontSize: "16px" }} />
                  <h1>Inventory</h1>
                </Space>
              </DashboardNavLink>
            </li>
            <li>
              <DashboardNavLink href="/dashboard/orders">
                <Space>
                  <ShoppingCartOutlined style={{ fontSize: "16px" }} />
                  <h1>Orders</h1>
                </Space>
              </DashboardNavLink>
            </li>
            <li>
              <DashboardNavLink href="/dashboard/users">
                <Space>
                  <UserOutlined style={{ fontSize: "16px" }} />
                  <h1>Users</h1>
                </Space>
              </DashboardNavLink>
            </li>
            <li>
              <DashboardNavLink href="/dashboard/employees">
                <Space>
                  <BugOutlined style={{ fontSize: "16px" }} />
                  <h1>Employees</h1>
                </Space>
              </DashboardNavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* <DashboardSideMenu/> */}

      <div className="bg-gray-100 flex-[8] px-8 py-5 rounded min-h-[300px] mr-10">
        {children}
      </div>
    </div>
  );
}
