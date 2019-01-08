import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-scrape',
  templateUrl: './scrape.component.html',
  styleUrls: ['./scrape.component.css']
})
export class ScrapeComponent implements OnInit {

  scrape;
  constructor(private router: Router, private httpService: HttpClient) { }

  ngOnInit() {

    this.httpService.get('./assets/imdb250.json').subscribe(data => {

      for(const k in data){
        let res = data[k]
        console.log(res)
      }

      this.scrape = data;
    })
  }

}
