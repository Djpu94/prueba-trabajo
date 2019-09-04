import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from'@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';

import { LandpageComponent } from './landpage/landpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormComponent } from './form/form.component';
import { NotificationComponent } from './notification/notification.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AccountComponent } from './account/account.component';
import { HistorialComponent } from './historial/historial.component';


const appRoutes: Routes = [
  { path: '', component: LandpageComponent},
  { path: 'login', component: DashboardComponent},
  { path: 'home', component: LandpageComponent},
  { path: 'favorites', component: FavoritesComponent},
  { path: 'account', component: AccountComponent},
  { path: 'historial', component: HistorialComponent},
  { path: 'notification', component: NotificationComponent },

];



@NgModule({
  declarations: [
    AppComponent,
    LandpageComponent,
    DashboardComponent,
    SidenavComponent,
    FormComponent,
    NotificationComponent,
    FavoritesComponent,
    AccountComponent,
    HistorialComponent
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{ enableTracing: true }),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
