import "./Style.css";
import React, { useState } from "react";
import { Button, Form, Checkbox } from "semantic-ui-react";
import axios from "axios";
// api
import { Link, useNavigate } from "react-router-dom";
import { MessageHeader, Message } from "semantic-ui-react";
function Register() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [registerData, setRegisterData] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleRegister = () => {
    setLoading(true);
    axios
      .post(
        "https://ecoridebackend.onrender.com/api/user/register",
        registerData
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
        setMessage("Your account was created successfully");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((err) => {
        console.dir(err);
        setLoading(false);
        if (err.response.data.error.email) {
          setError(err.response.data.error.email.message);
        } else {
          setError(err.response.data.error);
        }
        setTimeout(() => {
          setError("");
        }, 10000);
        console.dir(err);
      });
  };
  return (
    <div className="page-container">
      <Form
        size="large"
        className="register-form"
        onChange={(e) => {
          setRegisterData({ ...registerData, [e.target.name]: e.target.value });
        }}
      >
        <h1>Create an account.</h1>
        <Form.Input type="text" name="userName" placeholder="Username" />
        <Form.Input type="email" name="email" placeholder="Email" />
        <Form.Input type="firstName" name="firstName" placeholder="firstName" />
        <Form.Input type="lastName" name="lastName" placeholder="lastName" />
        <Form.Input type="address" name="address" placeholder="address" />
        <Form.Input type="city" name="city" placeholder="city" />
        <Form.Input type="phone" name="number" placeholder="phone" />
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
        {message && (
          <Message positive>
            <MessageHeader>{message} 🥳</MessageHeader>
            <p>You wil be redirect to the Login page</p>
          </Message>
        )}
        <Button
          onClick={() => {
            handleRegister();
          }}
          loading={loading}
        >
          Register
        </Button>
        <Form className="mb-3" controlId="formBasicCheckbox">
          <Link to="/login"> You already have an account? Login now.</Link>
        </Form>
        <div>
          <Link to="/">← Go to Website</Link>
        </div>
      </Form>
    </div>
  );
}

export default Register;
