import { useState } from 'react'
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="login">
            <h1>Login!</h1>
            <div className="auth-form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlForm="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter your email" />

                    <label htmlForm="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="enter your password" />

                    <button type="submit">Login!</button>
                </form>
            </div>
            <button className="link-btn" onClick={() => props.onFormSwitch("SignUp")}>Dont have an account? Register</button>
        </div>
    );
}
export default Login;