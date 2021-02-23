// Part 1 - Manually created by @hansottowirtz
declare module "photoshop" {
  type PixelValue = `${number}px`;
  type PercentValue = `${number}%`;
  type AngleValue = `${number}deg`;

  /**
   * Incomplete definition.
   * Contibute at github.com/hansottowirtz/adobe-uxp-types-crawler
   */
  type InterpolationMethod = ResampleMethod;

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
    synchronousExecution?: boolean;
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
   */
  type Color = any;

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

// Part 2 - Borrowed from https://github.com/bbb999/Types-for-Adobe/blob/master/Photoshop/2015.5/index.d.ts
declare module "photoshop" {
  /**
   * The types of art layers.
   */
  enum LayerKind {
    /**
     * Black and white layer.
     */
    BLACKANDWHITE = 22,

    /**
     * Brightness contrast adjustment layer.
     */
    BRIGHTNESSCONTRAST = 9,

    /**
     * Channel mixer adjustment layer.
     */
    CHANNELMIXER = 12,

    /**
     * Color balance adjustment layer.
     */
    COLORBALANCE = 8,

    /**
     * Color lookup layer.
     */
    COLORLOOKUP = 24,

    /**
     * Curves adjustment layer.
     */
    CURVES = 7,

    /**
     * Exposure layer.
     */
    EXPOSURE = 19,

    /**
     * Gradient fill.
     */
    GRADIENTFILL = 4,

    /**
     * Gradient map adjustment laye.
     */
    GRADIENTMAP = 13,

    /**
     * Hue saturation adjustment laye.
     */
    HUESATURATION = 10,

    /**
     * Invert adjustment layer.
     */
    INVERSION = 14,

    /**
     * 3D layer.
     */
    LAYER3D = 20,

    /**
     * Levels adjustment layer.
     */
    LEVELS = 6,

    /**
     * Normal.
     */
    NORMAL = 1,

    /**
     * Pattern fill.
     */
    PATTERNFILL = 5,

    /**
     * Photo filter layer.
     */
    PHOTOFILTER = 18,

    /**
     * Posterize adjustment layer.
     */
    POSTERIZE = 16,

    /**
     * Selective color adjustment layer.
     */
    SELECTIVECOLOR = 11,

    /**
     * Smart object layer.
     */
    SMARTOBJECT = 17,

    /**
     * Solid color.
     */
    SOLIDFILL = 3,

    /**
     * Text.
     */
    TEXT = 2,

    /**
     * Threshold adjustment layer.
     */
    THRESHOLD = 15,

    /**
     * Vibrance layer.
     */
    VIBRANCE = 23,

    /**
     * Video layer.
     */
    VIDEO = 21,
  }

  /**
   * The warp style for text.
   */
  enum WarpStyle {
    /**
     * The type is warped in the shape of an arc.
     */
    ARC = 2,

    /**
     * Text is warped in the form of an arch.
     */
    ARCH = 5,

    /**
     * Warp is heavier on the lower or left edge of the text than on the upper or right edge.
     */
    ARCLOWER = 3,

    /**
     * Warp is heavier on the upper or right edge of the text than on the lower or left edge.
     */
    ARCUPPER = 4,

    /**
     * Text is warped outward on both the upper and lower or right and left edges.
     */
    BULGE = 6,

    /**
     * Text is warped in the shape of a fish.
     */
    FISH = 11,

    /**
     * Text bulges in the middle and is squeezed on the edges as if viewed through a fisheye lens.
     */
    FISHEYE = 13,

    /**
     * Text is warped in the shape of a waving flag.
     */
    FLAG = 9,

    /**
     * Text is inflated.
     */
    INFLATE = 14,

    /**
     * No warp.
     */
    NONE = 1,

    /**
     * Text is warped in an undulating, rising pattern.
     */
    RISE = 12,

    /**
     * Text is warped downward or to the right in the shape of a fan-like seashell.
     */
    SHELLLOWER = 7,

    /**
     * Text is warped upward or to the left in the shape of a fan-like seashell.
     */
    SHELLUPPER = 8,

    /**
     * Text is squeezed.
     */
    SQUEEZE = 15,

    /**
     * Text is twisted.
     */
    TWIST = 16,

    /**
     * Text is warped in the shape of a wave.
     */
    WAVE = 10,
  }

  /**
   * The point around which to transform the object.
   */
  enum AnchorPosition {
    /**
     * The middle point of the bottom of the object.
     */
    BOTTOMCENTER = 8,

    /**
     * The bottom left corner of the object.
     */
    BOTTOMLEFT = 7,

    /**
     * The bottom right corner of the object.
     */
    BOTTOMRIGHT = 9,

    /**
     * The center of the object.
     */
    MIDDLECENTER = 5,

    /**
     * The middle point on the left side of the object.
     */
    MIDDLELEFT = 4,

    /**
     * The middle point on the right side of the object.
     */
    MIDDLERIGHT = 6,

    /**
     * The middle point on the top of the object.
     */
    TOPCENTER = 2,

    /**
     * The top left corner of the object.
     */
    TOPLEFT = 1,

    /**
     * The top right corner of the object.
     */
    TOPRIGHT = 3,
  }

  /**
   * The method to use to resample the image.
   */
  enum ResampleMethod {
    /**
     *
     */
    AUTOMATIC = 8,

    /**
     * Uses a weighted average to determine pixel color, which usually yields better results than the simple averageing method of downsampling.
     * The slowest but most precise method, resulting in the smoothest gradations.
     */
    BICUBIC = 4,

    /**
     *
     */
    BICUBICAUTOMATIC = 7,

    /**
     * A good method for reducing the size of an image based on Bicubic interpolation with enhanced sharpening. Maintains the detail in a resampled image.
     */
    BICUBICSHARPER = 5,

    /**
     * A good method for enlarging images based on Bicubic interpolation but designed to produce smoother results.
     */
    BICUBICSMOOTHER = 6,

    /**
     * Averages the pixels in a sample area and replaces the entire area with the average pixel color at the specified resolution. Same as average downsampling.
     */
    BILINEAR = 3,

    /**
     * Chooses a pixel in the center of the sample area and replaces the entire area with that pixel color. Same as subsampling.
     * Significantly reduces the conversion time compared with downsampling but results in images that are less smooth and continuous.
     */
    NEARESTNEIGHBOR = 2,

    /**
     * Does not resample.
     */
    NONE = 1,

    /**
     *
     */
    PRESERVEDETAILS = 9,
  }

  /**
   * Options for saving a Photoshop document.
   */
  interface SaveOptions {
    /**
     * If true, the alpha channels are saved.
     */
    alphaChannels: boolean;

    /**
     * If true, the annotations are saved.
     */
    annotations: boolean;

    /**
     * If true, the color profile is embedded in the document.
     */
    embedColorProfile: boolean;

    /**
     * If true, the layers are saved.
     */
    layers: boolean;

    /**
     * If true, spot colors are saved.
     */
    spotColors: boolean;
  }
}

// Part 3 - Generated by https://github.com/hansottowirtz/adobe-uxp-types-crawler
