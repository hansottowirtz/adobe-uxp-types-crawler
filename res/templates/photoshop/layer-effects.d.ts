// Manually created by @simonhenke
declare module "photoshop" {
  interface LayerEffectsDescriptor {
    _obj?: "layerEffects";
    scale: PercentValue;
    dropShadow?: DropShadowDescriptor;
    dropShadowMulti?: DropShadowDescriptor[];
    innerShadow?: InnerShadowDescriptor;
    innerShadowMulti?: InnerShadowDescriptor[];
    outerGlow?: OuterGlowDescriptor;
    solidFill?: SolidFillDescriptor;
    solidFillMulti?: SolidFillDescriptor[];
    gradientFill?: GradientFillDesriptor;
    gradientFillMulti?: GradientFillDesriptor[];
    patterFill?: PatternFillDescriptor;
    frameFX?: FrameFXDescriptor;
    frameFXMulti?: FrameFXDescriptor[];
    innerGlow?: InnerGlowDescriptor;
    bevelEmboss?: BevelEmbossDescriptor;
    chromeFX?: ChromeFXDescriptor;
  }

  interface LayerFxGenericProperties {
    enabled: boolean;
    present: boolean;
    showInDialog: boolean;
    mode: BlendModeEnum;
    opacity: PercentValue;
  }

  interface ChromeFXDescriptor extends LayerFxGenericProperties {
    _obj: "chromeFX";
    color: PsColor;
    antiAlias: boolean;
    invert: boolean;
    localLightingAngle: AngleValue;
    distance: PixelValue;
    blur: PixelValue;
    mappingShape: ShapeCurveTypeDescriptor;
  }

  interface BevelTechniqueEnum {
    _enum: "bevelTechnique";
    _value: BevelTechnique;
  }

  type BevelTechnique = "softMatte" | "preciseMatte" | "slopeLimitMatte";

  interface BevelEmbossStyleEnum {
    _enum: "bevelEmbossStyle";
    _value: BevelEmbossStyle;
  }

  type BevelEmbossStyle =
    | "innerBevel"
    | "outerBevel"
    | "emboss"
    | "pillowEmboss"
    | "strokeEmboss";

  interface BevelEmbossStampStyleEnum {
    _enum: "bevelEmbossStampStyle";
    _value: BevelEmbossStampStyle;
  }

  type BevelEmbossStampStyle = "stampOut" | "in";

  interface BevelEmbossDescriptor {
    _obj: "bevelEmboss";
    enabled: boolean;
    present: boolean;
    showInDialog: boolean;
    highlightMode: BlendModeEnum;
    highlightColor: PsColor;
    highlightOpacity: PercentValue;
    shadowMode: BlendModeEnum;
    shadowColor: PsColor;
    shadowOpacity: PercentValue;
    bevelTechnique: BevelTechniqueEnum;
    bevelStyle: BevelEmbossStyleEnum;
    useGlobalAngle: boolean;
    localLightingAngle: AngleValue;
    localLightingAltitude: AngleValue;
    strengthRatio: PercentValue;
    blur: PixelValue;
    bevelDirection: BevelEmbossStampStyleEnum;
    transferSpec: ShapeCurveTypeDescriptor;
    antialiasGloss: boolean;
    softness: PixelValue;
    useShape: boolean;
    useTexture: boolean;
    // with Shape
    mappingShape?: ShapeCurveTypeDescriptor;
    antiAlias?: boolean;
    inputRange?: PercentValue;
    // with Texture
    invertTexture?: boolean;
    align?: boolean;
    scale?: PercentValue;
    textureDepth?: PercentValue;
    pattern?: PatternDescriptor;
    phase?: PointDescriptor;
  }

  interface InnerGlowDescriptor extends LayerFxGenericProperties {
    _obj: "innerGlow";
    color: PsColor;
    glowTechnique: MatteTechniqueEnum;
    chokeMatte: PixelValue;
    blur: PixelValue;
    noise: PercentValue;
    shadingNoise: PercentValue;
    antiAlias: boolean;
    transferSpec: ShapeCurveTypeDescriptor;
    inputRange: PercentValue;
    innerGlowSource: InnerGlowSourceTypeEnum;
  }

  interface InnerGlowSourceTypeEnum {
    _enum: "innerGlowSourceType";
    _value: InnerGlowSourceType;
  }

  type InnerGlowSourceType = "edgeGlow" | "centerGlow";

  interface FrameFXSolidFillDescriptor extends FrameFXDescriptorBase {
    paintType: FrameFillEnum<"solidFill">;
  }

  interface FrameFXGradientFillDescriptor
    extends FrameFXDescriptorBase,
      GradientFillProperties {
    paintType: FrameFillEnum<"gradientFill">;
  }

