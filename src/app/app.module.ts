import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { UserService } from './auth/user.service';
import { ProfileComponent } from './auth/profile/profile.component';
import { AddtocartComponent } from './bookstore/addtocart/addtocart.component';
import { BookService } from './bookstore/book.service';
import { CartService } from './cart/cart.service';
import { ReviewService } from './bookstore/review.service';
import { AddreviewComponent } from './bookstore/addreview/addreview.component';
import { RemovefromcartComponent } from './cart/removefromcart/removefromcart.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    BookstoreComponent,
    ProfileComponent,
    AddtocartComponent,
    AddreviewComponent,
    RemovefromcartComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [UserService, BookService, CartService, ReviewService],
  bootstrap: [AppComponent],
  entryComponents: [ProfileComponent, AddreviewComponent]
})
export class AppModule { }
