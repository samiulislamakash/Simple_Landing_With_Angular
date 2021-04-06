import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const materialcomponent = [MatButtonModule, MatIconModule];

@NgModule({
  imports: [materialcomponent],
  exports: [materialcomponent],
})
export class MaterialModule {}
