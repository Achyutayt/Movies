import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { DetailsActorsComponent } from './details-actors/details-actors.component';
import { DetailsMoviesComponent } from './details-movies/details-movies.component';
import { DetailsReviewsComponent } from './details-reviews/details-reviews.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'details/:id', component:DetailsComponent},
  {path:'details/actors/:id', component:DetailsActorsComponent},
  {path:'details/movies/:id', component:DetailsMoviesComponent},
  {path:'details/reviews/:id', component:DetailsReviewsComponent},
  {path:'search/:movieTitle', component:SearchComponent},
  // {path:'feedback', component:FeedBackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
