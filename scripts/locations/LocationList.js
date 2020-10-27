/**
 *  LocationList which renders individual location objects as HTML
 */

// TODO: Import `useLocation` from the data provider module
import {useLocation} from "./LocationDataProvider.js"
import {Location} from "./Location.js"

export const LocationList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".content")
    const locations = useLocation()

    // Add to the existing HTML in the content element
    let locHTMLRep = ""
    for (const place of locations) {
        locHTMLRep += Location(place)
    }

    contentElement.innerHTML += `
        <article class="locationList">
            ${locHTMLRep}
        </arcticle>
    `
    return contentElement
}