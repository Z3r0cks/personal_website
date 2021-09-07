import Setting from '../../interfaces/Setting';

export default abstract class Component {
   protected _settings: Setting;

   constructor(settings: Setting) {
      this._settings = settings;
   }
}