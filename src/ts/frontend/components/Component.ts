import Setting from '../../interfaces/Setting';

export default abstract class Component {
   protected _settings: Setting;
   protected _devTitle: string = "";

   constructor(settings: Setting) {
      this._settings = settings;
   }

   getSetting() {
      return this._settings;
   }
   getDevTitle() {
      return this._devTitle;
   }
}