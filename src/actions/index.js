export function selectBook(book){
    //console.log('Book Selected-> '+ book.title);
    return{
        type :'BOOK_SELECTED',
        payload:book
    }
}