import { NgModule } from '@angular/core';
import { ResetPasswordComponent } from './reset-password/reset-password';
import { SignOutComponent } from './sign-out/sign-out';
@NgModule({
	declarations: [ResetPasswordComponent,
    SignOutComponent],
	imports: [],
	exports: [ResetPasswordComponent,
    SignOutComponent]
})
export class ComponentsModule {}
