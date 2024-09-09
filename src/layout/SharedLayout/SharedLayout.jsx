import { Outlet } from "react-router-dom";
import styles from "./SharedLayout.module.css";
import { Header, Footer, Loader } from "components";
import { Suspense, useState } from "react";
import CustomModal from "components/shared/CustomModal/CustomModal";

const SharedLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default SharedLayout;
