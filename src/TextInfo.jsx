

const TextInfo = () => {
  const infoSections = [
    {
      icon: "❓",
      title: "Convert PDF To Text",
      content: `Using the ApyHub API, extracting text from PDF documents has never been easier. This API provides a simple and efficient solution for converting PDFs to plain text. Whether you're working with scanned documents or standard PDFs, the ApyHub API ensures seamless text extraction.`,
    },
    {
      icon: "🔁",
      title: "Worry-Free Conversion",
      content: `With the ApyHub API, you don’t have to worry about storage limitations or installing bulky software. This online service requires no installation or registration, allowing you to quickly and securely extract text from your PDF files.`,
    },
    {
      icon: "💡",
      title: "For Scans & More",
      content: `For images, Optical Character Recognition (OCR) technology is used to extract text. By implementing Tesseract.js, a JavaScript OCR library, you can easily process image files and retrieve textual content. Whether it's a scanned book page or a photograph of text, this solution is designed to work seamlessly.`,
    },
    {
      icon: "🛡️",
      title: "Safety Concerns?",
      content: `Your data is secure. When extracting text using the ApyHub API or Tesseract.js, your files remain private and are never stored or shared. All processing is handled securely to ensure your information is protected.`,
    },
    {
      icon: "📄",
      title: "What Can I Convert?",
      content: `With this implementation, you can convert the following formats to text:
      
      - PDFs using the ApyHub API
      - Images using OCR technology implemented with Tesseract.js`,
    },
    {
      icon: "📱",
      title: "Flexible Usage",
      content: `This solution works anywhere:
      
      - On your home computer
      - At work
      - On the go

      A stable internet connection is all you need to extract text from PDFs and images effortlessly.`,
    },
  ];

  return (
    <div className="bg-gray-100 p-10">
      <h1 className="text-2xl font-bold text-center mb-8">
        Extract Text from PDF & Image
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {infoSections.map((section, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <div className="text-4xl mb-4">{section.icon}</div>
            <h2 className="text-xl font-bold mb-4 text-center">
              {section.title}
            </h2>
            <p className="text-gray-600 text-center whitespace-pre-line">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextInfo;
