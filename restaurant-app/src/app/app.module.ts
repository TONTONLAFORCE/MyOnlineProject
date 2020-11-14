import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {ListRestaurantComponent} from './list-restaurant/list-restaurant.component';

const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'add' , component: AddRestaurantComponent},
  { path: 'list' , component: ListRestaurantComponent},
  { path: 'update' , component: UpdateRestaurantComponent },
  { path: 'update/:id', component: UpdateRestaurantComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'register' , component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListRestaurantComponent,
    AddRestaurantComponent,
    UpdateRestaurantComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
