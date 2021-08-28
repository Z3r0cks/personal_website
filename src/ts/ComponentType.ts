export abstract class ComponentType {
   protected _componentName: string;
   protected _componentProperties: {};

   constructor(componentName: string, componentProperties: {}) {
      this._componentName = componentName;
      this._componentProperties = componentProperties;
   }
}