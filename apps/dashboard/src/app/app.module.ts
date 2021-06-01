import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DogsComponent } from './dogs/dogs.component';
import { DogsListComponent } from './dogs/dogs-list/dogs-list.component';
import { DogsDetailsComponent } from './dogs/dogs-details/dogs-details.component';
import { MaterialModule } from '@pets/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from '@pets/core-data';
import { CoreStateModule } from '@pets/core-state';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent, DogsComponent, DogsListComponent, DogsDetailsComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RoutingModule, 
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
