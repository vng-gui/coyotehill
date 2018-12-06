import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { map, filter, debounceTime, distinct, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Instant Search';
  searchTerm: string;
  results: Observable<any>;
  latestSearch = new Subject<string>(); 

  constructor(public http: Http){
    this.results = this.latestSearch.pipe(
      debounceTime(500),
      distinct(),
      filter(item => !!item),
      switchMap( term => this.http.get('https://reqres.in/api/users?page=2')
                .pipe(map(res => res.json().data.map(item => item.first_name)))
      ) 
    );
  }
  newSearch(term) {
    this.latestSearch.next(term);
  }
}

/*previouse not working version*/
/*
constructor(public http: Http){}
  newSearch(term) {
    this.latestSearch.next(term);
    this.results = this.latestSearch.pipe(
      debounceTime(500),
      distinct(),
      filter(term => !!term),
      switchMap( term => 
        this.http.get('https://reqres.in/api/users?page=2&term=${term}')
                .pipe( map(res => res.json().data.map(item => item.first_name)))
      )
    );
  }
  */

