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
        } else if (err.response.data.error.firstName) {
          setError(err.response.data.error.firstName.message);
        } else if (err.response.data.error.lastName) {
          setError(err.response.data.error.lastName.message);
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
        <h1
          style={{
            color: "hsl(173, 95%, 42%)",
            position: "relative",
            left: "10px",
          }}
        >
          Register{" "}
        </h1>
        <input
          style={{
            margin: "10px",
            padding: "5px",
            height: "40px",
            width: "305px",
          }}
          name="firstName"
          type="text"
          placeholder="First Name"
        />
        <input
          style={{
            margin: "10px",
            padding: "5px",
            height: "40px",
            width: "305px",
          }}
          name="lastName"
          type="text"
          placeholder="Last Name"
        />
        <input
          style={{
            margin: "10px",
            padding: "5px",
            height: "40px",
            width: "305px",
          }}
          type="text"
          name="address"
          placeholder="Address"
        />
        <input
          style={{
            margin: "10px",
            padding: "5px",
            height: "40px",
            width: "305px",
          }}
          type="text"
          name="city"
          placeholder="City"
        />
        <input
          style={{
            margin: "10px",
            padding: "5px",
            height: "40px",
            width: "305px",
          }}
          type="text"
          name="userName"
          placeholder="Username"
        />
        <input
          style={{
            margin: "10px",
            padding: "5px",
            height: "40px",
            width: "305px",
          }}
          type="text"
          name="number"
          placeholder="Phone"
        />
        <input
          style={{
            margin: "10px",
            padding: "5px",
            height: "40px",
            width: "630px",
          }}
          type="email"
          name="email"
          placeholder="Email"
        />

        <input
          style={{
            margin: "10px",
            padding: "5px",
            height: "40px",
            width: "630px",
          }}
          type={showPass ? "text" : "password"}
          name="password"
          placeholder="Password"
        />
        <Form.Field>
          <Checkbox
            style={{ margin: "10px" }}
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
        <Form className="loginNow">
          <Link to="/login">
            {" "}
            <h3>You already have an account?</h3> <br />
            <h4>Login now✌️</h4>{" "}
          </Link>
        </Form>
        <div>
          <h5 className="goToWebSite">← Go to Website</h5>
        </div>
      </Form>
    </div>
  );
}

export default Register;
