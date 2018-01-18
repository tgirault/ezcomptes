import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { EzcomptesFrontendSharedModule, UserRouteAccessService } from './shared';
import { EzcomptesFrontendAppRoutingModule} from './app-routing.module';
import { EzcomptesFrontendHomeModule } from './home/home.module';
import { EzcomptesFrontendAdminModule } from './admin/admin.module';
import { EzcomptesFrontendAccountModule } from './account/account.module';
import { EzcomptesFrontendEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        EzcomptesFrontendAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        EzcomptesFrontendSharedModule,
        EzcomptesFrontendHomeModule,
        EzcomptesFrontendAdminModule,
        EzcomptesFrontendAccountModule,
        EzcomptesFrontendEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class EzcomptesFrontendAppModule {}
