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
  pitchingCareer = null;
  pitchingPost = null;
  fielderSeason = null;
  fielderCareer = null;
  fielderPost = null;

  playerPitchingSeason = [];
  playerPitchingCareer = [];
  playerPitchingPostseason = [];
  playerHittingSeason = [];
  playerHittingCareer = [];
  playerHittingPostseason = [];

  playerData = false;
  is2Way = false;
  isPitcher = true;

  dataLength = null;

  constructor(
    private route: ActivatedRoute,
    private DataList: DataLoadService
  ) { }

  ngOnInit(): void {
    this.getPlayerData();
  }

  getPlayerData(){
    this.route.params.subscribe(params => {
      this.id = params.id;
    })
    this.DataList.getRoster().subscribe(res => {
      if(res){
        this.roster.push(res);
        this.roster = this.roster[0];
        
        this.player = this.roster.find(player => player.player_id === this.id);
        if(this.player){
          if(this.player.position === "2-Way"){
            this.pitchingSeason = this.player.pitching.regular;
            this.pitchingCareer = this.player.pitching.career;
            this.pitchingPost = this.player.pitching.postseason;
            this.fielderSeason = this.player.hitting.regular;
            this.fielderCareer = this.player.hitting.career;
            this.fielderPost = this.player.hitting.postseason;
            this.is2Way = true;
            this.isPitcher = false;
          } else if(this.player.position === "Pitcher"){
            /* this.DataList.getPlayerPitchingSeason(this.id).subscribe(res => {
              if(res){
                this.playerPitchingSeason.push(res);
                this.dataLength = this.playerPitchingSeason[0].sport_pitching_tm.queryResults.row.length;
                if(!this.dataLength){
                  this.pitchingSeason = this.playerPitchingSeason[0].sport_pitching_tm.queryResults.row;
                } else {
                  this.pitchingSeason = this.playerPitchingSeason[0].sport_pitching_tm.queryResults.row[this.dataLength-1];
                }
              }
            })
            this.DataList.getPlayerPitchingCareer(this.id).subscribe(res => {
              if(res){
                this.playerPitchingCareer.push(res);
                this.pitchingCareer = this.playerPitchingCareer[0].sport_career_pitching.queryResults.row
                this.playerData = true;
              }
            }) */
            /* this.DataList.getPlayerPitchingPostseason(this.id).subscribe(res => {
              if(res){
                this.playerPitchingPostseason.push(res);
                this.pitchingPost = this.playerPitchingPostseason[0].sport_pitching_tm.queryResults.row
              }
            }) */
            this.pitchingSeason = this.player.pitching.regular;
            this.pitchingCareer = this.player.pitching.career;
            this.pitchingPost = this.player.pitching.postseason;
            this.is2Way = false;
            this.isPitcher = true;
          } else {
            /* this.DataList.getPlayerHittingSeason(this.id).subscribe(res => {
              if(res){
                console.log("Season")
                this.playerHittingSeason.push(res);
                this.dataLength = (this.playerHittingSeason[0].sport_hitting_tm.queryResults.row).length;
                console.log("length" + this.dataLength)
                if(!this.dataLength){
                  this.fielderSeason = this.playerHittingSeason[0].sport_hitting_tm.queryResults.row
                } else {
                  this.fielderSeason = this.playerHittingSeason[0].sport_hitting_tm.queryResults.row[this.dataLength - 1]
                }
              }
            })
            this.DataList.getPlayerHittingCareer(this.id).subscribe(res => {
              if(res){
                this.playerHittingCareer.push(res);
                this.fielderCareer = this.playerHittingCareer[0].sport_career_hitting.queryResults.row
                this.playerData = true;
              }
            }) */            
            /* this.DataList.getPlayerHittingPostseason(this.id).subscribe(res => {
              if(res){
                this.playerHittingPostseason.push(res);
                this.fielderPost = this.playerHittingSeason[0].sport_hitting_tm.queryResults.row
              }
            }) */ 
            this.fielderSeason = this.player.hitting.regular;
            this.fielderCareer = this.player.hitting.career;
            this.fielderPost = this.player.hitting.postseason;
            this.is2Way = false;
            this.isPitcher = false; 
          }
        }
        this.playerData = true;
      }
    })
  }

}
