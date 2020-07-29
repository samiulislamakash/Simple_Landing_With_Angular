import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

const materialcomponent = [
  MatButtonModule,
];

@NgModule({
  imports: [
    materialcomponent
  ],
  exports: [
    materialcomponent
  ]
})
export class MaterialModule { }