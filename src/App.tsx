
import { Header } from "./components/Header"
import { LoggedUserProvider } from "./contexts/LoggedUser"


const App = () => {

  return (
   <div className="container mx-auto">
        <LoggedUserProvider>
          <Header />
        </LoggedUserProvider>
        
   </div> 
  )
}

export default App