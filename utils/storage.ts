import AsyncStorage from "@react-native-async-storage/async-storage";

export type MenuItem = {
  id: number;
  name: string;
  price: number;
  image: any;
};

const MENUS_KEY = "restaurant_menus";

const defaultMenus: MenuItem[] = [
  { id: 1, name: "Pizza", price: 15, image: require("../assets/images/pizza.png") },
  { id: 2, name: "Burger", price: 12, image: require("../assets/images/burger.png") },
  { id: 3, name: "Pasta", price: 14, image: require("../assets/images/pasta.png") },
  { id: 4, name: "Salad", price: 10, image: require("../assets/images/salad.png") },
  { id: 5, name: "Tacos", price: 11, image: require("../assets/images/tacos.png") },
  { id: 6, name: "Sandwich", price: 9, image: require("../assets/images/sandwich.png") },
];


export const initMenus = async () => {
  const existing = await AsyncStorage.getItem(MENUS_KEY);
  if (!existing) {
    await AsyncStorage.setItem(MENUS_KEY, JSON.stringify(defaultMenus));
  }
};

export const getMenus = async (): Promise<MenuItem[]> => {
  const data = await AsyncStorage.getItem(MENUS_KEY);
  return data ? JSON.parse(data) : [];
};
