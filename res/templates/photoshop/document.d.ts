// Manually created by @simonhenke
declare module "photoshop" {
  interface DocumentDescriptor {
    mode: ColorSpaceModeEnum;
    bigNudgeH: number;
    bigNudgeV: number;
    rulerOriginH: number;
    rulerOriginV: number;
    width: DistanceValue;
    height: DistanceValue;
    resolution: DensityValue;
    title: string;
    fileInfo: FileInfo;
    numberOfPaths: number;
    numberOfChannels: number;
    numberOfLayers: number;
    numberOfGuides?: number;
    targetPathIndex: number;
    workPathIndex: number;
    clippingPathInfo: ClippingPathInfo;
    depth: 8 | 16 | 32;
    fileReference: FileReference;
    documentID: number;
    copyright: boolean;
    watermark: boolean;
    isDirty: boolean;
    count: number;
    itemIndex: number;
    colorSamplerList?: ColorSamplerDescriptor[];
    manage: ManageEnum;
    format?: Format;
    quickMask: boolean;
    histogram: number[];
    EXIF: string;
    pixelScaleFactor: NoneValue;
    XMPMetadataAsUTF8: string;
    compsList?: CompsClassDescriptor[];
    measurementScale: MeasurementScaleDescriptor;
    countClass?: CountClassDescriptor[];
    targetLayers: LayerIndexReference[];
    targetLayersIDs: LayerIdReference[];
    targetLayersIndexes: LayerIndexReference[];
    zoom: PercentValue;
    printCopies: number;
    printCurrentPrinter: string;
    printerList: string[];
    printColorHandling: PrintColorHandlingEnum;
    printOutputOptions: PrintOutputOptionsDescriptor;
    printOutput: PrintOutputDescriptor;
    selectionEdgesVisible: boolean;
    selection?: SelectionRectangle;
    center: UVPointDescriptor<DistanceValue>;
    hasBackgroundLayer: boolean;
    generatorSettings: GeneratorSettingsDescriptor;
    visible: boolean;
    targetPathVisibility: boolean;
    guidesVisibility: boolean;
    smartGuidesVisibility: boolean;
    rulersVisibility: boolean;
    slices: Slices;
    patternPreviewMode: boolean;
    artboards?: ArtboardsDescriptor;
    globalAngle?: number;
    json?: string;
    slicesVisibility?: boolean;
    viewTransform?: number[];
    pageSetup?: any; // TODO: ??
    printSettings?: any; // TODO: ??
    points?: UVPointDescriptorXY<DistanceValue>[];
  }

  interface ArtboardsDescriptor {
    _obj: "artboards";
    list: Artboard[];
    autoExpandOffset: PointDescriptor;
    origin: PointDescriptor;
    autoExpandEnabled: boolean;
    autoNestEnabled: boolean;
    autoPositionEnabled: boolean;
    shrinkwrapOnSaveEnabled: boolean;
    docDefaultNewArtboardBackgroundColor: PsColor;
    docDefaultNewArtboardBackgroundType: number;
  }

  interface Artboard {
    top: number;
    bottom: number;
    layerID: number;
  }

  interface CountClassDescriptor {
    _obj: "countClass";
    x: DistanceValue;
    y: DistanceValue;
    group: number;
    itemIndex: number;
  }

  interface CompsClassDescriptor {
    _obj: "compsClass";
    title: string;
    itemIndex: number;
    ID: number;
    selection: boolean;
    useVisibility: boolean;
    usePosition: boolean;
    useAppearance: boolean;
    useChildLayerCompState: boolean;
  }

  interface ColorSamplerDescriptor {
    _obj: "colorSampler";
    position: UVPointDescriptor;
    colorSpace: ColorSpaceModeEnum;
  }

  interface SelectionRectangle extends UVTopRightBottomLeft {
    _obj: "rectangle";
  }

  interface FileInfo {
    _obj: "fileInfo";
    // TODO ...
  }

  interface ClippingPathInfo {
    _obj: "clippingInfo";
    clippingPathIndex: number;
    clippingPathFlatness: number;
  }

  interface ManageEnum {
    _enum: "manage";
    _value: Manage;
  }

  type Manage = "none";
  // TODO: more?

  type Format =
    | "Photoshop"
    | "Large Document Format"
    | "Cineon"
    | "DICOM"
    | "IFF"
    | "JPEG"
    | "JPEG 2000"
    | "Photoshop PDF"
    | "Photoshop Raw"
    | "PNG"
    | "Portable Bit Map"
    | "TIFF"
    | "Generic EPS"
    | "SVG"
    | "GIF"
    | "Video";

