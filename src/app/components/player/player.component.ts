import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataLoadService } from "src/app/service/data-load.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  id = null;
  roster = [];
  player = null;
  pitchingSeason = null;
  pitchingPost = null;
  fielderSeason = null;
  fielderPost = null;

  playerData = false;
  isPitcher = true;

  constructor(
    private route: ActivatedRoute,
    private DataList: DataLoadService
  ) { }

  ngOnInit(): void {
    this.getPlayerData();
  }

  getPlayerData(){
    this.route.params.subscribe(params => {
      this.id = parseInt(params.id);
      console.log(this.id);
    })
    this.DataList.getRoster().subscribe(res => {
      if(res){
        this.roster.push(res);
        this.roster = this.roster[0];
        
        this.player = this.roster.find(player => player.id === this.id);
        console.log(this.player)
        if(this.player){
          if(this.player.position === "Pitcher"){
            this.pitchingSeason = this.player.pitching.regular;
            this.pitchingPost = this.player.pitching.postseason;
            this.isPitcher = true;
          } else {
            this.fielderSeason = this.player.hitting.regular;
            this.fielderPost = this.player.hitting.postseason;
            this.isPitcher = false;
          }
        }
        this.playerData = true;
        console.log(this.player)
      }
    })
  }

}
