// Manually created by @simonhenke
declare module "photoshop" {
  interface TextKeyDescriptor {
    _obj: "textLayer";
    antiAlias: {
      _enum: "antiAliasType";
      _value: antiAliasType;
    };
    boundingBox: BoundingBoxDescriptor;
    bounds: BoundsDescriptor;
    kerningRange: KerningRangeDescriptor[];
    orientation: OrientationEnum;
    paragraphStyleRange: ParagraphStyleRangeDescriptor[];
    textClickPoint: UVPointDescriptor<PercentValue>;
    textGridding: TextGriddingEnum;
    textKey: string;
    textShape: TextShapeDescriptor[];
    textStyleRange: TextStyleRangeDescriptor[];
    warp: WarpDescriptor;
    transform?: TransformMatrixDescriptor;
  }

  interface TextStyleRangeDescriptor extends RangePartial {
    _obj: "textStyleRange";
    textStyle: TextStyleDescriptor;
  }

  interface FontCapsEnum {
    _enum: "fontCaps";
    _value: FontCaps;
  }

  enum FontCaps {
    normal = "normal",
    smallCaps = "smallCaps",
    allCaps = "allCaps",
  }

  interface DigiSetEnum {
    _enum: "digitSet";
    _value: DigiSet;
  }

  enum DigiSet {
    defaultDigits = "defaultDigits",
    arabicDigits = "arabicDigits",
    farsiDigits = "farsiDigits",
    hindiDigits = "hindiDigits",
  }

  interface KashidasEnum {
    _enum: "kashidas";
    _value: Kashidas;
  }

  enum Kashidas {
    kashidaDefault = "kashidaDefault",
  }

  interface BaselineEnum {
    _enum: "baseline";
    _value: Baseline;
  }

  enum Baseline {
    normal = "normal",
    superScript = "superScript",
    subScript = "subScript",
  }

  interface OtBaselineEnum {
    _enum: "otbaseline";
    _value: OtBaseline;
  }

  enum OtBaseline {
    normal = "normal",
    superScript = "superScript",
    subScript = "subScript",
    numerator = "numerator",
    denominator = "denominator",
  }

  interface StrikeThroughEnum {
    _enum: "strikethrough";
    _value: StrikeThrough;
  }

  enum StrikeThrough {
    xHeightStrikethroughOn = "xHeightStrikethroughOn",
    xHeightStrikethroughOff = "xHeightStrikethroughOff",
  }

  interface UnderlineEnum {
    _enum: "underline";
    _value: Underline;
  }

  enum Underline {
    underlineOnLeftInVertical = "underlineOnLeftInVertical",
    underlineOnRightInVertical = "underlineOnRightInVertical",
    underlineOff = "underlineOff",
  }

  interface FigureStyleEnum {
    _enum: "figureStyle";
    _value: FigureStyle;
  }

  enum FigureStyle {
    normal = "normal",
    tabularLining = "tabularLining",
    proportionalOldStyle = "proportionalOldStyle",
    proportionalLining = "proportionalLining",
    tabularOldStyle = "tabularOldStyle",
  }

  interface BaselineDirectionEnum {
    _enum: "baselineDirection";
    _value: BaselineDirection;
  }

  enum BaselineDirection {
    withStream = "withStream",
    // TODO: more?
  }

  interface TextLanguageEnum {
    _enum: "textLanguage";
    _value: TextLanguage;
  }

