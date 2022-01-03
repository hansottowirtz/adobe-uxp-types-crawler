// Manually created by @simonhenke
declare module "photoshop" {
  type LayerKind =
    | 0 // any
    | 1 // pixel
    | 2 // adjustment
    | 3 // text
    | 4 // vector
    | 5 // smartObject
    | 6 // video
    | 7 // group
    | 8 // threeD
    | 9 // gradient
    | 10 // pattern
    | 11 // solidColor
    | 12 // background
    | 13; // groupEnd

  interface LayerDescriptor {
    name: string;
    color: ColorNameEnum;
    visible: boolean;
    mode: BlendModeEnum;
    opacity: number;
    linkedLayerIDs?: number[];
    layerID: number;
    itemIndex: number;
    count: number;
    preserveTransparency: boolean;
    layerFXVisible: boolean;
    layerEffects?: LayerEffectsDescriptor;
    globalAngle: number;
    background: boolean;
    layerSection: LayerSectionTypeEnum;
    layerLocking: LayerLockingDescriptor;
    group: boolean;
    layerSectionExpanded?: boolean;
    targetChannels: ChannelReference[];
    visibleChannels: ChannelReference[];
    channelRestrictions: ChannelEnum[];
    fillOpacity: number;
    hasUserMask: boolean;
    hasVectorMask: boolean;
    proportionalScaling: boolean;
    layerKind: number;
    hasFilterMask: boolean;
    userMaskDensity: number;
    userMaskFeather: number;
    vectorMaskDensity: number;
    vectorMaskFeather: number;
    boundingBox?: UVRectangleDescriptor<PixelValue>;
    bounds: UVRectangleDescriptor<PixelValue>;
    boundsNoEffects: UVRectangleDescriptor<PixelValue>;
    boundsNoMask: UVRectangleDescriptor<PixelValue>;
    useAlignedRendering: boolean;
    generatorSettings: GeneratorSettingsDescriptor;
    keyOriginType: KeyOriginType[];
    fillEnabled: boolean;
    animationProtection: AnimationProtectionDescriptor;
    artboard: ArtboardDescriptor;
    artboardEnabled: boolean;
    vectorMaskEnabled: boolean;
    vectorMaskEmpty: boolean;
    textWarningLevel: number;
    textKey?: TextKeyDescriptor;
    parentLayerID: number;
    layerSVGdata?: string;
    pathBounds?: PathBoundsDescriptor;

    // --- Smart Object Layer
    smartObject?: SmartObjectDescriptor;
    smartObjectMore?: SmartObjectMore;
    // TODO: SmartFilters

    // --- Pattern Layer
    userMaskEnabled?: boolean;
    userMaskLinked?: boolean;

    // --- Adjustment Layer
    adjustment: Adjustment[];
  }

  interface PathBoundsDescriptor {
    _obj: "rectangle";
    pathBounds: FloatRectDescriptor;
  }

  interface PatternDescriptor {
    _obj: "pattern";
    name: string;
    ID: string; // UUID
  }

  interface LayerSectionTypeEnum {
    _enum: "layerSectionType";
    _value: LayerSectionType;
  }

  type LayerSectionType = "layerSectionContent" | "layerSectionStart" | "layerSectionEnd";

  interface LayerLockingDescriptor {
    _obj: "layerLocking";
    protectNone: boolean;
    protectAll: boolean;
    protectTransparency: boolean;
    protectComposite: boolean;
    protectPosition: boolean;
    protectArtboardAutonest: boolean;
  }

  interface GeneratorSettingsDescriptor {
    _obj: "generatorSettings";
  }

  interface AnimationProtectionDescriptor {
    _obj: "animationProtection";
    animationUnifyPosition: boolean;
    animationUnifyEffects: boolean;
    animationUnifyVisibility: boolean;
    animationPropagate: boolean;
  }

  interface FloatRectDescriptor extends TopRightBottomLeft {
    _obj: "classFloatRect";
  }

