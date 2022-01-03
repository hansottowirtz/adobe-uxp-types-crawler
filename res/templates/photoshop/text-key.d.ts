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

  type FontCaps = "normal" | "smallCaps" | "allCaps";

  interface DigiSetEnum {
    _enum: "digitSet";
    _value: DigiSet;
  }

  type DigiSet = "defaultDigits" | "arabicDigits" | "farsiDigits" | "hindiDigits";

  interface KashidasEnum {
    _enum: "kashidas";
    _value: Kashidas;
  }

  type Kashidas = "kashidaDefault"; // TODO: more?

  interface BaselineEnum {
    _enum: "baseline";
    _value: Baseline;
  }

  type Baseline = "normal" | "superScript" | "subScript";

  interface OtBaselineEnum {
    _enum: "otbaseline";
    _value: OtBaseline;
  }

  type OtBaseline = "normal" | "superScript" | "subScript" | "numerator" | "denominator";

  interface StrikeThroughEnum {
    _enum: "strikethrough";
    _value: StrikeThrough;
  }

  type StrikeThrough = "xHeightStrikethroughOn" | "xHeightStrikethroughOff";

  interface UnderlineEnum {
    _enum: "underline";
    _value: Underline;
  }

  type Underline =
    | "underlineOnLeftInVertical"
    | "underlineOnRightInVertical"
    | "underlineOff";

  interface FigureStyleEnum {
    _enum: "figureStyle";
    _value: FigureStyle;
  }

  type FigureStyle =
    | "normal"
    | "tabularLining"
    | "proportionalOldStyle"
    | "proportionalLining"
    | "tabularOldStyle";

  interface BaselineDirectionEnum {
    _enum: "baselineDirection";
    _value: BaselineDirection;
  }

  type BaselineDirection = "withStream"; // TODO: more?

  interface TextLanguageEnum {
    _enum: "textLanguage";
    _value: TextLanguage;
  }

  type TextLanguage =
    | "oldGermanLanguage"
    | "greekLanguage"
    | "hungarianLanguage"
    | "icelandicLanguage"
    | "italianLanguage"
    | "japaneseLanguage"
    | "croatianLanguage"
    | "latvianLanguage"
    | "lithuanianLanguage"
    | "nynorskNorwegianLanguage"
    | "polishLanguage"
    | "romanianLanguage"
    | "rumanianLanguage"
    | "russianLanguage"
    | "serbianLanguage"
    | "slovakLanguage"
    | "slovenianLanguage"
    | "spanishLanguage"
    | "standardFrenchLanguage"
    | "standardGermanLanguage"
    | "germanLanguageReformed1996"
    | "standardPortugueseLanguage"
    | "swedishLanguage"
    | "swissGermanLanguage"
    | "swissGermanLanguageOldRules"
    | "turkishLanguage"
    | "ukenglishLanguage"
    | "ukranianLanguage"
    | "arabicLanguage"
    | "hebrewLanguage"
    | "bokmalNorwegianLanguage"
    | "brazilianPortugueseLanguage"
    | "bulgarianLanguage"
    | "canadianFrenchLanguage"
    | "canadianEnglishLanguage"
    | "catalanLanguage"
    | "chineseLanguage"
    | "czechLanguage"
    | "danishLanguage"
    | "dutchLanguage"
    | "kdutchLanguageOldRules"
    | "englishLanguage"
    | "estonianLanguage"
    | "finnishLanguage";

  interface JapaneseAlternateEnum {
    _enum: "japaneseAlternate";
    _value: JapaneseAlternate;
  }

  type JapaneseAlternate =
    | "defaultForm"
    | "traditionalForm"
    | "expertForm"
    | "JIS78Form"
    | "JIS83Form"
    | "halfWidthForm"
    | "thirdWidthForm"
    | "quarterWidthForm"
    | "fullWidthForm"
    | "proportionalWidthForm";
  // expertForm?
  // traditionalForm?
  // TODO: more?

  interface GridAlignmentEnum {
    _enum: "gridAlignment";
    _value: GridAlignment;
  }

  type GridAlignment = "roman" | "bottom" | "icfbottom" | "center" | "icftop" | "top";

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

  type AutoKern = "metricsKern" | "opticalKern" | "manual";

  interface DirOverrideEnum {
    _enum: "dirOverride";
    _value: DirOverride;
  }

  type DirOverride = "dirOverrideDefault" | "dirOverrideLTR" | "dirOverrideRTL";

  interface DiacVPosEnum {
    _enum: "diacVPos";
    _value: DiacVPos;
  }

  type DiacVPos =
    | "diacVPosOpenType"
    | "diacVPosOff"
    | "diacVPosLoose"
    | "diacVPosMedium"
    | "diacVPosTight";

  interface WariChuJustificationEnum {
    _enum: "wariChuJustification";
    _value: WariChuJustification;
  }

  type WariChuJustification =
    | "wariChuAutoJustify"
    | "wariChuCenterJustify"
    | "wariChuFullJustifyLastLineCenter"
    | "wariChuFullJustifyLastLineFull"
    | "wariChuFullJustifyLastLineLeft"
    | "wariChuFullJustifyLastLineRight"
    | "wariChuLeftJustify"
    | "wariChuRightJustify";

  interface LineCapEnum {
    _enum: "lineCap";
    _value: LineCap;
  }

  type LineCap = "buttCap" | "roundCap" | "squareCap";

  interface LineJoinEnum {
    _enum: "lineJoin";
    _value: LineJoin;
  }

  type LineJoin = "miterJoin" | "roundJoin" | "bevelJoin";

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

  type PathTypeEffect = "rainbowEffect"; // TODO: more?

  interface PathTypeAlignmentEnum {
    _enum: "pathTypeAlignment";
    _value: PathTypeAlignment;
  }

  type PathTypeAlignment = "baselineAlignment" | "centerAlignment";

  interface PathTypeAlignToEnum {
    _enum: "pathTypeAlignTo";
    _value: PathTypeAlignTo;
  }

  type PathTypeAlignTo = "toPathTop" | "toPathBottom" | "toPathCenter";

  interface FramBaselineAlignmentEnum {
    _enum: "frameBaselineAlignment";
    _value: FramBaselineAlignment;
  }

  type FramBaselineAlignment =
    | "alignByAscent"
    | "alignByCapHeight"
    | "alignByLeading"
    | "alignByMinimumValueRoman"
    | "alignByMinimumValueAsian"
    | "alignByXHeight";

  interface CharEnum {
    _enum: "char";
    _value: Char;
  }

  type Char = "box" | "paint";

  interface TextGriddingEnum {
    _enum: "textGridding";
    _value: TextGridding;
  }

  type TextGridding = "none" | "round" | "systemMetrics";

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

  type Burasagari = "burasagariNone" | "burasagariStandard" | "burasagariStrong";

  interface KinsokuSetNameEnum {
    _enum: "kinsokuSetName";
    _value: KinsokuSetName;
  }

  type KinsokuSetName = "None" | "Hard" | "Soft";

  interface MojiKumiNameEnum {
    _enum: "mojiKumiName";
    _value: MojiKumiName;
  }

  type MojiKumiName =
    | "Photoshop6MojiKumiNone"
    | "Photoshop6MojiKumiSet1"
    | "Photoshop6MojiKumiSet2"
    | "Photoshop6MojiKumiSet3"
    | "Photoshop6MojiKumiSet4";

  type antiAliasType =
    | "antiAliasNone"
    | "antiAliasSharp"
    | "antiAliasCrisp"
    | "antiAliasStrong"
    | "antiAliasSmooth"
    | "antiAliasPlatformLCD"
    | "antiAliasPlatformGray";

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
