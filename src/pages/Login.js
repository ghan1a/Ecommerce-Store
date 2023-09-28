import { useState } from 'react'
import { Link } from 'react-router-dom';
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email);
    }

    return (
        <div className="login mt-5">
            <h1>Login!</h1>
            <div className="auth-form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlForm="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter your email" />

                    <label htmlForm="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="enter your password" />
                    <br />
                    <button type="submit">Login!</button>
                </form>
            </div>
            <button className="link-btn" onClick={() => props.onFormSwitch("SignUp")}>Dont have an account? Register</button>
            <div className="ms-4 mt-3">
                <Link className='color-white' to="/Home">go back to home page</Link>
            </div>
        </div>
    );
}
export default Login;