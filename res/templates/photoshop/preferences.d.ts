// Manually created by @simonhenke
declare module "photoshop" {
  interface InterpolationMethodEnum {
    _enum: "interpolationType";
    _value: InterpolationType;
  }

  type InterpolationType =
    | "bicubic"
    | "bicubicAutomatic"
    | "bicubicSmoother"
    | "bicubicSharper"
    | "bilinear"
    | "preserveDetailsUpscale"
    | "deepUpscale"
    | "nearestNeighbor";

  interface CursorKindEnum {
    _enum: "cursorKind";
    _value: CursorKind;
  }

  type CursorKind = "brushSize" | "precise" | "standard";

  interface InterfaceColorDescriptor {
    _obj: "interfaceColor";
    interfaceColorRed32: number;
    interfaceColorGreen32: number;
    interfaceColorBlue32: number;
    interfaceColorRed2: number;
    interfaceColorGreen2: number;
    interfaceColorBlue2: number;
  }

  interface HistoryPreferencesDescriptor {
    _obj: "historyPrefsClass";
    maximumStates: number;
    snapshotInitial: boolean;
    nonLinear: boolean;
  }

  interface VersionDescriptor {
    _obj: "version";
    versionMajor: number;
    versionMinor: number;
    versionFix: number;
  }

  interface EyeDropperSampleTypeEnum {
    _enum: "eyeDropperSampleType";
    _value: EyeDropperSampleType;
  }

  type EyeDropperSampleSize = 5 | 15 | 25 | 50;

  type EyeDropperSampleType = "samplePoint" | "sample3x3" | "sample5x5";

  interface ColorPickerPrefsDescriptor {
    _obj: "colorPickerPrefsClass";
    pickerKind: PickerKindTypeEnum;
    pickerID?: string;
  }

  interface PickerKindTypeEnum {
    _enum: "pickerKindType";
    _value: PickerKindType;
  }

  type PickerKindType = "photoshopPicker"; // TODO: more?

  interface GlobalAngleDescriptor {
    _obj: "globalAngle";
    globalLightingAngle: AngleValue;
    globalAltitude: AngleValue;
  }

  interface SaveHistoryToTypeEnum {
    _enum: "saveHistoryToType";
    _value: SaveHistoryToType;
  }

  type SaveHistoryToType = "metadata" | "textFile" | "both";

  interface EditLogItemsTypeEnum {
    _enum: "editLogItemsType";
    _value: EditLogItemsType;
  }

  type EditLogItemsType = "session" | "concise" | "detailed";

  interface GeneralPreferencesDescriptor {
    _obj: "generalPreferences";
    colorPickerPrefs: ColorPickerPrefsDescriptor;
    interpolationMethod: InterpolationMethodEnum;
    historyLog: boolean;
    showToolTips: boolean;
    resizeWindowsOnZoom: boolean;
    dynamicColorSliders: boolean;
    shiftKeyToolSwitch: boolean;
    saveHistoryTo: SaveHistoryToTypeEnum;
    log: boolean;
    file?: FileReference;
    editLogItems: EditLogItemsTypeEnum;
    exportClipboard: boolean;
    beepWhenDone: boolean;
    autoShowHomeScreen: boolean;
    extensionsOn: boolean;
    autoUpdateFiles: boolean;
    resizePastePlace: boolean;
    placeRasterSmartObject: boolean;
    skipTransformSOFromLibrary: boolean;
    legacyPathDrag: boolean;
    modernFreeTransform: boolean;
    legacyFreeTransform: boolean;
    vectorSelectionModifiesLayerSelection: boolean;
    useClassicFileNewDialog: boolean;
  }

  interface CanvasScreenModeEnum {
    _enum: "canvasScreenMode";
    _value: CanvasScreenMode;
  }

  type CanvasScreenMode =
    | "screenModeArtboard"
    | "screenModeFullScreen"
    | "screenModeFullScreenWithMenubar"
    | "screenModeStandard";

  interface CanvasColorTypeEnum {
    _enum: "canvasColorType";
    _value: CanvasColorType;
  }

  type CanvasColorType =
    | "defaultGray"
    | "darkGray"
    | "lightGray"
    | "black"
    | "mediumGray"
    | "custom";

  interface CanvasFrameStyleEnum {
    _enum: "canvasFrameStyle";
    _value: CanvasFrameStyle;
  }

  type CanvasFrameStyle = "dropShadow" | "line" | "none";

  interface CanvasAttributesDescriptor {
    _obj: "canvasAttributes";
    screenMode: CanvasScreenModeEnum;
    color: PsColor;
    canvasColorMode: CanvasColorTypeEnum;
    canvasFrame: CanvasFrameStyleEnum;
  }

