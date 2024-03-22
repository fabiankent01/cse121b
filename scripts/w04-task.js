/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Iwinosa Fabian Idahosa",
    photo: "images/tinywow_IMG_8236_34542472.jpg",
    favoriteFoods: ["Turkey", "Steak", "Chicken", "Rice"],
    hobbies: ["Play piano", "Play cards", "Movies", "Sing"],
    placesLived: []    
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Benin City, Edo State, Nigeria",
        year: "22 years"
    },
    {
        place: "Freetown, Sierra-Leone",
        year: "1 year"
    },
    {
        place: "Bo, Sierra-Leone",
        year: "1 year"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
let photo_out = document.getElementById("photo");
photo_out.setAttribute("src", myProfile.photo);
photo.width = 240;
photo.height = 300;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
for(i=0;myProfile.placesLived.length>0;i++ ){
    const dt = document.createElement("dt");
    dt.textContent = myProfile.placesLived[i].place;

    const dd = document.createElement("dd");
    dd.textContent = myProfile.placesLived[i].year;

    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
}
