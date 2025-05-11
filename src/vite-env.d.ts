/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_API_BASE_URL: string;
  readonly VITE_ENABLE_MOCK_API: string; // "true" or "false"
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
