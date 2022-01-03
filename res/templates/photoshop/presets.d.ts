// Manually created by @simonhenke
declare module "photoshop" {
  type PresetManager = [
    BrushPresetsDescriptor,
    ColorPresetsDescriptor,
    GradientPresetsDescriptor,
    StylePresetsDescriptor,
    PatternPresetsDescriptor,
    ShapeCurvePresetsDescriptor,
    CustomShapePresetsDescriptor,
    ToolPresetsDescriptor
  ];

  interface PresetsDescriptor<ObjectKey extends string> {
    _obj: ObjectKey;
    name: string[];
  }

  type BrushPresetsDescriptor = PresetsDescriptor<"brush">;
  type ColorPresetsDescriptor = PresetsDescriptor<"color">;
  type GradientPresetsDescriptor = PresetsDescriptor<"gradientClassEvent">;
  type StylePresetsDescriptor = PresetsDescriptor<"styleClass">;
  type PatternPresetsDescriptor = PresetsDescriptor<"$PttR">;
  type ShapeCurvePresetsDescriptor = PresetsDescriptor<"shapeCurve">;
  type CustomShapePresetsDescriptor = PresetsDescriptor<"customShape">;
  interface ToolPresetsDescriptor extends PresetsDescriptor<"toolPreset"> {
    title: string[];
    class: ClassObject[];
  }

  interface FontListDescriptor {
    _obj: "fontList";
    fontName: string[];
    fontPostScriptName: string[];
    fontFamilyName: string[];
    fontStyleName: string[];
  }

  interface PanelListDescriptor {
    _obj: "panelList";
    name: string;
    ID: string;
    visible: boolean;
    obscured: boolean;
  }

  interface WorkspaceDescriptor {
    _obj: "workspace";
    displayName: string;
    name: string;
    user: boolean;
  }

  interface SizeEnum {
    _enum: "size";
    _value: Size;
  }

  type Size = "none" | "small" | "medium" | "large";

  interface LocaleInfo {
    decimalPoint: "," | ".";
  }

  interface ClassObject {
    _class: string;
  }
}
