import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  constructor(
    private translate: TranslateService
  ) {
  }

  public ngOnInit(): void {

    this.translate.use('en');
  }

}
