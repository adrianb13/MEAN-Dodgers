import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.component.html',
  styleUrls: ['./home-modal.component.css']
})
export class HomeModalComponent implements OnInit {

  display = "hModal hModalDisBl"

  constructor() { }

  ngOnInit(): void {
  }

}
