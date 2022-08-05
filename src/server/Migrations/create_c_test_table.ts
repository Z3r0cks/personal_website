import Migration from "./Migration";

   class CreateTest extends Migration {
      constructor() {
         super()
         this._devTitle = "c_imageText";
         this._pupTitle = "";    //TODO: ADD PUPLIC TITLE
         this._descr = "";       //TODO: ADD DESCRIPTION
      }
   }