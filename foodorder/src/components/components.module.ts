import { NgModule } from '@angular/core';
import { ResetPasswordComponent } from './reset-password/reset-password';
import { SignOutComponent } from './sign-out/sign-out';
import { CreateMenuComponent } from './create-menu/create-menu';
import { MenuComponent } from './menu/menu';
@NgModule({
	declarations: [ResetPasswordComponent,
    SignOutComponent,
    CreateMenuComponent,
    MenuComponent],
	imports: [],
	exports: [ResetPasswordComponent,
    SignOutComponent,
    CreateMenuComponent,
    MenuComponent]
})
export class ComponentsModule {}
