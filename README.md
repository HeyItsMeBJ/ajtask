# Social Media Content Analyzer

This is a Social Media Content Analyzer application that allows users to upload PDF and image files (such as scanned documents), extract the text from these files, and provide suggestions to improve engagement. The application uses Optical Character Recognition (OCR) for image files and an API service for PDF text extraction.

## Features

- **Document Upload**: 
  - Users can upload PDF or image files.
  - Supports drag-and-drop as well as file picker interface.

- **Text Extraction**:
  - **PDF Parsing**: Extracts text from PDF documents.
  - **OCR for Images**: Uses Tesseract.js to extract text from images.

## Technologies Used

- **Frontend**: React.js
- **Drag-and-Drop**: `react-drag-drop-files`
- **Text Extraction from PDFs**: API from Apyhub
- **OCR (Text Extraction from Images)**: Tesseract.js
- **CSS Framework**: Tailwind CSS

## Setup

### Prerequisites
- Node.js installed on your local machine (preferably version 14 or higher).
- A code editor (e.g., VS Code) for editing the project files.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/<your-username>/social-media-content-analyzer.git
   cd social-media-content-analyzer
   
2. **Install Dependencies**:

   ```bash
   npm install

3. **Get Your Apyhub key and Edit with mine**


4. **Start the development server**:

   ```bash
   npm run dev

### Approach

The application was built with a focus on simplicity, performance, and user experience.  
Key steps included:  

- Implementing drag-and-drop functionality for easy file uploads.  
- Integrating APYHub and Tesseract.js for efficient text extraction.  
- Styling the interface with Tailwind CSS for responsiveness.  
- Incorporating error handling and loading states for seamless interaction.  
