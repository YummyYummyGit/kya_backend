import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{Movie} from '../Models/Movie'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  API_URL = "http://8001/api/Quejas";
  movies: Movie[] | undefined;
  constructor(private http:HttpClient) { }

  getMovies(){
    return this.http.get<Movie[]>(this.API_URL);
  }
}
