import Component from './Component'
import { addBackendInput, componentWrapper, addDropdownClick } from "../../helper/helper";

export default class C_title extends Component {
   protected _devTitle: string

   constructor() {
      super()
      this._devTitle = "c_title";
      this._devClasses = "c_title";
   }

   createBackendHtmlElemnts() {
      const titleInput = addBackendInput("text", false)
      const type = addDropdownClick(["h1", "h2", "h3", "h4", "h5", "h6", "h7"], "Größe")
      const color = addBackendInput("text", "white", "Farbe")
      this.setSetting({ content: titleInput, color: color, type: type })
   }
}