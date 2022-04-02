import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ReviewPostData } from '../models/general-models';
import { ApiService } from '../services/api.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  collapsed: boolean = true;
  rating = 0;
  enteredReview = ''
  subs: Subscription | undefined
  maxRating = 5;
  isRated: boolean[] = [];
  bookId:String = ''
  constructor(private route: ActivatedRoute, private api: ApiService,
              private snack: MatSnackBar, private global: GlobalService) { 
    this.isRated = Array(this.maxRating).fill(false);
    this.bookId = this.global.bookIDglb =this.route.snapshot.params.id;
  }
  ngOnInit(): void {
  }

  markStar(i: number) {
    if (this.rating >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  takeInputRating(i: number) {
    this.rating = i + 1;
  }

  clearReviewForm(){
    this.rating = 0;
    this.enteredReview = ''
  }

  submitReview(){
    let reviewData:ReviewPostData = {
        "Book_ID": String(this.bookId),
        "User_ID": String(Math.floor(Math.random()*101)),
        "Rating": Number(this.rating),
        "Review": this.enteredReview
    }
    this.subs = this.api.postReviewData(reviewData).subscribe((reviewReturnData)=>{
      if(reviewReturnData.status === 201){
        this.rating = 0;
        this.enteredReview = ''
        this.snack.open('Review Posted Successfully','',{duration:2000});
        this.subs?.unsubscribe();
      }
    }) 
  }
}
