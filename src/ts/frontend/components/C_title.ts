import Component from './Component'
import Setting from '../../interfaces/Setting';
import { addHtmlElement } from "../../helper/helper";

export default class C_title extends Component {
   protected _devTitle: string

   constructor(settings: Setting) {
      super(settings)
      this._devTitle = "c_title";
   }

   // TODO: delete?
   setSetting(): {} {
      return {
         color: this._settings.color,
         with: this._settings.width
      }
   }

   setHtmlElement() {
      return addHtmlElement(this._settings.type, "c_title");
   }
}