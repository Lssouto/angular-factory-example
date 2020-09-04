import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalExampleComponent } from './modal-example.component';
import { ModalModule } from '../modal/modal.module';


@NgModule({
  declarations: [ModalExampleComponent],
  exports: [
    ModalExampleComponent
  ],
  imports: [
    CommonModule,
    ModalModule
  ]
})
export class ModalExampleModule { }
