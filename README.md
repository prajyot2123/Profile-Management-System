# 🌟 Profile Management System  

> A sleek, modern, and fully functional profile management system with search, filter, and map features. Built with **React**, **Material UI (MUI)**, **Node.js**, and **MongoDB**, this application offers a clean UI and seamless functionality.  

---

## ✨ Features  

- **Add, Edit, Delete Profiles**  
  Manage profiles with ease through a responsive and intuitive interface.  
- **Search & Filter**  
  Quickly find profiles using powerful search and filtering options.  
- **Full Profile View**  
  Click on a profile to view all details, including profile photo, description, location, and map.  
- **Interactive Map**  
  Embedded maps showing profile locations with markers and popups.  
- **Material UI Design**  
  A professional, aesthetically pleasing UI with animations, responsive layouts, and accessibility features.  

---

## 🛠️ Technologies  

| **Technology** | **Description** |  
|----------------|----------------|  
| **React.js**  | Frontend framework for creating a dynamic user interface. |  
| **Material UI (MUI)**  | Component library for styling and responsive design. |  
| **Node.js**  | Backend runtime environment to handle API logic. |  
| **Express.js** | Web framework for building RESTful APIs. |  
| **MongoDB**   | Database for storing profile data. |  
| **Leaflet.js** | Interactive maps for profile locations. |  

---

## 🚀 How to Run the Project  

### **Step 1: Clone the Repository**  
```bash  
git clone https://github.com/prajyot2123/Profile-Management-System.git  
cd Profile-Management-System/profile-management-system  
```  

### **Step 2: Configure the Environment Variables**  
1. Edit the `.env` file to include your MongoDB connection string:  
   ```  
   MONGO_URI="Your MongoDB Connection String"  
   ```  

### **Step 3: Install Dependencies**  
1. Navigate to the root directory of the project and install dependencies for both the backend and frontend:  
   ```bash  
   npm install  
   cd frontend  
   npm install  
   ```  

### **Step 4: Run the Backend Server**  
1. Go to the backend directory and start the server:  
   ```bash  
   cd backend  
   nodemon server.js  
   ```  

### **Step 5: Run the Frontend Server**  
1. Navigate to the frontend directory and start the React development server:  
   ```bash  
   cd frontend  
   npm start  
   ```  

### **Step 6: Access the Application**  
1. Open your browser and navigate to:  
   [http://localhost:3000](http://localhost:3000)  

---

## 📂 Project Structure  

```  
profile-management-system  
├── backend  
│   ├── server.js              # Express server setup  
│   ├── .env                   # Environment variables for MongoDB connection  
│  
├── frontend  
│   ├── public  
│   │   └── index.html         # HTML template  
│   ├── src  
│   │   ├── pages              # Main pages  
│   │   │   ├── AddProfile.js      # Add/Edit profile form  
│   │   │   ├── ProfileDetails.js  # Detailed profile view with map  
│   │   │   └── ProfileList.js     # List of profiles with search/filter options  
│   │   ├── App.js             # Main React app component  
│   │   └── index.js           # React entry point  
```  

---

## 📋 API Endpoints  

| **Method** | **Endpoint**            | **Description**                        |  
|------------|-------------------------|----------------------------------------|  
| **GET**    | `/api/profiles`         | Fetch all profiles.                    |  
| **GET**    | `/api/profiles/:id`     | Fetch a specific profile.              |  
| **POST**   | `/api/profiles`         | Add a new profile.                     |  
| **PUT**    | `/api/profiles/:id`     | Update a specific profile.             |  
| **DELETE** | `/api/profiles/:id`     | Delete a specific profile.             |  

---

## 📸 Screenshots  

### **Home Page**  
![Image](https://github.com/user-attachments/assets/bd92d528-b863-4501-a175-b2883e841d38)

---

### **Profile Edit**  
![Image](https://github.com/user-attachments/assets/1bd8e43c-e570-40bf-a1ca-da240f6e38cc)  

---

### **Map Integration**  
![Image](https://github.com/user-attachments/assets/456220d4-808a-4890-ac6e-4ba253be5e3c) 

---


