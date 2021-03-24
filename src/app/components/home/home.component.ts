import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  disModal = "hModalHide";

  constructor() { }

  ngOnInit(): void {
    this.counter();
  }

  ngOnDestroy() {
    this.counter();
  }

  //Display Text after animation
  counter(){
    let time = 0;
    const count = interval(1000);
    const counting = count.subscribe(c => {
      time = time + 1
      if(time === 5){
        this.disModal = "hModalShow";
      } else if (time === 6){
        counting.unsubscribe();
      }
    });
  }

}
