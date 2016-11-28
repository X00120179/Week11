import { Component } from '@angular/core';
import { Location } from "@angular/common";
 
@Component({
    selector: 'app-page3',
    templateUrl: './page3.component.html',
    styleUrls: ['./page3.component.css']
})
export class Page3Component {
 
    constructor(private location: Location) { }
 
    goBack() {
        this.location.back();
    }
 
}