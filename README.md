# Feynman Board

This project is a web application named **Feynman Board** built as part of a backend development qualification task for **Wasserstoff Private Limited**. The app allows users to create topics, categorize their understanding of the content they write, and track their progress visually.

### 🖥️ Live Demo

Check out the live project: [Feynman Board](https://feynman-board-esawymgre-ajitrauts-projects.vercel.app/)

## Features

- **Landing Page**: Users can enter their username to navigate to the dashboard.
- **Dashboard**: Displays all topics created by the user along with the percentage of their understanding.
- **Add Topic**: Users can add a new topic and categorize their content blocks as "Understood", "Somewhat Understood", "Not Clear", or "What Rubbish".
- **Categorization**: The app automatically divides the content into blocks based on delimiters and allows users to classify each block.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB (MERN Stack)
- **Database**: MongoDB for storing users, topics, and categorized content blocks.

## Installation and Setup Instructions

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/feynman-board.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Frontend
    cd feynman-board
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the backend server:

    ```bash
    cd server
    npm start
    ```

5. Start the frontend development server:

    ```bash
    cd Fronten
    cd feynman-board
    npm run dev
    ```

6. Open the app in your browser:

    ```bash
    http://localhost:3000
    ```

## Project Structure

```bash
├── client             # React frontend
│   ├── public         # Static assets
│   └── src            # React components, services, and styles
├── server             # Backend Express server
│   ├── controllers    # API controllers
│   ├── models         # MongoDB models
│   └── routes         # API routes
├── .gitignore         # Ignored files
├── README.md          # Project documentation
└── package.json       # Node.js dependencies and scripts
```

## Database Design

- **User**: Stores user information such as username.
- **Topic**: Stores the topics created by the user.
- **Block**: Stores each block of content from the topic, categorized based on user understanding.

## Functionality

1. **Landing Page**: Enter the username and navigate to the dashboard.
2. **Dashboard**: Lists all topics created by the user and displays progress as percentages.
3. **Add Topic**: Users can add a new topic, type content in the text editor, and categorize each block based on their understanding.
4. **Block Categorization**: Automatically splits text into blocks using the following delimiters: `,` `.` `()` `{}` `[]` `\` `|` `?` `:` `;` `/` and newline.

## Understanding Calculation

The understanding percentage is calculated using the following formula:

```bash
(Sum of points from each block / Total blocks * 4) * 100
```

- 1 Point: **What Rubbish**
- 2 Points: **Not Clear**
- 3 Points: **Somewhat Understood**
- 4 Points: **Understood**
