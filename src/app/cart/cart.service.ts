import { Books } from "../bookstore/book.service";

export class CartService {
    private cartList: Array<Books> = [];

    calculateSum(): number {
        var sum = 0;
        this.cartList.map((books) => (sum += books.price * books.amount));
        return sum;
    }

    getCartList() {
        return this.cartList;
    }

    addToCartList(books: Books) {
        this.cartList.push(books);
    }

    removeFromCartList(books: Books) {
        for(var i = 0; i < this.cartList.length; i++) {
            if (this.cartList[i] == books) {
                this.cartList.splice(i, 1);
            }
        }
    }

    emptyCart() {
        this.cartList = [];
    }
}