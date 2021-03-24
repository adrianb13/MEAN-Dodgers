import { Component, OnInit } from '@angular/core';
import { DataLoadService } from "src/app/service/data-load.service";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css', '../roster/roster.component.css']
})
export class ScheduleComponent implements OnInit {
  schedule = [];
  upcoming = [];
  played = [];
  nextGame = {};
  win = 0;
  loss = 0;
  
  home = null;
  showNext = false;
  showUpcoming = true;
  showScores = false;

  constructor(
    private DataList: DataLoadService
  ) { }

  ngOnInit(): void {
    this.getScheduleData();
  }

  //Get Schedule
  getScheduleData(){
    this.DataList.getSchedule().subscribe(res => {
      if(res){
        this.schedule.push(res);
        this.schedule = this.schedule[0];

        this.sortSchedule()
      }
    })
  }

  sortSchedule(){
    for(let game of this.schedule){
      if(game.score !== "N/A"){
        this.played.push(game);
        if(game.win === true){
          this.win = this.win + 1;
        } else {
          this.loss = this.loss + 1;
        }
      } else {
        this.upcoming.push(game);
      }
    }
    if(this.upcoming[0]){
      this.nextGame = this.upcoming[0];
      this.showNext = true;
    }
    this.played = this.played.reverse();
  }

  whatToShow(show){
    if(show === "upcoming"){
      this.showUpcoming = true;
      this.showScores = false;
    } else if (show === "scores") {
      this.showUpcoming = false;
      this.showScores = true;
    }
    console.log(this.showScores)
    console.log(this.played)
  }
}
