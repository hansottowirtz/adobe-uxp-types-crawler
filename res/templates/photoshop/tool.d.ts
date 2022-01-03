// Manually created by @simonhenke
declare module "photoshop" {
  interface CTODesc {
    _obj: "currentToolOptions";
  }

  interface MoveToolOptionsDescriptor extends CTODesc {
    $AtSl: boolean;
    $ASGr: boolean;
    $Abbx: boolean;
  }

  interface ArtboardInformationDescriptor {
    _obj: "$AbtC";
    $AbdW: number;
    $AbdH: number;
    $AbWU: number;
    $AbHU: number;
    $AbPN: string;
    $AbBC: PsColor;
    $AbFT: number;
  }

  interface ArtboardToolOptionsDescriptor extends CTODesc {
    $AbtI: ArtboardInformationDescriptor;
  }

  interface MarqueeDescriptor {
    _obj: "$MrqC";
    $MrqM: number;
    $AspV: number;
    $AspH: number;
    $FxdW: number;
    $FxdH: number;
    $FxWU: number;
    $FxHU: number;
  }

  type SelectionModeString = "set" | "subtractFrom" | "addTo" | "interfaceWhite";

  type SelectionMode =
    | 1 // new
    | 2 // add
    | 3 // subtract
    | 4; // intersect

  interface SelectionToolOptionsDescriptor extends CTODesc {
    contiguous: boolean;
    selectionEnum: SelectionMode;
  }

  interface MarqueeToolOptionsDescriptor extends SelectionToolOptionsDescriptor {
    $MrqI: MarqueeDescriptor;
    $MrqF: PixelValue;
    $MrqA: boolean;
  }

  interface LassoToolOptionsDescriptor extends SelectionToolOptionsDescriptor {
    $DrwR: PixelValue;
    $DrwA: boolean;
  }

  interface MagneticLassoToolOptionsDescriptor extends LassoToolOptionsDescriptor {
    $MgLP: boolean;
    $MgEd: number;
    $MgCl: number;
    $MgWd: number;
    $MgSS: number;
    $MgSn: number;
  }

  interface MagicLassoToolOptionsDescriptor extends SelectionToolOptionsDescriptor {
    $DrwR: PixelValue;
    $DrwA: boolean;
    magicLassoAutoEnhance: boolean;
    sampleAllLayers: boolean;
    smartSubtract: boolean;
    objectSelectionMode: number;
  }

  interface BrVrDescriptor {
    _obj: "$brVr";
    $bVTy: number;
    $fStp: number;
    jitter: PercentValue;
    minimum: PercentValue;
  }

  interface ComputedBrushDescriptor {
    _obj: "computedBrush";
    diameter: PixelValue;
    hardness: PercentValue;
    angle: AngleValue;
    roundness: PercentValue;
    spacing: PercentValue;
    interfaceIconFrameDimmed: boolean;
    flipX: boolean;
    flipY: boolean;
  }

  interface QuickSelectToolOptionsDescriptor extends BrushOptions, CTODesc {
    quickSelectMode: number;
    quickSelectBrushSize: number;
    quickSelectSampleAllLayers: boolean;
    autoEnhance: boolean;
    quickSelectSpread: number;
    quickSelectStickiness: number;
  }

  interface MagicWandToolOptionsDescriptor extends SelectionToolOptionsDescriptor {
    eyeDropperSample: number;
    $WndT: number;
    $WndA: boolean;
    windowsSystem: boolean;
  }

  interface CropAspectRatioModeEnum {
    _enum: "cropAspectRatioModeClass";
    _value: CropAspectRatioMode;
  }

  type CropAspectRatioMode = "pureAspectRatio" | "targetSize" | "originalProportions";

