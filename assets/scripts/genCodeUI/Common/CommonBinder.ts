/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_CommonMainView from "./UI_CommonMainView";

import { _decorator } from "cc";
import { UIObjectFactory } from "fairygui-cc";
const { ccclass} = _decorator;
@ccclass("CommonBinder")
export default class CommonBinder {
	public static bindAll():void {
		UIObjectFactory.setExtension(UI_CommonMainView.URL, UI_CommonMainView);
	}
}