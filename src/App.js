import {Routes,Route} from 'react-router-dom';
import AppDashboard from './Components/Pages/DashBoard/AppDashborad'
import VendorTable from './Components/Pages/VendorTable';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element={<AppDashboard/>}>
          <Route path='/vendor'element={<VendorTable/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
