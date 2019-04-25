import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.page.html',
  styleUrls: ['./sandbox.page.scss'],
})
export class SandboxPage implements OnInit {

  @Output() public numberExpanded = 0;

  constructor() { }

  ngOnInit() {
  }

}
