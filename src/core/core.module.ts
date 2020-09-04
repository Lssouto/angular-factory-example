import { FactoryService } from "./factory.service";
import { NgModule } from "@angular/core";
import { ModalFactory } from './modal-factory.service';
import { ModalModule } from '../modules/modal/modal.module';

@NgModule({
    providers: [
        FactoryService,
        ModalFactory
    ],
    imports: [
        ModalModule,
        
    ]
})

export class CoreModule {}