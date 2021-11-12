import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </>
  );
}

export default Layout;
