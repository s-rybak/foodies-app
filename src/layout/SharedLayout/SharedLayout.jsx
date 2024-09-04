import { Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import { Header, Footer, Loader } from 'components';
import { Suspense } from 'react';

const SharedLayout = () => (
  <div className={styles.container}>
    <Header />
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
    <Footer />
  </div>
);

export default SharedLayout;