  interface CropOptionsDescriptor {
    _obj: "$CrOC";
    cropAspectRatioModeKey: CropAspectRatioModeEnum;
    aspectWidth: number;
    aspectHeight: number;
    $CrWV: number;
    $CrWS: number;
    $CrHV: number;
    $CrHS: number;
    $CrRV: number;
    $CrRS: number;
    cropOverlay: number;
    CropOptionsShowOverlay: number;
    orientation: number;
    cropShieldColorMode: number;
    cropColor: PsColor;
    cropOpacity: number;
    cropAutoLightenShield: boolean;
    cropShowShield: boolean;
    preview: boolean;
    cropAutoCenterCropBox: boolean;
    cropShowCroppedArea: boolean;
    hides: boolean;
    AutoFillOnCrop: boolean;
  }

  interface CropToolOptionsDescriptor extends CTODesc {
    $CrpO: CropOptionsDescriptor;
  }

  interface PerspectiveCropOptionsDescriptor {
    _obj: "$PcOC";
    $CrWV: number;
    $CrWS: number;
    $CrHV: number;
    $CrHS: number;
    $CrRV: number;
    $CrRS: number;
    cropOverlay: number;
  }

  interface PerspectiveCropToolOptionsDescriptor extends CTODesc {
    $PCrO: PerspectiveCropOptionsDescriptor;
  }

  interface SliceToolOptionsDescriptor extends CTODesc {
    $MrqI: MarqueeDescriptor;
  }

  interface FramedGroupShapeEnum {
    _enum: "$FgSt";
    _value: FramedGroupShape;
  }

  type FramedGroupShape = "$Rect" | "$Oval";

  interface FpoCDescriptor {
    _obj: "$FpoC";
    $FgSh: FramedGroupShapeEnum;
  }

  interface FramedGroupToolOptionsDescriptor extends CTODesc {
    $FpoI: FpoCDescriptor;
  }

  interface EyedropperToolOptionsDescriptor extends CTODesc {
    eyeDropperSample: number;
    eyeDropperSampleSheet: number;
    eyeDropperHUD: boolean;
  }

  interface ColorSamplerToolOptionsDescriptor extends CTODesc {
    eyeDropperSample: number;
  }

  interface TextAnnotToolOptionsDescriptor extends CTODesc {
    $aath: string;
    color: PsColor;
  }

  interface SpotHealingMethodEnum {
    _enum: "$SmmT";
    _value: SpotHealingMethod;
  }

  type SpotHealingMethod =
    | "$CntW" // contentAware
    | "$CrtT" // createTexture
    | "$PrxM"; // proximityMatch

  interface SmpTEnum {
    _enum: "$SmpT";
    _value: SmpT;
  }

  type SmpT = "$SrcN"; // TODO: more?

  interface SpotHealingBrushToolOptionsDescriptor extends MagicStampToolOptionsDescriptor {
    $SmmS: SpotHealingMethodEnum;
  }

  interface MagicStampToolOptionsDescriptor extends BrushOptions, CTODesc {
    flow: number;
    $StmS: boolean;
    $StmB: boolean;
    $StmI: boolean;
    $StmA: boolean;
    impressionist: boolean;
    $SmpS: SmpTEnum;
    healSmoothFactor: number;
  }

  interface HealingDirectionEnum {
    _enum: "healingDirection";
    _value: HealingDirection;
  }

  type HealingDirection = "healFromDest2Src" | "healFromSrc2Dest";

  interface PatchSelectionOptionsDescriptor extends CTODesc {
    pattern: PatternDescriptor;
    healingDirection: HealingDirectionEnum;
    transparency: boolean;
    selectionMode: number;
    contentAware: boolean;
    reshuffle: boolean;
    clone: boolean;
    move: boolean;
    sampleAllLayers: boolean;
    patchStructureAdapt: number;
    patchColorAdaptation: number;
    healSmoothFactor: number;
  }

  interface RecomposeSelectionOptionsDescriptor extends CTODesc {
    recomposeMode: number;
    selectionMode: number;
    patchStructureAdapt: number;
    patchColorAdaptation: number;
    sampleAllLayers: boolean;
    transformOnDrop: boolean;
  }

