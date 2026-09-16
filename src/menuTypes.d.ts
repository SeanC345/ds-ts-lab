interface menuItem {
    id: number;
    name: string;
    course: string;
    price: number;
    nutrition: {
        calories:number;
        allergens: string[];
    }
}