// Manually created by @simonhenke, made compatible by @hansottowirtz
declare module "photoshop" {
  interface HistoryState {
    readonly name: string;
    itemIndex: number;
    count: number;
    auto: boolean; // false if snapshot
    historyBrushSource: boolean;
    currentHistoryState: boolean;
    ID: number;
  }
}
