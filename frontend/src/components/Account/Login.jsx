import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";



const Login = () => {
    const [formData, setFromData] = useState({
        email: "",
        password: "",
      });
      const navigate = useNavigate()
      const apiUrl = import.meta.env.VITE_API_BASE_URL

      const hendleInputChange = (e) => {
        const { name, value } = e.target;
        setFromData({ ...formData, [name]: value });
      };
    
      const hendleLogin = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch(`${apiUrl}/api/auth/login`, {
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
            message.success("Login Success");
            if(data.role === "admin")
            window.location.href=("/admin")
        
          } else {
            navigate("/");
            message.error("Login Failed");
          }
        } catch (error) {
          console.log(error);
        }
      };


  return (
    <div className="account-column">
                    <h2>Login</h2>
                    <form onSubmit={hendleLogin}>
                        <div>
                            <label>
                                <span>Username or email address <span className="required">*</span></span>
                                <input type="text" onChange={hendleInputChange} name="email"/>
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>Password <span className="required">*</span></span>
                                <input type="password" onChange={hendleInputChange} name="password"/>
                            </label>
                        </div>
                        <p className="remember">
                            <label>
                                <input type="checkbox"/>
                                <span>Remember me</span>
                            </label>
                            <button className="btn btn-sm">Login</button>
                        </p>
                        <a href="#" className="form-link">Lost your password?</a>
                    </form>
                </div>
  )
}

export default Login