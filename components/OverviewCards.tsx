import { Space, Statistic } from "antd";
import { ReactNode } from "react";

export default function OverviewCards({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: ReactNode;
}) {
  return (
    <Space
      direction="horizontal"
      className="border border-gray-400 rounded-md p-2 pr-3 "
    >
      {icon}
      <Statistic title={title} value={value} />
    </Space>
  );
}
