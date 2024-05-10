# lao-ocr-converter

Create Web App - Lao PDF to Word Converter

Project Goal: Develop a user-friendly web application that converts Lao PDFs into fully editable Word documents using Optical Character Recognition (OCR) libraries.

Target Users: This web app caters to individuals and organizations working with Lao documents who need to edit and modify scanned PDFs.

App Functionality:

    File Upload:
        Drag-and-drop or browse functionality to upload Lao PDFs.
        Support for single or multiple file uploads.
        File size limitations (if applicable).
    OCR Processing:
        Utilize OCR libraries that specifically support the Lao language for accurate character recognition.
        Option to define the OCR language as Lao during upload.
    Conversion & Editing:
        Convert the extracted text into a fully editable Word document (.docx format).
        Preserve the original layout of the PDF document as much as possible.
        Allow for basic editing functionalities within the web app (optional).
    Download & View:
        Provide a download button to save the converted Word document to the user's device.
        Ensure the downloaded file is compatible with Microsoft Word for seamless editing.

Additional Considerations:

    User interface (UI) design that is clean, intuitive, and user-friendly in Lao language.
    Progress bar or visual indicator to show the conversion process.
    Security measures to protect uploaded files and user data.
    Accessibility features for users with disabilities.
    Responsive design for optimal user experience across different devices (desktop, mobile).
    Integration with cloud storage services (optional) to allow users to upload and download files directly from their cloud storage.

Success Criteria:

    High accuracy in Lao character recognition using OCR libraries.
    Preserved document layout during conversion.
    User-friendly interface and efficient conversion process.
    Compatibility with Microsoft Word for editing the converted document.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/lao-ocr-converter.git
cd lao-ocr-converter
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
