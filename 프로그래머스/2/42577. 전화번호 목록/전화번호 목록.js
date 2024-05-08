function solution(phone_book) {
    return !phone_book.sort().some((n,i) => n.startsWith(phone_book[i-1]));
}