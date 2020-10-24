import initializeDetailButtonEvents from './fish/dialogs.js'
import FishListComponent from './fish/FishList.js'
import TipListComponent from './tips/TipList.js'
import {useFish} from './FishDataProvider.js'

const allTheFish = useFish();

for (const fish of allTheFish) {
    console.log(fish)
}


FishListComponent()
TipListComponent()
initializeDetailButtonEvents()
console.log("Welcome to the main module")
