// Manually created by @simonhenke
declare module "photoshop" {
  interface AlignmentEnum {
    _enum: "alignmentType";
    _value: Alignment;
  }

  type Alignment =
    | "left"
    | "center"
    | "right"
    | "justifyLeft"
    | "justifyCenter"
    | "justifyRight"
    | "justifyAll";

  type Direction = "vertical" | "horizontal";

  interface UVRectangleDescriptor<UV extends UnitValue = UnitValue>
    extends UVTopRightBottomLeft<UV> {
    _obj: "rectangle";
    width: UV;
    height: UV;
  }

  interface PointDescriptor {
    _obj: "paint" | "point";
    horizontal: number;
    vertical: number;
  }

  interface UVPointDescriptor<UV extends UnitValue = PixelValue> {
    _obj: "paint" | "point";
    horizontal: UV;
    vertical: UV;
  }

  interface UVPointDescriptorXY<UV extends UnitValue = PixelValue> {
    _obj: "paint" | "point";
    x: UV;
    y: UV;
  }

  interface TopRightBottomLeft {
    top: number;
    right: number;
    bottom: number;
    left: number;
  }

  interface UVTopRightBottomLeft<UV extends UnitValue = PixelValue> {
    top: UV;
    right: UV;
    bottom: UV;
    left: UV;
  }

  interface OrientationEnum {
    _enum: "orientation";
    _value: Orientation;
  }

  type Orientation = "horizontal" | "vertical";

  interface RectangleDescriptor extends TopRightBottomLeft {
    _obj: "rectangle";
  }

  interface PointDescriptorWidthHeight {
    _obj: "paint";
    width: number;
    height: number;
  }

  type CornersArray = [
    // [x1,y1,x2,y2,x3,y3,x4,y4]
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ];

  type HorizontalLocation = "left" | "center" | "right";

  type VerticalLocation = "top" | "center" | "bottomEnum";
}
