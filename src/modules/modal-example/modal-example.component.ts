import { Component, ViewChild } from '@angular/core';
import { ModalUtil } from '../modal/modal.abstract';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.css']
})
export class ModalExampleComponent extends ModalUtil {
  @ViewChild(ModalComponent)
  public _modalComponent: ModalComponent;
}