  interface PaletteFontTypeEnum {
    _enum: "paletteFontType";
    _value: PaletteFontType;
  }

  type PaletteFontType =
    | "preferTinyPaletteFontType"
    | "preferSmallPaletteFontType"
    | "preferMediumPaletteFontType"
    | "preferLargePaletteFontType";

  interface UiBrightnessLevelEnum {
    _enum: "uiBrightnessLevelEnumType";
    _value: UiBrightnessLevel;
  }

  type UiBrightnessLevel =
    | "kPanelBrightnessDarkGray"
    | "kPanelBrightnessMediumGray"
    | "kPanelBrightnessLightGray"
    | "kPanelBrightnessOriginal";

  interface HighlightColorOptionEnum {
    _enum: "highlightColorOptionEnumType";
    _value: HighlightColorOption;
  }

  type HighlightColorOption = "uiDefaultHighlightColor" | "uiBlueHighlightColor";

  interface InterfacePrefsDescriptor {
    _obj: "interfacePrefs";
    colorChannels: boolean;
    canvasBackgroundColors: CanvasAttributesDescriptor[];
    showMenuColors: boolean;
    paletteEnhancedFontTypeKey: PaletteFontTypeEnum;
    paletteUIScaledTypeKey: boolean;
    uiLanguageKey: string;
    kuiBrightnessLevel: UiBrightnessLevelEnum;
    highlightColorOption: HighlightColorOptionEnum;
    dynamicColorSliders: boolean;
  }

  interface WorkspacePreferencesDescriptor {
    _obj: "workspacePreferences";
    enableNarrowOptionBar: boolean;
    autoCollapseDrawers: boolean;
    enableLargeTabs: boolean;
    autoShowRevealStrips: boolean;
    openNewDocsAsTabs: boolean;
    enableFloatingDocDocking: boolean;
    useOSMenuAlignment: boolean;
  }

  interface ShowHUDStateEnum {
    _enum: "showHUDState";
    _value: ShowHUDState;
  }

  type ShowHUDState =
    | "showHUDNever"
    | "showHUDTopLeft"
    | "showHUDTopRight"
    | "showHUDBottomLeft"
    | "showHUDBottomRight";

  interface ToolsPreferencesDescriptor {
    _obj: "toolsPreferences";
    showToolTips: boolean;
    useRichToolTips: boolean;
    enableGestures: boolean;
    overscrollEnabled: boolean;
    resizeWindowsOnZoom: boolean;
    zoom: boolean;
    zoomWithScrollWheel: boolean;
    animationKey: boolean;
    verticalMovementsBrushHUD: boolean;
    arrowKeysRotateBrushTip: boolean;
    shiftKeyToolSwitch: boolean;
    flick: boolean;
    transformsSnapToPixels: boolean;
    showTransformReferencePoint: boolean;
    doubleClickLayerMaskLaunchSelectionLab: boolean;
    showHUD: ShowHUDStateEnum;
  }

  interface HistoryLogPreferencesDescriptor {
    _obj: "historyLogPreferences";
    historyLog: boolean;
    saveHistoryTo: SaveHistoryToTypeEnum;
    log: boolean;
    editLogItems: EditLogItemsTypeEnum;
  }

  interface QueryStateEnum {
    _enum: "queryState";
    _value: QueryState;
  }

  type QueryState = "queryAlways" | "queryAsk" | "queryNever";

  interface FileSavePrefsDescriptor {
    _obj: "fileSavePrefsClass";
    previewsQuery: QueryStateEnum;
    previewWinThumbnail: boolean;
    extensionsQuery: QueryStateEnum;
    lowerCase: boolean;
    cameraRaw: boolean;
    preferACRForHDRToning: boolean;
    EXIF: boolean;
    ignoreRotationMetadata: boolean;
    FileSaveToOriginalFolder: boolean;
    fileSaveInBackground: boolean;
    fileAutoSaveEnabled: boolean;
    fileAutoSaveInterval: number;
    askLayeredTIFF: boolean;
    clipboardTIFFTransparencyPref: boolean;
    disablePSDCompression: boolean;
    maximizeCompatibility: QueryStateEnum;
    cloudWorkareaCustom: boolean;
    cloudWorkareaDirectory: FileReference;
    recentFiles: number;
  }

  type ExportFileType = "PNG" | "JPG" | "GIF" | "SVG";

  interface ExportAssetsPrefsDescriptor {
    _obj: "exportAssetsPrefs";
    exportFileType: ExportFileType;
    exportFilePath: string;
    exportAssetsJPGQuality: number;
    exportAssetsLocationSetting: number;
    exportAsLocationSetting: number;
    exportPNGTransparency: boolean;
    exportMetaData: number;
    exportConvertToSRGB: boolean;
  }

