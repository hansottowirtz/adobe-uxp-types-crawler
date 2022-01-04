/// <reference types="."/>
/// <reference types="../uxp"/>

import { app, action, ActionDescriptor, Document, Layer } from "photoshop";
import { storage } from "uxp";
import { expectType } from "tsd";

async () => {
  expectType<ActionDescriptor[]>(await app.batchPlay([]));
  expectType<ActionDescriptor[]>(await app.batchPlay([], {}));
  expectType<ActionDescriptor[]>(await action.batchPlay([]));
  expectType<ActionDescriptor[]>(await action.batchPlay([], {}));

  expectType<Layer>(await app.activeDocument.createLayer({ name: "abc" }));
  expectType<Document>(await app.createDocument({}));

  const file = await storage.localFileSystem.getFileForOpening();
  expectType<storage.File | storage.File[]>(file);
  const singleFile = Array.isArray(file) ? file[0] : file;
  const newDocument = await app.open(singleFile);
  expectType<Document>(newDocument);
  expectType<void>(await app.activeDocument.saveAs.jpg(singleFile));
};
