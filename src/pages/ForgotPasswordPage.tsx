import { NavLink } from "react-router-dom";

export default function ForgotPasswordPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="flex  flex-col items-center w-full bg-white border border-slate-200 shadow-sm max-w-sm rounded-xl p-6">
        <div className="flex flex-col items-center mb-4">
          <h1 className="font-bold text-xl">Password reset</h1>
          <p className="text-sm text-gray-500">
            Enter the email address associated with your account.
          </p>
        </div>

        <div className="flex flex-col">
          <label className="text-xs font-semibold">Email</label>
          <input
            type="text"
            placeholder="youremail@example.com"
            className="border py-1.5 border-slate-400/80 rounded-md  focus:outline-blue-300 px-4"
          />
          <NavLink
            to={"/login"}
            className={
              "bg-blue-600 text-white w-full py-2 rounded-full mt-3 hover:bg-blue-700 transition-colors text-sm font-semibold text-center"
            }
          >
            Send reset link
          </NavLink>
        </div>
      </form>
    </div>
  );
}
