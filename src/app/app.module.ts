import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ValidationButtonComponent } from './validation-button/validation-button.component';
import { BlockComponent } from './block/block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ROUTES } from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidationButtonComponent,
    BlockComponent,
    UserProfileComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
