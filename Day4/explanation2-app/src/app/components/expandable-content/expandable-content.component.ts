import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expandable-content',
  templateUrl: './expandable-content.component.html',
  styleUrls: ['./expandable-content.component.scss'],
})
export class ExpandableContentComponent implements OnInit {

  @Input() public title:string;
  @Input() public numberExpanded:number;

  @Output() public expandableContentChanged = new EventEmitter<void>();

  public mostrarInfo = true;

  constructor() { }

  ngOnInit() {}

  toggleExpandable(){
    this.mostrarInfo = !this.mostrarInfo;
  }

  public emiteExpandableContentChanged(event: any): void {
    // if (event.mostrarInfo){
    //   this.numberExpanded++;
    // }else{
    //   this.numberExpanded--;
    // }
    console.log(event.target);
  }

}
