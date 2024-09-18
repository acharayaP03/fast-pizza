import Header from "./Header";
import Footer from "./Footer";
import CartOverView from "../features/cart/CartOverView";
import { Outlet } from "react-router-dom";
export default function ApLayout() {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
      <CartOverView />
      <Footer />
    </>
  );
}
