import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  from?:string;
  to?:string;
  result?:number;
  onFrom(val:string)
  {
    this.from = val;
  }
  onTo(val:string){
    this.to=val;
  }
  convert(val:number)
  {
    if(this.from=="INR" && this.to=="USD")
    {
      this.result=val/82;
    }
    if(this.from=="INR" && this.to=="AUS")
    {
      this.result=val/51.6;    }
    if(this.from=="USD" && this.to=="INR")
    {
      this.result=val*82;
    }
    if(this.from=="USD" && this.to=="AUS")
    {
      this.result=val*1.6;
    }
    if(this.from=="AUS" && this.to=="INR")
    {
      this.result=val*51.6;
    }
    if(this.from=="AUS" && this.to=="USD")
    {
      this.result=val/1.6;
    }
    if(this.from=="INR" && this.to=="INR")
    {
      this.result=val;
    }
    if(this.from=="USD" && this.to=="USD")
    {
      this.result=val;
    }
    if(this.from=="AUS" && this.to=="AUS")
    {
      this.result=val;
    }
  }
}