  enum TextLanguage {
    oldGermanLanguage = "oldGermanLanguage",
    greekLanguage = "greekLanguage",
    hungarianLanguage = "hungarianLanguage",
    icelandicLanguage = "icelandicLanguage",
    italianLanguage = "italianLanguage",
    japaneseLanguage = "japaneseLanguage",
    croatianLanguage = "croatianLanguage",
    latvianLanguage = "latvianLanguage",
    lithuanianLanguage = "lithuanianLanguage",
    nynorskNorwegianLanguage = "nynorskNorwegianLanguage",
    polishLanguage = "polishLanguage",
    romanianLanguage = "romanianLanguage",
    rumanianLanguage = "rumanianLanguage",
    russianLanguage = "russianLanguage",
    serbianLanguage = "serbianLanguage",
    slovakLanguage = "slovakLanguage",
    slovenianLanguage = "slovenianLanguage",
    spanishLanguage = "spanishLanguage",
    standardFrenchLanguage = "standardFrenchLanguage",
    standardGermanLanguage = "standardGermanLanguage",
    germanLanguageReformed1996 = "germanLanguageReformed1996",
    standardPortugueseLanguage = "standardPortugueseLanguage",
    swedishLanguage = "swedishLanguage",
    swissGermanLanguage = "swissGermanLanguage",
    swissGermanLanguageOldRules = "swissGermanLanguageOldRules",
    turkishLanguage = "turkishLanguage",
    ukenglishLanguage = "ukenglishLanguage",
    ukranianLanguage = "ukranianLanguage",
    arabicLanguage = "arabicLanguage",
    hebrewLanguage = "hebrewLanguage",
    bokmalNorwegianLanguage = "bokmalNorwegianLanguage",
    brazilianPortugueseLanguage = "brazilianPortugueseLanguage",
    bulgarianLanguage = "bulgarianLanguage",
    canadianFrenchLanguage = "canadianFrenchLanguage",
    canadianEnglishLanguage = "canadianEnglishLanguage",
    catalanLanguage = "catalanLanguage",
    chineseLanguage = "chineseLanguage",
    czechLanguage = "czechLanguage",
    danishLanguage = "danishLanguage",
    dutchLanguage = "dutchLanguage",
    kdutchLanguageOldRules = "kdutchLanguageOldRules",
    englishLanguage = "englishLanguage",
    estonianLanguage = "estonianLanguage",
    finnishLanguage = "finnishLanguage",
  }

  interface JapaneseAlternateEnum {
    _enum: "japaneseAlternate";
    _value: JapaneseAlternate;
  }

  enum JapaneseAlternate {
    defaultForm = "defaultForm",
    traditionalForm = "traditionalForm",
    expertForm = "expertForm",
    JIS78Form = "JIS78Form",
    JIS83Form = "JIS83Form",
    halfWidthForm = "halfWidthForm",
    thirdWidthForm = "thirdWidthForm",
    quarterWidthForm = "quarterWidthForm",
    fullWidthForm = "fullWidthForm",
    proportionalWidthForm = "proportionalWidthForm",

    // expertForm?
    // traditionalForm?
    // TODO: more?
  }

  interface GridAlignmentEnum {
    _enum: "gridAlignment";
    _value: GridAlignment;
  }

  enum GridAlignment {
    roman = "roman",
    bottom = "bottom",
    ifcbottom = "icfbottom",
    center = "center",
    icftop = "icftop",
    top = "top",
  }

  interface TextStyleDescriptor {
    _obj: "textStyle";
    styleSheetHasParent: boolean;
    fontPostScriptName: string;
    fontName: string;
    fontStyleName: string;
    fontScript: number;
    fontTechnology: number;
    fontAvailable: boolean;
    size: PointValue;
    impliedFontSize: PointValue;
    horizontalScale: number;
    verticalScale: number;
    syntheticBold: boolean;
    syntheticItalic: boolean;
    autoLeading: boolean;
    leading?: PointValue;
    impliedLeading?: PointValue;
    tracking: number;
    baselineShift: PointValue;
    impliedBaselineShift: PointValue;
    fontCaps: FontCapsEnum;
    digitSet: DigiSetEnum;
    kashidas: KashidasEnum;
    diacXOffset: PointValue;
    diacYOffset: PointValue;
    markYDistFromBaseline: PointValue;
    baseline: BaselineEnum;
    otbaseline: OtBaselineEnum;
    strikethrough: StrikeThroughEnum;
    underline: UnderlineEnum;
    ligature: boolean;
    altligature: boolean;
    contextualLigatures: boolean;
    fractions: boolean;
    ordinals: boolean;
    swash: boolean;
    titling: boolean;
    connectionForms: boolean;
    stylisticAlternates: boolean;
    stylisticSets: number;
    ornaments: boolean;
    justificationAlternates: boolean;
    figureStyle: FigureStyleEnum;
    proportionalMetrics: boolean;
    kana: boolean;
    italics: boolean;
    baselineDirection: BaselineDirectionEnum;
    textLanguage: TextLanguageEnum;
    japaneseAlternate: JapaneseAlternateEnum;
    mojiZume: number;
    gridAlignment: GridAlignmentEnum;
    noBreak: boolean;
    color: PsColor;
    strokeColor: PsColor;
    baseParentStyle: BaseParentTextStyleDescriptor;
  }

  interface AutoKernEnum {
    _enum: "autoKern";
    _value: AutoKern;
  }

