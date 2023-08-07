import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Books } from "../bookstore/book.service";
import { CartService } from "./cart.service";
import { MatDialog } from "@angular/material/dialog";
import { ReviewService } from "../bookstore/review.service";
import { RemovefromcartComponent } from "./removefromcart/removefromcart.component";
import { AddreviewComponent } from "../bookstore/addreview/addreview.component";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
  })
  export class CartComponent implements OnInit, AfterViewInit{
    

  displayedColumns = [
    'name',
    'genre',
    'type',
    'pages',
    'author',
    'amount',
    'price',
    'status',
    'arrived',
    'cancelled',
    'review',
    'removeFromCart'
  ];
  cartSource = new MatTableDataSource<Books>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( 
    private cartService: CartService,
    private dialog: MatDialog,
    public reviewService: ReviewService) {}

   ngOnInit(): void {
    this.cartSource.data = this.cartService.getCartList();
    }

    ngAfterViewInit(): void {
        this.cartSource.sort = this.sort;
        this.cartSource.paginator = this.paginator;
    }

    listIsEmpty(): boolean {
        if(this.cartSource.data.length < 1) {
            return true;
        } else {
            return false;
        }
    }

    calculateTotal() {
        return this.cartService.calculateSum();
    }

    removeFromCart(books: Books) {
        const dialogRef = this.dialog.open(RemovefromcartComponent, {
            data: {
                name: books.name
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            if(result) {
                this.cartService.removeFromCartList(books);
                this.cartSource.data = this.cartService.getCartList();
            } else {
                return;
            }
        });
    }

    doFilter(filterValue: string) {
        this.cartSource.filter = filterValue.trim().toLowerCase();
    }

    leaveAReview(books: Books) {
        const dialogRef = this.dialog.open(AddreviewComponent, {
            width: '25%',
            height: '420px',
            enterAnimationDuration: '500ms',
            exitAnimationDuration: '500ms',
            data: {
                name: books.name,
                booksId: books.id
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            if(result) {
                console.log(this.reviewService.getReviewList());
            } else {
                return;
            }
        });
    }

    setBookStatus(books: Books, status: string) {
        books.status = status;
    }

    addAmount(books: Books) {
        books.amount++;
    }

  }