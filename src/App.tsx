import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { PostProvider } from "./contexts/PostContext"

const App = () => {
  return (
    <PostProvider>
    <div className="container mx-auto">
        <Header />
        <Footer />
    </div>
   </PostProvider> 
  )
}

export default App