  enum AutoKern {
    metricsKern = "metricsKern",
    opticalKern = "opticalKern",
    manual = "manual",
  }

  interface DirOverrideEnum {
    _enum: "dirOverride";
    _value: DirOverride;
  }

  enum DirOverride {
    dirOverrideDefault = "dirOverrideDefault",
    dirOverrideLTR = "dirOverrideLTR",
    dirOverrideRTL = "dirOverrideRTL",
  }

  interface DiacVPosEnum {
    _enum: "diacVPos";
    _value: DiacVPos;
  }

  enum DiacVPos {
    diacVPosOpenType = "diacVPosOpenType",
    diacVPosOff = "diacVPosOff",
    diacVPosLoose = "diacVPosLoose",
    diacVPosMedium = "diacVPosMedium",
    diacVPosTight = "diacVPosTight",
  }

  interface WariChuJustificationEnum {
    _enum: "wariChuJustification";
    _value: WariChuJustification;
  }

  enum WariChuJustification {
    wariChuAutoJustify = "wariChuAutoJustify",
    wariChuCenterJustify = "wariChuCenterJustify",
    wariChuFullJustifyLastLineCenter = "wariChuFullJustifyLastLineCenter",
    wariChuFullJustifyLastLineFull = "wariChuFullJustifyLastLineFull",
    wariChuFullJustifyLastLineLeft = "wariChuFullJustifyLastLineLeft",
    wariChuFullJustifyLastLineRight = "wariChuFullJustifyLastLineRight",
    wariChuLeftJustify = "wariChuLeftJustify",
    wariChuRightJustify = "wariChuRightJustify",
  }

  interface LineCapEnum {
    _enum: "lineCap";
    _value: LineCap;
  }

  enum LineCap {
    buttCap = "buttCap",
    roundCap = "roundCap",
    squareCap = "squareCap",
  }

  interface LineJoinEnum {
    _enum: "lineJoin";
    _value: LineJoin;
  }

  enum LineJoin {
    miterJoin = "miterJoin",
    roundJoin = "roundJoin",
    bevelJoin = "bevelJoin",
  }

  interface BaseParentTextStyleDescriptor extends TextStyleDescriptor {
    characterRotation: number;
    autoKern: AutoKernEnum;
    dirOverride: DirOverrideEnum;
    diacVPos: DiacVPosEnum;
    underlineOffset: PointValue;
    alternateLigatures: boolean;
    oldStyle: boolean;
    ruby: boolean;
    enableWariChu: boolean;
    wariChuCount: number;
    wariChuLineGap: number;
    wariChuScale: number;
    wariChuWidow: number;
    wariChuOrphan: number;
    wariChuJustification: WariChuJustificationEnum;
    tcyUpDown: number;
    tcyLeftRight: number;
    leftAki: number;
    rightAki: number;
    jiDori: number;
    fill: boolean;
    stroke: boolean;
    fillFirst: boolean;
    fillOverPrint: boolean;
    strokeOverPrint: boolean;
    lineCap: LineCapEnum;
    lineJoin: LineJoinEnum;
    lineWidth: PointValue;
    miterLimit: PointValue;
    lineDashoffset: number;
  }

  type TextShapeDescriptor = TextShapeGenericProperties | TextShapeOnPathDescriptor;

  interface TextShapeGenericProperties {
    _obj: "textShape";
    bounds: RectangleDescriptor;
    char: CharEnum;
    columnCount: number;
    columnGutter: PointValue;
    firstBaselineMinimum: PointValue;
    frameBaselineAlignment: FramBaselineAlignmentEnum;
    orientation: OrientationEnum;
    rowCount: number;
    rowGutter: PointValue;
    rowMajorOrder: boolean;
    spacing: PointValue;
    transform: TransformMatrixDescriptor;
  }

  interface TextShapeOnPathDescriptor extends TextShapeGenericProperties {
    flip: boolean;
    path: PathContentsDescriptor;
    pathTypeAlignTo: PathTypeAlignToEnum;
    pathTypeAlignment: PathTypeAlignmentEnum;
    pathTypeEffect: PathTypeEffectEnum;
    pathTypeSpacing: number;
    tRange: TRangeDescriptor;
  }

  interface TRangeDescriptor {
    _obj: "range";
    end: number;
    saturation: number;
  }

  interface PathTypeEffectEnum {
    _enum: "pathTypeEffect";
    _value: PathTypeEffect;
  }

  enum PathTypeEffect {
    rainbowEffect = "rainbowEffect",
    // TODO: more?
  }

