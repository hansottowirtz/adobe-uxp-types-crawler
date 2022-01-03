// Manually created by @simonhenke
declare module "photoshop" {
  type Unit =
    | "angleUnit"
    | "densityUnit"
    | "distanceUnit"
    | "percentUnit"
    | "pixelsUnit"
    | "pointsUnit"
    | "millimetersUnit"
    | "centimetersUnit"
    | "inchesUnit"
    | "picasUnit"
    | "noneUnit";

  type RulerUnit =
    | "rulerPixels"
    | "rulerPoints"
    | "rulerInches"
    | "rulerCm"
    | "rulerMm"
    | "rulerPercent"
    | "rulerPicas";

  interface RulerUnitsEnum {
    _enum: "rulerUnits";
    _value: RulerUnit;
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
    _unit: "angleUnit";
  }

  interface DensityValue extends UnitValue {
    _unit: "densityUnit";
  }

  interface DistanceValue extends UnitValue {
    _unit: "distanceUnit";
  }

  interface PercentValue extends UnitValue {
    _unit: "percentUnit";
  }

  interface PixelValue extends UnitValue {
    _unit: "pixelsUnit";
  }

  interface PointValue extends UnitValue {
    _unit: "pointsUnit";
  }

  interface MillimeterValue extends UnitValue {
    _unit: "millimetersUnit";
  }

  interface CentimeterValue extends UnitValue {
    _unit: "centimetersUnit";
  }

  interface InchValue extends UnitValue {
    _unit: "inchesUnit";
  }

  interface PicaValue extends UnitValue {
    _unit: "picasUnit";
  }

  interface NoneValue extends UnitValue {
    _unit: "noneUnit";
  }
}
