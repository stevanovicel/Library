import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../auth/user.service';
import { MatDialog } from '@angular/material/dialog';
import { BookService, Books } from './book.service';
import { ReviewService } from './review.service';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { CartService } from '../cart/cart.service';


@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})
export class BookstoreComponent implements OnInit, AfterViewInit{

  displayedColumns = [
    'name',
    'genre',
    'type',
    'pages',
    'author',
    'date',
    'price',
    'review',
    'addToCart'
  ];
  bookSource = new MatTableDataSource<Books>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  

  constructor(
     private bookService: BookService,
     private snackBar: MatSnackBar, 
     private router: Router, 
     private userService: UserService,
     private dialog: MatDialog,
     public reviewService: ReviewService,
     private cartService: CartService) { }

  ngOnInit(): void {
    this.bookSource.data = this.bookService.getBooks();
  }

  ngAfterViewInit(): void {
    this.bookSource.sort = this.sort;
    this.bookSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.bookSource.filter = filterValue.trim().toLowerCase();
  }

  // openSnackBar() {
  //   const config: MatSnackBarConfig = {
  //     duration: 2000,
  //     verticalPosition: 'top',
  //     horizontalPosition: 'center'
  //   };

  //   this.snackBar.open('Added to cart', 'OK', config);
  // }

  setBookStatus(books: Books, status: string) {
    books.status = status;
  }

  addToCart(books: Books) {
    this.setBookStatus(books, 'IN PROGRESS')
    console.log(this.userService.isUserLoggedIn)
    if (this.userService.getIsUserLoggedIn() == false) {
    this.router.navigate(['login']);
    return
    }
    console.log('added to cart ' + books.name);
    const dialogRef = this.dialog.open(AddtocartComponent, {
      data: {
        name: books.name,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.cartService.addToCartList(books);
      } else {
        return;
      }
    });
  }

}
