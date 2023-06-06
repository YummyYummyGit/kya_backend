import { Component, OnInit } from '@angular/core';
import { MoviesService} from '../../Services/movies.service'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
  constructor(public movieService: MoviesService){}
  
  ngOnInit(): void {
    //console.log(this.movieService.getMovies());
    this.getmovies();
  }

  getmovies(){
    this.movieService.getMovies().subscribe(
      res => {
        this.movieService.movies = res;
        console.log(this.movieService.movies);
      },
      err => {
        console.log(err);
      }
      
    )
  }
}
