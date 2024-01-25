import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./Style.css";
function Login() {
  return (
    <div className="page">
      
      <Form className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Link to="/register">
            {" "}
            You dont have an account yet? Register now.
          </Link>
          <div>
            <Link to="/">← Go to Website</Link>
          </div>
        </Form.Group>
        <Button>Login</Button>
      </Form>
    </div>
  );
}

export default Login;
