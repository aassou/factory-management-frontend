import { Switch, Route } from 'react-router-dom';
import Login from '../containers/login';
import Dashboard from './dashboard/Dashboard';
import ConfigPage from './ConfigPage/ConfigPage';
import UserManagment from './ConfigPage/UserManagment';
import Clients from './ConfigPage/Clients';
import AddUser from './AddUser';
import EditClient from './ConfigPage/EditClient';
import HistoryPage from './ConfigPage/HistoryPage';
import MonthHistory from './ConfigPage/MonthHistory';
import AddEditProject from './ProjectsPage/AddEditProject';
import Projects from './ProjectsPage/Projects';
import ProviderPage from './ConfigPage/providers/Index';
import ProviderAction from './ConfigPage/providers/Action';
import Appartments from './ProjectsPage/Appartement/index';

const SwitchLinks = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/" exact>
      <Dashboard />
    </Route>
    <Route path="/configuration" exact component={ConfigPage} />
    {/* users */}
    <Route path="/configuration/users" exact component={UserManagment} />
    <Route path="/configuration/users/adduser" component={AddUser} />
    {/* clients */}
    <Route path="/configuration/clients" exact component={Clients} />
    <Route path="/configuration/clients/edit/:id" component={EditClient} />
    <Route path="/configuration/clients/add" exact component={EditClient} />
    {/* history */}
    <Route path="/configuration/history" exact component={HistoryPage} />
    <Route path="/configuration/history/:month/:year" exact component={MonthHistory} />
    {/* providers */}
    <Route path="/providers/" exact component={ProviderPage} />
    <Route path="/providers/create" exact component={ProviderAction} />
    <Route path="/providers/:id/update" exact component={ProviderAction} />
    {/* products */}
    <Route path="/products" exact component={Projects} />
    <Route path="/projets/create" exact component={AddEditProject} />
    <Route path="/projets/:id/update" exact component={AddEditProject} />
    {/* appartements */}
    <Route path="/projets/:id/gestion" exact component={Appartments} />
  </Switch>
);
export default SwitchLinks;
