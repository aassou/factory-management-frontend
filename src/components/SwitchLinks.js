import { Switch, Route } from 'react-router-dom';
import Login from '../containers/login';
import Dashboard from './dashboard/Dashboard';

// supplier
import SupplierList from './supplier/index';
import SupplierEdit from './supplier/edit';
import SupplierAdd from './supplier/add';

//customer
import CustomerList from './customer/index';
import CustomerEdit from './customer/edit';
import CustomerAdd from './customer/add';

// setting
import Settings from './setting/index';

// category
import CategoryList from './setting/category/index';
import CategoryEdit from './setting/category/edit';
import CategoryAdd from './setting/category/add';

// user
import UserList from './setting/user/index';
import UserEdit from './setting/user/edit';
import UserAdd from './setting/user/add';

//history
import HistoryPage from './setting/HistoryPage';
import MonthHistory from './setting/MonthHistory';

const SwitchLinks = () => (
    <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact>
            <Dashboard />
        </Route>
        {/* Suppliers */}
        <Route path="/suppliers" exact component={SupplierList} />
        <Route path="/suppliers/:id/update" exact component={SupplierEdit} />
        <Route path="/suppliers/add" exact component={SupplierAdd} />
        {/* Customers */}
        <Route path="/customers" exact component={CustomerList} />
        <Route path="/customers/:id/update" exact component={CustomerEdit} />
        <Route path="/customers/add" exact component={CustomerAdd} />
        {/* settings */}
        <Route path="/settings" exact component={Settings} />
        {/* settings - category */}
        <Route path="/settings/categories" exact component={CategoryList} />
        <Route path="/settings/categories/:id/update" exact component={CategoryEdit} />
        <Route path="/settings/categories/add" exact component={CategoryAdd} />
        {/* settings - users */}
        <Route path="/settings/users" exact component={UserList} />
        <Route path="/settings/users/:id/update" exact component={UserEdit} />
        <Route path="/settings/users/add" component={UserAdd} />
        {/* settings - history */}
        <Route path="/settings/history" exact component={HistoryPage} />
        <Route path="/settings/history/:month/:year" exact component={MonthHistory} />
    </Switch>
);

export default SwitchLinks;
