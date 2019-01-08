import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SearchService {

    constructor(private http: HttpClient) { }


    public search() {
        var val = (<HTMLInputElement>document.getElementById('movie_name')).value;

        console.log(val)
        return this.http.get('http://www.omdbapi.com/?apikey=548cf02d&t=' + val)
    }
}