import Logo from '../../assets/Images/CompanyLogo.png';
import '../../assets/Css/Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/useAppContext';
function Login() {
    const navigate = useNavigate();
    const { setAppData } = useAppContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');    
    

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {

            const response = await fetch('https://localhost:7014/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    rememberMe: rememberMe
                })
            });

            if (!response.ok) {

                if (response.status === 401) {
                    setError('Invalid username or password');
                }
                else {
                    setError('Something went wrong');
                }

                return;
            }

            const data = await response.json();
            console.log(data);

            setAppData(data);

            // Example:
            // localStorage.setItem('token', data.token);

            //Navigate to dashboard
            navigate(data.redirectController);

        }
        catch (error) {

            console.error(error);
            setError('Unable to connect to the server');
            navigate('/login');

        }
    };

    return (
        <div style={{ padding: '13em 2em' } }>

            <div className="login-container">

                <div className="company-section">

                    <div className="company-logo" style={{ paddingRight: '35px' }}>
                        <img src={Logo} alt="Company Logo" />
                    </div>

                    <h4>Creative Services.</h4>

                </div>

                <div className="login-section">

                    <h2>Log In</h2>

                    <form onSubmit={handleLogin}>

                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <div className="remember-me">

                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={(e) =>
                                    setRememberMe(e.target.checked)
                                }
                            />

                            <label htmlFor="rememberMe">
                                Remember Me!
                            </label>

                        </div>

                        {error && (
                            <div className="login-error">
                                {error}
                            </div>
                        )}

                        <button type="submit">
                            Login
                        </button>

                    </form>

                    <p>
                        Don't have an account?
                        <a href="/register"> Register Here</a>
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Login;