// Manually created by Adobe, edited by @hansottowirtz
// From https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/photoshop
// and https://www.adobe.io/photoshop/uxp/2022/ps_reference/media/executeasmodal
declare module "photoshop" {
  /**
   * This object is passed to the callback of `core.executeAsModal` for modality related APIs
   */
  interface ExecutionContext {
    /**
     * True if user has cancelled the modal interaction.
     *
     * User can cancel by hitting the Escape key, or by pressing the "Cancel" button in the progress bar.
     */
    isCancelled: boolean;
    /**
     * If assigned a method, it will be called when user cancels the modal interaction.
     */
    onCancel: (...args: any[]) => any;
    /**
     * Call this to customize the progress bar.
     */
    reportProgress: (descriptor: { value: number, commandName?: string }) => any;
    /**
     * Use the methods in here to control Photoshop state
     */
    hostControl: {
      /**
       * Call to suspend history on a target document, returns the suspension ID which can be used for resumeHistory
       */
      suspendHistory: (info: { historyStateInfo: HistoryStateInfo }) => Promise<number>;
      /**
       * Call to resume history on a target document
       */
      resumeHistory: (suspensionID: number) => void;
    };
    registerAutoCloseDocument: (docID: number) => void;
    unregisterAutoCloseDocument: (docID: number) => void;
  }
}
