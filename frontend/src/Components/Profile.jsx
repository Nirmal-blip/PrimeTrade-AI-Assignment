import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  
  // 🔹 READ: fetch profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/api/me", {
          withCredentials: true,
        });
        setUser(res.data);
        setFormData(
            {
                name:res.data.name,
                email:res.data.email
            }
        )
      } catch (err) {
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // 🔹 DELETE: delete account
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (!confirmDelete) return;

    try {
      await axios.delete("/api/delete", {
        withCredentials: true,
      });

      alert("Account deleted successfully");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Failed to delete account");
    }
  };


   // 🔹 UPDATE input handler
   const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  
  //  UPDATE profile
  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        "/api/update",
        { ...formData },
        { withCredentials: true }
      );

      setUser(res.data.user || res.data);
      setEditing(false);
      alert("Profile updated successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    }
  };


  // 🔹 UI states
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Loading profile...</p>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error || "Something went wrong"}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          My Profile
        </h2>

        {/* Profile Fields */}
        <div className="space-y-4">
          <div>
            <label className="font-semibold text-sm">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              disabled={!editing}
              onChange={handleChange}
              className={`w-full mt-1 p-2 border rounded ${
                editing ? "bg-white" : "bg-gray-100"
              }`}
            />
          </div>

          <div>
            <label className="font-semibold text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled={!editing}
              onChange={handleChange}
              className={`w-full mt-1 p-2 border rounded ${
                editing ? "bg-white" : "bg-gray-100"
              }`}
            />
          </div>

          <div>
            <label className="font-semibold text-sm">Role</label>
            <input
              type="text"
              value={user.role}
              disabled
              className="w-full mt-1 p-2 border rounded bg-gray-100 capitalize"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3">
          {!editing ? (
            <button
              onClick={() => setEditing(true)}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
            >
              Edit Profile
            </button>
          ) : (
            <button
              onClick={handleUpdate}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
            >
              Save Changes
            </button>
          )}

          <button
            onClick={handleDelete}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
