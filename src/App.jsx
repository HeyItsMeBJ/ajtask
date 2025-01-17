import UploadPdfPage from "./UploadPdfPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import UploadImgPage from "./UploadImgPage";
import { useState } from "react";
import TextInfo from "./TextInfo";

function App() {
  const [mode, setMode] = useState("pdf");
  return (
    <div className="font-mono">
      <Navbar mode={mode} setMode={setMode} />
      {mode == "pdf" ? <UploadPdfPage /> : <UploadImgPage />}
     
      <TextInfo/> 
      <Footer />
    </div>
  );
}

export default App;
