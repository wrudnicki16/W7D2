import { createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import Todothunk from '../middleware/thunk';
const configureStore= createStore(
  rootReducer,
  applyMiddleware(Todothunk)

);





export default configureStore;
