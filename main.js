const container = document.querySelector("#favoriteList")

document.querySelector("#saveEntry").addEventListener("click", event => {
  container.innerHTML = "";

  const itemName1 = document.querySelector("#itemName1").value
  const location1 = document.querySelector("#location1").value

  const itemName2 = document.querySelector("#itemName2").value
  const location2 = document.querySelector("#location2").value


  //I can purchase {thing} at {location}
  container.innerHTML += `
        <section>
          I can purchase ${itemName1} at ${location1}.
        </section>
        <section>
          I can purchase ${itemName2} at ${location2}.
        </section>
    `

})