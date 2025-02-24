import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import * as fgui from "fairygui-cc";

import CommonMainView from "./CommonMainView";


@ccclass('DemoEntry')
export class DemoEntry extends Component {
    private _closeButton: fgui.GObject = null!;
    private _currentDemo: Component = null!;

    onLoad() {
        fgui.GRoot.create();

    }

 

    start() {

    }
}


