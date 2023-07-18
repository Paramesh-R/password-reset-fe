import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/Auth/SignIn'
import PrivateRoutes from './components/RouteRestriction/PrivateRoutes'
import Dashboard from './pages/Dashboard/Dashboard'
import Error404 from './pages/Home/Error404'
import SignUp from './pages/Auth/SignUp'
import ForgotPassword from './pages/Auth/ForgotPassword'
import ThanksPage from './pages/Auth/ThanksPage'
import ChangePassword from './pages/Auth/ChangePassword'
import ActivateAccount from './pages/Auth/ActivateAccount'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />

        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/success" element={<ThanksPage />} />

        <Route path="/activate-account/:activationToken" element={<ActivateAccount />} />
        <Route path="/resetpassword/:resetToken" element={<ChangePassword />} />
        {/* Protected Route */}
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/" element={<Dashboard />} />
        </Route>

        {/* Error 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes >
    </div>
  );
}

export default App;
