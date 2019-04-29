import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loading-feedback',
  templateUrl: './loading-feedback.component.html',
  styleUrls: ['./loading-feedback.component.scss'],
})
export class LoadingFeedbackComponent implements OnInit {

  @Input() public state = {
    loading: true,
    loaded: false,
    error: false,
  }

@Output() public retryPressed = new EventEmitter<void>();


  constructor() { }

  ngOnInit() {}

  public retry(): void{
    this.retryPressed.emit();
    this.state ={
      loading: true,
      loaded: false,
      error: false,
    };
  }

}
