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

  type WarpStyle =
    | "warpNone"
    | "warpArc"
    | "warpArcLower"
    | "warpArcUpper"
    | "warpArch"
    | "warpBulge"
    | "warpShellLower"
    | "warpShellUpper"
    | "warpFlag"
    | "warpRave"
    | "warpFish"
    | "warpRize"
    | "warpFisheye"
    | "warpInflate"
    | "warpSqueeze"
    | "warpTwist";

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

  type AlignDistributeSelector =
    | "ADSCentersH"
    | "ADSCentersV"
    | "ADSLefts"
    | "ADSRights"
    | "ADSTops"
    | "ADSBottoms";

  type QuadCenterState =
    | "QCSCorner0" // topLeft
    | "QCSSide0" // topCenter
    | "QCSCorner1" // topRight
    | "QCSSide3" // middleLeft
    | "QCSAverage" // center
    | "QCSSide1" // middleRight
    | "QCSCorner3" // bottomLeft
    | "QCSSide2" // bottomCenter
    | "QCSCorner2"; // bottomRight
}
