// Manually created by @simonhenke
declare module "photoshop" {
  interface PathDescriptor {
    ID: number;
    count: number;
    itemIndex: number;
    kind: PathKindEnum;
    pathContents: PathContentsDescriptor;
    pathName: string;
    targetPath: boolean;
  }

  interface PathKindEnum {
    _enum: "pathKind";
    _value: PathKind;
  }

  enum PathKind {
    vectorMask = "vectorMask",
    workPath = "workPath",
    clippingPath = "clippingPath",
    normalPath = "normalPath",
  }

  interface PathContentsDescriptor {
    _obj: "pathClass";
    pathComponents: PathComponentDescriptor[];
  }

  interface ShapeOperationEnum {
    _enum: "shapeOperation";
    _value: ShapeOperation;
  }

  enum ShapeOperation {
    add = "add",
    subtract = "subtract",
    intersect = "intersect",
    interfaceIconFrameDimmed = "interfaceIconFrameDimmed",
    xor = "xor",
  }

  interface PathComponentDescriptor {
    _obj: "pathComponent";
    shapeOperation: ShapeOperationEnum;
    subpathListKey: SubpathDescriptor[];
    windingFill?: boolean;
  }

  interface SubpathDescriptor {
    _obj: "subpathsList";
    closedSubpath: boolean;
    points: PathPointDescriptor[];
  }

  interface PathPointDescriptor {
    _obj: "pathPoint";
    anchor: UVPointDescriptor;
    backward?: UVPointDescriptor;
    forward?: UVPointDescriptor;
    smooth?: boolean;
  }
}
