// Manually created by @simonhenke
declare module "photoshop" {
  const enum Unit {
    angleUnit = "angleUnit",
    densityUnit = "densityUnit",
    distanceUnit = "distanceUnit",
    percentUnit = "percentUnit",
    pixelsUnit = "pixelsUnit",
    pointsUnit = "pointsUnit",
    millimetersUnit = "millimetersUnit",
    centimetersUnit = "centimetersUnit",
    inchesUnit = "inchesUnit",
    picasUnit = "picasUnit",
  }

  interface Fraction {
    numerator: number;
    denominator: number;
  }

  interface UnitValue {
    _unit: Unit;
    _value: number;
  }
  interface AngleValue extends UnitValue {
    _unit: Unit.angleUnit;
  }
  interface DensityValue extends UnitValue {
    _unit: Unit.densityUnit;
  }
  interface DistanceValue extends UnitValue {
    _unit: Unit.distanceUnit;
  }
  interface PercentValue extends UnitValue {
    _unit: Unit.percentUnit;
  }
  interface PixelValue extends UnitValue {
    _unit: Unit.pixelsUnit;
  }
  interface PointValue extends UnitValue {
    _unit: Unit.pointsUnit;
  }
  interface MillimeterValue extends UnitValue {
    _unit: Unit.millimetersUnit;
  }
  interface CentimeterValue extends UnitValue {
    _unit: Unit.centimetersUnit;
  }
  interface InchValue extends UnitValue {
    _unit: Unit.inchesUnit;
  }
  interface PicaValue extends UnitValue {
    _unit: Unit.picasUnit;
  }
}
