import { useState } from 'react';
import './LoginRegistr.css';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '../../header/Header';

const LoginRegistr = () => {
  const [action, setAction] = useState('');
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    first_name: '',
    last_name: ''
  });

  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(loginData.email, loginData.password);
      navigate('/');
    } catch (error) {
      alert('Ошибка входа: ' + (error?.response?.data?.detail || error.message));
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('→ Register payload:', registerData);

    try {
      await register({
        username: registerData.username || registerData.email,
        email: registerData.email,
        password: registerData.password,
        password_confirmation: registerData.password_confirmation,
        first_name: registerData.first_name,
        last_name: registerData.last_name
      });
      setAction(''); // переключаемся на форму логина
    } catch (error) {
      const data = error.response?.data;
      alert('Ошибка регистрации:\n' + JSON.stringify(data, null, 2));
    }
  };

  return (
    <>
      <Header />
      <div className="bodys">
        <div className={`wrapper${action}`}>
          {/* Login form */}
          <div className="form-box login">
            <form onSubmit={handleLogin}>
              <h1>Login</h1>

              <div className="input-box">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
                <FaEnvelope className="icon" />
              </div>

              <div className="input-box">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
                <FaLock className="icon" />
              </div>

              <button type="submit">Login</button>

              <div className="registr-link">
                <p>
                  Don't have an account?{' '}
                  <a href="#" onClick={() => setAction(' active')}>
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* Register form */}
          <div className="form-box register">
            <form onSubmit={handleRegister}>
              <h1>Registration</h1>

              <div className="input-box">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  value={registerData.first_name}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, first_name: e.target.value })
                  }
                />
              </div>

              <div className="input-box">
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  value={registerData.last_name}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, last_name: e.target.value })
                  }
                />
              </div>

              <div className="input-box">
                <input
                  type="text"
                  placeholder="Username"
                  required
                  value={registerData.username}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, username: e.target.value })
                  }
                />
                <FaUser className="icon" />
              </div>

              <div className="input-box">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={registerData.email}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, email: e.target.value })
                  }
                />
                <FaEnvelope className="icon" />
              </div>

              <div className="input-box">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={registerData.password}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, password: e.target.value })
                  }
                />
                <FaLock className="icon" />
              </div>

              <div className="input-box">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  value={registerData.password_confirmation}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, password_confirmation: e.target.value })
                  }
                />
                <FaLock className="icon" />
              </div>

              <button type="submit">Register</button>

              <div className="registr-link">
                <p>
                  Already have an account?{' '}
                  <a href="#" onClick={() => setAction('')}>
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegistr;
