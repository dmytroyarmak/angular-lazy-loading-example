import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './components/photos/photos.component';

@NgModule({
  imports: [
    CommonModule,
    PhotosRoutingModule
  ],
  declarations: [
    PhotosComponent
  ],
  exports: [
    PhotosComponent
  ]
})
export class PhotosModule { }
