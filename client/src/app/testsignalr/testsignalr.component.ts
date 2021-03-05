import { Component, OnInit } from '@angular/core';
import "jquery";

@Component({
  selector: 'app-testsignalr',
  templateUrl: './testsignalr.component.html',
  styleUrls: ['./testsignalr.component.css']
})
export class TestsignalrComponent implements OnInit {
  URL:string;
  isDisabled: boolean;

  constructor() { }

  ngOnInit(): void {
    this.URL = "http://127.0.0.1:8080/signalr";
    this.isDisabled = true;

    $.getScript(this.URL + "/hubs", function(){

    })

  }


}
