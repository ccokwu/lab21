var lyrics = " ";

// $.get("/", function(data){
//   lyrics = data
// });

$.get("/api/lyrics", function(data){
  lyrics = data;
  //take the body of my response and set the equal to the value of that lyric
 //  console.log(lyrics);
});
