// Manually created by @simonhenke
declare module "photoshop" {
  interface AlignmentEnum {
    _enum: "alignmentType";
    _value: Alignment;
  }

  enum Alignment {
    left = "left",
    center = "center",
    right = "right",
    justifyLeft = "justifyLeft",
    justifyCenter = "justifyCenter",
    justifyRight = "justifyRight",
    justifyAll = "justifyAll",
  }

  enum Direction {
    vertical = "vertical",
    horizontal = "horizontal",
  }

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

  interface UVPointDescriptor<UV extends UnitValue = UnitValue> {
    _obj: "paint" | "point";
    horizontal: UV;
    vertical: UV;
  }

  interface TopRightBottomleft {
    top: number;
    right: number;
    bottom: number;
    left: number;
  }

  interface UVTopRightBottomLeft<UV extends UnitValue = UnitValue> {
    top: UV;
    right: UV;
    bottom: UV;
    left: UV;
  }

  interface OrientationEnum {
    _enum: "orientation";
    _value: Orientation;
  }

  enum Orientation {
    horizontal = "horizontal",
    vertical = "vertical",
  }

  interface RectangleDescriptor extends TopRightBottomleft {
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
}
