import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';

import { DataLoadService } from "../app/service/data-load.service";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { BannerComponent } from './components/banner/banner.component';
import { BaseballComponent } from './components/baseball/baseball.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeModalComponent } from './components/home-modal/home-modal.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { RosterComponent } from './components/roster/roster.component';
import { RosterTableComponent } from './components/roster-table/roster-table.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ChampsComponent } from './components/champs/champs.component';
import { PlayerComponent } from './components/player/player.component';
import { Champs2025Component } from './components/champs2025/champs2025.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    BaseballComponent,
    HistoryComponent,
    HomeModalComponent,
    TopNavComponent,
    RosterComponent,
    RosterTableComponent,
    ScheduleComponent,
    ChampsComponent,
    PlayerComponent,
    Champs2025Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "history",
        component: HistoryComponent
      },
      {
        path: "roster",
        component: RosterComponent
      },
      {
        path: "schedule",
        component: ScheduleComponent
      },
      {
        path: "champs2024",
        component: ChampsComponent
      },
      {
        path: "champs2025",
        component: Champs2025Component
      },
      {
        path: "player/:id",
        component: PlayerComponent
      },
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "**",
        component: HomeComponent
      }
    ])
  ],
  providers: [DataLoadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
