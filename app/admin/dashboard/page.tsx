import {
  Building2,
  ImageIcon,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const cards = [
  {
    title: "Projects",
    value: "3",
    icon: Building2,
    color: "bg-blue-600",
  },
  {
    title: "Gallery Images",
    value: "24",
    icon: ImageIcon,
    color: "bg-emerald-600",
  },
  {
    title: "Enquiries",
    value: "18",
    icon: Mail,
    color: "bg-orange-500",
  },
];

const enquiries = [
  {
    id: 1,
    name: "Rahul Sharma",
    phone: "9876543210",
    project: "Ekta Avenue",
    date: "Today",
  },
  {
    id: 2,
    name: "Amit Verma",
    phone: "9123456789",
    project: "Yog Vihar",
    date: "Yesterday",
  },
  {
    id: 3,
    name: "Rohit Singh",
    phone: "9012345678",
    project: "Flats",
    date: "22 Jul",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Heading */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-300">
          Welcome back, Admin 👋
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-2xl border border-gray-700 bg-[#1b2230] p-6 shadow-lg"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-gray-400">
                    {card.title}
                  </p>

                  <h2 className="mt-2 text-5xl font-bold text-white">
                    {card.value}
                  </h2>
                </div>

                <div className={`${card.color} rounded-xl p-4 text-white`}>
                  <Icon size={30} />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-green-400">
                <ArrowUpRight size={16} />
                Active
              </div>

            </div>
          );
        })}

      </div>

      {/* Recent Enquiries */}

      <div className="overflow-hidden rounded-2xl border border-gray-700 bg-[#1b2230] shadow-lg">

        <div className="border-b border-gray-700 p-6">

          <h2 className="text-2xl font-bold text-white">
            Recent Enquiries
          </h2>

        </div>

        <table className="w-full">

          <thead className="bg-[#252d3d]">

            <tr>

              <th className="p-4 text-left font-semibold text-gray-300">
                Name
              </th>

              <th className="p-4 text-left font-semibold text-gray-300">
                Phone
              </th>

              <th className="p-4 text-left font-semibold text-gray-300">
                Project
              </th>

              <th className="p-4 text-left font-semibold text-gray-300">
                Date
              </th>

            </tr>

          </thead>

          <tbody>

            {enquiries.map((item) => (

              <tr
                key={item.id}
                className="border-t border-gray-700 hover:bg-[#252d3d]"
              >

                <td className="p-4 text-white">
                  {item.name}
                </td>

                <td className="p-4 text-gray-300">
                  {item.phone}
                </td>

                <td className="p-4 text-gray-300">
                  {item.project}
                </td>

                <td className="p-4 text-gray-300">
                  {item.date}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}