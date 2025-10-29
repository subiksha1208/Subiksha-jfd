🛒 SUPERMARKET MANAGEMENT SYSTEM
👩‍💻 Created by Subiksha R

----------------------------------------------------------
⚙️ 1️⃣ Run the BACKEND (Spring Boot)
----------------------------------------------------------

📁 Folder: SUPERMARKET-BACKEND

Steps:
1. Open the project in VS Code / IntelliJ / Eclipse.
2. Ensure MongoDB is installed and running locally (port 27017).
3. Check the configuration in:
   src/main/resources/application.properties

   It should contain:
   spring.data.mongodb.uri=mongodb://localhost:27017/supermarketdb
   server.port=8080

4. In the terminal (inside the backend folder), run:
   mvn spring-boot:run

5. Once it starts, test it by visiting:
   http://localhost:8080/api/products/all
   ✅ You should see product data in JSON format.

----------------------------------------------------------
💻 2️⃣ Run the FRONTEND (React App)
----------------------------------------------------------

📁 Folder: SUPERMARKET-FRONTEND

Steps:
1. Open a new terminal in the frontend folder.
2. Install dependencies (first time only):
   npm install
3. Start the React app:
   npm start
4. The app will open automatically at:
   http://localhost:3000

✅ You’ll see the homepage with:
   🧾 Billing Page
   📦 Stock Management
   🛍️ Order History
   📨 Approval Requests

----------------------------------------------------------
🔄 3️⃣ Connect Frontend & Backend
----------------------------------------------------------

Frontend connects to the backend using:
http://localhost:8080/api/

Make sure both servers (3000 & 8080) are running.

----------------------------------------------------------
🧩 4️⃣ Project Overview
----------------------------------------------------------

Frontend: React + Normal CSS (No Tailwind)
Backend: Spring Boot + MongoDB

Main Features:
- Product and stock management
- Billing system with total calculation
- Sales and order tracking
- Admin approval requests
- Simple and user-friendly interface

----------------------------------------------------------
🎯 5️⃣ Stop the Application
----------------------------------------------------------

Backend: Press Ctrl + C in terminal running mvn spring-boot:run
Frontend: Press Ctrl + C in terminal running npm start

----------------------------------------------------------
 Thank you for viewing this project!
Project crafted and completed by Subiksha R
----------------------------------------------------------
