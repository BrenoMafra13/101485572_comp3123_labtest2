# 101485572_comp3123_labtest2 – Weather App

### **Student Name:** Breno Lopes Mafra  
### **Student ID:** 101485572  

---

## Project Description

It is a simple weather application built with React for COMP3123 Lab Test 2. 
The user can type a city name and the app will display current weather data, 
temperature in Celsius weather description, weather icon, humidity, wind speed, 
country and city name.

---

## ▶How to Run the Project Locally

- Clone the repository: git clone https://github.com/BrenoMafra13/101485572_comp3123_labtest2.git
- Go to main folder: cd 101485572_comp3123_labtest2
- Install dependencies: npm install
- Start the application: npm start


The app will open at: http://localhost:3000

---

## API Used

The application uses the OpenWeatherMap Current Weather API:

https://api.openweathermap.org/data/2.5/weather

Query parameters used:
- `q`: city name  
- `appid`: API key  
- `units`: metric  

The API key is stored as an environment variable: REACT_APP_WEATHER_KEY

---

## Screenshots

### **App Interface Working**
![App Working](public/Screenshots/Screenshot_App_Working.jpeg)

---

### **App Interface – Initial State**
![App Layout](public/Screenshots/Screenshot_app.jpeg)

---

### **Postman – Success Response**
![Postman Success](public/Screenshots/Screenshot_Postman_Success.jpeg)

---

### **Postman – Invalid City Error**
![Postman Invalid](public/Screenshots/Screenshot_Postman_Invalid.jpeg)

---

### **Repository Screenshot**
![Repository](public/Screenshots/Screenshot_Repository.jpeg)

---

## Notes / Assumptions
- The project is hosted on Vercel: https://101485572-comp3123-labtest2.vercel.app

- All screenshots (browser + Postman + repository) are included inside the `public/Screenshots/` folder as required.
