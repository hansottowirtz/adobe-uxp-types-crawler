// Manually created by @simonhenke
declare module "photoshop" {
  interface TransformMatrixDescriptor {
    _obj: "transform";
    tx: number;
    ty: number;
    xx: number;
    xy: number;
    yx: number;
    yy: number;
  }

  interface WarpDescriptor {
    _obj: "warp";
    warpPerspective: number;
    warpPerspectiveOther: number;
    warpRotate: OrientationEnum;
    warpStyle: WarpStyleEnum;
    warpValue: number;
  }

  interface WarpStyleEnum {
    _enum: "warpStyle";
    _value: WarpStyle;
  }

  const enum WarpStyle {
    warpNone = "warpNone",
    warpArc = "warpArc",
    warpArcLower = "warpArcLower",
    warpArcUpper = "warpArcUpper",
    warpArch = "warpArch",
    warpBulge = "warpBulge",
    warpShellLower = "warpShellLower",
    warpShellUpper = "warpShellUpper",
    warpFlag = "warpFlag",
    warpRave = "warpRave",
    warpFish = "warpFish",
    warpRize = "warpRize",
    warpFisheye = "warpFisheye",
    warpInflate = "warpInflate",
    warpSqueeze = "warpSqueeze",
    warpTwist = "warpTwist",
  }

  interface RationalPointList {
    _objList: "rationalPoint";
    horizontal: {
      list: number[];
      _unit: Unit;
    };
    vertical: {
      list: number[];
      _unit: Unit;
    };
  }

  interface CustomEnvelopeWarpDescriptor {
    _obj: "customEnvelopeWarp";
    meshPoints: RationalPointList;
  }

  interface WarpDescriptorExtended extends WarpDescriptor {
    bounds: FloatRectDescriptor;
    uOrder: number;
    vOrder: number;
    customEnvelopeWarp: CustomEnvelopeWarpDescriptor;
  }
}
