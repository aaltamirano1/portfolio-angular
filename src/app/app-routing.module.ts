import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
	{
		path: '',
		component: LandingComponent
	},
	{
		path: 'portfolio',
		component: PortfolioComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	},
	{
		path: 'resume',
		component: ResumeComponent
	}
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
