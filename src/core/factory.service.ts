import {
    Injectable,
    ComponentFactoryResolver, 
    ComponentRef,
    Injector
} from '@angular/core';


@Injectable()
export class FactoryService {

    componentRef: ComponentRef<any>;

    private _instanceComponent: any;

    private _refComponent: any;

    private _instanceContent: any;

    private _refContent: any;

    constructor(
        private resolver: ComponentFactoryResolver,
        private injector: Injector
    ) {}
    
    get instanceComponent() { return this._instanceComponent; }
    set instanceComponent(instanceComponent) {
        this._instanceComponent = instanceComponent;
    }
    
    get refComponent() { return this._refComponent; }
    set refComponent(refComponent) {
        this._refComponent = refComponent;
    }
    /**
     * 
     * @param container ng-template
     * @param component Component
     * @param clear Boolean
     */
    create(container, component, clear = true): void {
        if (clear) { container.clear(); }

        this.componentRef = this.createComponent(component);
        container.insert(this.componentRef.hostView);

        this.setReferences(this.componentRef);
    }

    private createComponent(component:any ) {
        const componentFactory = this.resolver.resolveComponentFactory(component);
        return componentFactory.create(this.injector);
    }

    private setReferences(componentRef: ComponentRef<any>): void {
        this.refComponent = componentRef;
        this.instanceComponent = this.refComponent.instance;
    }

    detectChanges(): void {
        this.refComponent.changeDetectorRef.detectChanges();
    }

    destroy() {  
        if (this.refComponent) {
            this.refComponent.destroy();
        }
    }


}