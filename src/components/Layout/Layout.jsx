import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import { StyledLayout } from './layout.styled';

const Layout = () => {
  return (
    <StyledLayout>
      {' '}
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </StyledLayout>
  );
};

export default Layout;
