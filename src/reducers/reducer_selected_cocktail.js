export default function (state=null, action) {
    console.log(action);
    switch (action.type){
       case 'COCKTAIL_SELECTED':
       return action.payload
    }
    return state;
}