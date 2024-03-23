import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'app-asidebar',
  templateUrl: './asidebar.component.html',
  styleUrls: ['./asidebar.component.scss']
})
export class AsidebarComponent implements OnInit {
  hideAsidebar : boolean = false;

  @Input() stateAsideBar : boolean | undefined ;
  constructor() { }

  ngOnInit(): void {
  }


}
