import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddMatchComponent } from './add-match/add-match.component';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    AddMatchComponent,
    MatchHistoryComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
