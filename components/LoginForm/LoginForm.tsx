import React, { useState } from 'react';
import { SocialLoginButtons } from './SocialLoginButtons';
import { Divider } from './Divider';
import { InputField } from './InputField';
import styles from './LoginForm.module.css';
// import Logo from '../../public/g-connect-logo-removebg-preview.png'
export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', { email, password, rememberMe });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoSection}>
        <img src="/g-connect-logo-removebg-preview.png" alt="Spiral Logo" className={styles.logo} />
      </div>

      <div className={styles.formSection}>
        <div className={styles.formWrapper}>
          <h1 className={styles.title}>GC-Evenizer</h1>
          <div className={styles.welcomeText}>
            <h2>Welcome back!</h2>
            <p>STS library is proud to see you back. Please enter your details.</p>
          </div>

          <SocialLoginButtons />
          <Divider />

          <form onSubmit={handleSubmit} className={styles.form}>
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />

            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
            />

            <div className={styles.formOptions}>
              <label className={styles.rememberMe}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember for 30 days</span>
              </label>
              <a href="#" className={styles.forgotPassword}>
                Forgot password?
              </a>
            </div>

            <button type="submit" className={styles.loginButton}>
              Sign In
            </button>

            <p className={styles.signupText}>
              Don't have an account?{' '}
              <a href="#" className={styles.signupLink}>
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};