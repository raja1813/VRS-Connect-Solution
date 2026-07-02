import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      email === "admin@vrsconnectsolution.com" &&
      password === "Admin@123"
    ) {
      localStorage.setItem("adminLoggedIn", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <form
        onSubmit={login}
        className="bg-white shadow-xl rounded-2xl p-10 w-[420px]"
      >

        <h1 className="text-3xl font-bold text-center mb-8">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-3 rounded-lg mb-5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-3 rounded-lg mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white w-full p-3 rounded-lg"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;