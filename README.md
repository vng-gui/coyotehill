## InstantSearch

1. source URL: https://youtu.be/aYurQaN3RoE
2. title: Angular and RxJS by Stephen Fluin
3. use 'https://reqres.in/api/users?page=2' simulate restful url until get github account crudential for 'https://api.github.com/search/repositories?g=${term}&sort=stars&order=desc'
### role based application 


### related real time search https://alligator.io/angular/real-time-search-angular-rxjs/
### AngularFireAuth & AngularFireDatabase
` auth.service.ts
    isUser: Observable<boolean>;
    isAdmin: Observable<boolean>;

    constructor(public af: AngularFireAuth, public db: AngularFireDatabase) {
        this.isUser = af.authState.map(state => !!state);
        this.isAdmin = af.authState.switchMap(state => {
            retrun db.object('admins/${state.uid}').map(data => !!data);
        })
    }
`
### OAuth 2 & OpenID Connect have a big fish to cook
### refer to https://www.youtube.com/watch?v=996OiexHze0

### the use of switchMap https://blog.angularindepth.com/when-to-use-switchmap-dfe84ac5a1ff
*   concatMap could be used as a conservative choice;
*   mergeMap should not be used — the ordering of the results is important;
* 	switchMap could be used — when a new search is made, pending results are no longer needed;
* 	exhaustMap should not be used — searches for new, partial addresses should not be ignored.

## problem 
1. `compiler.js:1021 Uncaught Error: Template parse errors:
Can't bind to 'ngModle' since it isn't a known property of 'input'. ("
            placeholder="search" 
            type="text" 
            [ERROR ->][(ngModle)]="searchTerm"
            [ngModleChange]="searchTerm">
  </mat-form-field>`
https://stackoverflow.com/questions/43298011/angular-4-cant-bind-to-ngmodel-since-it-isnt-a-known-property-of-input 

2. `Can't bind to 'ngModelChange' since it isn't a known property of 'input'. ("
            type="text" 
            [(ngModel)]="searchTerm"
            [ERROR ->][ngModelChange]=newSearch()>
  </mat-form-field>`

3. Angular 6 change format as the following
`
import { interval } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

const result = interval(5000).pipe(
        switchMap(() => this._authHttp.get(url)),    
        map(res => res.results)
       )
`
4. Angular 6/RxJS6 combining operators  https://blog.angularindepth.com/rxjs-combining-operators-397bad0628d0
`
client:168 ./src/app/app.component.ts
Module not found: Error: Can't resolve 'rxjs/operators/debounceTime' in '/Users/Dad/code/angular6/autocomplete/instantSearch/src/app'
` # coyotehill

5. install firebase for DB
#       npm i firebase @angular/fire --save-dev

6. install version-check for all module, after installation 
#       version-check firebase

