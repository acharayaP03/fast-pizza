import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CartOverView from "../features/cart/CartOverView";
import Loader from "./Loader";

export default function ApLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header></Header>
      <main>
        <Outlet />
      </main>
      <CartOverView />
      <Footer />
    </div>
  );
}
