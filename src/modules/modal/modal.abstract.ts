import { EventEmitter, ViewChild, Injectable, AfterViewInit, OnDestroy } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Injectable()
export class ModalUtil implements AfterViewInit, OnDestroy {
    
    protected _modalComponent: ModalComponent;    
    public onClose = new EventEmitter<any>();
    
    close(event: Event) {
        this.onClose.emit();
    }
    
    ngAfterViewInit() {
        if(!this._modalComponent) { return; }
        this._modalComponent.eventClose.subscribe((event) => this.close(event));
    }

    ngOnDestroy() {
        this._modalComponent.eventClose.unsubscribe();
    }
    
}
