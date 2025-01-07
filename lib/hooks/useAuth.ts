import { useState, useCallback } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuthContext } from '../../context/AuthContext';

interface LoginCredentials {
  email: string;
  password: string;
}

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuthContext();

  const login = useCallback(async ({ email, password }: LoginCredentials) => {
    try {
      setLoading(true);
      setError(null);
      
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (signInError) throw signInError;
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during login');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const loginWithProvider = useCallback(async (provider: 'google' | 'facebook' | 'github') => {
    try {
      setLoading(true);
      setError(null);
      
      const { error: signInError } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });

      if (signInError) throw signInError;
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during social login');
      console.error('Social login error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    user,
    login,
    loginWithProvider,
    loading,
    error
  };
};