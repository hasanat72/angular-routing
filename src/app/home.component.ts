import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  template: `
    <h1>Calling Home</h1>
    <button (click)= "onClick()">Go to Github Users</button>
  `
})

export class HomeComponent{
    constructor(private _router:Router) {

    }

    onClick(){
      this._router.navigate(['GitHub']);
    }
}
