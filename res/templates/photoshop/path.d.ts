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

  type PathKind = "vectorMask" | "workPath" | "clippingPath" | "normalPath";

  interface PathContentsDescriptor {
    _obj: "pathClass";
    pathComponents: PathComponentDescriptor[];
  }

  interface ShapeOperationEnum {
    _enum: "shapeOperation";
    _value: ShapeOperation;
  }

  type ShapeOperation =
    | "add"
    | "subtract"
    | "intersect"
    | "interfaceIconFrameDimmed"
    | "xor";

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
