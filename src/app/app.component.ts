import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-app';
  asideToggle: boolean = false;

  userName:string ="Mostafa";



  ToggleAside(e:boolean) {
    this.asideToggle = e;
    // console.log(e);
  }
}
