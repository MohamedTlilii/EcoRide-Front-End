import React, { useState } from "react";
import { Button, Form, Checkbox } from "semantic-ui-react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MessageHeader, Message } from "semantic-ui-react";
function Login() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [loginData, setLoginData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    setLoading(true);
    axios
      .post("https://ecoridebackend.onrender.com/api/user/login", loginData)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("isUser", res.data.data.isUser);
        localStorage.setItem("isBanned", res.data.data.isBanned);
        localStorage.setItem("id", res.data.data.id);
        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        console.dir(err);
        setLoading(false);
        setError(err.response.data.error);
        setTimeout(() => {
          setError("");
        }, 8000);
      });
  };
  return (
    <div className="page">
      <Form
        size="large"
        className="login-form"
        onChange={(e) => {
          setLoginData({ ...loginData, [e.target.name]: e.target.value });
        }}
      >
        <h1>Login.</h1>
        <Form.Input type="email" name="email" placeholder="Email" />
        <Form.Input
          type={showPass ? "text" : "password"}
          name="password"
          placeholder="Password"
        />
        <Form.Field>
          <Checkbox
            label="Show password"
            onClick={() => {
              setShowPass(!showPass);
            }}
          />
        </Form.Field>
        {error && (
          <Message negative>
            <MessageHeader>OOOPPPS! 🤕</MessageHeader>
            <p>{error}</p>
          </Message>
        )}

        <Button
          onClick={() => {
            handleLogin();
          }}
          loading={loading}
        >
          Login
        </Button>
        <Form className="mb-3" controlId="formBasicCheckbox">
          <Link to="/register">   You dont have an account yet? Register now.</Link>
        </Form>
        <div>
          <Link to="/">← Go to Website</Link>
        </div>
      </Form>
    </div>
  );
}

export default Login;
