import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => JSON.parse(localStorage.getItem('isLoggedIn')) || false
  );

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault(); // 
    if (isLoggedIn) {
      // Log out
      setIsLoggedIn(false);
      window.location.href = '/signin';
    } else {
      // Log in
      setIsLoggedIn(true);
      window.location.href = '/profile';
    }
  };

  const loggedIn = isLoggedIn ? 'Logout' : 'Login';

  return (
    <div className='relative flex h-7'>
      <div>
        <a
          href={isLoggedIn ? '/signin' : '/profile'}
          onClick={handleLogin}
          className='text-white'
        >
          {loggedIn}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
