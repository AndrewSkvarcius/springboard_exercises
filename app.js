const $gifParty = $("#gif-party");
const $searchInput = $("#search");


function getGif(res) {
    let numResult = res.data.length;
    if(numResult){
        let randomId = Math.floor(Math.random() * numResult);
        let $newColumn = $("<div>" , {class: "col-md-4 col-12-mb-4"});
        let $newGif = $("<img>", {
            src: res.data[randomId].images.original.url, 
            class: "w-100"
        });
        $newColumn.append($newGif);
        $gifParty.append($newColumn);
    }
    
  }
  


$("form").on("submit",  async function(e) {
    e.preventDefault();
 
    let searchTerm = $searchInput.val();
     $searchInput.val("");
     

   const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "rGMfB1a1rCIAl80Rn2pXxdTIAaMHH0ut"
    }
  });
  //console.log(response)
  getGif(response.data);
});

$("#remove").on("click", function() {
    $gifParty.empty();
  });
   