  interface GpuModeEnum {
    _enum: "gpuMode";
    _value: GpuMode;
  }

  type GpuMode = "safe" | "advanced" | "performance"; // order is basic, normal, advanced

  interface OpenglAdvancedDescriptor {
    _obj: "openglAdvanced";
    openglD2SEnabled: boolean;
    openglVBLSyncEnabled: boolean;
    GLCompute: boolean;
    CLCompute: boolean;
    nativeGPU: boolean;
    deepMonitor: boolean;
    glAdvancedEnabled: boolean;
    openglAdvAntiAliasEnabled: boolean;
    openglBilerpEnabled: boolean;
    openglmode: GpuModeEnum;
  }

  interface CachePrefsDescriptor {
    _obj: "cachePrefs";
    historyStates: number;
    numberOfCacheLevels: number;
    numberOfCacheLevels64: number;
    tileSize: number;
    tileSize64: number;
    memoryUsagePercent: PercentValue;
    openglEnabled: boolean;
    openglAdvanced: OpenglAdvancedDescriptor;
    expFeatureCompCore: boolean;
    expFeatureCompCoreGPU: boolean;
    expFeatureCompCoreThreads: boolean;
    FeatureDynamicMaxPyramidLevel: boolean;
  }

  interface ScratchDiskPreferencesDescriptor {
    _obj: "scratchDiskPreferences";
    scratchDisks: string[];
  }

  interface CursorShapeEnum {
    _enum: "cursorShape";
    _value: CursorShape;
  }

  type CursorShape = "normal" | "fullSize";

  interface DisplayPrefsDescriptor {
    _obj: "displayPrefs";
    paintingCursors: CursorKindEnum;
    otherCursors: CursorKindEnum;
    cursorShape: CursorShapeEnum;
    cursorCrosshair: boolean;
    cursorCrosshairWhileStroking: boolean;
    cursorStrokeRope: boolean;
    cursorStrokeRopeColor: PsColor;
    brush: PsColor;
    colorChannels: boolean;
  }

  interface TransparencyGamutPreferencesEnum {
    _enum: "transparencyGamutPreferences";
    _value: TransparencyGamutPreferences;
  }

  type TransparencyGamutPreferences = "none" | "small" | "medium" | "large";

  interface TransparencyGridColorsTypeEnum {
    _enum: "transparencyGridColorsType";
    _value: TransparencyGridColorsType;
  }

  type TransparencyGridColorsType =
    | "light"
    | "medium"
    | "dark"
    | "red"
    | "orange"
    | "grain"
    | "blue"
    | "purple"
    | "customEnum";

  interface TransparencyPrefsDescriptor {
    _obj: "transparencyPrefs";
    transparencyGamutPreferences: TransparencyGamutPreferencesEnum;
    transparencyGridColors: TransparencyGridColorsTypeEnum;
    gamutWarning: PsColor;
    opacity: PercentValue;
    foregroundColor?: PsColor;
    backgroundColor?: PsColor;
  }

  interface UnitsPrefsDescriptor {
    _obj: "unitsPrefs";
    rulerUnits: RulerUnitsEnum;
    typeUnits: RulerUnitsEnum;
    columnWidth: DistanceValue;
    gutterWidth: DistanceValue;
    newDocPresetPrintResolution: DistanceValue;
    newDocPresetScreenResolution: DistanceValue;
    exactPoints: boolean;
  }

  interface GuideGridColorEnum {
    _enum: "guideGridColor";
    _value: GuideGridColor;
  }

  type GuideGridColor =
    | "lightBlue"
    | "lightRed"
    | "grain"
    | "mediumBlue"
    | "yellow"
    | "magenta"
    | "cyan"
    | "lightGray"
    | "black"
    | "customEnum";

  interface GuideGridStyleEnum {
    _enum: "guideGridStyle";
    _value: GuideGridStyle;
  }

  type GuideGridStyle = "lens" | "dashedLine" | "dots";

  interface ControlColorChartreuseEnum {
    _enum: "controlColorChartreuse";
    _value: ControlColorChartreuse;
  }

  type ControlColorChartreuse =
    | "controlColorClassic"
    | "controlColorDefault"
    | "controlColorGreen"
    | "controlColorChartreuse"
    | "controlColorYellow"
    | "controlColorOrange"
    | "controlColorRed"
    | "controlColorMagenta"
    | "controlColorPurple"
    | "controlColorIndigo"
    | "controlColorFuchsia"
    | "controlColorSeaFoam"
    | "controlColorWhite"
    | "controlColorBlack";

