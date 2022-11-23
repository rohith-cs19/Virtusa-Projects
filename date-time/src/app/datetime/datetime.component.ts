import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css']
})
export class DatetimeComponent implements OnInit {

  Date1 : Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
