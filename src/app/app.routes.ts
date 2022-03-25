import { Routes, RouterModule} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const ROUTES: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'user-profile', component: UserProfileComponent },
] ;
export { ROUTES };
