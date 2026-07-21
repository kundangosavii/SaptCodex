// src/pages/VerifyEmail.jsx
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('verifying'); // 'verifying', 'success', 'error'
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUserEmail = async () => {
      const token = searchParams.get('token');
      
      if (!token) {
        setStatus('error');
        setMessage('No token provided.');
        return;
      }

      try {
        const response = await axios.get(`http://localhost:5000/api/v1/auth/verify-email?token=${token}`);
        setStatus('success');
        setMessage(response.data.message);
        
        // Redirect to login page after 3 seconds
        setTimeout(() => navigate('/signin'), 3000);
      } catch (error) {
        setStatus('error');
        setMessage(error.response?.data?.message || 'Verification failed.');
      }
    };

    verifyUserEmail();
  }, [searchParams, navigate]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Email Verification</h1>
      {status === 'verifying' && <p>Verifying your email, please wait...</p>}
      {status === 'success' && <p style={{ color: 'green' }}>{message} Redirecting to login...</p>}
      {status === 'error' && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
}