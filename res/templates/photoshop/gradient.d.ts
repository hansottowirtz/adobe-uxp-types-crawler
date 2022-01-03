// Manually created by @simonhenke
declare module "photoshop" {
  interface GradientFormEnum {
    _enum: "gradientForm";
    _value: GradientForm;
  }

  type GradientForm = "customStops" | "colorNoise";

  interface ColorStopTypeEnum {
    _enum: "colorStopType";
    _value: ColorStopType;
  }

  type ColorStopType = "userStop" | "foregroundColor" | "backgroundColor";

  interface ColorStopDescriptor {
    _obj: "colorStop";
    color: PsColor;
    type: ColorStopTypeEnum;
    location: number;
    midpoint: number;
  }

  interface TransparencyStopDescriptor {
    _obj: "transferSpec";
    opacity: PercentValue;
    location: number;
    midpoint: number;
  }

  type GradientDescriptor = CustomStopGradientDescriptor | NoiseGradientDescriptor;

  interface GenericGradientProperties {
    _obj: "gradientClassEvent";
    name: string;
    gradientForm: GradientFormEnum;
  }

  interface NoiseGradientDescriptor extends GenericGradientProperties {
    gradientForm: {
      _enum: "gradientForm";
      _value: "colorNoise";
    };
    showTransparency?: boolean;
    vectorColor?: boolean;
    colorSpace?: ColorSpaceEnum;
    randomSeed?: number;
    smoothness?: number;
    minimum?: [number, number, number, number];
    maximum?: [number, number, number, number];
  }

  interface CustomStopGradientDescriptor extends GenericGradientProperties {
    gradientForm: {
      _enum: "gradientForm";
      _value: "customStops";
    };
    interfaceIconFrameDimmed?: number;
    colors?: ColorStopDescriptor[];
    transparency?: TransparencyStopDescriptor[];
  }

  interface GradientTypeEnum {
    _enum: "gradientType";
    _value: GradientType;
  }

  type GradientType = "linear" | "radial" | "angle" | "reflected" | "diamond";

  type GradientTypeNumeric = 0 | 1 | 2 | 3 | 4;
}
