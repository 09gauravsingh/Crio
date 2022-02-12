const data = {
  mainTitle: "My Top 4 Favourite Travel Destinations  ",
  cardContents: [
    {
      name: "Switzerland",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/7/76/Z%C3%BCrich.jpg",
    },
    {
      name: "Italy",
      imageLink:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2020-06/17/full/1592382836-371.png",
    },
    {
      name: "Paris",
      imageLink:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg",
    },
    {
      name: "New York",
      imageLink:
        "https://worldstrides.com/wp-content/uploads/2015/07/iStock_000040849990_Large.jpg",
    },
  ],
  userData: { name: "Crio.Do", tagLine: "Baby steps into the world of web!" },
};


// Plug in title data to HTML
let mainTitleElement = document.getElementById("main-title");
mainTitleElement.innerHTML += data.mainTitle;


// Create template for card content
let getCardStructure = (name, imageLink) => {
  return `<div class="col-12 col-sm-6 mb-4">
  <div class="tile">
    <div class="tile-text text-center">
      <h5>${name}</h5>
    </div>
    <img 
      src="${imageLink}" />
  </div>
</div>`;
};

let cardRow = document.getElementById("card-row");

// Plug in card data to HTML
data.cardContents.forEach((cardContent) => {
  let { name, imageLink } = cardContent;
  cardRow.innerHTML += getCardStructure(name, imageLink);
});

// Create template for footer content
let getFooterStructure = (name, tagLine) => {
  return `<h3 class="me-3"><i class="fas fa-heart"></i> ${name}</h3>
    <p>${tagLine}</p>`;
};

let footerContent = document.getElementById("footer");
let { name, tagLine } = data.userData;

// Plug in footer data to HTML
footerContent.innerHTML += getFooterStructure(name, tagLine);
