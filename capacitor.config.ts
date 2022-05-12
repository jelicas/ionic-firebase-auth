import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ionicfirebaseauth.mobile',
  appName: 'ionic-firebase-auth',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    CapacitorFirebaseAuth: {
      providers: ['google.com', 'facebook.com'],
      languageCode: 'en',
      nativeAuth: true,
    },
    permissions: {
      google: ['profile'],
      facebook: ['public_profile', 'email', 'user_friends'],
    },
  },
 };
 

export default config;
