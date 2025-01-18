# Social Media Content Analyzer

This is a Social Media Content Analyzer application that allows users to upload PDF and image files (such as scanned documents), extract the text from these files, and provide suggestions to improve engagement. The application uses Optical Character Recognition (OCR) for image files and an API service for PDF text extraction.

## Features

- **Document Upload**: 
  - Users can upload PDF or image files.
  - Supports drag-and-drop as well as file picker interface.

- **Text Extraction**:
  - **PDF Parsing**: Extracts text from PDF documents while preserving their format.
  - **OCR for Images**: Uses Tesseract.js to extract text from images (scanned documents).

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
