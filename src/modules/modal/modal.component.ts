import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  public eventClose = new EventEmitter<null>();

  public close(event: Event) {
    this.eventClose.emit();
  }
}
