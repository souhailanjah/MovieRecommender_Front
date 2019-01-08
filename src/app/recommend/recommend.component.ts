import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']

})

export class RecommendComponent implements OnInit {

  recom;
  user;
  movies;


  constructor(private router: Router, private httpService: HttpClient) { }

  ngOnInit() {

    //get recommendation result
    this.httpService.get('./assets/result.json').subscribe(data => {
      for (const k in data) {
        let res = data[k]
        console.log(res)
      }

      this.recom = data;
    })

    //get user info 
    this.httpService.get('./assets/userInfo.json').subscribe(data => {
      for (const k in data) {
        let res = data[k]
        console.log(res)
      }

      this.user = data;
    })

    //get recommended movies info
    this.httpService.get('./assets/moviesInfo.json').subscribe(data => {
      let list=[];

      for (const k in data) {
        let matches = data[k].match(/\bhttps?:\/\/\S+/gi);
        list.push(matches)
      }
      console.log(list)
      this.movies = list;
    })

  }

}
