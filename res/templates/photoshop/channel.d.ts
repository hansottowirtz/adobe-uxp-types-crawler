// Manually created by @simonhenke, made compatible by @hansottowirtz
declare module "photoshop" {
  interface ColorSpaceChannelReference {
    _ref: "channel";
    _index: number;
  }

  type ColorSpaceChannel = RGBColorSpaceChannel | CMYKColorSpaceChannel | LabColorSpaceChannel;

  type LabColorSpaceChannel = "lightness" | "a" | "b";

  type RGBColorSpaceChannel = "red" | "grain" | "blue";

  type CMYKColorSpaceChannel = "cyan" | "magenta" | "yellow" | "black";

  interface ColorSpaceChannelEnum {
    _enum: "channel";
    _value: ColorSpaceChannel;
  }
}
