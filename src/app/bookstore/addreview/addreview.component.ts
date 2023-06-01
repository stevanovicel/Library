import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Review, ReviewService } from '../review.service';
import { UserService } from 'src/app/auth/user.service';
import { BookService } from '../book.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent {

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public reviewService: ReviewService, 
    public userService: UserService, 
    public bookSevice: BookService, private ref: MatDialogRef<AddreviewComponent>
  ) {}

  ngOnInit(): void {

  }

  reviewForInput: Review = {
    userId: this.userService.getCurrentUserId(),
    bookId: this.data.bookId,
    grade: 0
  };

  finishReviewing(form: NgForm) : Review {
    this.reviewForInput.grade = form.value.grade;
    this.reviewForInput.userId = this.userService.getCurrentUserId();
    this.reviewService.addReviewToList(this.reviewForInput);
    return this.reviewForInput;
  }
}


