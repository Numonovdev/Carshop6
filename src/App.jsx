import './App.css';
import Footer from './components/Footer';
import MyFormData from './components/MyFormData';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar />
      <main className="grow ">
        <MyFormData />
      </main>
      <Footer />
    </>
  )
}

export default App
