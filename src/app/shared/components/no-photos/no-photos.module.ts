import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { NoPhotosComponent } from './no-photos.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [NoPhotosComponent],
  exports: [NoPhotosComponent]
})
export class NoPhotosModule { }
