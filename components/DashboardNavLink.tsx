"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardNavLinkProps {
  href: string;
  children: React.ReactNode;
}
export default function DashboardNavLink({
  href,
  children,
}: DashboardNavLinkProps) {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`hover:bg-gray-100 p-2 rounded block text-sm ${
        active ? "text-black font-semibold" : "text-gray-500"
      }`}
    >
      {children}
    </Link>
  );
}
