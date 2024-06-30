import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {}
