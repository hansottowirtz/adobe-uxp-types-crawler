// Manually created by @hansottowirtz
declare module "photoshop" {
  interface PhotoshopAction {
    /**
     * Performs a batchPlay call with the provided commands. Equivalent
     * to an executeAction in ExtendScript.
     * @example
     * var target = { _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum'}
     * var commands = [{ _obj: 'hide', _target: target }]
     * await PhotoshopAction.batchPlay(commands)
     */
    batchPlay<
      A extends Array<any>,
      O extends BatchPlayCommandOptions & {
        synchronousExecution: true;
      } = { synchronousExecution: true }
    >(
      commands: A & Array<ActionDescriptor>,
      options: O
    ): Descriptor[];
    batchPlay<
      A extends Array<any>,
      O extends BatchPlayCommandOptions = {}
    >(
      commands: A & Array<ActionDescriptor>,
      options: O
    ): Promise<Descriptor[]>;
  }

  interface App {
    batchPlay: PhotoshopAction["batchPlay"];
  }
}
