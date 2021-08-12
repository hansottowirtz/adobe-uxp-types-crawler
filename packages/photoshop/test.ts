import * as photoshop from 'photoshop';

const x = photoshop.action.batchPlay([], {});
const y = photoshop.action.batchPlay([], { synchronousExecution: false })
const z = photoshop.action.batchPlay([], { synchronousExecution: true })

const a = photoshop.action.batchPlay<[photoshop.LayerDescriptor]>([{
  _obj: "curves",
}], {});
const b = photoshop.action.batchPlay([], { synchronousExecution: false })
const c = photoshop.action.batchPlay([], { synchronousExecution: true })
