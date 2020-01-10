console.log("****  Officer module code  ****")
const Officer = (Officer) => {
    console.log("**** I am the item component  ****")
    return `
        <section class="Officer">
            <header class="Officer__header">
               ${Officer.name}
            </header>
            <div>Age: ${Officer.age}</div>
            <div>
                Crime: ${criminal.conviction}
            </div>
            <div>
                Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}
            </div>
            <div>
                Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}
            </div>
        </section>
    `
}
export default Officer