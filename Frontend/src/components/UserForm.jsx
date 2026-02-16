import { useForm } from "react-hook-form";
import { userFormSchema } from "../config/user.Form.Schema";

const UserForm = ({ onSubmit, editingUser }) => {
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      {userFormSchema.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label className="text-sm mb-1 text-gray-400">
            {field.label}
          </label>

          <input
            type={field.type}
            {...register(field.name, {
              required: field.required,
            })}
            className="bg-gray-900 border border-gray-700 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      ))}

      <button className="md:col-span-2 bg-indigo-600 py-3 rounded-xl">
        {editingUser ? "Update User" : "Create User"}
      </button>
    </form>
  );
};

export default UserForm;
