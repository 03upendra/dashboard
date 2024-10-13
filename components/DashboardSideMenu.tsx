"use client";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  BankOutlined,
  BugOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "1", icon: <AppstoreOutlined />, label: "Overview 1" },
  { key: "2", icon: <BankOutlined />, label: "Inventory 2" },
  { key: "3", icon: <ShoppingCartOutlined />, label: "Orders" },
  { key: "4", icon: <UserOutlined />, label: "Users" },
  { key: "5", icon: <BugOutlined />, label: "Employees" },
];

const DashboardSideMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: 256 }} className="flex-[2]">
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default DashboardSideMenu;