  interface GuidesPrefsDescriptor {
    _obj: "guidesPrefs";
    guidesColor: GuideGridColorEnum;
    guidesCustomColor?: PsColor;
    guidesStyle: GuideGridStyleEnum;
    activeArtboardGuidesColor: GuideGridColorEnum;
    activeArtboardGuidesCustomColor?: PsColor;
    activeArtboardGuidesStyle: GuideGridStyleEnum;
    nonActiveArtboardGuidesColor: GuideGridColorEnum;
    nonActiveArtboardGuidesCustomColor?: PsColor;
    nonActiveArtboardGuidesStyle: GuideGridStyleEnum;
    smartGuidesColor: GuideGridColorEnum;
    smartGuidesCustomColor?: PsColor;
    gridColor: GuideGridColorEnum;
    gridCustomColor?: PsColor;
    gridStyle: GuideGridStyleEnum;
    gridMajor: number;
    gridUnits: RulerUnitsEnum;
    gradientClassEvent: number;
    sliceColor: GuideGridColorEnum;
    sliceCustomColor?: PsColor;
    showSliceNumbers: boolean;
    showInactiveArtboardGuides: boolean;
    controlColor: ControlColorChartreuseEnum;
  }

  interface PluginPickerDescriptor {
    _obj: "pluginPicker";
    showAllFilterGalleryEntries: boolean;
    enablePluginDeveloperMode: boolean;
    generatorEnabled: boolean;
  }

  interface TextCompModeEnum {
    _enum: "textCompMode";
    _value: TextCompMode;
  }

  type TextCompMode =
    | "defaultTextInterface"
    | "advancedAsianInterface"
    | "middleEasternInterface";

  interface FontPreviewsSizeEnum {
    _enum: "fontPreviewsSize";
    _value: FontPreviewsSize;
  }

  type FontPreviewsSize = "small" | "medium" | "large";

  interface TypePreferencesDescriptor {
    _obj: "typePreferences";
    smartQuotes: boolean;
    textComposerChoice: TextCompModeEnum;
    enableFontFallback: boolean;
    enableGlyphAlternate: boolean;
    enablePlaceHolderText: boolean;
    enableMENATextEngine: number;
    showEnglishFontNames: boolean;
    showFontPreviews: boolean;
    fontPreviewsSize: FontPreviewsSizeEnum;
    textToolTreatsESCAsCommit: boolean;
  }

  interface Z3DPrefsDescriptor {
    _obj: "z3DPrefs";
    Z3DPrefDrawProgressiveRenderingOverlay: boolean;
    Z3DPrefDropToGL: boolean;
    Z3DPrefGLDirectToScreen: boolean;
    Z3DPrefGLAutoHideLayers: boolean;
    Z3DPrefsGLUseVRAMPercentage: number;
    Z3DPrefFileLoadingLightThreshold: number;
    Z3DPrefFileLoadingTextureThreshold: number;
    Z3DPrefColorMeshSelection: PsColor;
    Z3DPrefColorMaterialSelection: PsColor;
    Z3DPrefColorLightsourceSelection: PsColor;
    Z3DPrefColorLightsourceDisplay: PsColor;
    Z3DPrefColorConstraintSelection: PsColor;
    Z3DPrefColorConstraintDisplay: PsColor;
    Z3DPrefColorProgressiveRenderingTilesDisplay: PsColor;
    Z3DPrefColorGroundPlaneDisplay: PsColor;
    Z3DPrefGroundPlaneSize: number;
    Z3DPrefGroundPlaneSpacing: number;
    Z3DPrefShadowQuality: number;
    Z3DPrefRenderTileSize: number;
    Z3DPrefOnCanvasAxisWidgetScale: number;
    Z3DPrefHighQualityErrorThreshold: number;
    Z3DPrefShowRichCursorsOnHover: boolean;
    Z3DPrefShowRichCursorsOnInteraction: boolean;
    Z3DPrefInvertCameraControlYAxis: boolean;
    Z3DPrefHideAxisWidgetControlsDependingOnCurrent3DTool: boolean;
    Z3DPrefShowLightingEffectsControlsOnTheGroundPlane: boolean;
  }

  interface ExperimentalFeaturesDescriptor {
    _obj: "experimentalFeatures";
    expFeatureModifierPalette: boolean;
    expFeatureDeepUpscale: boolean;
    expFeatureContentAwareTracing: boolean;
    expFeatureUXPExportAs: boolean;
  }

  interface PrivacyPrefsDescriptor {
    _obj: "privacyPrefs";
  }

  interface CheckerboardSizeEnum {
    _enum: "checkerboardSize";
    _value: CheckerboardSize;
  }

  type CheckerboardSize =
    | "checkerboardNone"
    | "checkerboardSmall"
    | "checkerboardMedium"
    | "checkerboardLarge";

  interface PolicyEnum {
    _enum: "policy";
    _value: Policy;
  }

  type Policy = "off" | "preserve" | "convert";
}
