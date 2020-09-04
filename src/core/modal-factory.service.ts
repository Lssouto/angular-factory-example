import {
    Injectable, ViewContainerRef,
} from '@angular/core';
import { FactoryService } from './factory.service';



@Injectable({
    providedIn: 'root'
})
export class ModalFactory {

    public container: ViewContainerRef;
    public component: any;

    /**
     * Create modal component
     * @param container container from viewChild
     * @param component component that will be created any angular component
     */
    public createModal(container: ViewContainerRef, component: any) {
        this._factoryService.create(container, component);
        const closeSubscription = this._factoryService.instanceComponent.onClose.subscribe(() => {
            this._factoryService.destroy();
            closeSubscription.unsubscribe();
        });
        return this._factoryService.instanceComponent;
    }

    constructor(private _factoryService: FactoryService) {}
}