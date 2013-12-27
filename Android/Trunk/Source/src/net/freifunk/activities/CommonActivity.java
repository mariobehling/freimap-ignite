package net.freifunk.activities;

import java.util.concurrent.atomic.AtomicBoolean;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.view.Window;
import android.webkit.WebSettings;
import android.webkit.WebView;

public abstract class CommonActivity extends Activity {

	protected Handler mHandler = new Handler();
	protected WebView mWebview;
	protected AtomicBoolean backButtonEnabled = new AtomicBoolean(true);
	private AtomicBoolean activityStarted = new AtomicBoolean(true);
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		this.mWebview = loadDefaultSettingWebView(this);		
		setContentView(this.mWebview);
		this.loadSafelyUrl(getMainUrl());
	}

	@Override
	protected void onDestroy() {
		// TODO Auto-generated method stub
		super.onDestroy();
	}

	@Override
	protected void onResume() {
		// TODO Auto-generated method stub
		super.onResume();
//		debug("[" + getClass().getSimpleName() + "] onResume() called", new Throwable[0]);
//	    thingsToCreate();
//	    isGoingToForeground();	    
//	    createAsyncTasks();
	    this.backButtonEnabled.set(true);
	}

	@Override
	protected void onStop() {
		// TODO Auto-generated method stub
		super.onStop();
	}
	
	@Override
	public void onBackPressed() {
		// TODO Auto-generated method stub
		if (this.backButtonEnabled.get())
	    {
	      super.onBackPressed();
//	      debug("[" + getClass().getSimpleName() + "] onBackPressed() called", new Throwable[0]);
	    }
	}
	
	// Load default setting webview
	private static WebView loadDefaultSettingWebView(Context paramContext) {
		WebView localWebView = new WebView(paramContext);
		WebSettings localWebSettings = localWebView.getSettings();
		localWebSettings.setJavaScriptEnabled(true);
		localWebSettings.setSupportZoom(false);
		localWebSettings.setDatabaseEnabled(true);
		localWebSettings.setDomStorageEnabled(true);
		localWebSettings.setGeolocationEnabled(true);
		localWebView.setScrollBarStyle(View.SCROLLBARS_INSIDE_OVERLAY);
		return localWebView;
	}
	
	public abstract String getMainUrl();

	// Load url
	protected void loadSafelyUrl(final String url) {
//		if (!CommonActivity.this.mWebview.isShown())
//			continue;
//		CommonActivity.this.debug( "Will load '"	+ this.val$url + "' safely",
//								   new Throwable[0]);
		CommonActivity.this.mWebview.loadUrl(url);
//		try {
//			this.mHandler.post(new Runnable() {
//				public void run() {
//					if (CommonActivity.this.mWebview == null)
////						CommonActivity.this.error("webView is already NULL... We can't use it anymore...!!!",
////													new Throwable[0]);
//					while (true) {						
//						try {
//							if (!CommonActivity.this.mWebview.isShown())
//								continue;
////							CommonActivity.this.debug( "Will load '"	+ this.val$url + "' safely",
////													   new Throwable[0]);
//							CommonActivity.this.mWebview.loadUrl(url);
//						} catch (Exception localException) {
////							CommonActivity.this.error(
////									"[loadUrlSafely] An error has occurred when trying to loadUrl("
////											+ this.val$url + "). Error: "
////											+ localException, new Throwable[0]);
//						}
//						return;
//					}
//				}
//			});
//			return;
//		} catch (Exception localException) {
//			while (true) {
//				String str = "[loadUrlSafely] It was not possible to load '"
//						+ url + "'!";
//				Throwable[] arrayOfThrowable = new Throwable[1];
//				arrayOfThrowable[0] = localException;
//			}
//		}
	}
	
	public void startActivityAndFlagIt(Intent paramIntent) {
		this.backButtonEnabled.set(false);
		this.activityStarted.set(true);
		startActivity(paramIntent);
	}

	public void finishActivityAndFlagIt() {
		this.backButtonEnabled.set(false);
		this.activityStarted.set(true);
		finish();
	}	
}
