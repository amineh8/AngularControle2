import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoitureListComponent } from './voiture-list/voiture-list.component';
import { VoitureDetailsComponent } from './voiture-details/voiture-details.component';
import { VoitureService } from './services/voiture.service';
import { SelectedVoiturePipe } from './selected/selected-voiture.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VoitureListComponent,
    VoitureDetailsComponent,
    SelectedVoiturePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [VoitureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