  interface RedEyeToolOptionsDescriptor extends CTODesc {
    radius: number;
    darken: number;
  }

  interface SampledBrushDescriptor {
    _obj: "sampledBrush";
    diameter: PixelValue;
    angle: AngleValue;
    roundness: PercentValue;
    name: string;
    spacing: PercentValue;
    interfaceIconFrameDimmed: boolean;
    flipX: boolean;
    flipY: boolean;
    sampledData: string;
  }

  interface DualBrushDescriptor {
    _obj: "dualBrush";
    useDualBrush: boolean;
    flip?: boolean;
    brush?: SampledBrushDescriptor;
    blendMode?: BlendModeEnum;
    useScatter: boolean;
    spacing: PercentValue;
    count?: number;
    bothAxes?: boolean;
    countDynamics: BrVrDescriptor;
    scatterDynamics?: BrVrDescriptor;
  }

  interface BrushShapeDynamicsOptions {
    useTipDynamics: boolean;
    $szVr?: BrVrDescriptor;
    angleDynamics?: BrVrDescriptor;
    flipX?: boolean;
    flipY?: boolean;
    brushProjection?: boolean;
    minimumDiameter?: PercentValue;
    minimumRoundness?: PercentValue;
    tiltScale?: PercentValue;
    roundnessDynamics?: BrVrDescriptor;
  }

  interface BrushScatteringOptions {
    useScatter: boolean;
    count?: number;
    bothAxes?: boolean;
    countDynamics?: BrVrDescriptor;
    scatterDynamics?: BrVrDescriptor;
  }

  interface BrushTextureOptions {
    useTexture: boolean;
    texture?: PatternDescriptor;
    textureScale?: PercentValue;
    invertTexture?: boolean;
    textureBrightness?: number;
    textureContrast?: number;
    textureBlendMode?: BlendModeEnum;
    textureDepth?: PercentValue;
    minimumDepth?: PercentValue;
    textureDepthDynamics?: BrVrDescriptor;
  }

  interface DualBrushOptions {
    dualBrush: DualBrushDescriptor;
  }

  interface BrushColorDynamicsOptions {
    useColorDynamics: boolean;
    $clVr?: BrVrDescriptor;
    backgroundColor?: PsColor;
    brightness?: PercentValue;
    colorDynamicsPerTip?: boolean;
    hue?: PercentValue;
    purity?: PercentValue;
    saturation?: PercentValue;
  }

  interface BrushTransferOptions {
    usePaintDynamics: boolean;
    $opVr?: BrVrDescriptor;
    $prVr?: BrVrDescriptor;
  }

  interface BrushPoseOptions {
    useBrushPose: boolean;
    overridePoseAngle?: boolean;
    overridePoseTiltX?: boolean;
    overridePoseTiltY?: boolean;
    overridePosePressure?: boolean;
    brushPosePressure?: PercentValue;
    brushPoseTiltX?: number;
    brushPoseTiltY?: number;
    brushPoseAngle?: number;
  }

  interface BrushSmoothingOptions {
    smoothing: boolean;
    smoothingValue: number;
    smoothingRadiusMode: boolean;
    smoothingCatchup: boolean;
    smoothingCatchupAtEnd: boolean;
    smoothingZoomCompensation: boolean;
    pressureSmoothing: boolean;
  }

  interface BrushOptions
    extends BrushShapeDynamicsOptions,
      BrushScatteringOptions,
      BrushTextureOptions,
      DualBrushOptions,
      BrushColorDynamicsOptions,
      BrushTransferOptions,
      BrushPoseOptions,
      BrushSmoothingOptions {
    smooth?: number;
    mode: BlendModeEnum;
    brush: ComputedBrushDescriptor;
    opacity?: number;
    noise?: boolean;
    wetEdges?: boolean;
    repeat?: boolean;
    protectTexture?: boolean;
    foregroundColor?: PsColor;
    usePressureOverridesSize: boolean;
    usePressureOverridesOpacity: boolean;
    useLegacy: boolean;
  }

