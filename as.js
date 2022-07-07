var shop =[
    {
        title: "Dog Food",
        image:"./pictures/dogfood.jpg",
        price: 10.99,
        description: "Feed your canine friends with the best kibble!",
    },
    {
        title: "Cat Food",
        image:"./pictures/purina.jpg",
        price: 10.99,
        description: "Feed your feline friends with the best kibble!",
    },
    {
        title: "Cat Scratching Post",
        image:"./pictures/ScratchingPost.jpg",
        price: 25.00,
        description: "Better this than the sofa, we always say!",
    },
    {
        title: "Cat Mouse Toy",
        image:"./pictures/kittymouse.jpg",
        price: 7.00,
        description: "Give your kitties something to chase!",
    },
    {
        title: "Wooden Reptile Hide",
        image:"./pictures/reptilewoodhide.jpg",
        price: 7.00,
        description: "A lovely hide for your reptile to just get away and hide in.",
    },
    {
        title: "Tug Rope",
        image:"./pictures/Tug rope.jpg",
        price: 11.00,
        description: "Ever played Tug-Of-War with a dog? Now's your chance!",
    },
    {
        title: "Dog Bone",
        image:"./pictures/Doggybone.jpg",
        price: 7.00,
        description: "Your dog's favorite passtime!",
    },
    {
        title: "Bone Shaped Kong Toy",
        image:"./pictures/kongbone.jpg",
        price: 10.00,
        description: "A fillable rubbery bone for your dogs to chew on",
    },
    {
        title: "Feather Toy",
        image:"./pictures/catfeather.jpg",
        price: 2.50,
        description: "A swatting toy for your feline friend!",
    },
    {
        title: "Frisbee",
        image:"./pictures/frisbee23.jpg",
        price: 4.00,
        description: "A Frisbee for both human and dog alike!",
    },
    {
        title: "UVB Bulb",
        image:"./pictures/UVB.jpg",
        price: 9.99,
        description: "Light bulb used for important UVB rays for your reptile's skin",
    },
    {
        title: "Crickets",
        image:"./pictures/Cricket.jpg",
        price: 6.00,
        description: "Crickets of varying sizes for your reptilian friends to munch on",
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