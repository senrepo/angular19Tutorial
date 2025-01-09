import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyle',
  imports: [],
  templateUrl: './lifecyle.component.html',
  styleUrl: './lifecyle.component.css'
})
export class LifecyleComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  constructor() {
    console.log("constructor - component initialization")
  }

  ngOnInit(): void {
    console.log("ngOnInit - invoke api calls")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit - viewchild, getting reference of the html elements");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy - you are leaving the page")
   }

}
