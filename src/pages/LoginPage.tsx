import { NavLink } from "react-router-dom";

export default function LoginPage() {
  const inputClass =
    " border py-1.5 border-slate-400/80 rounded-md  focus:outline-blue-300 px-4";

  return (
    <div className="flex justify-center min-h-screen items-center">
      <form className="w-full bg-white border border-slate-200 flex flex-col max-w-sm items-center justify-center p-6 rounded-3xl shadow-xs">
        <div className="mb-6 items-center flex flex-col">
          <h1 className="font-bold text-xl ">Welcome back!</h1>
          <p className="text-xs text-slate-500 font-medium">
            Enter details to sign in to your account.
          </p>
        </div>
        <div className="gap-2 flex flex-col w-full">
          <label className="text-xs font-semibold px-">Email address</label>
          <input
            className={inputClass}
            type="text"
            placeholder="youremail@example.com"
          />
          <div></div>
          <label className="text-xs font-semibold px-">Password</label>
          <input
            className={inputClass}
            type="password"
            placeholder="Password"
          />
        </div>

        <button className="bg-blue-600 text-white w-full py-2 rounded-full mt-8 hover:bg-blue-700 transition-colors text-sm font-semibold">
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
