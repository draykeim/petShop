var shop =[
    {
        title:"Dog", 
        image:"./pictures/dog1.jpg",
        price:425,
        description: "Big dog that loves attention!"
    },
    {
        title:"Other Dog",
        image:"./pictures/dog2.jpg",
        price:444,
        description:"Small mixed breed dog that loves to play."
    },
    {
        title:"Other Other Dog",
        image:"./pictures/dog3.jpeg",
        price:335,
        description:"Little dog that makes for a great comfort friend.",
    },
    {
        title:"Other Other Other Dog",
        image:"./pictures/dog4.jpg",
        price:465,
        description:"Big ol' dawg that just wants a hug."
    },
    {
        title:"Fluffy White Cat",
        image:"./pictures/cat01.jpg",
        price:600,
        description:"Has Heterochromia eyes, looks like a pillow."
    },
    {
        title:"Striped Cat",
        image:"./pictures/cat02.jpg",
        price:330,
        description:"Very calm, good natured. This cat has an old soul.",
    },
    {
        title:"Tabby Cat",
        image:"./pictures/cat03.jpg",
        price:455,
        description:"Looks very sweet, has a wonderful smile."
    },
    {
        title:"Black Cat",
        image:"./pictures/cat04.jpg",
        price:300,
        description:"Small, loves feathery toys and naps."
    },
    {
        title:"California King Snake",
        image:"./pictures/Hoose jps.jpg",
        price:240,
        description:"Timid, burrowing snake. Lives up to 20-25 years."
    },
    {
        title:"Leopard Gecko",
        image:"./pictures/leopard gecko.jpg",
        price:45,
        description:"Easy to care for, lots of personality."
    },
    {
        title:"Bearded Dragon",
        image:"./pictures/good beardy.jpg",
        price:180,
        description:"Incredibly social reptile that is a great pet."
    },
    {
        title:"Box Turtle",
        image:"./pictures/box turtle.jpg",
        price:225,
        description:"Surprisingly active, very pretty shell."
    }



]
var postHTML = " "
for (var i=0; i < shop.length; i++){
    var heading = "<div class='items'><span><h4>" + shop[i].title + "</h4>"
    var image = '<img src="' + shop[i].image + '"/'
    var price = "<p> $" + shop[i].price + "</p></span>"
    var description = '<div class="hoverItems"><p>'+ shop[i].description + '</p><button>Add to Cart</button></div></div>'
    var concatThis = heading + image + price + description
    postHTML = postHTML + concatThis
}
document.getElementById("shop").innerHTML = postHTML