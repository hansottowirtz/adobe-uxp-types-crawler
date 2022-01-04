// Manually created by Adobe, edited and converted to type unions by @hansottowirtz
// From https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/photoshop
declare module "photoshop" {
  /**
   * The method to use for image interpolation
   */
  type ResampleMethodConsts =
    /**
     * Choose best option automatically
     */
    | "bicubicAutomatic"
    /**
     * Bicubic interpolation
     */
    | "bicubic"
    /**
     * Apply a sharpening mask
     */
    | "bicubicSharper"
    /**
     * Apply a smoothing mask
     */
    | "bicubicSmoother"
    /**
     * Bilinear interpolate
     */
    | "bilinear"
    /**
     * Determine value based on nearest neighbor
     */
    | "nearestNeighbor"
    /**
     * Duplicates pixels
     */
    | "none"
    /**
     * Attempt to preserve details by using machine learning
     */
    | "preserveDetailsUpscale"
    /**
     * Using deep learning, predict what the picture will look like larger
     */
    | "deepUpscale";

  type SaveMethodConsts =
    /**
     * Saves the current document at the current format
     */
    | "save"
    /**
     * Changes the format of document, changing the file
     */
    | "saveAs"
    /**
     * Creates a copy of the document in the new format
     */
    | "saveAsCopy";

  /** The policy for closing a document */
  type SaveOptionsConsts =
    /**
     * Will close document without saving, discarding changes
     */
    | 0
    /**
     * Will ask the user if they'd like to save changes, blocking the script
     */
    | 1
    /**
     * Will save all existing changes before closing, prompting if document is not saved yet
     */
    | 2;

  /**
   * Number of bits per channel (also called pixel depth or color depth).
   *
   * The number selected indicates the exponent of 2.
   */
  type BMPDepthTypeConsts =
    | "bitDepth1"
    | "bitDepth4"
    | "bitDepth8"
    | "bitDepth16"
    | "bitDepth24"
    | "bitDepth32";

  /**
   * The number of bits per color channel.
   */
  type BitsPerChannelTypeConsts = "bitDepth1" | "bitDepth8" | "bitDepth16" | "bitDepth32";

  type OperatingSystemConsts = "windows" | "OS2";

  /**
   * The option with which to save a JPEG file.
   */
  type JPEGFormatOptionsConsts =
    /**
     * Format recognized by most web browsers.
     */
    | "standardbaseline"
    /**
     * Displays a series of increasing detailed scans as the image downloads.
     */
    | "progressive"
    /**
     * Optimized color and a slightly reduced file size.
     */
    | "optimizedbaseline";

  /**
   * The color to use to fill anti-aliased edges
   * adjacent to transparent areas of the image.
   * When transparency is turned off for an image,
   * the matte color is applied to transparent areas.
   *
   * @extendscript MatteType
   */
  type MatteColorConsts =
    | "backgroundColor"
    | "black"
    | "foregroundColor"
    | "netscapeGray"
    | "gray50"
    | "white";

  /**
   * The type of dithering
   */
  type DitherConsts = "diffusion" | "pattern" | "blue" | "none";

  /**
   * The type of colors to be included the color
   * table regardless of their usage
   */
  type ForcedColorsConsts =
    /** None */
    | "none"
    /** Pure black and pure white */
    | "blackAndWhite"
    /**
     * Red, green, blue, cyan, magenta, yellow, black, and white.
     */
    | "primaries"
    /**
     * The 216 web-safe colors
     */
    | "web";

  /**
   * The palette type to use
   */
  type PaletteConsts =
    | "exact"
    | "macintoshSystem"
    | "windowsSystem"
    | "web"
    | "uniform"
    | "perceptual"
    | "selective"
    | "adaptive"
    | "masterPerceptual"
    | "masterSelective"
    | "masterAdaptive"
    | "previous";

  /**
   * Compression method for saving a PNG file
   */
  type PNGMethodConsts = "quick" | "moderate" | "thorough";

  /**
   * The point around which to transform an object.
   *
   * This is the point that does not move when an object is rotated or resized
   */
  type AnchorPositionConsts =
    | "bottom-center"
    | "bottom-left"
    | "bottom-right"
    | "middle-center"
    | "middle-left"
    | "middle-right"
    | "top-center"
    | "top-left"
    | "top-right";

  /**
   * Type of pixels to trim around an image, passed to [[Document.trim]].
   */
  type TrimTypeConsts =
    /**
     * Bottom right pixel color.
     */
    | "bottom-right"
    /**
     * Top left pixel color.
     */
    | "top-left"
    /**
     * Transparent pixels.
     */
    | "transparent";

  /**
   * Options for layer list label colors
   */
  type LabelColorsConsts = "red" | "orange" | "yellowColor" | "grain" | "blue" | "violet" | "gray";

  /**
   * Blending mode
   */
  type BlendModeConsts =
    | "normal"
    | "dissolve"
    | "darken"
    | "multiply"
    | "colorBurn"
    | "linearBurn"
    | "darkerColor"
    | "lighten"
    | "screen"
    | "colorDodge"
    | "linearDodge"
    | "lighterColor"
    | "overlay"
    | "softLight"
    | "hardLight"
    | "vividLight"
    | "linearLight"
    | "pinLight"
    | "hardMix"
    | "difference"
    | "exclusion"
    | "blendSubtraction"
    | "blendDivide"
    | "hue"
    | "saturation"
    | "color"
    | "luminosity"
    | "passThrough";

