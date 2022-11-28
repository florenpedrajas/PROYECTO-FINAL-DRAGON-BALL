import { AuthUserGuard } from './guards/auth-user.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersDetailComponent } from './pages/characters-detail/characters-detail.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NewCharacterComponent } from './pages/new-character/new-character.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateCharacterComponent } from './pages/update-character/update-character.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  {
    path: 'characters/:id',
    component: CharactersDetailComponent,
    canActivate: [AuthUserGuard],
  },
  {
    path: 'newcharacter',
    component: NewCharacterComponent,
    canActivate: [AuthUserGuard],
  },
  {
    path: 'updateCharacter/:id',
    component: UpdateCharacterComponent,
    canActivate: [AuthUserGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