  interface PrintColorHandlingEnum {
    _enum: "printColorHandling";
    _value: PrintColorHandling;
  }

  type PrintColorHandling = "printerManaged" | "photoshopManaged";

  interface MeasurementScaleDescriptor {
    _obj: "measurementScale";
    _target: [PropertyReference<"measurementScale">, DocumentTargetReference];
    to: {
      _obj: "measurementScale";
      pixelLength: number;
      logicalLength: number;
      logicalUnits: "pixels";
    };
  }

  interface PagePositionEnum {
    _enum: "pagePosition";
    _value: PagePosition;
  }

  type PagePosition = "pagePosCentered" | "pagePosTopLeft";

  interface PrintOutputOptionsDescriptor {
    _obj: "printOutputOptions";
    caption: boolean;
    calibrationBars: boolean;
    registrationMarks: boolean;
    cornerCropMarks: boolean;
    centerCropMarks: boolean;
    labels: boolean;
    negative: boolean;
    emulsionDown: boolean;
    interfaceIconFrameDimmed: boolean;
    background: PsColor;
    borderThickness: DistanceValue;
    bleed: DistanceValue;
    resolution: PixelValue;
    vectorData: boolean;
    pagePosition: PagePositionEnum;
    left: DistanceValue;
    top: DistanceValue;
    scale: PercentValue;
    cropWhenPrinting: boolean;
    cropRectBottom: number;
    cropRectLeft: number;
    cropRectRight: number;
    cropRectTop: number;
  }

  interface IntentEnum {
    _enum: "intent";
    _value: Intent;
  }

  type Intent = "colorimetric" | "image" | "graphics" | "absColorimetric";

  interface builtinProofEnum {
    _enum: "builtinProof";
    _value: Proof;
  }

  type Proof =
    | "proofBlack"
    | "proofCMYK"
    | "proofCMY"
    | "proofCustom"
    | "proofCyan"
    | "proofDeuteranopia"
    | "proofInkBlack"
    | "proofMacintosh"
    | "proofMagenta"
    | "proofMonitor"
    | "proofPaperWhite"
    | "proofProtanopia"
    | "proofWindows"
    | "proofYellow";

  interface PrintProofSetupDescriptor {
    _obj: "proofSetup";
    builtin: builtinProofEnum;
  }

  interface PrintOutputDescriptor {
    _obj: "printOutput";
    postScriptColor: boolean;
    intent: IntentEnum;
    printSixteenBit: boolean;
    printerName: string;
    printProofSetup: PrintProofSetupDescriptor;
  }

  interface Rect16Descriptor extends TopRightBottomLeft {
    _obj: "rect16";
  }

  interface ESliceOriginEnum {
    _enum: "ESliceOrigin";
    _value: ESliceOrigin;
  }

  type ESliceOrigin = "autoGenerated";

  interface ESliceTypeEnum {
    _enum: "ESliceType";
    _value: ESliceType;
  }

  type ESliceType = "image"; // TODO: more?

  interface ESliceHorzAlignEnum {
    _enum: "ESliceHorzAlign";
    _value: ESliceAlign;
  }

  type ESliceAlign = "default"; // TODO: more?

  interface ESliceVertAlignEnum {
    _enum: "ESliceVertAlign";
    _value: ESliceAlign;
  }

  interface ESliceBGColorTypeEnum {
    _enum: "ESliceBGColorType";
    _value: ESliceBGColorType;
  }

  type ESliceBGColorType = "none"; // TODO: more?

  interface SliceDescriptor {
    _obj: "slice";
    sliceID: number;
    groupID: number;
    origin: ESliceOriginEnum;
    type: ESliceTypeEnum;
    bounds: Rect16Descriptor;
    url: string;
    null: string;
    message: string;
    altTag: string;
    cellTextIsHTML: boolean;
    cellText: string;
    horzAlign: ESliceHorzAlignEnum;
    vertAlign: ESliceVertAlignEnum;
    bgColorType: ESliceBGColorTypeEnum;
    topOutset: number;
    leftOutset: number;
    bottomOutset: number;
    rightOutset: number;
  }

  interface Slices {
    bounds: Rect16Descriptor;
    slices: SliceDescriptor[];
  }
}
