import Calendar from './components/Calendar'
import FileList from './components/FileList'
import Footer from './components/Footer'
import Header from './components/Header'
import Messages from './components/Messages'
import OrderGenerator from './components/OrderGenerator'
import OrderList from './components/OrderList'
import Profile from './components/Profile'
import Schedule from './components/Schedule'

function App() {
  return (
    <>
      <Header />
      <div className='widgets'>
        <Profile />
        <Calendar />
        <Messages />
        <OrderList />
        <Schedule />
        <FileList />
        <OrderGenerator />
      </div>
      <Footer />
    </>
  )
}

export default App
