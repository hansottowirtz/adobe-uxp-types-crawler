// Manually created by Adobe, edited by @hansottowirtz
// From https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/photoshop
declare module "photoshop" {
  /**
   * The method to use for image interpolation
   */
  enum ResampleMethodConsts {
    /**
     * Choose best option automatically
     */
    AUTOMATIC = "bicubicAutomatic",
    /**
     * Bicubic interpolation
     */
    BICUBIC = "bicubic",
    /**
     * Apply a sharpening mask
     */
    BICUBICSHARPER = "bicubicSharper",
    /**
     * Apply a smoothing mask
     */
    BICUBICSMOOTHER = "bicubicSmoother",
    /**
     * Bilinear interpolate
     */
    BILINEAR = "bilinear",
    /**
     * Determine value based on nearest neighbor
     */
    NEARESTNEIGHBOR = "nearestNeighbor",
    /**
     * Duplicates pixels
     */
    NONE = "none",
    /**
     * Attempt to preserve details by using machine learning
     */
    PRESERVEDETAILS = "preserveDetailsUpscale",
    /**
     * Using deep learning, predict what the picture will look like larger
     */
    DEEPUPSCALE = "deepUpscale",
  }
  enum SaveMethodConsts {
    /**
     * Saves the current document at the current format
     */
    SAVE = "save",
    /**
     * Changes the format of document, changing the file
     */
    SAVEAS = "saveAs",
    /**
     * Creates a copy of the document in the new format
     */
    SAVEASCOPY = "saveAsCopy",
  }
  /** The policy for closing a document */
  enum SaveOptionsConsts {
    /**
     * Will close document without saving, discarding changes
     */
    DONOTSAVECHANGES = 0,
    /**
     * Will ask the user if they'd like to save changes, blocking the script
     */
    PROMPTTOSAVECHANGES = 1,
    /**
     * Will save all existing changes before closing, prompting if document is not saved yet
     */
    SAVECHANGES = 2,
  }
  /**
   * Number of bits per channel (also called pixel depth or color depth).
   *
   * The number selected indicates the exponent of 2.
   */
  const enum BMPDepthTypeConsts {
    ONE = "bitDepth1",
    FOUR = "bitDepth4",
    EIGHT = "bitDepth8",
    SIXTEEN = "bitDepth16",
    TWENTYFOUR = "bitDepth24",
    THIRTYTWO = "bitDepth32",
  }
  /**
   * The number of bits per color channel.
   */
  const enum BitsPerChannelTypeConsts {
    ONE = "bitDepth1",
    EIGHT = "bitDepth8",
    SIXTEEN = "bitDepth16",
    THIRTYTWO = "bitDepth32",
  }
  const enum OperatingSystemConsts {
    WINDOWS = "windows",
    OS2 = "OS2",
  }
  /**
   * The option with which to save a JPEG file.
   */
  const enum JPEGFormatOptionsConsts {
    /**
     * Format recognized by most web browsers.
     */
    STANDARDBASELINE = "standardbaseline",
    /**
     * Displays a series of increasing detailed scans as the image downloads.
     */
    PROGRESSIVE = "progressive",
    /**
     * Optimized color and a slightly reduced file size.
     */
    OPTIMIZEDBASELINE = "optimizedbaseline",
  }
  /**
   * The color to use to fill anti-aliased edges
   * adjacent to transparent areas of the image.
   * When transparency is turned off for an image,
   * the matte color is applied to transparent areas.
   *
   * @extendscript MatteType
   */
  const enum MatteColorConsts {
    BACKGROUND = "backgroundColor",
    BLACK = "black",
    FOREGROUND = "foregroundColor",
    NETSCAPE = "netscapeGray",
    SEMIGRAY = "gray50",
    WHITE = "white",
  }
  /**
   * The type of dithering
   */
  const enum DitherConsts {
    DIFFUSION = "diffusion",
    PATTERN = "pattern",
    NOISE = "blue",
    NONE = "none",
  }
  /**
   * The type of colors to be included the color
   * table regardless of their usage
   */
  const enum ForcedColorsConsts {
    /** None */
    NONE = "none",
    /** Pure black and pure white */
    BLACKANDWHITE = "blackAndWhite",
    /**
     * Red, green, blue, cyan, magenta, yellow, black, and white.
     */
    PRIMARIES = "primaries",
    /**
     * The 216 web-safe colors
     */
    WEB = "web",
  }
  /**
   * The palette type to use
   */
  const enum PaletteConsts {
    EXACT = "exact",
    MACOSPALETTE = "macintoshSystem",
    WINDOWSPALETTE = "windowsSystem",
    WEBPALETTE = "web",
    UNIFORM = "uniform",
    LOCALPERCEPTUAL = "perceptual",
    LOCALSELECTIVE = "selective",
    LOCALADAPTIVE = "adaptive",
    MASTERPERCEPTUAL = "masterPerceptual",
    MASTERSELECTIVE = "masterSelective",
    MASTERADAPTIVE = "masterAdaptive",
    PREVIOUSPALETTE = "previous",
  }
  /**
   * Compression method for saving a PNG file
   */
  const enum PNGMethodConsts {
    QUICK = "quick",
    MODERATE = "moderate",
    THOROUGH = "thorough",
  }
  /**
   * The point around which to transform an object.
   *
   * This is the point that does not move when an object is rotated or resized
   */
  enum AnchorPositionConsts {
    BOTTOMCENTER = "bottom-center",
    BOTTOMLEFT = "bottom-left",
    BOTTOMRIGHT = "bottom-right",
    MIDDLECENTER = "middle-center",
    MIDDLELEFT = "middle-left",
    MIDDLERIGHT = "middle-right",
    TOPCENTER = "top-center",
    TOPLEFT = "top-left",
    TOPRIGHT = "top-right",
  }
  /**
   * Type of pixels to trim around an image, passed to [[Document.trim]].
   */
  enum TrimTypeConsts {
    /**
     * Bottom right pixel color.
     */
    BOTTOMRIGHT = "bottom-right",
    /**
     * Top left pixel color.
     */
    TOPLEFT = "top-left",
    /**
     * Transparent pixels.
     */
    TRANSPARENT = "transparent",
  }
  /**
   * Options for layer list label colors
   */
  const enum LabelColorsConsts {
    RED = "red",
    ORANGE = "orange",
    YELLOW = "yellowColor",
    GREEN = "grain",
    BLUE = "blue",
    VIOLET = "violet",
    GRAY = "gray",
  }
  /**
   * Blending mode
   */
  const enum BlendModeConsts {
    NORMAL = "normal",
    DISSOLVE = "dissolve",
    DARKEN = "darken",
    MULTIPLY = "multiply",
    COLORBURN = "colorBurn",
    LINEARBURN = "linearBurn",
    DARKERCOLOR = "darkerColor",
    LIGHTEN = "lighten",
    SCREEN = "screen",
    COLORDODGE = "colorDodge",
    LINEARDODGE = "linearDodge",
    LIGHTERCOLOR = "lighterColor",
    OVERLAY = "overlay",
    SOFTLIGHT = "softLight",
    HARDLIGHT = "hardLight",
    VIVIDLIGHT = "vividLight",
    LINEARLIGHT = "linearLight",
    PINLIGHT = "pinLight",
    HARDMIX = "hardMix",
    DIFFERENCE = "difference",
    EXCLUSION = "exclusion",
    SUBTRACT = "blendSubtraction",
    DIVIDE = "blendDivide",
    HUE = "hue",
    SATURATION = "saturation",
    COLOR = "color",
    LUMINOSITY = "luminosity",
    PASSTHROUGH = "passThrough",
  }
  /**
   * Color mode of an open document. See also [[Document.mode]] and [[Document.changeMode]]
   */
  const enum DocumentModeConsts {
    BITMAP = "bitmapMode",
    CMYK = "CMYKColorMode",
    DUOTONE = "duotoneMode",
    GRAYSCALE = "grayscaleMode",
    INDEXEDCOLOR = "indexedColorMode",
    LAB = "labColorMode",
    MULTICHANNEL = "multichannelMode",
    RGB = "RGBColorMode",
  }
  /**
   * Color Modes available for new document
   */
  const enum NewDocumentModeConsts {
    BITMAP = "bitmapMode",
    GRAYSCALE = "grayscaleMode",
    RGB = "RGBColorMode",
    CMYK = "CMYKColorMode",
    LAB = "labColorMode",
  }
  /**
   * The new color profile or mode for a document, specified in [[Document.changeMode]]
   *
   * NOTE: Color images must be changed to GRAYSCALE mode before you can change them to BITMAP mode.
   */
  const enum ChangeModeConsts {
    BITMAP = "bitmapMode",
    CMYK = "CMYKColorMode",
    GRAYSCALE = "grayscaleMode",
    INDEXEDCOLOR = "indexedColorMode",
    LAB = "labColorMode",
    MULTICHANNEL = "multichannelMode",
    RGB = "RGBColorMode",
  }
  /**
   * Fill methods available for the new document background
   */
  const enum DocumentFillConsts {
    WHITE = "white",
    BLACK = "black",
    BACKGROUNDCOLOR = "backgroundColor",
    TRANSPARENT = "transparent",
    COLOR = "color",
  }
  /**
   * Kinds of different layers in a document
   */
  const enum LayerKindConsts {
    BLACKANDWHITE = "blackAndWhite",
    BRIGHTNESSCONTRAST = "brightnessContrast",
    CHANNELMIXER = "channelMixer",
    COLORBALANCE = "colorBalance",
    CURVES = "curves",
    EXPOSURE = "exposure",
    GRADIENTFILL = "gradientFill",
    GRADIENTMAP = "gradientMap",
    HUESATURATION = "hueSaturation",
    INVERSION = "inversion",
    LEVELS = "levels",
    NORMAL = "pixel",
    PATTERNFILL = "pattern",
    PHOTOFILTER = "photoFilter",
    POSTERIZE = "posterize",
    SELECTIVECOLOR = "selectiveColor",
    SMARTOBJECT = "smartObject",
    SOLIDFILL = "solidColor",
    TEXT = "text",
    THRESHOLD = "threshold",
    LAYER3D = "threeD",
    VIBRANCE = "vibrance",
    VIDEO = "video",
    GROUP = "group",
    COLORLOOKUP = "colorLookup",
  }
  /**
   * Placement modes for Layer.move method
   */
  const enum ElementPlacementConsts {
    /**
     * Place above a layer, above group if group layer
     */
    PLACEBEFORE = "placeBefore",
    /**
     * Place at the top
     */
    PLACEATBEGINNING = "placeAtBeginning",
    /**
     * Place at the bottom, above background if background layer exists
     */
    PLACEATEND = "placeAtEnd",
    /**
     * Place below a layer, below group if group layer
     */
    PLACEAFTER = "placeAfter",
    /**
     * Place inside a group layer, throws error if not group layer
     */
    PLACEINSIDE = "placeInside",
  }
  /**
   * Type of color profile used to manage a document, used in [[Document.colorProfileType]]
   */
  const enum ColorProfileTypeConsts {
    /**
     * Set for all custom profiles
     */
    CUSTOM = "customEnum",
    /**
     * Set when document is not color managed
     */
    NONE = "none",
    /**
     * Set when document uses the working color profile
     */
    WORKING = "workingSpaceCode",
  }
  /**
   * Specifies the quality of an image you are converting to bitmap mode. Used in [[BitmapConversionOptions]]
   */
  const enum BitmapConversionTypeConsts {
    CUSTOMPATTERN = "customPattern",
    DIFFUSIONDITHER = "diffusionDither",
    HALFTHRESHOLD = "halfThreshold",
    HALFTONESCREEN = "halfToneScreen",
    PATTERNDITHER = "patternDither",
  }
  /**
   * Specifies the shape of the dots (ink deposits) in the halftone screen. Used in [[BitmapConversionOptions]]
   */
  const enum BitmapHalfToneTypeConsts {
    CROSS = "cross",
    DIAMOND = "diamond",
    ELLIPSE = "ellipse",
    LINE = "lineClass",
    ROUND = "round",
    SQUARE = "square",
  }
  /**
   * The rendering intent to use when converting from one color space to another with
   * [[Document.convertProfile]]
   */
  const enum IntentConsts {
    ABSOLUTECOLORIMETRIC = "absColorimetric",
    PERCEPTUAL = "image",
    RELATIVECOLORIMETRIC = "colorimetric",
    SATURATION = "graphics",
  }
  /**
   * Used in multiple places to represent orientation.
   *
   * Orientation of a guide in [[Guide.direction]]
   */
  const enum DirectionConsts {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical",
  }
  /**
   * The color model representing the current color space
   * of a [[SolidColor]] object.
   */
  const enum ColorModelConsts {
    GRAYSCALE = "grayScale",
    HSB = "HSBColorEnum",
    CMYK = "CMYKColorEnum",
    LAB = "labColor",
    RGB = "RGBColor",
    NONE = "noColor",
  }
  /**
   * The type of layer to get rasterized.
   */
  const enum RasterizeTypeConsts {
    ENTIRELAYER = "entire",
    FILLCONTENT = "content",
    LAYERCLIPPINGPATH = "clippingPath",
    LINKEDLAYERS = "linked",
    SHAPE = "shape",
    TEXTCONTENTS = "type",
    VECTORMASK = "vectorMask",
    PLACED = "placed",
    VIDEO = "video",
    LAYERSTYLE = "layerStyle",
  }
  const enum DialogModesConsts {
    /**
     * All dialogs will be shown
     */
    ALL = "display",
    /**
     * Dialogs will be shown only if Photoshop raises an error
     */
    ERROR = "silent",
    /**
     * All dialogs will be hidden, and bad calls will silently fail
     */
    NONE = "dontDisplay",
  }
  /**
   * The type of a color channel.
   */
  const enum ChannelTypeConsts {
    /** Specific to document color mode */
    COMPONENT = "component",
    /** Alpha channel where color indicates masked area */
    MASKEDAREA = "maskedAreas",
    /** Alpha channel where color indicates selected area */
    SELECTEDAREA = "selectedAreas",
    /** Alpha channel to store a spot color */
    SPOTCOLOR = "spot",
  }
}
