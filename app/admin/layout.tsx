"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  Image,
  Mail,
  Settings,
  LogOut,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Don't show sidebar on login page
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const menus = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      link: "/admin/dashboard",
    },
    {
      name: "Projects",
      icon: Building2,
      link: "/admin/projects",
    },
    {
      name: "Gallery",
      icon: Image,
      link: "/admin/gallery",
    },
    {
      name: "Enquiries",
      icon: Mail,
      link: "/admin/enquiries",
    },
    {
      name: "Settings",
      icon: Settings,
      link: "/admin/settings",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-72 bg-gray-900 text-white">

        <div className="border-b border-gray-700 p-6">

          <h1 className="text-3xl font-bold text-yellow-400">
            Wealth Pro
          </h1>

          <p className="text-sm text-gray-400">
            Admin Panel
          </p>

        </div>

        <nav className="mt-6">

          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <Link
                key={menu.name}
                href={menu.link}
                className={`mx-3 mb-2 flex items-center gap-3 rounded-lg px-4 py-3 transition
                ${
                  pathname === menu.link
                    ? "bg-yellow-500 text-black"
                    : "hover:bg-gray-800"
                }`}
              >
                <Icon size={20} />

                {menu.name}
              </Link>
            );
          })}

        </nav>

        <div className="absolute bottom-8 left-0 w-72 px-3">

          <button className="flex w-full items-center gap-3 rounded-lg bg-red-600 px-4 py-3 hover:bg-red-700">

            <LogOut size={20} />

            Logout

          </button>

        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1">

        {/* Top Navbar */}
        <header className="flex items-center justify-between border-b bg-white px-8 py-5 shadow-sm">

          <h2 className="text-2xl font-bold text-gray-800">
            Wealth Pro Admin
          </h2>

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-500 font-bold text-black">
              A
            </div>

            <div>

              <p className="font-semibold text-gray-800">
                Admin
              </p>

              <p className="text-sm text-gray-500">
                Administrator
              </p>

            </div>

          </div>

        </header>

        <div className="p-8">{children}</div>

      </main>

    </div>
  );
}