# Time Capsule Project

A simple web application for creating, managing, and unlocking time capsules with a stylish and interactive UI.

## Features

- **Time Capsules:**
  - Users can create capsules with names, messages, delivery dates, and optional media attachments.
  - Capsules remain locked until the specified delivery date.
  - Capsules can be unlocked with a password if needed.
- **Local Storage:**
  - Capsules are stored in the browser's `localStorage` for persistence.
- **Interactive Design:**
  - Aesthetic and responsive design with a dark theme and neon colors for better contrast and user experience.
- **Bulk Operations:**
  - Delete all capsules.
  - Unlock all capsules with a password.

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd time-capsule
   ```

2. **Open in a Browser:**
   - Double-click on the `index.html` file to open the app in your default web browser.

3. **Optional:**
   - Use a local development server for testing:
     ```bash
     npx http-server
     ```

## File Structure

```
|-- index.html          # Home page of the application
|-- capsule.html        # Capsule management page
|-- style.css           # Stylesheet for the application
|-- script.js           # JavaScript for interactivity
```

## How to Use

1. **Creating Capsules:**
   - Navigate to the `Capsule` page.
   - Enter the capsule's name, message, and delivery date. Attach media if necessary.
   - Click the "Submit" button to save your capsule.

2. **Viewing Capsules:**
   - View all saved capsules on the `Capsule` page.
   - Locked capsules will display a 🔒 icon and hide the message.

3. **Unlocking Capsules:**
   - Use the "Unlock All Capsules" button and enter the correct password (`Faisal@123`) to unlock all capsules immediately.

4. **Deleting Capsules:**
   - Use the "Delete All Capsules" button to remove all stored capsules.

## Dependencies

This project uses the following technologies:

- **HTML5**: Structure of the web pages.
- **CSS3**: Styling for a modern and aesthetic design.
- **JavaScript**: Interactivity and local storage management.

## Screenshots

### Navigation Bar
- A sleek navigation bar with neon colors and responsive design.

### Capsule Management
- A visually appealing list of capsules with locking functionality and media support.

### Buttons
- "Delete All" and "Unlock All" buttons styled with hover effects.

## Future Enhancements

- Add user authentication for better security.
- Implement cloud-based storage for capsules.
- Enhance the UI with animations and additional themes.

## License

This project is licensed under the Apache License 2.0. See the `LICENSE` file for more information.

## Author

Faisal
