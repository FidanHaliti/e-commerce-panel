import { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFromData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const apiUrl = import.meta.env.VITE_API_BASE_URL

  const hendleInputChange = (e) => {
    const { name, value } = e.target;
    setFromData({ ...formData, [name]: value });
  };

  const hendleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        //const { password, reset} = data

        localStorage.setItem("user", JSON.stringify(data));
        message.success("SignUp Success");
        navigate("/");
      } else {
        message.error("SignUp Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="account-column">
      <h2>Register</h2>
      <form onSubmit={hendleRegister}>
        <div>
          <label>
            <span>
              Username <span className="required">*</span>
            </span>
            <input type="text" onChange={hendleInputChange} name="username" />
          </label>
        </div>
        <div>
          <label>
            <span>
              Email address <span className="required">*</span>
            </span>
            <input type="email" onChange={hendleInputChange} name="email" />
          </label>
        </div>
        <div>
          <label>
            <span>
              Password <span className="required">*</span>
            </span>
            <input
              type="password"
              onChange={hendleInputChange}
              name="password"
            />
          </label>
        </div>
        <div className="privacy-policy-text remember">
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <a href="#">privacy policy.</a>
          </p>
          <button className="btn btn-sm">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
