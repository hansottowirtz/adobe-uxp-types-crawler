// Manually created by @hansottowirtz
declare module "photoshop" {
  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   */
  type InterpolationMethod = any;

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   */
  type ResampleMethod = any;

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   */
  type AnchorPosition = any;

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   */
  type BuiltinWarpStyle = WarpStyle;

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   */
  type LayerTypes = GroupLayer | Layer;

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   */
  type SaveDialogOptions = any;

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   */
  type CreateOptions = Partial<Layer>;

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   */
  type LayerCreateOptions = CreateOptions;

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   */
  type GroupLayerCreateOptions = CreateOptions;

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   * From https://github.com/AdobeDocs/uxp-photoshop/blob/a0aa32139d/src/pages/ps_reference/media/advanced/batchplay.md
   */
  type DocumentCreateOptions = Partial<Document>;

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   * From https://github.com/AdobeDocs/uxp-photoshop/blob/a0aa32139d/src/pages/ps_reference/media/advanced/batchplay.md
   */
  interface BatchPlayCommandOptions {
    readonly synchronousExecution?: boolean;
  }

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   * From https://github.com/AdobeDocs/uxp-photoshop/blob/a0aa32139d/src/pages/ps_reference/media/advanced/batchplay.md
   */
  interface ActionDescriptor {
    /**
     * _obj is a reserved identifier for the event of the action descriptor.
     * _obj is universally needed for all descriptors being passed into batchPlay.
     */
    _obj: string;
    /**
     * This is the ActionReference, the element on which this action should be played
     */
    _target: {
      /**
       * @example "document"
       */
      _ref: string;
      /**
       * @example "ordinal"
       */
      _enum: string;
      /**
       * @example "targetEnum"
       */
      _value: string;
    };
    [key: string]: any;
  }

  interface Layer {
    name: string;
  }

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   * From https://github.com/AdobeDocs/uxp-photoshop/blob/a0aa32139d/src/pages/ps_reference/media/advanced/batchplay.md
   */
  type Descriptor = ActionDescriptor;

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   * From https://www.adobe.io/photoshop/uxp/ps_reference/modules/photoshopaction/#addnotificationlistener
   */
  type NotificationListener = (eventName: string, descriptor: Descriptor) => void;

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   */
  interface Tool {
    id: string;
  }

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   */
  namespace PsCommon {
    /**
     * Incomplete definition.
     * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
     */
    type Bounds = Rectangle;
  }

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   * From https://www.adobe.io/photoshop/uxp/ps_reference/interfaces/batchplaycommandoptions/
   */
  interface HistoryStateInfo {
    name: string;
    target: any;
  }

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   * From https://www.adobe.io/photoshop/uxp/ps_reference/media/advanced/cpp-pluginsdk/
   */
  interface PhotoshopMessaging {
    sendSDKPluginMessage(id: string, content: string): any;
    addSDKMessagingListener(cb: (...args: any[]) => any): void;
    removeSDKMessagingListener(cb: (...args: any[]) => any): void;
  }

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   */
  export const app: App;
  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   */
  export const action: PhotoshopAction;
  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   */
  export const core: PhotoshopCore;
  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   */
  export const messaging: PhotoshopMessaging;
}
