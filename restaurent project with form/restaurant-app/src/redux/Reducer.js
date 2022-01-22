import DISHES from "../data/Dishes";
import Comments from "../data/Comments";

const initialState = {
      dishes: DISHES,
      // Dishes are the data obj
      comments: Comments
      // commets are the data obj for each dishes
}

const Reducer = (state = initialState, action) => {
      return state;
}
export default Reducer;