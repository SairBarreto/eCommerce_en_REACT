import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;