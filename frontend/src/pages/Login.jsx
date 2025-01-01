import { useState } from "react";
import * as Components from "./Components";
import "./style.css";
import { handleError, handleSuccess } from "../utils";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [signIn, toggle] = useState(true);
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [signinInfo, setSigninInfo] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e, setState) => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            return handleError('Name, email, and password are required');
        }
        try {
            const url = "http://localhost:8080/auth/signup";
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            if (result.success) {
                handleSuccess(result.message);
            } else {
                handleError(result.message);
            }
        } catch (err) {
            handleError(err.message);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = signinInfo;
        if (!email || !password) {
            return handleError('Email and password are required');
        }
        try {
            const url = "http://localhost:8080/auth/login";
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signinInfo)
            });
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;
            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/home');
                }, 1000);
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
        } catch (err) {
            handleError(err.message);
        }
    };

    return (
        <div className="container-auth">
            <ToastContainer />
            <Components.Container>
                <Components.SignUpContainer signingIn={signIn}>
                    <Components.Form onSubmit={handleSignUp}>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input
                            onChange={(e) => handleChange(e, setSignupInfo)}
                            value={signupInfo.name}
                            name="name"
                            type="text"
                            placeholder="Name" />
                        <Components.Input
                            onChange={(e) => handleChange(e, setSignupInfo)}
                            value={signupInfo.email}
                            name="email"
                            type="email"
                            placeholder="Email" />
                        <Components.Input
                            onChange={(e) => handleChange(e, setSignupInfo)}
                            value={signupInfo.password}
                            name="password"
                            type="password"
                            placeholder="Password" />
                        <Components.Button>Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>
                <Components.SignInContainer signingIn={signIn}>
                    <Components.Form onSubmit={handleLogin}>
                        <Components.Title>Sign in</Components.Title>
                        <Components.Input
                            onChange={(e) => handleChange(e, setSigninInfo)}
                            value={signinInfo.email}
                            name="email"
                            type="email"
                            placeholder="Email" />
                        <Components.Input
                            onChange={(e) => handleChange(e, setSigninInfo)}
                            value={signinInfo.password}
                            name="password"
                            type="password"
                            placeholder="Password" />
                        <Components.Anchor href="#">Forgot your password?</Components.Anchor>
                        <Components.Button>Sign In</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>
                <Components.OverlayContainer signingIn={signIn}>
                    <Components.Overlay signingIn={signIn}>
                        <Components.LeftOverlayPanel signingIn={signIn}>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Sign In
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>
                        <Components.RightOverlayPanel signingIn={signIn}>
                            <Components.Title>Hello, Friend!</Components.Title>
                            <Components.Paragraph>
                                Enter your personal details and start journey with us
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
        </div>
    );
}

export default Login;
