import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../redux/auth/selectors';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu user={user} /> : <AuthNav />}
    </header>
  );
};

export default AppBar;