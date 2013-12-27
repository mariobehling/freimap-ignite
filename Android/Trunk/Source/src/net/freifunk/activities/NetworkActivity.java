package net.freifunk.activities;

import java.util.Map;

import android.app.Activity;
import android.content.Context;
import android.os.Bundle;
import android.widget.Toast;

public class NetworkActivity extends CommonActivity {
	/** Called when the activity is first created. */
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
	    // load javascript
	    this.mWebview.addJavascriptInterface(new JavaScriptInterface(this), "android");
		
	}
	
	@Override
	public String getMainUrl() {
		// TODO Auto-generated method stub
		return "file:///android_asset/www/network/network.html";
	}
	
	// Javascript native code
	final public class JavaScriptInterface extends CommonJavascriptInterface{
		Context mContext;
		JavaScriptInterface(Activity paramActivity) {			
			super(paramActivity);
			mContext = paramActivity;
			// TODO Auto-generated constructor stub
		}

		@Override
		public boolean doAction(String paramString, Map<String, String> paramMap) {
			// TODO Auto-generated method stub
			showDialog(paramString);
			return false;
		}
		
		@Override
		public void showDialog(String paramString){
	        Toast.makeText(mContext, paramString, Toast.LENGTH_SHORT).show();
	    }
	}	
}