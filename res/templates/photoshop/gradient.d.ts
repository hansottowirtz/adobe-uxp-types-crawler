// Manually created by @simonhenke
declare module "photoshop" {
  interface GradientFormEnum {
    _enum: "gradientForm";
    _value: GradientForm;
  }

  const enum GradientForm {
    customStops = "customStops",
    colorNoise = "colorNoise",
  }

  interface ColorStopTypeEnum {
    _enum: "colorStopType";
    _value: ColorStopType;
  }

  const enum ColorStopType {
    userStop = "userStop",
    foregroundColor = "foregroundColor",
    backgroundColor = "backgroundColor",
  }

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
      _value: GradientForm.colorNoise;
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
      _value: GradientForm.customStops;
    };
    interfaceIconFrameDimmed?: number;
    colors?: ColorStopDescriptor[];
    transparency?: TransparencyStopDescriptor[];
  }

  interface GradientTypeEnum {
    _enum: "gradientType";
    _value: GradientType;
  }

  const enum GradientType {
    linear = "linear",
    radial = "radial",
    angle = "angle",
    reflected = "reflected",
    diamond = "diamond",
  }
}
