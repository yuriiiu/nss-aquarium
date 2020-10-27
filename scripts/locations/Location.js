/**
 *  Location which renders individual location objects as HTML
 */
export const Location = (loc) => {
    
    return `
        <section class="location card">
            <div><img  class="loc__image image--card" src="${loc.image}" /></div>
            <div class="loc__name">${loc.name}</div>
            <div class="loc__country">${loc.country}</div>
            <div class="loc__tips">${loc.tips}</div>
        </section>
    `
    
}