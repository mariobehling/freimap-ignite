package net.freifunk.activities;

import android.app.Activity;
import java.util.HashMap;
import java.util.Map;

abstract class CommonJavascriptInterface {
	private Activity activity;

	CommonJavascriptInterface(Activity paramActivity) {
		this.activity = paramActivity;
	}
	
	public abstract boolean doAction(String paramString,
			Map<String, String> paramMap);
	
	public void doActionOnAndroid(String paramString1, String paramString2,
			boolean paramBoolean) {
		Object localObject = new HashMap();
		
		doAction(paramString1, (Map) localObject);		
		
	}

	public abstract void showDialog(String paramString);
}
