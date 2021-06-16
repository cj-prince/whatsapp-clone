import './App.css';
import Sidebar from './Sidebar.js';
import Chat from './Chat.js';

function App() {
  return (
    <div className="app">
      <div className='app__body'>
          {/* sidebar */}
          <Sidebar />

           {/* chatcomponents  */}
            <Chat />

      </div>
      


      {/* login page */}

    </div>
  );
}

export default App;
