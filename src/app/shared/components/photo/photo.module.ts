import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PhotoComponent } from './photo.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [PhotoComponent],
  exports: [PhotoComponent]
})
export class PhotoModule { }
