import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface roster {
  id: number,
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
}