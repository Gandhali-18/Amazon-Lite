import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleAuth = async (e, isSignup = false) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      if (isSignup) {
        await signup(email, password);
      } else {
        await login(email, password);
      }
      navigate('/home');
    } catch (err) {
      setError("Failed to authenticate: " + err.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#eaeded' }}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" style={{ width: '100px', marginBottom: '20px' }} />
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '4px', border: '1px solid #ddd', width: '350px' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '20px', fontWeight: '400' }}>Sign in</h1>
        
        {error && <div style={{ color: 'red', marginBottom: '10px', fontSize: '13px' }}>{error}</div>}

        <form onSubmit={(e) => handleAuth(e, false)}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '5px' }}>Email (username)</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', border: '1px solid #a6a6a6', borderRadius: '3px' }} 
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '5px' }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', border: '1px solid #a6a6a6', borderRadius: '3px' }} 
            />
          </div>
          
          <button 
            disabled={loading}
            type="submit"
            style={{ width: '100%', padding: '8px', backgroundColor: '#f0c14b', border: '1px solid #a88734', borderRadius: '3px', cursor: 'pointer', marginBottom: '15px' }}>
            Sign In
          </button>
        </form>

        <div style={{ textAlign: 'center', fontSize: '12px', color: '#767676', marginBottom: '10px' }}>
          <span>New to Amazon?</span>
        </div>
        
        <button 
          disabled={loading}
          onClick={(e) => handleAuth(e, true)}
          style={{ width: '100%', padding: '8px', backgroundColor: '#e7e9ec', border: '1px solid #adb1b8', borderRadius: '3px', cursor: 'pointer' }}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}
