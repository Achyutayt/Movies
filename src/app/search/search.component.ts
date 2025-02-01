import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  movieTitle = "Example Movie";

  constructor(private _activatedRoute:ActivatedRoute) {
    this._activatedRoute.params.subscribe((p) => {
      this.movieTitle = p["movieTitle"];

      console.log('Movie Name is: '+this.movieTitle)
    })
  }
  ngOnInit(): void {
    console.log('ngOnInit Called')
  }
}

