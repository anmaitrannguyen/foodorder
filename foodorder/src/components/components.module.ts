import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { SignUpComponent } from './sign-up/sign-up';
@NgModule({
	declarations: [LoginComponent,
    SignUpComponent],
	imports: [],
	exports: [LoginComponent,
    SignUpComponent]
})
export class ComponentsModule {}
