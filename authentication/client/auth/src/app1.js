    import axios from 'axios';
import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

    const API_URL = 'http://localhost:3001/api';

    const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await axios.post(`${API_URL}/register`, { username, email, password });
        console.log('Registration successful');
        } catch (error) {
        console.error('Registration failed');
        }
    };

    return (
        <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
        </form>
        </div>
    );
    };

    const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        localStorage.setItem('token', response.data.token);
        console.log('Login successful');
        } catch (error) {
        console.error('Login failed');
        }
    };

    return (
        <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
        </div>
    );
    };

    const Protected = () => {
    const [message, setMessage] = useState('');

    const token = localStorage.getItem('token');

    if (!token) {
        window.location.href = '/login';
        return null;
    }

    axios
        .get(`${API_URL}/protected`, {
        headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
        setMessage(response.data.message);
        })
        .catch((error) => {
        console.error('Protected route access failed:', error);
        window.location.href = '/login';
        });

    return (
        <div>
        <h2>Protected Route</h2>
        <p>{message}</p>
        </div>
    );
    };

    function App1() {
    return (
        <Router>
        <div>
            <nav>
            <ul>
                <li>
                <Link to="/register">Register</Link>
                </li>
                <li>
                <Link to="/login">Login</Link>
                </li>
                <li>
                <Link to="/protected">Protected</Link>
                </li>
            </ul>
            </nav>

            <Switch>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/protected">
                <Protected />
            </Route>
            </Switch>
        </div>
        </Router>
    )
    }

    export default App1;