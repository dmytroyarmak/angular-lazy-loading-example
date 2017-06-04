import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperComponent, CropperSettings, Bounds } from 'ng2-img-cropper';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './components/photos/photos.component';

@NgModule({
  imports: [
    CommonModule,
    PhotosRoutingModule
  ],
  declarations: [
    PhotosComponent,
    ImageCropperComponent
  ],
  exports: [
    PhotosComponent
  ]
})
export class PhotosModule { }
