import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drop-down';
  res!:string;

  display(val:string)
  {
      if(val=="Apple")
      {
        this.res="assets/apple.jpg";
      }
      if(val=="Ball")
      {
        this.res="assets/ball.jpg";
      }
      if(val=="Cat")
      {
        this.res="assets/cat.jpg";
      }
      if(val=="Dog")
      {
        this.res="assets/dog.jpg";
      }
  }
}
