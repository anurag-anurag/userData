const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
  <table className="min-w-full text-sm text-left">
    <thead className="bg-gray-900 text-gray-400 uppercase text-xs tracking-wider">
      <tr>
        <th className="px-6 py-4">First Name</th>
        <th className="px-6 py-4">Last Name</th>
        <th className="px-6 py-4">Phone</th>
        <th className="px-6 py-4">Email</th>
        <th className="px-6 py-4 text-center">Actions</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-700">
      {users.map((user) => (
        <tr
          key={user._id}
          className="hover:bg-gray-700/40 transition"
        >
          <td className="px-6 py-4">{user.firstName}</td>
          <td className="px-6 py-4">{user.lastName}</td>
          <td className="px-6 py-4">{user.phone}</td>
          <td className="px-6 py-4">{user.email}</td>
          <td className="px-6 py-4 flex justify-center gap-3">

            <button
              onClick={() => onEdit(user)}
              className="bg-yellow-500 hover:bg-yellow-600 px-4 py-1.5 rounded-lg text-sm font-medium transition"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(user._id)}
              className="bg-red-600 hover:bg-red-700 px-4 py-1.5 rounded-lg text-sm font-medium transition"
            >
              Delete
            </button>

          </td>
        </tr>
      ))}
    </tbody>
  </table>

  {users.length === 0 && (
    <div className="text-center py-10 text-gray-500">
      No users found.
    </div>
  )}
</div>

  );
};

export default UserTable;
