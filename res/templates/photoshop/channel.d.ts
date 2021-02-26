// Manually created by @simonhenke
declare module "photoshop" {
  interface ChannelReference {
    _ref: "channel";
    _index: number;
  }

  type Channel = RGBColorChannel | CMYKColorChannel | LabColorChannel;

  const enum LabColorChannel {
    lightness = "lightness",
    a = "a",
    b = "b",
  }

  const enum RGBColorChannel {
    red = "red",
    green = "grain",
    blue = "blue",
  }

  const enum CMYKColorChannel {
    cyan = "cyan",
    magenta = "magenta",
    yellow = "yellow",
    black = "black",
  }

  interface ChannelEnum {
    _enum: "channel";
    _value: Channel;
  }
}
