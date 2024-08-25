import {BrowserRouter,Routes,Route} from "react-router-dom"
import Profile from "./Profile"
import NotFound from "./NotFound"
import Navbar from "./Navbar"
import Team from "./Team"
import AddMember from "./AddMember"
import About from "./About"
const Home = () => {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Profile/>}/>
        <Route path="/team" Component={Team}/>
        <Route path="/about" Component={About}/>
        <Route path="/team/add" Component={AddMember}/>
        <Route path="/*" Component={NotFound}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Home
