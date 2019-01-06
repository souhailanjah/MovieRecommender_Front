import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Recommend } from '../models/recommend.model';


@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css'],
  template: `


  <table class="table table-striped">
  <thead>
  <tr>
    <th class="hidden">Id</th>
    <th>user_id</th>
    <th>movie_id</th>
    <th>score</th>
    <th>rank</th>
  </tr>
  </thead>
  <tbody>
  <tr *ngFor="let recom of recommendations">
    <td>{{ recom["user_id"] }} </td>
    <td>{{ recom["movie_id"] }}</td>
    <td>{{ recom["score"] }}</td>
    <td>{{ recom["rank"] }}</td>
  </tr>
  </tbody>
</table>

`

})

export class RecommendComponent implements OnInit {

  constructor(private router: Router, private httpService: HttpClient) { }

  recommendations: Recommend[];

  ngOnInit() {


    this.recommendations = [
      {"user_id":1,"movie_id":423,"score":0.983401,"rank":1}
      ,{"user_id":1,"movie_id":202,"score":0.949591,"rank":2}
      ,{"user_id":1,"movie_id":655,"score":0.796218,"rank":3}
      ,{"user_id":1,"movie_id":403,"score":0.765624,"rank":4}
      ,{"user_id":1,"movie_id":568,"score":0.75118,"rank":5}
      ];


  }

}
