export interface Review {
    userId: number;
    bookId: number;
    grade: number;
}

export class ReviewService {
    private reviewList: Array<Review> = [
        {
            userId: 1,
            bookId: 1,
            grade: 5
        },
        {
            userId: 0,
            bookId: 2,
            grade: 5
        },
        {
            userId: 1,
            bookId: 3,
            grade: 5
        },
        {
            userId: 1,
            bookId: 4,
            grade: 5
        },
        {
            userId: 1,
            bookId: 5,
            grade: 5
        },
        {
            userId: 1,
            bookId: 6,
            grade: 5
        },
        {
            userId: 1,
            bookId: 7,
            grade: 5
        },
        {
            userId: 1,
            bookId: 8,
            grade: 5
        },
        {
            userId: 1,
            bookId: 9,
            grade: 5
        },
        {
            userId: 1,
            bookId: 10,
            grade: 5
        },        {
            userId: 1,
            bookId: 11,
            grade: 5
        },
        {
            userId: 0,
            bookId: 12,
            grade: 5
        },
        {
            userId: 1,
            bookId: 13,
            grade: 5
        },
        {
            userId: 1,
            bookId: 14,
            grade: 5
        },
        {
            userId: 1,
            bookId: 15,
            grade: 5
        },
        {
            userId: 1,
            bookId: 16,
            grade: 5
        },
        {
            userId: 1,
            bookId: 17,
            grade: 5
        },
        {
            userId: 1,
            bookId: 18,
            grade: 5
        },
        {
            userId: 1,
            bookId: 19,
            grade: 5
        },
        {
            userId: 1,
            bookId: 20,
            grade: 5
        },
    ];

    getReviewList() {
        return this.reviewList;
    }

    addReviewToList(review: Review) {
        this.reviewList.push(review);
    }

    calculateGradeForBook(bookIdSelected: number): number {
        var gradeSum = 0;
        var totalGrade = 0;
        this.reviewList.forEach((books) => {
            if(books.bookId == bookIdSelected) {
                gradeSum += books.grade;
                totalGrade++;
            }
        });
        if(totalGrade == 0) {
            return 0;
        }
        totalGrade = gradeSum / totalGrade;
        return totalGrade;
    }
}