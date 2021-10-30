let img = document.getElementById('change');
let button = document.getElementById('button');

button.addEventListener("click", changeNow);

function changeNow() {
    var img = document.getElementById("change");
    if (img.src === "https://i.pinimg.com/736x/db/63/32/db633275b729187b04859bbca38eb156--yellow-backpack-yellow-outfits.jpg") {
        img.src = "http://www.spiritanimal.info/wp-content/uploads/Wolf-Spirit-Animal-2.jpg";
    } else {
        img.src = "https://i.pinimg.com/736x/db/63/32/db633275b729187b04859bbca38eb156--yellow-backpack-yellow-outfits.jpg";
    }
}