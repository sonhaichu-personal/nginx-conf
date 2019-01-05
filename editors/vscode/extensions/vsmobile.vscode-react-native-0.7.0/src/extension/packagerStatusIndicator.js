"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
/**
 * Updates the Status bar with the status of React Native Packager.
 */
var PackagerStatus;
(function (PackagerStatus) {
    PackagerStatus[PackagerStatus["PACKAGER_STOPPED"] = 0] = "PACKAGER_STOPPED";
    PackagerStatus[PackagerStatus["PACKAGER_STOPPING"] = 1] = "PACKAGER_STOPPING";
    PackagerStatus[PackagerStatus["PACKAGER_STARTED"] = 2] = "PACKAGER_STARTED";
    PackagerStatus[PackagerStatus["PACKAGER_STARTING"] = 3] = "PACKAGER_STARTING";
})(PackagerStatus = exports.PackagerStatus || (exports.PackagerStatus = {}));
class PackagerStatusIndicator {
    constructor() {
        this.packagerStatusItem = vscode_1.window.createStatusBarItem(vscode_1.StatusBarAlignment.Left, 10);
        this.packagerStatusItem.text = PackagerStatusIndicator.PACKAGER_STATUS_STOPPED;
        this.packagerStatusItem.show();
        this.togglePackagerItem = vscode_1.window.createStatusBarItem(vscode_1.StatusBarAlignment.Left, 10);
        this.togglePackagerItem.text = PackagerStatusIndicator.START_ICON;
        this.togglePackagerItem.command = PackagerStatusIndicator.START_COMMAND;
        this.togglePackagerItem.tooltip = "Start Packager";
        this.togglePackagerItem.show();
        this.restartPackagerItem = vscode_1.window.createStatusBarItem(vscode_1.StatusBarAlignment.Left, 10);
        this.restartPackagerItem.text = PackagerStatusIndicator.RESTART_ICON;
        this.restartPackagerItem.command = PackagerStatusIndicator.RESTART_COMMAND;
        this.restartPackagerItem.tooltip = "Restart Packager";
        this.restartPackagerItem.show();
    }
    dispose() {
        this.packagerStatusItem.dispose();
        this.togglePackagerItem.dispose();
        this.restartPackagerItem.dispose();
    }
    updatePackagerStatus(status) {
        switch (status) {
            case PackagerStatus.PACKAGER_STOPPED:
                this.packagerStatusItem.text = PackagerStatusIndicator.PACKAGER_STATUS_STOPPED;
                this.togglePackagerItem.text = PackagerStatusIndicator.START_ICON;
                this.togglePackagerItem.command = PackagerStatusIndicator.START_COMMAND;
                this.togglePackagerItem.tooltip = "Start Packager";
                this.restartPackagerItem.command = PackagerStatusIndicator.RESTART_COMMAND;
                break;
            case PackagerStatus.PACKAGER_STOPPING:
                this.packagerStatusItem.text = PackagerStatusIndicator.PACKAGER_STATUS_STOPPING;
                this.togglePackagerItem.text = PackagerStatusIndicator.ACTIVITY_ICON;
                this.togglePackagerItem.command = "";
                this.togglePackagerItem.tooltip = "";
                this.restartPackagerItem.command = "";
                break;
            case PackagerStatus.PACKAGER_STARTED:
                this.packagerStatusItem.text = PackagerStatusIndicator.PACKAGER_STATUS_STARTED;
                this.togglePackagerItem.text = PackagerStatusIndicator.STOP_ICON;
                this.togglePackagerItem.command = PackagerStatusIndicator.STOP_COMMAND;
                this.togglePackagerItem.tooltip = "Stop Packager";
                this.restartPackagerItem.command = PackagerStatusIndicator.RESTART_COMMAND;
                break;
            case PackagerStatus.PACKAGER_STARTING:
                this.packagerStatusItem.text = PackagerStatusIndicator.PACKAGER_STATUS_STARTING;
                this.togglePackagerItem.text = PackagerStatusIndicator.ACTIVITY_ICON;
                this.togglePackagerItem.command = "";
                this.togglePackagerItem.tooltip = "";
                this.restartPackagerItem.command = "";
                break;
            default:
                break;
        }
    }
}
PackagerStatusIndicator.PACKAGER_NAME = "React Native Packager";
PackagerStatusIndicator.PACKAGER_STATUS_STOPPED = `${PackagerStatusIndicator.PACKAGER_NAME}: Stopped`;
PackagerStatusIndicator.PACKAGER_STATUS_STOPPING = `${PackagerStatusIndicator.PACKAGER_NAME}: Stopping`;
PackagerStatusIndicator.PACKAGER_STATUS_STARTED = `${PackagerStatusIndicator.PACKAGER_NAME}: Started`;
PackagerStatusIndicator.PACKAGER_STATUS_STARTING = `${PackagerStatusIndicator.PACKAGER_NAME}: Starting`;
PackagerStatusIndicator.START_ICON = "$(triangle-right)";
PackagerStatusIndicator.STOP_ICON = "$(primitive-square)";
PackagerStatusIndicator.RESTART_ICON = "$(sync)";
PackagerStatusIndicator.ACTIVITY_ICON = "$(watch)";
PackagerStatusIndicator.START_COMMAND = "reactNative.startPackager";
PackagerStatusIndicator.STOP_COMMAND = "reactNative.stopPackager";
PackagerStatusIndicator.RESTART_COMMAND = "reactNative.restartPackager";
exports.PackagerStatusIndicator = PackagerStatusIndicator;

//# sourceMappingURL=packagerStatusIndicator.js.map
