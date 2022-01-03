/// <reference path="./photoshop.d.ts"/>

import { app, action, ActionDescriptor } from "photoshop";
import { expectType } from "tsd";

expectType<Promise<ActionDescriptor[]>>(app.batchPlay([]))
expectType<Promise<ActionDescriptor[]>>(app.batchPlay([], {}))
expectType<Promise<ActionDescriptor[]>>(action.batchPlay([]))
expectType<Promise<ActionDescriptor[]>>(action.batchPlay([], {}))
