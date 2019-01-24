/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Yes or Yes","Dance the Night Away","Skyfall","Way Back Home","Me gusta Tu","The best thing i ever did"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var imgurl=["https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Twice_%E2%80%93_Yes_or_Yes.png/220px-Twice_%E2%80%93_Yes_or_Yes.png",
            "https://www.billboard.com/files/styles/article_main_image/public/media/TWICE-summer-nights-album-photo-2018-billboard-1548.jpg",
            "https://i.scdn.co/image/6c1ff4be73ca0342b351638a69043139815f5287",
            "https://i.ytimg.com/vi/c0QTIsdrStI/hqdefault.jpg",
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Flower-Bud.jpg/220px-Flower-Bud.jpg",
            "https://www.billboard.com/files/styles/article_main_image/public/media/TWICE-pr-ch-billboard-1548.jpg"];
var artist=["Twice","Twice","Damiano","Shaun","Gfriend","Twice"];
var songlengths=["4:29","4:09","4:14","3:34","4:11","3:33"];
var links=["https://www.youtube.com/watch?v=mAKsZ26SabQ",
            "https://www.youtube.com/watch?v=Fm5iP0S1z9w",
            "https://www.youtube.com/watch?v=Ipyn8qqXqGQ",
            "https://www.youtube.com/watch?v=S5yuugHlLBo",
            "https://www.youtube.com/watch?v=oixRBiOteWY",
            "https://www.youtube.com/watch?v=CfUGjK6gGgs"];
// BELOW Use forEach Loop to display the data from each of your array's in the correct div
       songmethod();
       function songmethod(){
        songs.forEach(function(eachsong, index){
            console.log(index);
            $("#songs").append("<p>"+eachsong+"</p>");
        });
         imgurl.forEach(function(eachimage){
            $("#images").append("<img src="+eachimage+">");
        });
         artist.forEach(function(eachartist){
            $("#artists").append("<p>"+eachartist+"</p>");
        });
        songlengths.forEach(function(eachlength){
            $("#lengths").append("<p>"+eachlength+"</p>");
        });
         links.forEach(function(eachlink){
            $("#links").append("<a href="+eachlink+">Song Link</a>");
        });
}

function emptySongInfo(){
    $("#songs").empty();
     $("#artists").empty();
      $("#lengths").empty();
       $("#images").empty();
        $("#links").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    var inputsong=$("#song").val();
    var inputartist=$("#artist").val();
    var inputlength=$("#length").val();
    var inputimage=$("#image").val();
    var inputlink=$("#link").val();
    
    songs.push(inputsong);
    imgurl.push(inputimage);
    artist.push(inputartist);
    songlengths.push(inputlength);
    links.push(inputlink);
    
     
 songmethod();

}

function deleteSonginfo(){
    var deletenum= $("#deletedsong").val();
    var realdeletenum=deletenum-1
     songs.splice(realdeletenum,1);
    imgurl.splice(realdeletenum,1);
    artist.splice(realdeletenum,1);
    songlengths.splice(realdeletenum,1);
    links.splice(realdeletenum,1);
    songmethod();
    
}
$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
  
});
$("#delete").click(function(){
    emptySongInfo();
    deleteSonginfo();
});