  interface PaintBrushToolOptionsDescriptor extends BrushOptions, CTODesc {
    flow: number;
  }

  interface PencilToolOptionsDescriptor extends BrushOptions, CTODesc {
    $PncA: boolean;
  }

  interface ColorReplacementBrushToolOptionsDescriptor extends BrushOptions, CTODesc {
    tolerance: number;
    $CRSm: number;
    $CRCg: number;
    $CRAl: boolean;
    $CRRc: PsColor;
    $CRTc: PsColor;
    $CRTm: BlendModeEnum;
  }

  interface WetBrushToolOptionsDescriptor extends BrushOptions, CTODesc {
    flow: number;
    wetness: number;
    dryness: number;
    mix: number;
    $wtVr: BrVrDescriptor;
    $mxVr: BrVrDescriptor;
    textClickPoint: number;
    interpretation: number;
    autoFill: boolean;
    autoClean: boolean;
    loadSolidColorOnly: boolean;
    sampleAllLayers: boolean;
    reservoirState: number;
  }

  interface StampToolOptionsDescriptor extends BrushOptions, CTODesc {
    flow: number;
    textClickPoint: number;
    interpretation: number;
    $StmS: boolean;
    $StmB: boolean;
    $StmI: boolean;
    $StmA: boolean;
    impressionist: boolean;
  }

  interface HistoryBrushToolOptionsDescriptor extends BrushOptions, CTODesc {
    $HstI: boolean;
  }

  interface ArtBrushToolOptionsDescriptor extends BrushOptions, CTODesc {
    $AHBs: number;
    $AHBt: number;
    $AHBc: number;
  }

  interface EraserToolOptionsDescriptor extends BrushOptions, CTODesc {
    $MgcE: boolean;
    $ErsB: number;
  }

  interface BackgroundEraserToolOptionsDescriptor extends BrushOptions, CTODesc {
    $BECn: number;
    $BEPr: boolean;
    $BESm: number;
  }

  interface MagicEraserToolOptionsDescriptor extends CTODesc {
    mode: BlendModeEnum;
    opacity: number;
    $BckT: number;
    $BckA: boolean;
    $BckS: boolean;
    contiguous: boolean;
    $BckF: boolean;
  }

  interface GradientToolOptionsDescriptor extends CTODesc {
    mode: BlendModeEnum;
    opacity: number;
    gradient: GradientDescriptor;
    gradientType: GradientTypeNumeric;
    $GrdD: number;
    $GrdU: number;
    $GrdR: number;
  }

  interface BucketToolOptionsDescriptor extends CTODesc {
    mode: BlendModeEnum;
    opacity: number;
    $BckT: number;
    $BckA: boolean;
    $BckS: boolean;
    contiguous: boolean;
    $BckF: boolean;
    pattern: PatternDescriptor;
  }

  interface BlurToolOptionsDescriptor extends BrushOptions, CTODesc {
    flow: number;
    $BlrS: boolean;
  }

  interface SharpenToolOptionsDescriptor extends BlurToolOptionsDescriptor {
    detailBoost: boolean;
  }

  interface SmudgeToolOptionsDescriptor extends BrushOptions, CTODesc {
    pressure: number;
    $SmdF: boolean;
    smudgeStick: boolean;
  }

  interface DodgeBurnToolOptionsDescriptor extends BrushOptions, CTODesc {
    exposure: number;
  }

  interface SaturationToolOptionsDescriptor extends BrushOptions, CTODesc {
    flow: number;
  }

  interface GeometryToolModeEnum {
    _enum: "geometryToolMode";
    _value: GeometryToolMode;
  }

