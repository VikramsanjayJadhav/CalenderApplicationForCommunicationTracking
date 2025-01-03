#ENTNT Technical Assignment : Calendar Application for Communication Tracking

Deployment

https://calendar-application-for-communication-tracking-lime.vercel.app/user

React-Based Calendar Application

Objective
This application is designed to help maintain strong professional relationships with other organizations by accurately tracking communication. It ensures timely follow-ups and consistent engagement through a centralized platform. The key features include:

Admin Module: To set up companies and communication parameters.

User Module: To visualize, manage, and perform communication tasks.

Reporting and Analytics Module (Optional): Provides actionable insights into communication trends and performance.

Features and Modules

Admin Module
Company Management
Add, edit, and delete company details.
Each company entry includes:
Name: Company name.
Location: Physical or operational location.
LinkedIn Profile: Link to the company’s LinkedIn page.
Emails: One or more communication email addresses.
Phone Numbers: Contact numbers.
Comments: Notes or additional information.
Communication Periodicity: Default time interval for scheduled communications (e.g., every 2 weeks).
Communication Method Management
Define available communication methods, including:
Name: E.g., "Visit" or "LinkedIn Post."
Description: E.g., "Visit to company premises."
Sequence: Order of communication steps.
Mandatory Flag: Marks whether a communication method is mandatory.
Default communication methods (in sequence):
LinkedIn Post
LinkedIn Message
Email
Phone Call
Other
User Module
Dashboard
Grid-like view with the following columns:
Company Name: Name of the company.
Last Five Communications: Type and date of the five most recent interactions.
Next Scheduled Communication: Type and date of the next planned interaction.
Color-Coded Highlights:
Red: Overdue communications.
Yellow: Communications due today.
Interactive Features:
Hover over completed communications to display notes in a tooltip.
Communication Actions
Select one or multiple companies.
Log a new communication through a modal:
Select the communication type (e.g., LinkedIn Post, Email).
Input the date.
Add notes.
Reset any existing highlights for the selected companies.
Notifications
Overdue Communications Grid: Companies with overdue actions.
Today’s Communications Grid: Companies with tasks due today.
Notification icon with a badge for overdue and due tasks.
Calendar View
View past communications (dates and methods).
Manage upcoming communications (dates and methods).
Reporting and Analytics Module (Optional)
Features:
Communication Frequency Report:
Visual representation (bar chart/pie chart) of communication methods used over time.
Filter by company, date range, or method.
Engagement Effectiveness Dashboard:
Metrics on the success of communication methods (e.g., response rates).
Overdue Communication Trends:
Trendline/heatmap of overdue communications over time, categorized by company.
Downloadable Reports:
Export data as PDF or CSV.
Real-Time Activity Log:
Live feed of communication activities.
Installation and Setup
Clone the repository.
Open the project in VS Code.
Run the following commands:
npm install
npm run start
To view the application documentation:

npm run readme.md
Technology Stack
Frontend: React.js
Backend: Node.js (optional integration for API handling)
Database: MongoDB/MySQL (optional)
Styling: CSS/Bootstrap/Tailwind CSS
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch for your feature/fix.
Commit your changes and push to your branch.
Create a Pull Request.
