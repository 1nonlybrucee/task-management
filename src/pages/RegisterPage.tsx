import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RegisterPage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { register } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      register(data);
      navigate("/login");
    } catch (err) {
      setData((prev) => ({
        ...prev,
        name: "",
        password: "",
      }));
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong.");
      }
    }
  };

  const inputClass =
    " border py-1.5 border-slate-400/80 rounded-md  focus:outline-blue-300 px-4";

  return (
    <div className="flex justify-center min-h-screen items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white border border-slate-200 flex flex-col max-w-sm items-center justify-center p-6 rounded-3xl shadow-xs"
      >
        <div className="mb-6 items-center flex flex-col">
          <h1 className="font-bold text-xl ">Create an account</h1>
          <p className="text-xs text-slate-500 font-medium">
            Enter your details below to get started
          </p>
        </div>
        <div className="gap-2 flex flex-col w-full">
          <label className="text-xs font-semibold">Name</label>
          <input
            name="name"
            value={data.name}
            onChange={handleChange}
            className={inputClass}
            type="text"
            placeholder="Juan Dela Cruz"
            required
          />
          <label className="text-xs font-semibold">Email address</label>
          <input
            name="email"
            value={data.email}
            onChange={handleChange}
            className={inputClass}
            type="email"
            placeholder="youremail@example.com"
            required
          />
          <label className="text-xs font-semibold">Password</label>
          <input
            onChange={handleChange}
            value={data.password}
            name="password"
            className={`${inputClass} mb-4`}
            type="password"
            placeholder="•••••••••"
            required
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded-full mt-2 hover:bg-blue-700 transition-colors text-sm font-semibold"
        >
          Sign up
        </button>
        <div className="flex gap-2 mt-3 font-semibold">
          <p className="text-sm text-gray-500">Already have an account?</p>
          <NavLink
            to={"/login"}
            className={"text-blue-500 font-medium text-sm hover:text-blue-600"}
          >
            Sign in
          </NavLink>
        </div>
      </form>
    </div>
  );
}
