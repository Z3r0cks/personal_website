import Component from './Component'
import { addBackendInput, componentWrapper, addDropdownClick } from "../../helper/helper";

export default class C_title extends Component {

   constructor() {
      super()
      this._devTitle = "c_title";
      this._devClasses = "c_title";
   }

   createBackendHtmlElemnts() {
      // this._devClasses = "c_title";
      // this._devTitle = "c_title";
      const titleInput = addBackendInput("text", false)
      const type = addDropdownClick(["h1", "h2", "h3", "h4", "h5", "h6", "h7"], "Größe")
      const color = addBackendInput("text", "white", "Farbe")
      console.log("Classes");
      console.log(this._devTitle);
      console.log(this._devClasses);
      this.setSetting({ content: titleInput, color: color, type: type, classes: this._devClasses })
   }
}