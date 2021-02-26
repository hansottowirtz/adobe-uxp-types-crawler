// Manually created by @simonhenke
declare module "photoshop" {
  interface LayerEffectsDescriptor {
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

  const enum BevelTechnique {
    softMatte = "softMatte",
    preciseMatte = "preciseMatte",
    slopeLimitMatte = "slopeLimitMatte",
  }

  interface BevelEmbossStyleEnum {
    _enum: "bevelEmbossStyle";
    _value: BevelEmbossStyle;
  }

  const enum BevelEmbossStyle {
    innerBevel = "innerBevel",
    outerBevel = "outerBevel",
    emboss = "emboss",
    pillowEmboss = "pillowEmboss",
    strokeEmboss = "strokeEmboss",
  }

  interface BevelEmbossStampStyleEnum {
    _enum: "bevelEmbossStampStyle";
    _value: BevelEmbossStampStyle;
  }

  const enum BevelEmbossStampStyle {
    stampOut = "stampOut",
    in = "in",
  }

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

  const enum InnerGlowSourceType {
    edgeGlow = "edgeGlow",
    centerGlow = "centerGlow",
  }

  interface FrameFXSolidFillDescriptor extends FrameFXDescriptorBase {
    paintType: FrameFillEnum<FrameFill.solidFill>;
  }

  interface FrameFXGradientFillDescriptor
    extends FrameFXDescriptorBase,
      GradientFillProperties {
    paintType: FrameFillEnum<FrameFill.gradientFill>;
  }

  interface FrameFXPatternFillDescriptor
    extends FrameFXDescriptorBase,
      PatternFillProperties {
    paintType: FrameFillEnum<FrameFill.pattern>;
  }

  interface FrameFillEnum<FF extends FrameFill = FrameFill> {
    _enum: "frameFill";
    _value: FF;
  }

  const enum FrameFill {
    solidFill = "solidFill",
    gradientFill = "gradientFill",
    pattern = "pattern",
  }

  interface FrameStyleEnum {
    _enum: "frameStyle";
    _value: FrameStyle;
  }

  const enum FrameStyle {
    insetFrame = "insetFrame",
    outsetFrame = "outsetFrame",
    centeredFrame = "centeredFrame",
  }

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

  interface PatternDescriptor {
    _obj: "pattern";
    name: string;
    ID: string; // UUID
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

  const enum MatteTechnique {
    softMatte = "softMatte",
    preciseMatte = "preciseMatte",
  }

  interface ShapeCurveTypeDescriptor {
    _obj: "shapeCurveType";
    name?: ShapeCurveName;
    curve?: CurvePointDescriptor[];
  }

  const enum ShapeCurveName {
    Linear = "Linear",
    Cone = "$$$/Contours/Defaults/Cone=Cone",
    ConeInverted = "$$$/Contours/Defaults/ConeInverted=Cone - Inverted",
    CoveDeep = "$$$/Contours/Defaults/CoveDeep=Cove - Deep",
    CoveShallow = "$$$/Contours/Defaults/CoveShallow=Cove - Shallow",
    Gaussian = "$$$/Contours/Defaults/Gaussian=Gaussian",
    HalfRound = "$$$/Contours/Defaults/HalfRound=Half Round",
    Ring = "$$$/Contours/Defaults/Ring=Ring",
    RingDouble = "$$$/Contours/Defaults/DoubleRing=Ring - Double",
    RollingSlopeDescending = "$$$/Contours/Defaults/RollingSlopeDescending=Rolling Slope - Descending",
    RoundedSteps = "$$$/Contours/Defaults/RoundedSteps=Rounded Steps",
    SawTooth1 = "$$$/Contours/Defaults/Sawtooth1=Sawtooth 1",
  }

  interface CurvePointDescriptor {
    _obj: "curvePoint";
    horizontal: number;
    vertical: number;
    continuity: boolean;
  }
}
