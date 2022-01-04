/// <reference types="../uxp" />
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
  type LayerTypes = Layer;

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   */
  type SaveDialogOptions = any;

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   */
  type ColorDescriptor = PsColor;

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
  interface Rectangle {
    bottom: number;
    left: number;
    right: number;
    top: number;
  }

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   * From https://www.adobe.io/photoshop/uxp/2022/ps_reference/objects/bounds/
   */
  interface Bounds extends Rectangle {
    typename?: "Bounds";
    readonly height: number;
    readonly width: number;
  }

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   * From https://www.adobe.io/photoshop/uxp/2022/ps_reference/classes/document/
   */
  interface SuspendHistoryContext {
    document: Document;
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
    sendSDKPluginMessage(id: string, content: { [key: string]: any }): any;
    addSDKMessagingListener(cb: (...args: any[]) => any): void;
    removeSDKMessagingListener(cb: (...args: any[]) => any): void;
  }

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   * From https://www.adobe.io/photoshop/uxp/ps_reference/classes/document/
   * and https://forums.creativeclouddeveloper.com/t/where-to-find-list-of-save-options/2221/15
   * and https://github.com/bbb999/Types-for-Adobe/blob/master/Photoshop/2015.5/index.d.ts
   */
  interface SaveOptions {
    quality?: number;
    /**
     * If true, the alpha channels are saved.
     */
    alphaChannels?: boolean;

    /**
     * If true, the annotations are saved.
     */
    annotations?: boolean;

    /**
     * If true, the color profile is embedded in the document.
     */
    embedColorProfile?: boolean;

    /**
     * If true, the layers are saved.
     */
    layers?: boolean;

    /**
     * If true, spot colors are saved.
     */
    spotColors?: boolean;
  }

  type App = Photoshop;

  interface PhotoshopCore {
    /**
     * Incomplete definition.
     * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
     * From https://forums.creativeclouddeveloper.com/t/official-uxp-types-questions/3893
     */
    suppressResizeGripper: (obj: Record<string, any>) => void;
  }

  interface PhotoshopAction {
    /**
     * Incomplete definition.
     * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
     * From https://forums.creativeclouddeveloper.com/t/official-uxp-types-questions/3893
     */
    validateReference: (refs: Reference | Reference[]) => boolean;
  }

  type File = import("uxp").storage.File;

  interface Document {
    readonly saveAs: {
      readonly bmp: (entry: File, saveOptions?: BMPSaveOptions, asCopy?: boolean) => Promise<void>;
      readonly gif: (entry: File, saveOptions?: GIFSaveOptions, asCopy?: boolean) => Promise<void>;
      readonly jpg: (entry: File, saveOptions?: JPEGSaveOptions, asCopy?: boolean) => Promise<void>;
      readonly png: (entry: File, saveOptions?: PNGSaveOptions, asCopy?: boolean) => Promise<void>;
      readonly psb: (entry: File, saveOptions?: PhotoshopSaveOptions, asCopy?: boolean) => Promise<void>;
      readonly psd: (entry: File, saveOptions?: PhotoshopSaveOptions, asCopy?: boolean) => Promise<void>;
    };
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
