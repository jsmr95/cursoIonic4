import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.page.html',
  styleUrls: ['./sandbox.page.scss'],
})
export class SandboxPage implements OnInit {

  @Output() public numberExpanded = 0;
  @Output() public totalLikes = 0;
  @Output() public totalDislikes = 0;
  constructor() { }

  ngOnInit() {
  }

  public change(event){
    if (event){
      this.numberExpanded--;
    }else{
      this.numberExpanded++;
    }
  }

  public aumentaLike(){
    this.totalLikes++;
  }

  public aumentaDislike(){
    this.totalDislikes++;
  }

}
