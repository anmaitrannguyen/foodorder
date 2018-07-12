export interface User {
  uid: string;
  displayName: string;
  team?: string;
  location?: string;
  phoneNumber?: string;
}

export interface Menu {
  id: string;
  description: string;
  uid: string;
  orderName: string;
  foods: Food[];
  private: string;
}

export interface Food {
  title: string;
  price: number;
}