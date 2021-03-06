// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

// copied from https://github.com/microsoft/vscode-cpptools

/* tslint:disable */

import * as quick_pick_items_provider from "./process-items-provider";
import * as process_quick_pick from "./process-quick-pick";
import * as process_entry from "./process-entry";

export class LocalProcessPicker {
    constructor(private quickPickItemsProvider: quick_pick_items_provider.IProcessQuickPickItemsProvider) {}

    public pick(): Promise<process_entry.IProcessEntry> {
        return process_quick_pick.showQuickPick(() => this.quickPickItemsProvider.getItems());
    }
}
