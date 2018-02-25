import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './services/auth-guard.service';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { SectionComponent } from './components/section/section.component';

const routes: Routes = [
	{ path: '', component: LoginComponent},
	{
		path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
        {
          path: 'section',
          component: SectionComponent
        }
      ]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
