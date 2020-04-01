import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddMatchComponent } from './add-match/add-match.component';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

import { MaterialModule } from './material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'new', component: AddMatchComponent },
  { path: 'history', component: MatchHistoryComponent },
  { path: 'scoreboard', component: ScoreboardComponent },
  { path: '', redirectTo: 'new', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddMatchComponent,
    MatchHistoryComponent,
    ScoreboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
