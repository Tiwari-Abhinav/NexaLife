NexaLife: Your Futuristic Health & Time Companion
NexaLife is a forward-thinking web application prototype designed for a future where personal wellness and time management are seamlessly integrated. Built for a hackathon, this project showcases how AI can provide a holistic overview of one's health and automate daily planning.

✨ Key Features
The prototype is divided into several key components:

🤖 AI-Powered Daily Planner:

Users can input their daily tasks in natural language (e.g., "Go to the gym for 1 hour, team meeting at 4pm").

Utilizes the Google Gemini API to parse the text and automatically generate a structured, minute-by-minute timetable for the day.

🩺 Futuristic Health Dashboard:

Displays a live, simulated snapshot of the user's health vitals on a futuristic human body interface.

Metrics include Heart Rate, Stress Level, Hydration, Energy, Sleep, and Body Temperature.

AI Doctor's Suggestions: Provides actionable health advice based on the simulated vitals.

Overall Health Rating: Calculates and displays a letter grade for an at-a-glance wellness check.

📧 Subscription Backend:

A simple yet effective backend built with FastAPI to handle email subscriptions.

Allows users to subscribe for updates, with their emails being stored for future communication.

🛠️ Tech Stack
Frontend: HTML5, CSS3, JavaScript (Vanilla JS)

Backend: Python 3.7+ with FastAPI

AI Integration: Google Gemini API for natural language processing and planning.

Server: Uvicorn (for running the FastAPI backend)

🚀 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Python 3.7+ and pip installed on your machine.

A valid Google Gemini API Key. You can get one from Google AI Studio.

Installation & Setup
Clone the repository:

git clone [https://github.com/Tiwari-Abhinav/NexaLife.git](https://github.com/Tiwari-Abhinav/NexaLife.git)

Navigate to the project directory:

cd NexaLife

Set up the Backend:

Install the required Python dependencies:

pip install -r requirements.txt

🏃‍♂️ How to Run the Project
The NexaLife prototype consists of two parts: the frontend web pages and the backend server. You need to run both to experience all the features.

1. Running the Backend Server
The backend is required for the Subscription feature to work.

In your terminal, from the project's root directory, run the following command:

uvicorn main:app --reload

The server will start and be available at http://127.0.0.1:8000. Keep this terminal window open.

2. Launching the Frontend
Health Dashboard: Open the health_dashboard.html file in your web browser.

AI Planner: Open the planner.html file in your web browser.

Important: When you use the planner, you will be prompted to enter your Google Gemini API key. Paste your key into the input field to enable the AI scheduling feature.

Subscription Page: Open the subscribe.html file in your web browser to test the backend connection.

Now you can explore all the features of the NexaLife prototype!
