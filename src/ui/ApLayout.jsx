import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartOverView from '../features/cart/CartOverview';
import Loader from './Loader';

export default function ApLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto_auto]">
      {isLoading && <Loader />}
      <Header></Header>
      <div className="overflow-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverView />
      <Footer />
    </div>
  );
}
