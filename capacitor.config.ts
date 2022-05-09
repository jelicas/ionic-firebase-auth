import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ionicfirebaseauth.mobile',
  appName: 'ionic-firebase-auth',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    CapacitorFirebaseAuth: {
      providers: ['google.com'],
      languageCode: 'en',
      nativeAuth: true,
    },
    permissions: {
      google: ['profile'],
    },
  },
 };
 

export default config;
