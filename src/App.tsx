import Calendar from './components/Calendar'
import FileList from './components/FileList'
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
        <Calendar />
        <Profile />
        <OrderList />
        <Messages />
        <Schedule />
        <OrderGenerator />
        <FileList />
      </div>
    </>
  )
}

export default App
