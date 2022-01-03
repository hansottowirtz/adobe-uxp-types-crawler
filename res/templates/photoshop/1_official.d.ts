// Manually created by Adobe, edited by @hansottowirtz
// From https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/photoshop
declare module "photoshop" {
  const enum ColorConversionModel {
    "RGB" = 15,
    "HSB" = 4,
    "CMYK" = 5,
    "Lab" = 6,
    "Gray" = 16,
  }
  type CPUVendorKind = "Intel" | "AMD" | "ARM" | "Unknown";
  interface CPUInfo {
    vendor: CPUVendorKind;
    physicalCores: number;
    logicalCores: number;
    frequencyMhz: number;
    emulationMode?: "rosetta2";
  }
  interface OpenGLDeviceInfo {
    version: string;
    memoryMB: number;
    name: string;
    driverVersion: string;
    vendor: string;
    isIntegrated: string;
    glDriver: string;
  }
  interface OpenCLDeviceInfo {
    version: string;
    memoryMB: number;
    name: string;
    driverVersion: string;
    vendor: string;
    isIntegrated: string;
    oclBandwidth: number;
    oclCompute: number;
    clDeviceVersion: string;
    clPlatformVersion: string;
  }
  interface GPUInfo {
    gpuInfoList?: OpenGLDeviceInfo[];
    clgpuInfoList?: OpenCLDeviceInfo[];
  }
}
