
// Borrowed from https://github.com/bbb999/Types-for-Adobe/blob/master/Photoshop/2015.5/index.d.ts
declare module "photoshop" {
  /**
   * Options for saving a Photoshop document.
   */
  interface SaveOptions {
    /**
     * If true, the alpha channels are saved.
     */
    alphaChannels: boolean;

    /**
     * If true, the annotations are saved.
     */
    annotations: boolean;

    /**
     * If true, the color profile is embedded in the document.
     */
    embedColorProfile: boolean;

    /**
     * If true, the layers are saved.
     */
    layers: boolean;

    /**
     * If true, spot colors are saved.
     */
    spotColors: boolean;
  }
}
