import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval } from "rxjs";
import { DataLoadService } from "src/app/service/data-load.service";

@Component({
  selector: "app-roster",
  templateUrl: "./roster.component.html",
  styleUrls: ["./roster.component.css"]
})
export class RosterComponent implements OnInit, OnDestroy {
  baseball = true;
  rosterData = false;
  showPitcher = true;
  showCatcher = false;
  showInfielder = false;
  showOutfielder = false;

  pitcher = "Pitcher";
  catcher = "Catcher";
  infielder = "Infielder";
  outfielder = "Outfielder";

  roster = [];

  constructor(
    private DataList: DataLoadService
  ) { }

  ngOnInit(): void {
    this.counter();
    this.getRosterData();
  }

  ngOnDestroy() {
    this.counter();
  }

  //Get Roster Data
  getRosterData(){
    this.DataList.getRoster().subscribe(res => {
      if(res){
        this.roster.push(res);
        this.roster = this.roster[0];
        this.rosterData = true;
      }
    })
  }

  //Display Text after animation
  counter(){
    let time = 0;
    const count = interval(1000);
    const counting = count.subscribe(c => {
      time = time + 1
      if(time === 2){
        this.baseball = false;
      } else if (time === 3){
        counting.unsubscribe();
      }
    });
  }

  selectedTable(info){
    if(info === "pitchers"){
      this.showPitcher = true;
      this.showCatcher = false;
      this.showInfielder = false;
      this.showOutfielder = false;
    } else if (info === "catchers"){
      this.showPitcher = false;
      this.showCatcher = true;
      this.showInfielder = false;
      this.showOutfielder = false;
    } else if (info === "infielders"){
      this.showPitcher = false;
      this.showCatcher = false;
      this.showInfielder = true;
      this.showOutfielder = false;
    } else if (info === "outfielders"){
      this.showPitcher = false;
      this.showCatcher = false;
      this.showInfielder = false;
      this.showOutfielder = true;
    }
  }
}
