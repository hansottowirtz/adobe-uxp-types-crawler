// Manually created by @simonhenke
declare module "photoshop" {
  interface ApplicationDescriptor {
    rulerUnits: RulerUnitsEnum;
    exactPoints: boolean;
    numberOfCacheLevels: number;
    numberOfCacheLevels64: number;
    useCacheForHistograms: boolean;
    interpolationMethod: InterpolationMethodEnum;
    showToolTips: boolean;
    $PnCK: CursorKindEnum;
    _warning: string;
    hostName: string;
    gridMajor: number;
    gradientClassEvent: number;
    watchSuspension: number;
    numberOfDocuments: number;
    interfaceWhite: InterfaceColorDescriptor;
    interfaceButtonUpFill: InterfaceColorDescriptor;
    interfaceBevelShadow: InterfaceColorDescriptor;
    interfaceIconFillActive: InterfaceColorDescriptor;
    interfaceIconFillDimmed: InterfaceColorDescriptor;
    interfacePaletteFill: InterfaceColorDescriptor;
    interfaceIconFrameDimmed: InterfaceColorDescriptor;
    interfaceIconFrameActive: InterfaceColorDescriptor;
    interfaceBevelHighlight: InterfaceColorDescriptor;
    interfaceButtonDownFill: InterfaceColorDescriptor;
    interfaceIconFillSelected: InterfaceColorDescriptor;
    interfaceBorder: InterfaceColorDescriptor;
    interfaceButtonDarkShadow: InterfaceColorDescriptor;
    interfaceIconFrameSelected: InterfaceColorDescriptor;
    interfaceRed: InterfaceColorDescriptor;
    interfaceBlack: InterfaceColorDescriptor;
    interfaceToolTipBackground: InterfaceColorDescriptor;
    interfaceToolTipText: InterfaceColorDescriptor;
    interfaceTransparencyForeground: InterfaceColorDescriptor;
    interfaceTransparencyBackground: InterfaceColorDescriptor;
    interfaceOWLPaletteFill: InterfaceColorDescriptor;
    interfaceButtonText: InterfaceColorDescriptor;
    interfaceCanvasColor: InterfaceColorDescriptor;
    interfaceStaticText: InterfaceColorDescriptor;
    interfaceButtonShadow: InterfaceColorDescriptor;
    historyPreferences: HistoryPreferencesDescriptor;
    hostVersion: VersionDescriptor;
    eyeDropperSample: EyeDropperSampleTypeEnum | EyeDropperSampleSize;
    colorPickerPrefs: ColorPickerPrefsDescriptor;
    globalAngle: GlobalAngleDescriptor;
    generalPreferences: GeneralPreferencesDescriptor;
    interfacePrefs: InterfacePrefsDescriptor;
    workspacePreferences: WorkspacePreferencesDescriptor;
    toolsPreferences: ToolsPreferencesDescriptor;
    historyLogPreferences: HistoryLogPreferencesDescriptor;
    fileSavePrefs: FileSavePrefsDescriptor;
    exportAssetsPrefs: ExportAssetsPrefsDescriptor;
    cachePrefs: CachePrefsDescriptor;
    scratchDiskPreferences: ScratchDiskPreferencesDescriptor;
    displayPrefs: DisplayPrefsDescriptor;
    transparencyPrefs: TransparencyPrefsDescriptor;
    unitsPrefs: UnitsPrefsDescriptor;
    guidesPrefs: GuidesPrefsDescriptor;
    pluginPicker: PluginPickerDescriptor;
    typePreferences: TypePreferencesDescriptor;
    z3DPrefs: Z3DPrefsDescriptor;
    experimentalFeatures: ExperimentalFeaturesDescriptor;
    privacyPrefs: PrivacyPrefsDescriptor;
    transparencyGamutPreferences: CheckerboardSizeEnum;
    colorSettings: ColorSettingsDescriptor;
    foregroundColor: PsColor;
    backgroundColor: PsColor;
    preferencesFolder: FileReference;
    kuiBrightnessLevel: UiBrightnessLevelEnum;
    controlColor: ControlColorChartreuseEnum;
    highlightColorOption: HighlightColorOptionEnum;
    limited: boolean;
    defaultAppScript: number;
    regionCode: number;
    presetManager: PresetManager;
    fontList: FontListPresetDescriptor;
    fontLargeName: string;
    fontLargeSize: number;
    fontSmallName: string;
    fontSmallSize: number;
    recentFiles: FileReference[];
    currentToolOptions: CurrentToolOptionsDescriptor;
    tool: ToolEnum;
    vectorToolSettings: VectorToolSettingsDescriptor;
    buildNumber: string;
    osVersion: string;
    panelList: PanelListDescriptor[];
    workspaceList: WorkspaceDescriptor[];
    tileSize: number;
    size: number;
    toolSupportsBrushes: boolean;
    toolSupportsBrushPresets: boolean;
    autoShowHomeScreen: boolean;
    recentFilesAsStrings: string[];
    layerThumbnailSize: SizeEnum;
    MRUColorList: PsColor[];
    documentArea: TopRightBottomLeft;
    localeInfo: LocaleInfo;
    used: number;
    available: number;
    layerVisibilityChangesAreUndoable: boolean;
    homeScreenVisibility: boolean;
    panelUILockIsEnabled: boolean;
    modalDialogLevel: number;
    modalToolLevel: number;
    active: boolean;
    viewID: string;
    panelName: string;
    panelID: string;
    mondoFilterLevel: number;
    numberOfActionSets: number;
    menuBarInfo?: MenuBarInfo;
  }

  interface MenuBarInfo {
    submenu: MenuBarCommand[];
  }

  interface MenuBarCommand {
    command: number;
    menuID: number;
    title: string;
    name: string;
    visible: boolean;
    enabled: boolean;
    checked: boolean;
    kind: string;
    menuShortcut: MenuShortcut;
    submenu: MenuBarCommand[];
  }

  interface MenuShortcut {
    shiftKey: boolean;
    commandKey: boolean;
    optionKey: boolean;
    controlKey: boolean;
  }
}
