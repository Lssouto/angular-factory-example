import { Component, ViewChild, AfterViewInit, ViewContainerRef } from '@angular/core';
import { FactoryService } from 'src/core/factory.service';
import { ModalExampleComponent } from 'src/modules/modal-example/modal-example.component';
import { ModalFactory } from 'src/core/modal-factory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('modalContainer',  { read: ViewContainerRef })
  private _modalContainer;

  public openModal(event: Event) {
    const component = this._modalFactory.createModal(this._modalContainer, ModalExampleComponent);
    console.log(component);
  }

  constructor(
    private _modalFactory: ModalFactory
  ) {}
}