  type GeometryToolMode = "path" | "shape" | "pixels";

  interface StrokeStyleLineCapTypeEnum {
    _enum: "strokeStyleLineCapType";
    _value: StrokeStyleLineCapType;
  }

  type StrokeStyleLineCapType =
    | "strokeStyleRoundCap"
    | "strokeStyleButtCap"
    | "strokeStyleSquareCap";

  interface StrokeStyleLineJoinTypeEnum {
    _enum: "strokeStyleLineJoinType";
    _value: StrokeStyleLineJoinType;
  }

  type StrokeStyleLineJoinType =
    | "strokeStyleBevelJoin"
    | "strokeStyleMiterJoin"
    | "strokeStyleRoundJoin";

  interface StrokeStyleLineAlignmentEnum {
    _enum: "strokeStyleLineAlignment";
    _value: StrokeStyleLineAlignment;
  }

  type StrokeStyleLineAlignment =
    | "strokeStyleAlignOutside"
    | "strokeStyleAlignInside"
    | "strokeStyleAlignCenter";

  interface StrokStyleDescriptor {
    _obj: "strokeStyle";
    strokeStyleVersion: number;
    strokeEnabled: boolean;
    fillEnabled: boolean;
    strokeStyleLineWidth: PointValue;
    strokeStyleLineDashOffset: PointValue;
    strokeStyleMiterLimit: number;
    strokeStyleLineCapType: StrokeStyleLineCapTypeEnum;
    strokeStyleLineJoinType: StrokeStyleLineJoinTypeEnum;
    strokeStyleLineAlignment: StrokeStyleLineAlignmentEnum;
    strokeStyleScaleLock: boolean;
    strokeStyleStrokeAdjust: boolean;
    strokeStyleLineDashSet: NoneValue[];
    strokeStyleBlendMode: BlendModeEnum;
    strokeStyleOpacity: PercentValue;
    strokeStyleContent: SolidColorLayerDescriptor;
    strokeStyleResolution: number;
  }

  interface ShapeStyleDescriptor {
    _obj: "shapeStyle";
    strokeStyle: StrokStyleDescriptor;
    fillContents: SolidColorLayerDescriptor;
  }

  interface PathToolOptions {
    geometryToolMode: GeometryToolModeEnum;
    makeShapeLayers?: boolean;
    useAlignedRendering?: boolean;
    shapeStyle?: ShapeStyleDescriptor;
  }

  interface PenToolOptionsDescriptor extends PathToolOptions, CTODesc {
    $AAdd: boolean;
    $MspT: boolean;
  }

  interface FreeformPenToolOptionsDescriptor extends PathToolOptions, CTODesc {
    $AAdd: boolean;
    $MspT: boolean;
    $FrPT: number;
    contiguous: boolean;
    selectionEnum: number;
    $DrwR: PixelValue;
    $DrwA: boolean;
    $MgLP: boolean;
    $MgEd: number;
    $MgCl: number;
    $MgWd: number;
    $MgSS: number;
    $MgSn: number;
    $UsKn: boolean;
    magnitude: boolean;
  }

  type KnotToolOptionsDescriptor = PathToolOptions & CTODesc;

  interface TextToolParagraphOptions {
    paragraphStyle: ParagraphStyleDescriptor;
    orientation: Orientation;
  }

  interface TextToolCharacterOptions {
    textStyle: TextStyleDescriptor;
    textGridding: TextGriddingEnum;
  }

  interface FontListPresetDescriptor<ObjectClass extends string = "favoriteFontList"> {
    _obj: ObjectClass;
    fontPostScriptName: string[];
  }

  interface TextToolOptionsDescriptor {
    _obj: "textToolOptions";
    textNewTextOrientation: 0;
    favoriteFontList: FontListPresetDescriptor;
    recentFontList: FontListPresetDescriptor<"recentFontList">;
  }

