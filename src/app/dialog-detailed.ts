import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DData {
    title: string;
    question: string;
}

@Component({
    selector: 'dialog-detailed',
    templateUrl: 'dialog-detailed.html',
})
export class DialogOverviewDetailed {

    constructor(
        public dialogRef: MatDialogRef<DialogOverviewDetailed>,
        @Inject(MAT_DIALOG_DATA) public data: DData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onClick(): boolean {
        return true;
    }
}
