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
import { Champs2024Component } from './components/champs2024/champs2024.component';
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
    Champs2024Component,
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
        component: Champs2024Component
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
