"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, User } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Temporary Login
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAdminLoggedIn", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid Username or Password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-700">
            Wealth Pro
          </h1>
          <p className="mt-2 text-gray-500">
            Admin Panel Login
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Username */}
          <div>
            <label className="mb-2 block font-medium">
              Username
            </label>

            <div className="flex items-center rounded-lg border px-3">
              <User className="mr-2 h-5 w-5 text-gray-500" />

              <input
                type="text"
                placeholder="Enter Username"
                className="w-full border-none p-3 outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}

          <div>
            <label className="mb-2 block font-medium">
              Password
            </label>

            <div className="flex items-center rounded-lg border px-3">

              <Lock className="mr-2 h-5 w-5 text-gray-500" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full border-none p-3 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-500" />
                )}
              </button>

            </div>
          </div>

          {/* Error */}

          {error && (
            <p className="text-center text-sm text-red-500">
              {error}
            </p>
          )}

          {/* Login Button */}

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}