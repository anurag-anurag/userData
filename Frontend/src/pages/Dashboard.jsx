import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../feature/userSlice";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import Loader from "../components/Loader";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);

  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSubmit = (data) => {
    if (editingUser) {
      dispatch(updateUser({ id: editingUser._id, data }));
      setEditingUser(null);
    } else {
      dispatch(createUser(data));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          User Management
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Manage and monitor all registered users
        </p>
      </div>
    </div>

    {/* Form Card */}
    <div className="bg-gray-800/60 backdrop-blur-md shadow-2xl rounded-2xl p-6 border border-gray-700">
      <UserForm
        onSubmit={handleSubmit}
        editingUser={editingUser}
      />
    </div>

    {/* Table Section */}
    <div className="bg-gray-800/60 backdrop-blur-md shadow-2xl rounded-2xl border border-gray-700 overflow-hidden">
      {loading ? (
        <Loader />
      ) : (
        <UserTable
          users={users}
          onEdit={setEditingUser}
          onDelete={(id) => dispatch(deleteUser(id))}
        />
      )}
    </div>

  </div>
</div>

  );
};

export default Dashboard;
