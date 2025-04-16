/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


//TV shows data using array. 

const shows = [
  {
    title: "Fresh Prince of Bel Air",   //show title
    genre: "Comedy",   //show genre
    year: 1990,	  //show release date
    imageURL: "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg",  //url link of the image
	link: "https://www.imdb.com/es/title/tt0098800/?ref_=nv_sr_srsg_6_tt_7_nm_1_in_0_q_fresh",	//link to click on image to get more information on the show. 
    description: ["Starred Will Smith", 
				  "Aired on NBC", 
				  "Set in Bel-Air", 
				  "Genre: Comedy", 
				  "Released Year: 1990"
				  ]  //description of the show. 
  },
  {
    title: "Curb Your Enthusiasm",
    genre: "Comedy",
    year: 2000,
    imageURL: "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg",
    link: "https://www.imdb.com/es/title/tt0264235/?ref_=nv_sr_srsg_0_tt_4_nm_4_in_0_q_curb%2520",
	description: ["Created by Larry David", 
				  "Improvised Dialogue", 
				  "Set in West LA", 
				  "Genre: Comedy", 
				  "Released Year: 2000"]
  },
  
  {
  title: "Drake & Josh",
  genre: "Comedy",
  year: 2004,
  imageURL: "https://i.ebayimg.com/images/g/O7gAAOSw1EhmYou8/s-l400.jpg",
  link: "https://www.imdb.com/es/title/tt0363328/?ref_=fn_all_ttl_1",
  description: ["Aired on Nickelodeon",
				"Starred Drake Bell and Josh Peck",
				"Set in San Diego, California", 
				"Genre: Comedy", 
				"Released Year: 2004"
				]
},
  
   {
    title: "Breaking Bad",
    genre: "Drama",
    year: 2008,
    imageURL: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3a1654116269619.605e35b102e33.jpg",
	link: "https://www.imdb.com/title/tt0903747/",
    description: ["Starred Bryan Cranston and Aaron Paul",
				  "Set in Albuquerque, but partially filmed in LA",
				  "Won 16 Emmy Awards", 
				  "Genre: Drama", 
				  "Released Year: 2008"
				  ]
  },
   {
     title: "The Office",
	 genre: "Comedy",
	 year: 2005,
    imageURL: "https://www.tallengestore.com/cdn/shop/products/118682164_1050x1400_41f12d05-42c1-4f5e-91ca-47f26f25a0fb.jpg?v=1570155292",
    link: "https://www.imdb.com/es/title/tt0386676/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520office%2520",
	description: ["Mockumentary-style sitcom",
				  "Starred Steve Carell, Rainn Wilson, and John Krasinski",
				  "Set in Scranton, but some scenes filmed in LA", 
				  "Genre: Comedy", 
				  "Released Year: 2005"
				  ]
  },
  {
  title: "The Last of Us",
  genre: "Drama",
  year: 2023,
  imageURL: "https://i.ebayimg.com/00/s/MTYwMFgxMDk0/z/~lwAAOSwV4tjyFrR/$_57.JPG?set_id=8800005007",
  link: "https://www.imdb.com/es/title/tt3581920/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520last%2520of",
  description: ["Based on the hit video game",
				"Starred Pedro Pascal and Bella Ramsey",
				"Some scenes filmed in Los Angeles", 
				"Genre: Drama", 
				"Released Year: 2023"
				]
}, 
{
  title: "Black Mirror",
  genre: "Sci-Fi",
  year: 2011,
  imageURL: "https://hips.hearstapps.com/hmg-prod/images/black-mirror-font-1513096756.jpg",
  link: "https://www.imdb.com/es/title/tt2085059/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_black%2520mir",
  description: ["Anthology series exploring dystopian tech themes",
				"Created by Charlie Brooker",
				"Some episodes filmed in LA", 
				"Genre: Sci-Fi", 
				"Released Year: 2011"
				]
}, 
{
  title: "The Sopranos",
  genre: "Drama",
  year: 1999,
  imageURL: "https://m.media-amazon.com/images/I/71yz+cOKE8L._AC_UF894,1000_QL80_.jpg",
  link: "https://www.imdb.com/es/title/tt0141842/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520sopra",
  description: ["Starred James Gandolfini as Tony Soprano",
				"Widely considered one of the greatest TV shows of all time",
				"Won 21 Primetime Emmy Awards",
	 			"Genre: Drama", "Released Year: 1999"
				]
}, 
{
  title: "Snowfall",
  genre: "Drama",
  year: 2017,
  imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe6Ezqoo-oStSvk7nQUh9rgNgOn5LTkhY_Cg&s",
  link: "https://www.imdb.com/es/title/tt6439752/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_snowfall",
  description: ["Created by John Singleton, Eric Amadio, and Dave Andron",
				"Set in 1980s Los Angeles during the crack cocaine epidemic",
				"Starred Damson Idris as Franklin Saint", 
				"Genre: Drama", 
				"Released Year: 2017"
				]
}, 
{
  title: "Game of Thrones",
  genre: "Drama",
  year: 2011,
  imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX60Jzu04x_G8OHcBGmy_GK6T4X1jLZgQ-JA&s",
  link: "https://www.imdb.com/es/title/tt0944947/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_game%2520of%2520throness",
  description: ["Based on the novels by George R. R. Martin",
				"Aired on HBO for 8 seasons",
				"Filmed in multiple countries including Northern Ireland and Croatia", "Genre: Drama", "Released Year: 2011"
				]
}, 
{
  title: "Sherlock",
  genre: "Crime/Drama",
  year: 2010,
  imageURL: "https://m.media-amazon.com/images/I/715+gKq5dEL._AC_UF894,1000_QL80_.jpg",
  link: "https://www.imdb.com/es/title/tt1475582/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_sherlock",
  description: ["Created by Steven Moffat and Mark Gatiss",
				"Starring Benedict Cumberbatch and Martin Freeman",
				"Based on Sir Arthur Conan Doyle's Sherlock Holmes stories",
				"Genre: Crime/Drama", "Released Year: 2010"
				]
}
  
];