  interface PathTypeAlignmentEnum {
    _enum: "pathTypeAlignment";
    _value: PathTypeAlignment;
  }

  enum PathTypeAlignment {
    baselineAlignment = "baselineAlignment",
    centerAlignment = "centerAlignment",
  }

  interface PathTypeAlignToEnum {
    _enum: "pathTypeAlignTo";
    _value: PathTypeAlignTo;
  }

  enum PathTypeAlignTo {
    toPathTop = "toPathTop",
    toPathBottom = "toPathBottom",
    toPathCenter = "toPathCenter",
  }

  interface FramBaselineAlignmentEnum {
    _enum: "frameBaselineAlignment";
    _value: FramBaselineAlignment;
  }

  enum FramBaselineAlignment {
    alignByAscent = "alignByAscent",
    alignByCapHeight = "alignByCapHeight",
    alignByLeading = "alignByLeading",
    alignByMinimumValueRoman = "alignByMinimumValueRoman",
    alignByMinimumValueAsian = "alignByMinimumValueAsian",
    alignByXHeight = "alignByXHeight",
  }

  interface CharEnum {
    _enum: "char";
    _value: Char;
  }

  enum Char {
    box = "box",
    paint = "paint", // point/paint bug
  }

  interface TextGriddingEnum {
    _enum: "textGridding";
    _value: TextGridding;
  }

  enum TextGridding {
    none = "none",
    round = "round",
    systemMetrics = "systemMetrics",
  }

  interface ParagraphStyleRangeDescriptor extends RangePartial {
    _obj: "paragraphStyleRange";
    paragraphStyle: ParagraphStyleDescriptor;
  }

  interface ParagraphStyleDescriptor {
    _obj: "paragraphStyle";
    styleSheetHasParent: true;
    align?: AlignmentEnum;
    endIndent?: PointValue;
    firstLineIndent?: PointValue;
    hyphenate?: boolean;
    impliedEndIndent?: PointValue;
    impliedFirstLineIndent?: PointValue;
    impliedSpaceAfter?: PointValue;
    impliedSpaceBefore?: PointValue;
    impliedStartIndent?: PointValue;
    spaceAfter?: PointValue;
    spaceBefore?: PointValue;
    startIndent?: PointValue;
    burasagari?: BurasagariEnum;
    kinsokuSetName?: KinsokuSetNameEnum;
    textEveryLineComposer?: boolean;
    mojiKumiName?: MojiKumiNameEnum;
  }

  interface BurasagariEnum {
    _enum: "burasagari";
    _value: Burasagari;
  }

  enum Burasagari {
    burasagariNone = "burasagariNone",
    burasagariStandard = "burasagariStandard",
    burasagariStrong = "burasagariStrong",
  }

  interface KinsokuSetNameEnum {
    _enum: "kinsokuSetName";
    _value: KinsokuSetName;
  }

  enum KinsokuSetName {
    None = "None",
    Hard = "Hard",
    Soft = "Soft",
  }

  interface MojiKumiNameEnum {
    _enum: "mojiKumiName";
    _value: MojiKumiName;
  }

  enum MojiKumiName {
    Photoshop6MojiKumiNone = "Photoshop6MojiKumiNone",
    Photoshop6MojiKumiSet1 = "Photoshop6MojiKumiSet1",
    Photoshop6MojiKumiSet2 = "Photoshop6MojiKumiSet2",
    Photoshop6MojiKumiSet3 = "Photoshop6MojiKumiSet3",
    Photoshop6MojiKumiSet4 = "Photoshop6MojiKumiSet4",
  }

  enum antiAliasType {
    antiAliasNone = "antiAliasNone",
    antiAliasSharp = "antiAliasSharp",
    antiAliasCrisp = "antiAliasCrisp",
    antiAliasStrong = "antiAliasStrong",
    antiAliasSmooth = "antiAliasSmooth",
    antiAliasPlatformLCD = "antiAliasPlatformLCD",
    antiAliasPlatformGray = "antiAliasPlatformGray",
  }

  interface BoundingBoxDescriptor extends UVTopRightBottomLeft {
    _obj: "boundingBox";
  }

  interface BoundsDescriptor extends UVTopRightBottomLeft {
    _obj: "bounds";
  }

  interface RangePartial {
    from: number;
    to: number;
  }

  interface KerningRangeDescriptor extends RangePartial {
    _obj: "kerningRange";
    kerning: number;
  }
}
