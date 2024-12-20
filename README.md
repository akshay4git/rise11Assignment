#  Readme Dashboard

## Overview
This project is a web application for filing and managing legal disputes. It allows users to input claim details, upload required documents, and track the filing process in a streamlined manner. The UI is designed for simplicity and ease of use.

Built with:
- **React.js** for interactive UI components
- **Tailwind CSS** for responsive and modern styling
- **Vite** for faster build and development setup

---

## Project Approach

1. **Setup and Initialization**:
   - Created the project using Vite for faster builds and a better developer experience.
   - Installed Tailwind CSS for styling and configured it using the official setup guide.

2. **Component Design**:
   - The application was divided into reusable components for maintainability:
     - **Header**: Displays the progress tracker at the top.
     - **Sidebar**: Includes navigation options like "Dashboard," "My Cases," etc.
     - **Main Form**: Contains sections like Claim Value, Place, Language, and Document Uploads.

3. **Styling with Tailwind CSS**:
   - Used Tailwind's utility classes for a clean and responsive layout.
   - Implemented a mobile-first design to ensure the dashboard works seamlessly across devices.

4. **State Management**:
   - Used React's `useState` for managing form inputs and progress states.
   - Validated form fields dynamically to enhance user experience.

5. **File Upload Functionality**:
   - Added file input fields with validation (file type and size) to ensure correct document uploads.

6. **Progress Tracker**:
   - Implemented a step-based progress tracker using React state.
   - Used conditional rendering and CSS transitions to visually indicate the current step in the process.

---

## Challenges Faced

1. **Making the Progress Bar Functional**:
   - Struggled to dynamically update the progress tracker as users navigated through the steps.
   - Solved this by maintaining the current step in the component state and applying conditional classes to the progress bar.

2. **Responsive Design**:
   - Ensuring the UI remained consistent across different screen sizes was challenging.
   - Used Tailwind's responsive design utilities (e.g., `sm:`, `md:`, `lg:`) to address this.

---

## Features

- Input claim and contract details.
- Upload supporting documents with validation.
- Multi-step progress tracker for clear navigation.
- Responsive design for optimal usability across devices.

---

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd dispute-dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:5173` in your browser to view the application.

---
