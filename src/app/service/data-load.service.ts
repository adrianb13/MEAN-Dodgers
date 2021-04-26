import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface roster {
  id: number,
  player_id: string,
  fName: string,
  lName: string,
  number: number,
  position: string,
  bt: string,
  height: string,
  weight: number,
  dob: string,
  addl: string
}
interface schedule {
  id: number,
  date: string,
  home: boolean,
  opponent: string,
  score: string,
  win: boolean
}

@Injectable({
  providedIn: 'root'
})
export class DataLoadService {
  private rosterData = "assets/data/roster.json";
  private scheduleData = "assets/data/schedule.json";
  private scheduleDB = "/api/schedule";

  season = '2021';
  postGameType = 'D'; /* Change game_type param to 'D' Division, 'F' Wild Card, 'L' League, or 'W' WorldSeries for each level of playoffs */

  private playerPitchingSeason = "https://lookup-service-prod.mlb.com/json/named.sport_pitching_tm.bam?league_list_id='mlb'&game_type='R'"
  private playerPitchingCareer = "https://lookup-service-prod.mlb.com/json/named.sport_career_pitching.bam?league_list_id='mlb'&game_type='R'&player_id="
  private playerPitchingPostseason = "https://lookup-service-prod.mlb.com/json/named.sport_pitching_tm.bam?league_list_id='mlb'"

  private playerHittingSeason = "https://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'"
  private playerHittingCareer = "https://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id="
  private playerHittingPostseason = "https://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'"

  constructor(private http: HttpClient) {}

  getRoster(){
    return this.http.get<roster>(this.rosterData);
  }

  //Schedule via Attached JSON
  getSchedule(){
    return this.http.get<schedule>(this.scheduleData);
  }

  //Schedule via MongoDB
  getScheduleDB(){
    return this.http.get<schedule>(this.scheduleDB);
  }

  // Pitching Stats
  getPlayerPitchingSeason(playerId){
    return this.http.get(this.playerPitchingSeason + "&season=" + this.season +"&player_id=" + playerId)
  }
  getPlayerPitchingCareer(playerId){
    return this.http.get(this.playerPitchingCareer + playerId)
  }
  getPlayerPitchingPostseason(playerId){
    return this.http.get(this.playerPitchingPostseason + "&game_type=" + this.postGameType + "&season=" + this.season + "&player_id=" + playerId)
  }

  // Hitting Stats
  getPlayerHittingSeason(playerId){
    return this.http.get(this.playerHittingSeason + "&season=" + this.season +"&player_id=" + playerId)
  }
  getPlayerHittingCareer(playerId){
    return this.http.get(this.playerHittingCareer + playerId)
  }
  getPlayerHittingPostseason(playerId){
    return this.http.get(this.playerHittingPostseason + "&game_type=" + this.postGameType + "&season=" + this.season + "&player_id=" + playerId)
  }
}
