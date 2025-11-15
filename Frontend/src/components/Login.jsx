import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <div className="btn-row">
          <button>Sign In</button>
          <button className="register">Register</button>
        </div>
      </div>
    </div>
  );
}
