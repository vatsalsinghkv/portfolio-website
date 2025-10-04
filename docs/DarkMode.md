# Dark Mode Feature

## Overview

The portfolio website now supports **Dark Mode**, allowing users to switch between light and dark themes for better readability and reduced eye strain.

---

## How to Use Dark Mode

1. **Locate the Toggle Button**  
   The dark mode toggle is available in the **header/navbar** of the website.

2. **Switch Themes**  
   Click the toggle button to switch between **Light** and **Dark** modes.  
   The selected theme is **saved locally** and will persist on your next visit.

---

## Screenshots

### Light Mode

![Light Mode Screenshot](path/to/lightmode.png)

### Dark Mode

![Dark Mode Screenshot](path/to/darkmode.png)

---

## Implementation Details

- **Files Involved:**

  - `components/Header.js` – Contains the dark mode toggle button.
  - `styles/globals.css` – Includes CSS variables for dark and light themes.
  - `utils/theme.js` – Handles saving theme preference in `localStorage`.

- **Code Snippet for Toggle Button:**

```javascript
// Toggle dark mode
const toggleTheme = () => {
  const currentTheme = document.documentElement.classList.contains('dark')
    ? 'dark'
    : 'light';
  if (currentTheme === 'dark') {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
};
```
