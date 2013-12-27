package net.freifunk.activities;

import java.util.Map;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.widget.Toast;

public class MainActivity extends CommonActivity {
	/** Called when the activity is first created. */
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
	    this.mWebview.addJavascriptInterface(new JavaScriptInterface(this), "android");		
	}
	
	@Override
	public String getMainUrl() {
		// TODO Auto-generated method stub
		return "file:///android_asset/www/main.html";
	}
	
	public void openNetwork(){
		this.startActivity(new Intent("net.freifunk.activities.NETWORK"));
	}
	
	public void openInternet(){
		
	}
	
	public void openNetworkQuickShare(){
		
	}
	
	public void openMap(){
		this.startActivity(new Intent("net.freifunk.activities.MAP"));
	}
	
	public void openHelp(){
		this.startActivity(new Intent("net.freifunk.activities.HELP"));
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
			if (paramString.equals("networkClickEvent"))
		    {
		       MainActivity.this.openNetwork();
		    }
			else if(paramString.equals("internetClickEvent")){
				MainActivity.this.openInternet();
			}
			else if(paramString.equals("networkQuickShare")){
				MainActivity.this.openNetworkQuickShare();
			}
			else if(paramString.equals("mapClickEvent")){
				MainActivity.this.openMap();
			}
			else if(paramString.equals("helpClickEvent")){
				MainActivity.this.openHelp();
			}
			else if(paramString.equals("shareZgSuccesssConnectionOnFacebookClickEvent")){
				
			}			
			return false;
		}
		
		@Override
		public void showDialog(String paramString){
	        Toast.makeText(mContext, paramString, Toast.LENGTH_SHORT).show();
	    }
	}

	
}