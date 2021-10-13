import { useDispatch } from 'react-redux';
import Signin from './component/signin';
import SignUp from './component/signUp';
import { Route, Switch } from 'react-router-dom'
import AddGoods from './component/addGoods';
import Dashboard from './component/dashboard';
import Goods from './component/goods';
import EditGoods from './component/editGoods';
import Bill from './component/bills';
import AddBill from './component/addBills';



function App() {
  return (
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/addGoods" component={AddGoods} />
      <Route path="/goods" component={Goods} />
      <Route path="/editGoods/:id" component={EditGoods} />
      <Route path="/bill" component={Bill} />
      <Route path="/addBill" component={AddBill} />

    </Switch>
  );
}

export default App;