  interface TypeToolOptionsDescriptor extends CTODesc {
    textToolParagraphOptions: TextToolParagraphOptions;
    textToolCharacterOptions: TextToolCharacterOptions;
    textToolOptions: TextToolOptionsDescriptor;
  }

  interface PathComponentSelectToolOptionsDescriptor extends PathToolOptions, CTODesc {
    $Pbbx: boolean;
  }

  type DirectSelectToolOptionsDescriptor = PathToolOptions & CTODesc;

  interface RectangleToolOptionsDescriptor extends PathToolOptions, CTODesc {
    width: number;
    widthUnit: number;
    height: number;
    heightUnit: number;
    proportionalHeight: number;
    proportionalWidth: number;
    radius: number;
    cornerRadiusUnit: number;
  }

  interface EllipseToolOptionsDescriptor extends PathToolOptions, CTODesc {
    proportionalHeight: number;
    proportionalWidth: number;
  }

  interface RoundedRectangleToolOptionsDescriptor extends EllipseToolOptionsDescriptor {
    radii: RadiiDescriptor;
    radius: number;
    cornerRadiusUnit: number;
  }

  interface TriangleToolOptionsDescriptor extends EllipseToolOptionsDescriptor {
    sides: number;
    starRatio: PercentValue;
    polygonCornerRadius: number;
    polygonCornerRadiusUnit: number;
  }

  interface PolygonToolOptionsDescriptor extends TriangleToolOptionsDescriptor {
    smoothIndents: boolean;
  }

  interface LineToolOptionsDescriptor extends PathToolOptions, CTODesc {
    $LiVR: number;
    $LnWd: number;
    $LiWS: number;
    $LnAW: number;
    $ArWU: number;
    $LnAL: number;
    $ArLU: number;
    $LnAC: number;
    $LnAS: boolean;
    $LnAE: boolean;
  }

  interface CustomShapeDescriptor {
    _obj: "customShape";
    name: string;
    ID: string;
  }

  interface CustomShapeToolOptionsDescriptor extends PathToolOptions, CTODesc {
    customShape: CustomShapeDescriptor;
  }

  interface HandToolOptionsDescriptor extends CTODesc {
    $Hgng: boolean;
  }

  interface RotateToolOptionsDescriptor extends CTODesc {
    angle: number;
    rotateAll: boolean;
  }

  interface ZoomToolOptionsDescriptor extends CTODesc {
    $ZTIP: boolean;
    $Zgng: boolean;
    $ZmRs: boolean;
    zoomIn: boolean;
    scrubbyZoom: boolean;
  }

  type CurrentToolOptionsDescriptor =
    | CTODesc
    | MoveToolOptionsDescriptor
    | ArtboardToolOptionsDescriptor
    | SelectionToolOptionsDescriptor
    | MarqueeToolOptionsDescriptor
    | LassoToolOptionsDescriptor
    | MagneticLassoToolOptionsDescriptor
    | MagicLassoToolOptionsDescriptor
    | QuickSelectToolOptionsDescriptor
    | MagicWandToolOptionsDescriptor
    | CropToolOptionsDescriptor
    | PerspectiveCropToolOptionsDescriptor
    | SliceToolOptionsDescriptor
    | FramedGroupToolOptionsDescriptor
    | EyedropperToolOptionsDescriptor
    | ColorSamplerToolOptionsDescriptor
    | TextAnnotToolOptionsDescriptor
    | SpotHealingBrushToolOptionsDescriptor
    | MagicStampToolOptionsDescriptor
    | PatchSelectionOptionsDescriptor
    | RecomposeSelectionOptionsDescriptor
    | RedEyeToolOptionsDescriptor
    | PaintBrushToolOptionsDescriptor
    | PencilToolOptionsDescriptor
    | ColorReplacementBrushToolOptionsDescriptor
    | WetBrushToolOptionsDescriptor
    | StampToolOptionsDescriptor
    | HistoryBrushToolOptionsDescriptor
    | ArtBrushToolOptionsDescriptor
    | EraserToolOptionsDescriptor
    | BackgroundEraserToolOptionsDescriptor
    | MagicEraserToolOptionsDescriptor
    | GradientToolOptionsDescriptor
    | BucketToolOptionsDescriptor
    | BlurToolOptionsDescriptor
    | SharpenToolOptionsDescriptor
    | SmudgeToolOptionsDescriptor
    | DodgeBurnToolOptionsDescriptor
    | SaturationToolOptionsDescriptor
    | PenToolOptionsDescriptor
    | FreeformPenToolOptionsDescriptor
    | KnotToolOptionsDescriptor
    | TypeToolOptionsDescriptor
    | PathComponentSelectToolOptionsDescriptor
    | DirectSelectToolOptionsDescriptor
    | RectangleToolOptionsDescriptor
    | EllipseToolOptionsDescriptor
    | RoundedRectangleToolOptionsDescriptor
    | TriangleToolOptionsDescriptor
    | PolygonToolOptionsDescriptor
    | LineToolOptionsDescriptor
    | CustomShapeToolOptionsDescriptor
    | HandToolOptionsDescriptor
    | RotateToolOptionsDescriptor
    | ZoomToolOptionsDescriptor;

