// Manually created by @simonhenke
declare module "photoshop" {
  interface SmartObjectMore {
    /** uuid */
    ID: string;
    /** uuid */
    placed: string;
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
    comp: number;
    compInfo: {
      compID: number;
      originalCompID: number;
    };
  }

  interface PlacedContentTypeEnum {
    _enum: "placed";
    _value: PlacedContentType;
  }

  const enum PlacedContentType {
    rasterizeContent = "rasterizeContent",
    vectorData = "vectorData",
  }

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
  }

  interface LinkedSmartObjectDescriptor extends SmartObjectGenericProperties {
    link: FileReference;
    linkMissing: boolean;
    linkChanged: boolean;
  }

  interface FileReference {
    _path: string;
    _kind: FileReferenceKind;
  }

  const enum FileReferenceKind {
    local = "local",
    cloud = "cloud",
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

  const enum AdobeStockLiceneseState {
    licensed = "licensed",
    unlicensed = "unlicensed",
  }

  type SmartObjectDescriptor = SmartObjectGenericProperties | LinkedSmartObjectDescriptor;
}
