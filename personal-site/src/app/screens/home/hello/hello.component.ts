import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.less'],
})
export class HelloComponent implements OnInit {
  imageLoaded = false;
  constructor() {}

  ngOnInit(): void {}
}
