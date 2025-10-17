# 🍽️ Restaurant Billing System (CaisseResto)

A modern **restaurant POS (Point of Sale)** system built using **Expo + React Native**.  
This app simulates a restaurant checkout where you can:
- Load menus from **local storage (AsyncStorage)**  
- Add or remove menu items from an order  
- Update quantities dynamically  
- See the **total price in real-time**

---



## 🎬 Demo

<p align="center">
  <img src="./assets/demo.gif" alt="App Demo" width="300" />
</p>


---

## 🧠 Features
✅ Loads 6 default menu items (stored in AsyncStorage)  
✅ Modular design (MenuList, OrderList, TotalBar)  
✅ Works completely offline  
✅ Responsive layout with clear sections  
✅ Animated total and interactive controls  

---

## ⚙️ Tech Stack
- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)

---

## 🧾 Installation & Usage
```bash
# Clone the repo
git clone https://github.com/Islemabb/RestaurantBillingSystem.git
cd RestaurantBillingSystem

# Install dependencies
npm install

# Start the Expo project
npx expo start
