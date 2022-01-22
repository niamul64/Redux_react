## Use redux with react app
## first install redux and react-redux
```
npm install redux react-redux --save
```
<br>

## 1. To keep redux files, make a folder 'redux' under src folder
### a. in the redux folder--> create 'reducer' and 'store'
```
<!-- Reducer.js -->                                 | <!-- Store.js-->   
import DISHES from "../data/Dishes";                | import { createStore } from 'redux'
import Comments from "../data/Comments";            | import Reducer from './Reducer'
                                                    |
const initialState = {                              | const myStore = createStore(Reducer);
      dishes: DISHES,                               |
      // Dishes are the data obj                    | export default myStore;
      comments: Comments                            |
      // commets are the data obj for each dishes   |
}                                                   |
                                                    |
const Reducer = (state = initialState, action) =>{  |
      return state;                                 |
}                                                   |
export default Reducer;                             |
```
### b. Now connect the store at main component (App.js) of the react app to have access from all the component.
```
<!-- App.js -->

import myStore from './redux/Store';
import { Provider } from 'react-redux'; // provides functionality to work with redux with react

function App() {
      
      console.log("App.js: ", myStore.getState()); // will show the objects from store

  return (///////////////// routing stablish for whole app
    <div className="App">
      <Provider store={myStore}>    {/* ///////////   for redux with store */}
        {/* ///////////   Now store is available to whole application */}

        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider> {/* ///////////   for redux */}
    </div>
  ); /////////////////
}

export default App;
```
<br> <br>

## 2. Now, we can access the store form any component. 
### a. at home component we can access the state. but we need a function for that and need to call that function when exporting the component
```
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
      console.log("Home mapStateToProps", state)
      return {
            a: state.dishes,
            c: state.comments
      }
}

class Home extends Component {
      componentDidMount() {
            console.log('Home State: ', this.state);
            console.log("Home Props: ", this.props); // we will get the objects in, props
      }
      render() {
            document.title = "Restaurent";
            return (
                  <div>

                  </div>
            );
      }
}
export default connect(mapStateToProps)(Home); ////////  very impotatant
```


<img src="picS/accessing store.JPG" width="100%" >
