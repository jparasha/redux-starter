export default function (state = null, action) {

    //console.log(action);
    switch (action.type) {
        case 'BOOK_SELECTED':{
            console.log(action.payload);
            return action.payload;
        }
    }
    return state;
}