  interface FrameFXPatternFillDescriptor
    extends FrameFXDescriptorBase,
      PatternFillProperties {
    paintType: FrameFillEnum<"pattern">;
  }

  interface FrameFillEnum<FF extends FrameFill = FrameFill> {
    _enum: "frameFill";
    _value: FF;
  }

  type FrameFill = "solidFill" | "gradientFill" | "pattern";

  interface FrameStyleEnum {
    _enum: "frameStyle";
    _value: FrameStyle;
  }

  type FrameStyle = "insetFrame" | "outsetFrame" | "centeredFrame";

  type FrameFXDescriptor =
    | FrameFXSolidFillDescriptor
    | FrameFXGradientFillDescriptor
    | FrameFXPatternFillDescriptor;

  interface FrameFXDescriptorBase extends LayerFxGenericProperties {
    _obj: "frameFX";
    style: FrameStyleEnum;
    paintType: FrameFillEnum;
    overprint: boolean;
    size: PixelValue;
    color: PsColor;
  }

  interface PatternFillProperties {
    pattern: PatternDescriptor;
    angle: AngleValue;
    scale: PercentValue;
    align: boolean;
    phase: PointDescriptor;
  }

  interface PatternFillDescriptor extends LayerFxGenericProperties, PatternFillProperties {
    _obj: "patternFill";
  }

  interface InnerShadowDescriptor extends LayerFxGenericProperties {
    _obj: "innerShadow";
    color: PsColor;
    useGlobalAngle: boolean;
    localLightingAngle: AngleValue;
    distance: PixelValue;
    chokeMatte: PixelValue;
    blur: PixelValue;
    noise: PercentValue;
    antiAlias: boolean;
    transferSpec: ShapeCurveTypeDescriptor;
  }

  interface DropShadowDescriptor extends LayerFxGenericProperties {
    _obj: "dropShadow";
    color: PsColor;
    useGlobalAngle: boolean;
    localLightingAngle: AngleValue;
    distance: PixelValue;
    chokeMatte: PixelValue;
    blur: PixelValue;
    noise: PercentValue;
    antiAlias: boolean;
    transferSpec: ShapeCurveTypeDescriptor;
    layerConceals: boolean;
  }

  interface OuterGlowDescriptor extends LayerFxGenericProperties {
    _obj: "outerGlow";
    color: PsColor;
    glowTechnique: MatteTechniqueEnum;
    chokeMatte: PixelValue;
    blur: PixelValue;
    noise: PercentValue;
    shadingNoise: PercentValue;
    antiAlias: boolean;
    transferSpec: ShapeCurveTypeDescriptor;
    inputRange: PercentValue;
  }

  interface SolidFillDescriptor extends LayerFxGenericProperties {
    _obj: "solidFill";
    color: PsColor;
  }

  interface GradientFillProperties {
    gradient: GradientDescriptor;
    angle: AngleValue;
    type: GradientTypeEnum;
    reverse: boolean;
    dither: boolean;
    align: boolean;
    scale: PercentValue;
    offset: UVPointDescriptor<PercentValue>;
  }

  interface GradientFillDesriptor extends LayerFxGenericProperties, GradientFillProperties {
    _obj: "gradientFill";
  }

  interface MatteTechniqueEnum {
    _enum: "matteTechnique";
    _value: MatteTechnique;
  }

  type MatteTechnique = "softMatte" | "preciseMatte";

  interface ShapeCurveTypeDescriptor {
    _obj: "shapeCurveType";
    name?: ShapeCurveName;
    curve?: CurvePointDescriptor[];
  }

  type ShapeCurveName =
    | "Linear"
    | "$$$/Contours/Defaults/Cone=Cone"
    | "$$$/Contours/Defaults/ConeInverted=Cone - Inverted"
    | "$$$/Contours/Defaults/CoveDeep=Cove - Deep"
    | "$$$/Contours/Defaults/CoveShallow=Cove - Shallow"
    | "$$$/Contours/Defaults/Gaussian=Gaussian"
    | "$$$/Contours/Defaults/HalfRound=Half Round"
    | "$$$/Contours/Defaults/Ring=Ring"
    | "$$$/Contours/Defaults/DoubleRing=Ring - Double"
    | "$$$/Contours/Defaults/RollingSlopeDescending=Rolling Slope - Descending"
    | "$$$/Contours/Defaults/RoundedSteps=Rounded Steps"
    | "$$$/Contours/Defaults/Sawtooth1=Sawtooth 1";

  interface CurvePointDescriptor {
    _obj: "curvePoint";
    horizontal: number;
    vertical: number;
    continuity: boolean;
  }
}
