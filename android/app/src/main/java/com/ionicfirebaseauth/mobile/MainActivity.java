package com.ionicfirebaseauth.mobile;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.baumblatt.capacitor.firebase.auth.CapacitorFirebaseAuth;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      add(CapacitorFirebaseAuth.class);
    }});
  }
}
