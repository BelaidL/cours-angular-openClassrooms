import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  minutes = 0;
  counterSbscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const counter = Observable.interval(60000);
    this.counterSbscription = counter.subscribe(
      (value) => {
        this.minutes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

  ngOnDestroy() {
    this.counterSbscription.unsubscribe();
  }
}
