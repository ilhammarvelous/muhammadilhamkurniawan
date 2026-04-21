import { BrowserRouter } from "react-router-dom"
import { Navbar, Header, About, Skills, Experience, Education, Projects, Contact, Footer } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto px-4 md:px-10">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </div>
        <Footer />
    </BrowserRouter>
  )
}

export default App
