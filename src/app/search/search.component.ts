import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SearchService } from './search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  val;

  constructor(private searchService: SearchService, private httpService: HttpClient) { }


  search() : void{
    // this.values = event.target.value;
    this.searchService.search().subscribe(data => {
      console.log(data)
      this.val = data;
    })
  }

}
