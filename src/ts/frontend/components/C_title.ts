import Component from './Component'
import { addBackendInput, componentWrapper } from "../../helper/helper";

export default class C_title extends Component {
   protected _devTitle: string

   constructor() {
      super()
      this._devTitle = "c_title";
   }

   createBackendHtmlElemnts() {
      const titleInput = addBackendInput("text", false)
      const type = addBackendInput("text", "h2", "Type")
      const color = addBackendInput("text", "white", "Farbe")
      this.setSetting({ content: titleInput, type: type, color: color })
   }
}