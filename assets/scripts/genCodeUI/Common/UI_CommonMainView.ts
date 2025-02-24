/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import {UIPackage, GImage, GComponent, GRichTextField} from "fairygui-cc";
export default class UI_CommonMainView extends GComponent {

	public m_img001:GImage;
	public m_txtName:GRichTextField;
	public static URL:string = "ui://Common/CommonMainView";

	public static createInstance():UI_CommonMainView {
		return <UI_CommonMainView>(UIPackage.createObject("Common", "CommonMainView"));
	}

	protected onConstruct():void {
		this.m_img001 = <GImage>(this.getChild("img001"));
		this.m_txtName = <GRichTextField>(this.getChild("txtName"));
	}
}