import { NgModule } from '@angular/core';
import {
  MatDialogModule, MatTableModule, MatFormFieldModule,
  MatDatepickerModule, MatNativeDateModule, MatInputModule, MAT_DATE_FORMATS
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** 自訂時間顯示格式 */
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@NgModule({
  exports: [
    MatTableModule,
    MatDialogModule,

    MatInputModule,
    MatFormFieldModule,

    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,

    BrowserAnimationsModule,
  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class MaterialModule { }