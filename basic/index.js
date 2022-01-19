const redux_obj = require('redux');

// console.log(redux_obj);

// state demo
const initState = {
      num: 0
}
//  state demo

/// reducer obj create
const rootReducer = (state = initState, action) => {
      //state is current state// what changes will happen, is defined in 'action' 
      // action could be: delete, update, etc
      if (action.type === 'INC_NUM') {
            return {
                  ...state, // making a copy of the main state
                  num: state.num + 1 // what to perform
            }
      }
      if (action.type === 'ADD_NUM') {
            return {
                  ...state, // making a copy of the main state
                  num: state.num + action.value // what to perform
            }
      }
      return state;
      // it will return the changed state// currently

}/// reducer obj create

const store = redux_obj.createStore(rootReducer);  ////   create store

store.subscribe(() => { //this function, each time will be called, when a action is performed 
      console.log(store.getState()); // output: { num: 1 } //output: { num: 35 }
})

// Dispatch function, can write multiple function
store.dispatch({// Dispatch function
      type: 'INC_NUM' // 'type' fixed keyword
      // type is a key ward, we need to say operation here
});

store.dispatch({// Dispatch function
      type: 'ADD_NUM', // 'type' fixed keyword // value have tobe upper case
      // type is a key ward, we need to say operation here
      value: 34
});



