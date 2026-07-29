import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaUser,
  FaEnvelope,
  FaLock,
  FaSignOutAlt,
  FaSave,
} from "react-icons/fa";

export default function AdminSettings() {
  const navigate = useNavigate();

  const currentUser =
    JSON.parse(localStorage.getItem("currentUser")) || {};

  const [name, setName] = useState(currentUser.name || "Administrator");
  const [email, setEmail] = useState(currentUser.email || "admin@gmail.com");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    const updatedUser = {
      ...currentUser,
      name,
      email,
      password: password || currentUser.password,
    };

    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((user) =>
      user.email === currentUser.email ? updatedUser : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Settings Updated Successfully");
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-pink-50 p-8">

      <button
        onClick={() => navigate("/admin")}
        className="flex items-center gap-2 bg-pink-500 text-white px-5 py-3 rounded-xl mb-6"
      >
        <FaArrowLeft />
        Back
      </button>

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-pink-600 mb-8">
          Admin Settings
        </h1>

        <div className="space-y-6">

          <div>
            <label className="font-semibold">Name</label>

            <div className="flex items-center border rounded-xl mt-2 px-4">

              <FaUser className="text-pink-500" />

              <input
                className="w-full p-4 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

            </div>
          </div>

          <div>
            <label className="font-semibold">Email</label>

            <div className="flex items-center border rounded-xl mt-2 px-4">

              <FaEnvelope className="text-pink-500" />

              <input
                className="w-full p-4 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>
          </div>

          <div>
            <label className="font-semibold">
              New Password
            </label>

            <div className="flex items-center border rounded-xl mt-2 px-4">

              <FaLock className="text-pink-500" />

              <input
                type="password"
                placeholder="Enter New Password"
                className="w-full p-4 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>
          </div>

          <div className="flex gap-4">

            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl flex items-center gap-2"
            >
              <FaSave />
              Save Changes
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl flex items-center gap-2"
            >
              <FaSignOutAlt />
              Logout
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}