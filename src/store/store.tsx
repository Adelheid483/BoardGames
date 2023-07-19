import { makeAutoObservable } from "mobx";

export interface Category {
    name: string;
    value: number;
}

const addCategory = (categories: Category[], newName: string, newValue: number): Category[] => [
    ...categories,
    {
        name: newName,
        value: newValue,
    },
];

class Store {
    categoriesList: Category[] = [];
    newName: string = "";
    newValue: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    addCategory() {
        this.categoriesList = addCategory(this.categoriesList, this.newName, this.newValue);
        this.newName = "";
        this.newValue = 0;
    }
}

const store = new Store();
export default store;
