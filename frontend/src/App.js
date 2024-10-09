import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import AuthContext from "./Context/AuthContext";
import UserAndCompany from "./Context/UserAndCompany";
import BookMarks from "./Context/BookMarks";
import SearchContext from "./Context/Search";

function App() {
  return (
    <SearchContext>
      <AuthContext>
        <BookMarks>
          <UserAndCompany>
            <BrowserRouter>
              <AllRoutes />
            </BrowserRouter>
          </UserAndCompany>
        </BookMarks>
      </AuthContext>
    </SearchContext>
  );
}

export default App;
