import { NgModule } from '@angular/core';

import { JloyaltySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JloyaltySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JloyaltySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JloyaltySharedCommonModule {}