  interface ToolEnum {
    _enum: Tool;
    _value: "targetEnum";
  }

  type Tool =
    | "moveTool"
    | "artboardTool"
    | "marqueeRectTool"
    | "marqueeEllipTool"
    | "marqueeSingleRowTool"
    | "marqueeSingleColumnTool"
    | "polySelTool"
    | "lassoTool"
    | "magneticLassoTool"
    | "quickSelectTool"
    | "magicLassoTool"
    | "magicWandTool"
    | "cropTool"
    | "perspectiveCropTool"
    | "sliceTool"
    | "sliceSelectTool"
    | "framedGroupTool"
    | "eyedropperTool"
    | "3DMaterialSelectTool"
    | "colorSamplerTool"
    | "rulerTool"
    | "textAnnotTool"
    | "countTool"
    | "patchSelection"
    | "spotHealingBrushTool"
    | "magicStampTool"
    | "recomposeSelection"
    | "redEyeTool"
    | "paintbrushTool"
    | "pencilTool"
    | "colorReplacementBrushTool"
    | "wetBrushTool"
    | "cloneStampTool"
    | "patternStampTool"
    | "historyBrushTool"
    | "artBrushTool"
    | "eraserTool"
    | "backgroundEraserTool"
    | "magicEraserTool"
    | "gradientTool"
    | "bucketTool"
    | "3DMaterialDropTool"
    | "blurTool"
    | "sharpenTool"
    | "smudgeTool"
    | "dodgeTool"
    | "burnInTool"
    | "saturationTool"
    | "penTool"
    | "freeformPenTool"
    | "curvaturePenTool"
    | "addKnotTool"
    | "deleteKnotTool"
    | "convertKnotTool"
    | "typeCreateOrEditTool"
    | "typeVerticalCreateOrEditTool"
    | "typeVerticalCreateMaskTool"
    | "typeCreateMaskTool"
    | "pathComponentSelectTool"
    | "directSelectTool"
    | "rectangleTool"
    | "roundedRectangleTool"
    | "ellipseTool"
    | "triangleTool"
    | "polygonTool"
    | "lineTool"
    | "customShapeTool"
    | "handTool"
    | "rotateTool"
    | "zoomTool"
    | "editToolbar";

  interface VectorToolSettingsDescriptor {
    _obj: "toolPreset";
    toolUserSelectionRecencyRank: number;
    mode: BlendModeEnum;
    opacity: number;
    proportionalHeight: number;
    proportionalWidth: number;
    radii: RadiiDescriptor;
    radius: number;
    cornerRadiusUnit: number;
  }
}
