// Manually created by @simonhenke
declare module "photoshop" {
  /**
   * -------------------------------------------------------------------------------------------------
   * Be aware that some ColorSpaces have weird fields such a 'grain' instead of 'green'.
   * These bugs are due to double occupancy of char-codes and are firmly fixed inside PS.
   * -------------------------------------------------------------------------------------------------
   */

  type PsColor =
    | PsRGBColorSpace
    | PsCMYKColorSpace
    | PsHSBColorSpace
    | LabColorSpace
    | GrayscaleColorSpace
    | OpacityColorSpace
    | BookColorSpace;

  type ColorSpaceKeys =
    | "RGBColor"
    | "HSBColorClass"
    | "CMYKColorClass"
    | "labColor"
    | "grayscale"
    | "opacityClass"
    | "bookColor";

  interface ColorSpace extends BookColorProperties {
    _obj: ColorSpaceKeys;
  }

  interface BookColorProperties {
    book?: string;
    name?: string;
    bookID?: number;
    bookKey?: any;
  }

  interface BookColorSpace extends ColorSpace {
    _obj: "bookColor";
  }

  interface ColorSpaceEnum {
    _enum: "colorSpace";
    _value: ColorSpaceKeys;
  }

  interface ColorSpaceModeEnum {
    _enum: 'colorSpace'
    _value: ColorSpaceMode
  }

  type ColorSpaceMode =
    | "bitmap"
    | "grayScale"
    | "duotone"
    | "indexedColor"
    | "RGBColor"
    | "CMYKColorEnum"
    | "labColor"
    | "multichannel"
    | "useICCProfile";

  interface LabColorSpace extends ColorSpace {
    _obj: "labColor";
    luminance: number;
    a: number;
    b: number;
  }
  interface GrayscaleColorSpace extends ColorSpace {
    _obj: "grayscale";
    gray: number;
  }
  interface OpacityColorSpace extends ColorSpace {
    _obj: "opacityClass";
    opacity: number;
  }

  type ColorName =
    | "none"
    | "yellowColor"
    | "red"
    | "orange"
    | "green"
    | "blue"
    | "violet"
    | "gray"
    | "black";

  interface ColorNameEnum {
    _enum: "color";
    _value: ColorName;
  }

  interface PsRGBColorSpace extends ColorSpace {
    _obj: "RGBColor";
    red: number;
    grain: number;
    blue: number;
  }

  interface PsCMYKColorSpace extends ColorSpace {
    _obj: "CMYKColorClass";
    cyan: number;
    magenta: number;
    yellowColor: number;
    black: number;
  }

  interface PsHSBColorSpace extends ColorSpace {
    _obj: "HSBColorClass";
    hue: UnitValue;
    saturation: number;
    brightness: number;
  }

  type CanvasExtensionColorType =
    | "foregroundColor"
    | "backgroundColor"
    | "white"
    | "black"
    | "grey"
    | "color";

  interface ColorSettingsDescriptor {
    _obj: "colorSettings";
    name: string;
    workingRGB: string;
    workingCMYK: string;
    workingGray: string;
    workingSpot: string;
    policyRGB: PolicyEnum;
    policyCMYK: PolicyEnum;
    policyGray: PolicyEnum;
    askMismatchOpening: boolean;
    askMismatchPasting: boolean;
    askMissing: boolean;
    engine: string;
    intent: IntentEnum;
    mapBlack: boolean;
    dither: boolean;
    renderSceneReferred: boolean;
    monitorCompression: boolean;
    RGBBlendGamma: boolean;
    TextBlendGamma: number;
  }

  /**
   * -------------------------------------------------------------------------------------------------
   * The ColorSpaces below have a more reasonable structure, that differs from the PsColors however
   * -------------------------------------------------------------------------------------------------
   */

  type Color =
    | RGBColorSpace
    | HSBColorSpace
    | CMYKColorSpace
    | LabColorSpace
    | GrayscaleColorSpace
    | OpacityColorSpace;

  interface RGBColorSpace extends ColorSpace {
    _obj: "RGBColor";
    red: number;
    green: number;
    blue: number;
  }
  interface HSBColorSpace extends ColorSpace {
    _obj: "HSBColorClass";
    hue: number;
    saturation: number;
    brightness: number;
  }
  interface CMYKColorSpace extends ColorSpace {
    _obj: "CMYKColorClass";
    cyan: number;
    magenta: number;
    yellow: number;
    black: number;
  }
}
