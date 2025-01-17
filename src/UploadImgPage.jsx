import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Tesseract from "tesseract.js";

const UploadImgPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [extractedText, setExtractedText] = useState("");
  const [disableButton, setDisableButton] = useState(false);

  // Handle file drop event
  const handleFileDrop = (file) => {
    // console.log(file);
    setSelectedFile(file);
    setUploadProgress(0);
    setExtractedText(""); // Reset extracted text
  };


 
  // Extract text from the uploaded image using Tesseract.js worker
  const extractTextFromImageUsingOCR = async (file) => {
    setUploadProgress(20); // Initial progress for OCR processing

    try {
        Tesseract.recognize(file, "eng", {
            logger: (m) => {
              if (m.status === "recognizing text") {
                setUploadProgress(m.progress*100);
              }
            },
          }).then(({ data: { text } }) => {
            setExtractedText(text);
          });
      setUploadProgress(100); 
    } catch (error) {
      console.error("Error extracting text from image:", error);
      setExtractedText("Failed to extract text. Please try again.");
      setUploadProgress(100);
    } 
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!selectedFile) return;
    setDisableButton(true);
    await extractTextFromImageUsingOCR(selectedFile);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-80 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-5xl">
        {extractedText === "" ? (
          <h1 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Upload Your Image
          </h1>
        ) : (
          ""
        )}

        <FileUploader
          handleChange={handleFileDrop}
          name="file"
          types={["JPEG", "PNG", "JPG"]} // Accept image file types
          multiple={false}
          disabled={disableButton}
        >
          <div
            className={`flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4  ${
              !disableButton ? "hover:border-blue-400 cursor-pointer" : ""
            }`}
          >
            {selectedFile ? (
              <p className="text-gray-600 text-center">
                Selected File: {selectedFile.name}
              </p>
            ) : (
              <p className="text-gray-600 text-center">
                Drag & Drop or Click to Upload
              </p>
            )}
          </div>
        </FileUploader>

        {selectedFile && (
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              className="bg-blue-500 h-2.5 rounded-full"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        )}

        <div className="flex flex-col items-center">
          <button
            className="bg-blue-500 text-white w-1/2 py-2 rounded-lg font-semibold hover:bg-blue-600 transition disabled:bg-gray-700"
            onClick={handleUpload}
            disabled={disableButton}
          >
            {uploadProgress === 100 ? "Extracted!" : "Extract Text"}
          </button>

          {uploadProgress === 100 && extractedText && (
            <div className="mt-4 w-full">
              <h2 className="text-lg font-semibold text-gray-800">
                Extracted Text:
              </h2>
              <textarea
                readOnly
                value={extractedText}
                className="w-full mt-2 p-2 border rounded-lg h-40 resize-none bg-gray-100"
              />

              <a
                href={`data:text/plain;charset=utf-8,${encodeURIComponent(
                  extractedText
                )}`}
                download={`${selectedFile.name.replace(
                  /\.(jpg|jpeg|png|gif|bmp|tiff)$/i,
                  ""
                )}-extracted.txt`}
                className="mt-4 block text-center text-blue-500"
              >
                Download Extracted Text
              </a>

              <button
                className={`bg-green-500 text-white w-full py-1 mt-2 rounded-lg font-semibold  hover:bg-green-600 transition disabled:bg-gray-700 ${
                  !disableButton ? "hidden" : ""
                }`}
                onClick={() => {
                  setExtractedText("");
                  setDisableButton(false);
                  setSelectedFile(null);
                  setUploadProgress(0);
                }}
              >
                Upload Another
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadImgPage;
