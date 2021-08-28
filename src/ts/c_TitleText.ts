import { ComponentType } from "./ComponentType";

export class C_TitleText extends ComponentType {
   protected _titleInput: HTMLInputElement;
   protected _textInput: HTMLInputElement;
   protected _moreTitles: HTMLButtonElement; 

   constructor() {
      super("c_titleText", {
         firstTitle: "",
         firstText: "",
         moreTitleBtn: new HTMLButtonElement(),
      })

      this._titleInput = new HTMLInputElement()
      this._titleInput.type 
   }
}