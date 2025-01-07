import { z } from 'zod';

// Définition du schéma pour valider les variables d'environnement
const envSchema = z.object({
  SUPABASE_URL: z.string().url(),
  SUPABASE_ANON_KEY: z.string().min(1),
});

// Chargement des variables d'environnement
const processEnv = {
  SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL, 
  SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
};

try {
  // Validation des variables d'environnement
  envSchema.parse(processEnv);
} catch (error) {
  console.error('❌ Invalid environment variables:', error);
  throw new Error(
    '❌ Invalid environment variables: Please check your .env file and ensure all required variables are set correctly.'
  );
}

// Export des variables validées
export const env = processEnv as z.infer<typeof envSchema>;
