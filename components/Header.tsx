import { BellFilled } from "@ant-design/icons";
import { Badge } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="h-14 flex items-center justify-between p-1 border-b-2 px-4">
      <Link href="/">
        <Image src="/logo.png" width={50} height={50} alt="logo" />
      </Link>

      <Link href="/">
        <h1 className="font-bold text-xl">SmartDash</h1>
      </Link>

      <Badge count={2}>
        <BellFilled className="text-lg" />
      </Badge>
    </div>
  );
}
