import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {HeroesComponent} from './heroes.component';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroesList',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      /*
       {
       path: '',
       redirectTo: '/dashboard',
       pathMatch: 'full'
       },*/
    ])
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