//display cards on load
document.addEventListener("DOMContentLoaded", () => displayCards(shows)); // When the document is ready, display all show cards






//render cards function
function displayCards(dataArray) {
  const cardContainer = document.getElementById("card-container"); //get the container to hold the cards
  cardContainer.innerHTML = ""; //clear any existing content
  const templateCard = document.querySelector(".card"); //select the card template

  dataArray.forEach((show) => { //loop through each show object
    const nextCard = templateCard.cloneNode(true); //clone the card template
    nextCard.style.display = "block"; //make sure the card is visible

    nextCard.querySelector("h2").textContent = show.title; //set the title

    const imageLink = nextCard.querySelector("a.image-link"); //get the anchor tag for the image
    imageLink.href = show.link ? show.link : "#"; //set link or default to # if not available

    const img = imageLink.querySelector("img"); //get the img tag inside anchor
    img.src = show.imageURL; //set image source
    img.alt = `${show.title} Poster`; //set alt text for accessibility

    const ul = nextCard.querySelector("ul"); //get the list element to hold description
    ul.innerHTML = ""; //clear old list items
    show.description.forEach((desc) => { //loop through description
      const li = document.createElement("li"); //create new list item
      li.textContent = desc; //set the description text
      ul.appendChild(li); //add the list item to the list
    });

    cardContainer.appendChild(nextCard); //add the card to the container
  });
}





//a function to get a quote. 
function quoteAlert() {
  alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"); //displays quote when called
}





//a function that removes the last show.
function removeLastCard() {
  shows.pop(); //removes the last show from the array
  displayCards(shows); //re-render the cards
}





//this fucntion filters the genre. 
function filterByGenre(genre) {
  const filtered = shows.filter((show) => show.genre.toLowerCase() === genre.toLowerCase()); //it filters shows by matching genre
  displayCards(filtered); //re-render filtered list
}





//this function sorts the the shows by ascending and descending year. 
function sortByYear(descending = false) {
  const sorted = [...shows].sort((a, b) => //Copy and sort array
    descending ? b.year - a.year : a.year - b.year //Sort ascending or descending
  );
  displayCards(sorted); //re-render sorted list
}






//this function is for adding a new show by asking the user to input the title, genre, year, image url, and the description. 
function addShow() {
  const title = document.getElementById("titleInput").value.trim(); //title input
  const genre = document.getElementById("genreInput").value.trim(); //genre input
  const year = parseInt(document.getElementById("yearInput").value); // Get year input
  const imageURL = document.getElementById("imageInput").value.trim(); //image URL input
  const descriptionInput = document.getElementById("descriptionInput").value.trim(); //description input

  const errorMsg = document.getElementById("error-message"); //reference to error message element

  if (!title || !genre || !year || !imageURL || !descriptionInput) { //check if all fields are filled
    errorMsg.textContent = "Please fill out all fields before adding a show."; //if a field is empty, it returns an error message. 
    errorMsg.style.display = "block";
    return;
  }

  errorMsg.style.display = "none"; //hide error if validation passes

  const descriptionArray = descriptionInput.split(",").map(desc => desc.trim()); //Split description input into array and trim spaces

  const newShow = { //create new show object
    title,
    genre,
    year,
    imageURL,
    description: descriptionArray
  };

  shows.push(newShow); //add new show to array
  displayCards(shows); //re-render the list with the new show
}






//this function filters the shows by the genre selected by the user. 
function applyGenreFilter() {
  const select = document.getElementById("genreSelect"); //get the dropdown select
  const selectedGenre = select.value; //get the selected genre

  if (selectedGenre === "") {
    displayCards(shows); //show all shows if "All Genres" is selected
  } else {
    const filtered = shows.filter(show => show.genre.toLowerCase() === selectedGenre.toLowerCase()); //filter by genre
    displayCards(filtered); //re-render the filtered list
  }
}

//this functio is to search the site. 
document.addEventListener("DOMContentLoaded", function () {    //wait for HTML to load before running. 
  const searchInput = document.getElementById("search-input"); //get search input by its id.
  const cards = document.querySelectorAll(".card");  //select elements with class "card", items to filter. 

  searchInput.addEventListener("input", function () {   //implemented a event listener to the search input to detect when user types
    const query = searchInput.value.toLowerCase();   //converts users input to lowercase for case insensitive comparison. 

    cards.forEach((card) => {       //loops through each card to see if it matches. 
      const title = card.querySelector(".card-content h2").textContent.toLowerCase();
      if (title.includes(query)) {
        card.style.display = "block"; //show matching card. 
      } else {
        card.style.display = "none";  //hide nonmatching card. 
      }
    });
  });
});
