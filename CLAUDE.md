# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AIDT HTHT×SEL is an educational web application implementing AI Digital Textbook (AIDT) with High-Tech High-Touch (HTHT) model for Social Emotional Learning (SEL) for Korean high school students (grades 1-2).

**Key Concepts:**
- **AIDT**: AI-powered digital textbook for personalized learning
- **HTHT**: Balance of technology (High-Tech) and human connection (High-Touch)
- **SEL**: Social Emotional Learning with 5 core competencies

## Architecture

### Frontend-Only Application
- Pure HTML/CSS/JavaScript (no framework)
- No build process or package manager
- CDN dependencies: Tailwind CSS, Font Awesome, Google Fonts (Noto Sans KR)
- Local Storage for data persistence
- Static file deployment ready

### File Structure
```
aidt_htht_sel_github/
├── index.html              # Main application (696 lines)
├── style.css               # Custom styles (727 lines)
├── script.js               # Core logic (597 lines)
├── instructor_manual.html  # Instructor guide
├── project_guide.html      # Implementation guide
└── README.md               # Project documentation
```

### Key Components

1. **Main Application** (`index.html`)
   - 6 main sections with tab navigation
   - Fully responsive Korean interface
   - Uses Tailwind CSS utilities + custom styling
   - Embedded scripts for badge/notice dialogs

2. **JavaScript Logic** (`script.js`)
   - **State Management**: Global variables for current state
   - **Event Handling**: DOMContentLoaded-based initialization
   - **Data Persistence**: localStorage for user progress
   - **Key Functions**:
     - `initialize()`: Sets up all event listeners
     - `switchTab()`: Manages section visibility
     - `navigateProjectStep()`: Wizard navigation
     - `sendAIMessage()`: Mock AI chat simulation
     - `loadUserData()`/`saveFormData()`: Data persistence

3. **Styling** (`style.css`)
   - CSS custom properties for theming
   - Component-based styling (cards, buttons, forms)
   - Utility classes similar to Tailwind
   - Mobile-responsive breakpoints

## Core Features & Implementation

### 1. Tab Navigation System
```javascript
// Main tabs: intro, project-wizard, emotion-recognition, 
// sel-competency, ai-interaction, collaboration
switchTab(tabId) // script.js:101
```

### 2. Project Wizard (5 Steps)
- Step progress tracking with visual indicators
- Form data auto-saved to localStorage
- Navigation: `navigateProjectStep()` (script.js:136)
- Progress bar updates: `updateProjectProgress()` (script.js:174)

### 3. Emotion Recognition Scenarios
- 5 interactive scenarios
- Previous/Next navigation
- State tracking: `currentEmotionScenario`
- Function: `navigateEmotionScenario()` (script.js:233)

### 4. SEL Competency Development
- 5 competencies with tabbed interface
- Dynamic content switching
- Function: `switchSELCompetency()` (script.js:274)

### 5. AI Chat Simulation
- Mock responses based on keywords
- Chat history persistence
- Typing indicators
- Function: `sendAIMessage()` (script.js:305)

### 6. Data Management
- **localStorage keys**:
  - `currentTab`, `currentProjectStep`, `currentEmotionScenario`
  - `currentSELCompetency`, `aiChatHistory`
  - `projectStep1-5`, `form_[formId]`
- Auto-load on page refresh
- Form validation before saving

## Development Commands

### Running the Application
```bash
# Direct browser opening
open index.html

# Local HTTP server (recommended)
python -m http.server 8000
# or
npx http-server -p 8000
```

### No Build Process
Static site - no compilation needed. Edit files directly.

## Testing & Debugging

### Key Areas to Test
1. Tab navigation state persistence
2. Project wizard step validation
3. localStorage data integrity
4. Mobile responsive behavior
5. AI chat response logic

### Common Issues
- **Tab not switching**: Check `data-target` attributes
- **Data not saving**: Verify localStorage permissions
- **Styling issues**: Check Tailwind CDN loading

### Browser Console Commands
```javascript
// Check current state
console.log({currentTab, currentProjectStep, currentEmotionScenario})

// Clear all saved data
localStorage.clear()

// View saved project data
console.log(localStorage.getItem('projectStep1'))
```

## Deployment

### GitHub Pages
1. Repository Settings → Pages
2. Source: Deploy from branch (main)
3. Folder: / (root)
4. No build action needed

### Important Notes
- All assets must use relative paths
- CDN dependencies require internet connection
- Test on multiple browsers for compatibility

## Code Patterns & Conventions

### JavaScript Patterns
- Event delegation for dynamic content
- Try-catch blocks for error handling
- Optional chaining (`?.`) for safe property access
- Template literals for HTML generation

### CSS Organization
- Custom properties for theme values
- BEM-like naming for components
- Utility classes for spacing/display
- Mobile-first responsive design

### HTML Structure
- Semantic HTML5 elements
- Data attributes for JS hooks
- ARIA labels for accessibility
- Korean language content throughout