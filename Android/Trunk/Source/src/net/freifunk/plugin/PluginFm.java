package net.freifunk.plugin;

import org.json.JSONArray;

import com.phonegap.api.Plugin;
import com.phonegap.api.PluginResult;

public abstract class PluginFm extends Plugin{

	@Override
	public PluginResult execute(String action, JSONArray arg1, String arg2) {
		// TODO Auto-generated method stub
//		if(action.equals("networkClickEvent")) return new PluginResult(PluginResult.Status.OK, getCurrClass());
		return new PluginResult(PluginResult.Status.OK, action);
	}
	
	public abstract String getCurrClass();
}
