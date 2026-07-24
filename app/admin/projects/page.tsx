"use client";

import Link from "next/link";
import { Pencil, Trash2, Plus } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Ekta Avenue Phase 3",
    location: "Dharmawala",
    price: "₹18,000 / Gaj",
    status: "Active",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900">
          Projects
        </h1>

        <Link
          href="/admin/projects/add"
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Project
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl bg-white shadow-lg">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left text-gray-700">
                Project
              </th>

              <th className="p-4 text-left text-gray-700">
                Location
              </th>

              <th className="p-4 text-left text-gray-700">
                Price
              </th>

              <th className="p-4 text-left text-gray-700">
                Status
              </th>

              <th className="p-4 text-center text-gray-700">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {projects.map((project) => (

              <tr
                key={project.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-4 text-gray-900 font-medium">
                  {project.name}
                </td>

                <td className="p-4 text-gray-700">
                  {project.location}
                </td>

                <td className="p-4 text-gray-700">
                  {project.price}
                </td>

                <td className="p-4">

                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    {project.status}
                  </span>

                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-4">

                    <Link href={`/admin/projects/edit/${project.id}`}>

                      <Pencil
                        size={20}
                        className="cursor-pointer text-blue-600 hover:text-blue-800"
                      />

                    </Link>

                    <button>

                      <Trash2
                        size={20}
                        className="cursor-pointer text-red-600 hover:text-red-800"
                      />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}