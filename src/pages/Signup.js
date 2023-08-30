import { useState } from 'react'
const SignUp = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="signup">
            <h1>Sign Up!</h1>
            <div className="auth-form-container">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <label htmlForm="name">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="enter your name" />

                    <label htmlForm="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter your email" />

                    <label htmlForm="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="enter your password" />
                    <button type="submit">Sign up!</button>
                </form>
            </div>
            <button className="link-btn" onClick={() => props.onFormSwitch("Login")}>Already have an account? Login!</button>
        </div>
    );
}
export default SignUp;