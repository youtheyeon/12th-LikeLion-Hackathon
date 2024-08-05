import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyle";

import MainPage from "./pages/MainPage";
import SharePage from "./pages/SharePage";
import ChatRoomPage from "./pages/ChatRoomPage";
import ChatCommentPage from "./pages/ChatCommentPage";
import NewRoomPage from "./pages/NewRoomPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path={"/"} element={<LoginPage />} />
        <Route path={"/signup"} element={<SignUpPage />} />

        <Route path={"/main"} element={<MainPage />} />
        <Route path={"/share"} element={<SharePage />} />
        <Route path={"/chat/:id"} element={<ChatRoomPage />} />
        <Route path={"/chat/:id/:cId"} element={<ChatCommentPage />} />
        <Route path={"/newchat"} element={<NewRoomPage />} />
      </Routes>
    </>
  );
}

export default App;
