import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      login(form);
      navigate("/");
    } catch (err) {
      setForm((prev) => ({
        ...prev,
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
          <h1 className="font-bold text-xl ">Welcome back!</h1>
          <p className="text-xs text-slate-500 font-medium">
            Enter details to sign in to your account.
          </p>
        </div>
        <div className="gap-2 flex flex-col w-full">
          <label className="text-xs font-semibold">Email address</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            type="email"
            placeholder="youremail@example.com"
            required
          />
          <div className="flex justify-between items-center">
            <label className="text-xs font-semibold px-">Password</label>
            <NavLink
              to={"/forgot-password"}
              className={"text-xs text-blue-600 font-medium"}
            >
              Forgot password?
            </NavLink>
          </div>
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            className={`${inputClass} mb-4`}
            type="password"
            placeholder="•••••••••"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded-full mt-2 hover:bg-blue-700 transition-colors text-sm font-semibold"
        >
          Sign in
        </button>
        <div className="flex gap-2 mt-3 font-semibold">
          <p className="text-sm text-gray-500">Don't have an account?</p>
          <NavLink
            to={"/register"}
            className={"text-blue-500 font-medium text-sm hover:text-blue-600"}
          >
            Sign up
          </NavLink>
        </div>
      </form>
    </div>
  );
}
