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
  lastGame = {};
  win = 0;
  loss = 0;
  
  home = null;
  showNext = false;
  showUpcoming = false;
  showScores = true;

  constructor(
    private DataList: DataLoadService
  ) { }

  ngOnInit(): void {
    this.getScheduleData();
  }

  //Get Schedule
  getScheduleData(){

    this.DataList.getScheduleDB().subscribe(res => {
      if(res && this.schedule.length < 1){
        this.schedule.push(res);
        this.schedule = this.schedule[0];
        this.sortSchedule();
        console.log("Database");
      } else {
        if (this.schedule.length < 1){
          this.DataList.getSchedule().subscribe(res => {
          if(res){
            this.schedule.push(res);
            this.schedule = this.schedule[0];
            this.sortSchedule();
            console.log("Assets");
          }
          })
        } 
      }  
    })
     
  }

  //Sort By Date (Mongo does not provide data in chronological order)
  sortData = (a,b) => {
    //Converts date MM/DD/YYYY to Unix timestamp
    let dateA = parseInt((new Date(a.date).getTime() / 1000).toFixed(0));
    let dateB = parseInt((new Date(b.date).getTime() / 1000).toFixed(0));

    let comparison = 0;
    if( dateA > dateB){
      comparison = 1;
    } else if (dateA < dateB){
      comparison = -1
    }
    return comparison;
  }

  sortSchedule(){
    let theSchedule = this.schedule.sort(this.sortData)
    for(let game of theSchedule){
      if(game.date !== null && game.date !== "" && game.date.indexOf("0") === 0){
        game.date = game.date.substring(1);
      }
      if(game.score !== "N/A" && !game.score.includes("Playoffs") && !game.score.includes("NLDS") && !game.score.includes("NLCS") && !game.score.includes("WS")){ 
        this.played.push(game);
        if(game.win === true){
          this.win = this.win + 1;
        } else {
          this.loss = this.loss + 1;
        }
      } else if (game.score !== "N/A" && (game.score.includes("Playoffs") || game.score.includes("NLDS") || game.score.includes("NLCS") || game.score.includes("WS"))) {
        this.played.push(game);
      } else {
        this.upcoming.push(game);
      }
    }
    if(this.upcoming[0]){
      this.nextGame = this.upcoming[0];
      this.showNext = true;
    }
    if(this.played.length > 0 && this.played[0]){
      this.played = this.played.reverse();
      this.lastGame = this.played[0];
    }
  }

  whatToShow(show){
    if(show === "upcoming"){
      this.showUpcoming = true;
      this.showScores = false;
    } else if (show === "scores") {
      this.showUpcoming = false;
      this.showScores = true;
    }
  }
}
