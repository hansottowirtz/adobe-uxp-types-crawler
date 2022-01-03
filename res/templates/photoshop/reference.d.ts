// Manually created by @simonhenke
declare module "photoshop" {
  interface Reference {
    _ref: string;
  }

  interface PropertyReference<Property extends string = ""> {
    _ref: "property";
    _property: Property;
  }

  interface TargetEnum {
    _enum: "ordinal";
    _value: "targetEnum";
  }

  interface _idKey {
    _id: number;
  }

  interface _indexKey {
    _index: number;
  }

  interface _nameKey {
    _name: string;
  }

  interface DocumentReference {
    _ref: "document";
  }

  interface FileReference {
    _path: string;
    _kind: FileReferenceKind;
  }

  type FileReferenceKind = "local" | "cloud";

  interface DocumentTargetReference extends DocumentReference, TargetEnum {}
  interface DocumentIdReference extends DocumentReference, _idKey {}
  interface DocumentIndexReference extends DocumentReference, _indexKey {}
  interface DocumentNameReference extends DocumentReference, _nameKey {}

  interface LayerReference {
    _ref: "layer";
  }

  interface LayerTargetReference extends LayerReference, TargetEnum {}
  interface LayerIdReference extends LayerReference, _idKey {}
  interface LayerIndexReference extends LayerIdReference, _indexKey {}
  interface LayerNameReference extends LayerIdReference, _nameKey {}

  type TargetProperty = _indexKey | _nameKey | _idKey;
  interface _offsetKey {
    _offset: number;
  }
  type HistoryStateTargetProperty = TargetProperty | _offsetKey;
}
