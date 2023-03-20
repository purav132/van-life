import React from "react";
import {
  useLocation,
  useNavigate,
  Form,
  useActionData,
  useNavigation,
  Link,
} from "react-router-dom";
import { loginUser } from "../api";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    return data;
  } catch (err) {
    return {
      error: err,
    };
  }
}

export default function Login() {
  const location = useLocation();
  //   console.log(location);
  const navigate = useNavigate();
  const data = useActionData();
  const { state: status } = useNavigation();

  const from = location.state?.from || "/host";

  React.useEffect(() => {
    if (data?.token) {
      navigate(from, { replace: true });
    }
  }, [data, from, navigate]);

  return (
    <div className="login-page">
      <h3 className="login-error">{location.state?.message}</h3>
      <h1 className="login-title">Sign in to your account</h1>
      <h3 className="login-error">{data?.error?.message}</h3>
      <Form action="/login" method="post" className="login-form">
        <input
          className="login-form-input1"
          type="email"
          name="email"
          placeholder="Email Address"
        />
        <input
          className="login-form-input2"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button disabled={status === "submitting"}>
          {status === "idle" ? "Log in" : "Logging in..."}
        </button>
      </Form>
      <div>
        Don't have an account? <Link>Create one now</Link>
      </div>
    </div>
  );
}
