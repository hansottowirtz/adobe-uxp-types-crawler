// Manually created by @simonhenke
declare module "photoshop" {
  const enum BlendMode {
    normal = "normal",
    dissolve = "dissolve",
    darken = "darken",
    multiply = "multiply",
    colorBurn = "colorBurn",
    linearBurn = "linearBurn",
    darkerColor = "darkerColor",
    lighten = "lighten",
    screen = "screen",
    colorDodge = "colorDodge",
    linearDodge = "linearDodge",
    lighterColor = "lighterColor",
    overlay = "overlay",
    softLight = "softLight",
    hardLight = "hardLight",
    vividLight = "vividLight",
    linearLight = "linearLight",
    pinLight = "pinLight",
    hardMix = "hardMix",
    difference = "difference",
    exclusion = "exclusion",
    subtract = "blendSubtraction",
    divide = "blendDivide",
    hue = "hue",
    saturation = "saturation",
    color = "color",
    luminosity = "luminosity",
  }

  interface BlendModeEnum {
    _enum: "blendMode";
    _value: BlendMode;
  }

  const enum StrokeStyleAlign {
    outside = "strokeStyleAlignOutside",
    inside = "strokeStyleAlignInside",
    center = "strokeStyleAlignCenter",
  }
}
