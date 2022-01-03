// Manually created by @simonhenke
declare module "photoshop" {
  interface ChannelReference {
    _ref: "channel";
    _index: number;
  }

  type Channel = RGBColorChannel | CMYKColorChannel | LabColorChannel;

  type LabColorChannel = "lightness" | "a" | "b";

  type RGBColorChannel = "red" | "grain" | "blue";

  type CMYKColorChannel = "cyan" | "magenta" | "yellow" | "black";

  interface ChannelEnum {
    _enum: "channel";
    _value: Channel;
  }
}
