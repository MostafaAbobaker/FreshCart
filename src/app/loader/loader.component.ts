import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoading: Subject<boolean> = this._loaderService.isLoading;

  constructor(private _loaderService:LoaderService) { }

  ngOnInit(): void {
  }

}