  interface ArtboardDescriptor {
    _obj: "artboard";
    artboardRect: FloatRectDescriptor;
    guideIDs: number[];
    artboardPresetName: string;
    color: PsColor;
    artboardBackgroundType: number;
  }

  interface RadiiDescriptor {
    _obj: "radii";
    unitValueQuadVersion: number;
    topRight: PixelValue;
    topLeft: PixelValue;
    bottomLeft: PixelValue;
    bottomRight: PixelValue;
  }

  interface UnitRectDescriptor extends UVTopRightBottomLeft<PixelValue> {
    _obj: "unitRect";
    unitValueQuadVersion: number;
  }

  interface OriginBoxCorners {
    rectangleCornerA: PointDescriptor;
    rectangleCornerB: PointDescriptor;
    rectangleCornerC: PointDescriptor;
    rectangleCornerD: PointDescriptor;
  }

  interface KeyOriginType {
    keyOriginType: number;
    keyOriginRRectRadii: RadiiDescriptor;
    keyOriginResolution: number;
    keyOriginShapeBBox: UnitRectDescriptor;
    keyOriginBoxCorners: OriginBoxCorners;
    transform: TransformMatrixDescriptor;
    keyActionMode: number;
  }

  type Adjustment =
    | SolidColorLayerDescriptor
    | PatternDescriptor
    | GradientLayerDescriptor
    | BrightnessAndContrastDescriptor
    | LevelsDescriptor
    | CurvesDescriptor
    | ExposureDescriptor
    | VibranceDescriptor
    | HueSaturationDescriptor
    | ColorBalanceDescriptor
    | BlackAndWhiteDescriptor
    | PhotoFilterDescriptor
    | ChannelMixerDescriptor
    | ColorLookupDescriptor
    | InvertDescriptor
    | PosterizationDescriptor
    | ThresholdDescriptor
    | GradientMapDescriptor
    | SelectiveColorDescriptor;

  interface SolidColorLayerDescriptor {
    _obj: "solidColorLayer";
    color: PsColor;
  }

  interface PatternLayerDescriptor {
    _obj: "patternLayer";
    pattern: PatternDescriptor;
  }

  interface LegacyContentData {
    legacyContentData: ArrayBuffer;
  }

  interface BrightnessAndContrastDescriptor extends LegacyContentData {
    _obj: "brightnessEvent";
  }

  interface LevelsDescriptor extends LegacyContentData {
    _obj: "levels";
  }

  interface CurvesDescriptor extends LegacyContentData {
    _obj: "curves";
  }

  interface ExposureDescriptor extends LegacyContentData {
    _obj: "exposure";
  }

  interface VibranceDescriptor extends LegacyContentData {
    _obj: "vibrance";
  }

  interface HueSaturationDescriptor extends LegacyContentData {
    _obj: "hueSaturation";
  }

  interface ColorBalanceDescriptor extends LegacyContentData {
    _obj: "colorBalance";
  }

  interface BlackAndWhiteDescriptor extends LegacyContentData {
    _obj: "blackAndWhite";
  }

  interface PhotoFilterDescriptor extends LegacyContentData {
    _obj: "photoFilter";
  }

  interface ChannelMixerDescriptor extends LegacyContentData {
    _obj: "channelMixer";
  }

  interface ColorLookupDescriptor extends LegacyContentData {
    _obj: "colorLookup";
  }

  interface InvertDescriptor {
    _obj: "invert";
  }

  interface PosterizationDescriptor extends LegacyContentData {
    _obj: "posterization";
  }

  interface ThresholdDescriptor extends LegacyContentData {
    _obj: "thresholdClassEvent";
  }

  interface GradientMapDescriptor extends LegacyContentData {
    _obj: "gradientMapClass";
  }

  interface SelectiveColorDescriptor extends LegacyContentData {
    _obj: "selectiveColor";
  }

  interface GradientLayerDescriptor {
    _obj: "gradientLayer";
    angle: AngleValue;
    type: GradientType;
    gradient: GradientDescriptor;
  }
}
