"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
/**
 * Returns a node module installed with VSCode, or undefined if it fails.
 */
function getCoreNodeModule(moduleName) {
    try {
        // tslint:disable-next-line:non-literal-require
        return require(`${vscode.env.appRoot}/node_modules.asar/${moduleName}`);
    }
    catch (err) { }
    try {
        // tslint:disable-next-line:non-literal-require
        return require(`${vscode.env.appRoot}/node_modules/${moduleName}`);
    }
    catch (err) { }
    return undefined;
}
exports.getCoreNodeModule = getCoreNodeModule;
//# sourceMappingURL=getCoreNodeModule.js.map