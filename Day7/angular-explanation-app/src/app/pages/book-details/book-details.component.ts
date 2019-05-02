import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {


  public index =  this.route.snapshot.params.index ;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
