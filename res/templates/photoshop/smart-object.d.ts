// Manually created by @simonhenke
declare module "photoshop" {
  interface SmartObjectMore {
    ID: string; // UUID
    placed: string; // UUID
    pageNumber: number;
    totalPages: number;
    crop: number;
    frameStep: Fraction;
    duration: Fraction;
    frameCount: number;
    antiAliasType: number;
    type: number;
    transform: CornersArray;
    nonAffineTransform: CornersArray;
    warp: WarpDescriptorExtended;
    x: PointDescriptor;
    size: PointDescriptorWidthHeight;
    resolution: DensityValue;
    filterFX?: FilterFXStyleDescriptor;
    comp: number;
    compInfo: {
      compID: number;
      originalCompID: number;
    };
  }

  interface FilterFXStyleDescriptor {
    _obj: "filterFXStyle";
    enabled: boolean;
    validAtPosition: boolean;
    filterMaskEnable: boolean;
    filterMaskLinked: boolean;
    filterMaskExtendWithWhite: boolean;
    filterFXList: FilterFXDescriptor[];
    filterMaskDensity: number;
    filterMaskFeather: number;
  }

  interface PlacedContentTypeEnum {
    _enum: "placed";
    _value: PlacedContentType;
  }

  type PlacedContentType = "rasterizeContent" | "vectorData";

  interface SmartObjectGenericProperties {
    _obj: "smartObject";
    placed: PlacedContentTypeEnum;
    documentID: string;
    compsList: {
      compID: number;
      originalCompID: number;
    };
    linked: boolean;
    fileReference: string | FileReference;
    filterFX?: FilterFXDescriptor[];
  }

  interface FilterFXDescriptor {
    _obj: "filterFX";
    backgroundColor: PsColor;
    blendOptions: BlendOptionsDescriptor;
    enabled: boolean;
    filter?: any; // TODO: add Descriptors for all Filter types
    filterID: number;
    foregroundColor: PsColor;
    hasOptions: boolean;
    name: string;
  }

  interface BlendOptionsDescriptor {
    _obj: "blendOptions";
    mode: BlendModeEnum;
    opacity: PercentValue;
  }

  interface LinkedSmartObjectDescriptor extends SmartObjectGenericProperties {
    link: FileReference;
    linkMissing: boolean;
    linkChanged: boolean;
  }

  interface CloudLinkDescriptor {
    _obj: "ccLibrariesElement";
    adobeStockId: string;
    adobeStockLiceneseState: AdobeStockLiceneseStateEnum;
    dateModified: number;
    elementReference: string;
    libraryName: string;
    name: string;
  }

  interface AdobeStockLiceneseStateEnum {
    _enum: "adobeStockLiceneseState";
    _value: AdobeStockLiceneseState;
  }

  type AdobeStockLiceneseState = "licensed" | "unlicensed";

  type SmartObjectDescriptor = SmartObjectGenericProperties | LinkedSmartObjectDescriptor;
}
