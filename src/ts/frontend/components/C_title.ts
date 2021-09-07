import Component from './Component'
import Setting from '../../interfaces/Setting';
import { addHtmlElement } from "../../helper/helper";

export default class C_title extends Component {
   protected _type: string

   constructor(settings: Setting, type: string) {
      super(settings)
      this._type = type;
   }

   setSetting(): {} {
      return {
         color: this._settings.color,
         with: this._settings.width
      }
   }

   setHtmlElement() {
      return addHtmlElement(this._type, "c_title");
   }
}