import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddMatchComponent } from './add-match/add-match.component';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

import { MaterialModule } from './material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/api.service';

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
    PageNotFoundComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    AppComponent
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
