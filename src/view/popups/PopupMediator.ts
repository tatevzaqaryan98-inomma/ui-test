import BasePopupMediator from "./BasePopupMediator";
import { Popup } from "./Popup";

export class PopupMediator extends BasePopupMediator<Popup>{
    public static NAME:string="PopupMediator";
    constructor{
        super(PopupMediator.NAME)
    }

}