  /**
   * Color mode of an open document. See also [[Document.mode]] and [[Document.changeMode]]
   */
  type DocumentModeConsts =
    | "bitmapMode"
    | "CMYKColorMode"
    | "duotoneMode"
    | "grayscaleMode"
    | "indexedColorMode"
    | "labColorMode"
    | "multichannelMode"
    | "RGBColorMode";

  /**
   * Color Modes available for new document
   */
  type NewDocumentModeConsts =
    | "bitmapMode"
    | "grayscaleMode"
    | "RGBColorMode"
    | "CMYKColorMode"
    | "labColorMode";

  /**
   * The new color profile or mode for a document, specified in [[Document.changeMode]]
   *
   * NOTE: Color images must be changed to GRAYSCALE mode before you can change them to BITMAP mode.
   */
  type ChangeModeConsts =
    | "bitmapMode"
    | "CMYKColorMode"
    | "grayscaleMode"
    | "indexedColorMode"
    | "labColorMode"
    | "multichannelMode"
    | "RGBColorMode";

  /**
   * Fill methods available for the new document background
   */
  type DocumentFillConsts = "white" | "black" | "backgroundColor" | "transparent" | "color";

  /**
   * Kinds of different layers in a document
   */
  type LayerKindConsts =
    | "blackAndWhite"
    | "brightnessContrast"
    | "channelMixer"
    | "colorBalance"
    | "curves"
    | "exposure"
    | "gradientFill"
    | "gradientMap"
    | "hueSaturation"
    | "inversion"
    | "levels"
    | "pixel"
    | "pattern"
    | "photoFilter"
    | "posterize"
    | "selectiveColor"
    | "smartObject"
    | "solidColor"
    | "text"
    | "threshold"
    | "threeD"
    | "vibrance"
    | "video"
    | "group"
    | "colorLookup";

  /**
   * Placement modes for Layer.move method
   */
  type ElementPlacementConsts =
    /**
     * Place above a layer, above group if group layer
     */
    | "placeBefore"
    /**
     * Place at the top
     */
    | "placeAtBeginning"
    /**
     * Place at the bottom, above background if background layer exists
     */
    | "placeAtEnd"
    /**
     * Place below a layer, below group if group layer
     */
    | "placeAfter"
    /**
     * Place inside a group layer, throws error if not group layer
     */
    | "placeInside";

  /**
   * Type of color profile used to manage a document, used in [[Document.colorProfileType]]
   */
  type ColorProfileTypeConsts =
    /**
     * Set for all custom profiles
     */
    | "customEnum"
    /**
     * Set when document is not color managed
     */
    | "none"
    /**
     * Set when document uses the working color profile
     */
    | "workingSpaceCode";

  /**
   * Specifies the quality of an image you are converting to bitmap mode. Used in [[BitmapConversionOptions]]
   */
  type BitmapConversionTypeConsts =
    | "customPattern"
    | "diffusionDither"
    | "halfThreshold"
    | "halfToneScreen"
    | "patternDither";

  /**
   * Specifies the shape of the dots (ink deposits) in the halftone screen. Used in [[BitmapConversionOptions]]
   */
  type BitmapHalfToneTypeConsts =
    | "cross"
    | "diamond"
    | "ellipse"
    | "lineClass"
    | "round"
    | "square";

  /**
   * The rendering intent to use when converting from one color space to another with
   * [[Document.convertProfile]]
   */
  type IntentConsts = "absColorimetric" | "image" | "colorimetric" | "graphics";

  /**
   * Used in multiple places to represent orientation.
   *
   * Orientation of a guide in [[Guide.direction]]
   */
  type DirectionConsts = "horizontal" | "vertical";

  /**
   * The color model representing the current color space
   * of a [[SolidColor]] object.
   */
  type ColorModelConsts =
    | "grayScale"
    | "HSBColorEnum"
    | "CMYKColorEnum"
    | "labColor"
    | "RGBColor"
    | "noColor";

  /**
   * The type of layer to get rasterized.
   */
  type RasterizeTypeConsts =
    | "entire"
    | "content"
    | "clippingPath"
    | "linked"
    | "shape"
    | "type"
    | "vectorMask"
    | "placed"
    | "video"
    | "layerStyle";

  type DialogModesConsts =
    /**
     * All dialogs will be shown
     */
    | "display"
    /**
     * Dialogs will be shown only if Photoshop raises an error
     */
    | "silent"
    /**
     * All dialogs will be hidden, and bad calls will silently fail
     */
    | "dontDisplay";

  /**
   * The type of a color channel.
   */
  type ChannelTypeConsts =
    /** Specific to document color mode */
    | "component"
    /** Alpha channel where color indicates masked area */
    | "maskedAreas"
    /** Alpha channel where color indicates selected area */
    | "selectedAreas"
    /** Alpha channel to store a spot color */
    | "spot";
}
