/// <reference path="./uxp.d.ts"/>

import * as uxp from "uxp";
import { expectType } from "tsd";

expectType<Promise<URL>>(uxp.dialog.showOpenDialog({}));
