"use client";

export default function AddProject() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-8 text-4xl font-bold text-gray-900">
          Add New Project
        </h1>

        <form className="space-y-6">

          {/* Project Name */}
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Project Name
            </label>
            <input
              type="text"
              placeholder="Enter project name"
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
            />
          </div>

          {/* Location */}
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Location
            </label>
            <input
              type="text"
              placeholder="Enter project location"
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
            />
          </div>

          {/* Price */}
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Price
            </label>
            <input
              type="text"
              placeholder="Example: ₹18,000 / Gaj"
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Description
            </label>
            <textarea
              rows={5}
              placeholder="Write complete project description..."
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
            />
          </div>

          {/* Amenities */}
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Amenities
            </label>
            <textarea
              rows={4}
              placeholder="Example: Gated Society, Park, Swimming Pool..."
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
            />
          </div>

          {/* Image */}
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Project Image
            </label>
            <input
              type="file"
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-900"
            />
          </div>

          {/* Status */}
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Status
            </label>
            <select className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-blue-600 focus:outline-none">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white hover:bg-blue-700"
          >
            Save Project
          </button>

        </form>

      </div>
    </div>
  );
}