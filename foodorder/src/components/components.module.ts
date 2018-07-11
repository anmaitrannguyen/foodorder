import { NgModule } from '@angular/core';
import { ResetPasswordComponent } from './reset-password/reset-password';
import { SignOutComponent } from './sign-out/sign-out';
import { CreateMenuComponent } from './create-menu/create-menu';
@NgModule({
	declarations: [ResetPasswordComponent,
    SignOutComponent,
    CreateMenuComponent],
	imports: [],
	exports: [ResetPasswordComponent,
    SignOutComponent,
    CreateMenuComponent]
})
export class ComponentsModule {}
