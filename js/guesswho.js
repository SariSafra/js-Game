
const faces = [face0 = {
    face_name: "face0",
    mouth: "mouth2",
    others: "mustache",
    eyes: "eyes2",
    glasses: "glasses1"
},
face1 = {
    face_name: "face1",
    mouth: "mouth2",
    others: "none",
    eyes: "eyes1",
    glasses: "glasses3"
},
face2 = {
    face_name: "face2",
    mouth: "none",
    others: "mask",
    eyes: "eyes3",
    glasses: "glasses4"
}, face3 = {
    face_name: "face3",
    mouth: "mouth1",
    others: "none",
    eyes: "eyes2",
    glasses: "glasses2"
},
face4 = {
    face_name: "face4",
    mouth: "mouth4",
    others: "mustache",
    eyes: "eyes2",
    glasses: "glasses1"
},
face5 = {
    face_name: "face5",
    mouth: "mouth2",
    others: "mustache",
    eyes: "eyes3",
    glasses: "glasses4"
}, face6 = {
    face_name: "face6",
    mouth: "none",
    others: "mask",
    eyes: "eyes1",
    glasses: "glasses3"
},
face7 = {
    face_name: "face7",
    mouth: "mouth1",
    others: "freckles",
    eyes: "eyes4",
    glasses: "glasses2"
},
face8 = {
    face_name: "face8",
    mouth: "mouth4",
    others: "none",
    eyes: "eyes2",
    glasses: "glasses1"
}, face9 = {
    face_name: "face9",
    mouth: "mouth2",
    others: "freckles",
    eyes: "eyes1",
    glasses: "glasses3"
},
face10 = {
    face_name: "face10",
    mouth: "none",
    others: "mask",
    eyes: "eyes2",
    glasses: "glasses4"
},
face11 = {
    face_name: "face11",
    mouth: "none",
    others: "mask",
    eyes: "eyes3",
    glasses: "glasses3"
}, face12 = {
    face_name: "face12",
    mouth: "mouth4",
    others: "mustache",
    eyes: "eyes2",
    glasses: "glasses2"
},
face13 = {
    face_name: "face13",
    mouth: "mouth2",
    others: "none",
    eyes: "eyes1",
    glasses: "glasses1"
},
face14 = {
    face_name: "face14",
    mouth: "mouth1",
    others: "freckles",
    eyes: "eyes4",
    glasses: "glasses4"
}, face15 = {
    face_name: "face15",
    mouth: "mouth4",
    others: "mustache",
    eyes: "eyes3",
    glasses: "glasses3"
},
face16 = {
    face_name: "face16",
    mouth: "mouth2",
    others: "none",
    eyes: "eyes4",
    glasses: "glasses1"
},
face17 = {
    face_name: "face17",
    mouth: "none",
    others: "mask",
    eyes: "eyes1",
    glasses: "glasses4"
}, face18 = {
    face_name: "face18",
    mouth: "mouth1",
    others: "freckles",
    eyes: "eyes3",
    glasses: "glasses2"
},
face19 = {
    face_name: "face19",
    mouth: "mouth4",
    others: "none",
    eyes: "eyes2",
    glasses: "glasses2"
},
face20 = {
    face_name: "face20",
    mouth: "mouth1",
    others: "mustache",
    eyes: "eyes3",
    glasses: "glasses1"
}, face21 = {
    face_name: "face21",
    mouth: "mouth1",
    others: "none",
    eyes: "eyes3",
    glasses: "glasses4"
},
face22 = {
    face_name: "face22",
    mouth: "none",
    others: "mask",
    eyes: "eyes1",
    glasses: "glasses2"
},
face23 = {
    face_name: "face23",
    mouth: "mouth4",
    others: "freckles",
    eyes: "eyes4",
    glasses: "glasses3"
}
];
const random_index =  6;//Math.floor(Math.random() * 24);
console.log(random_index);
let points = 0;
function reload_page() {
    location.reload();
}
create_board_game();

function create_board_game() {
    const faces_board = document.getElementById("faces_board");
    let count = 0;
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 12; j++) {
            let face_img = document.createElement('img');
            face_img.src = `../img/face/face${count}.png`;
            face_img.id = `face${count}`;
            face_img.classList = 'faces';
            faces_board.appendChild(face_img);
            face_img.addEventListener('click', show_total_face => {
                if (faces[random_index].face_name == `${face_img.id}`) {
                    let final_face = document.getElementById("basic_face_container");
                    final_face.style.display = 'none';
                    let basic_face_container = document.createElement('div');
                    let winning_face = document.createElement('img');
                    winning_face.src = `../img/face/face${random_index}.png`;
                    winning_face.style.width = '400px';
                    basic_face_container.appendChild(winning_face);                    
                    document.getElementById("basic_face").appendChild(basic_face_container);
                    let audio = new Audio('../audio/game_win.mp3');
                    audio.play();
                    points = points + 20;
                    change_points(points);
                    game_over();                    
                }
                else {
                    let audio = new Audio('../audio/wrong_choice.wav');
                    audio.play();
                    points = points - 5;
                    change_points(points);
                }
            });          
            count++;

        }

    }
}
function check_if_in_random_picture(img_id, img_class, img_src)
{
            if (faces[random_index].mouth == img_id || faces[random_index].eyes == img_id || faces[random_index].others == img_id || faces[random_index].glasses == img_id) {
                 if(img_class == "mouth") {
                    mouth(img_src);
                 } else if(img_class == "eyes") {
                    eyes(img_src);
                 }  else if(img_class == "glasses") {
                    glasses(img_src);
                 }  else if(img_class == "others") {
                    others(img_src, img_id);
                 }
            let audio = new Audio('../audio/right_element.mp3');
            audio.play();
            points = points + 3;
            change_points(points);
        }
        else {
            let audio = new Audio('../audio/wrong_choice.wav');
            audio.play();
            if (points < 3) {
                points = 0;
            } else {
                points = points - 3;
                change_points(points);
            }
        }
}
function mouth(img_src) {
    let new_picutre = document.createElement('img');
    new_picutre.src = img_src;
    new_picutre.style.zIndex = "3";
    new_picutre.style.width = '100px';  
    new_picutre.style.position = "absolute";         
    new_picutre.style.top = "73%"; 
    new_picutre.style.left = "41%";
    document.getElementById("basic_face_container").appendChild(new_picutre);
}
function eyes(img_src) {

    let new_picutre = document.createElement('img');
    new_picutre.src = img_src;
    new_picutre.style.zIndex = "3";
    new_picutre.style.width = '166px';  
    new_picutre.style.position = "absolute";         
    new_picutre.style.top = "49%"; 
    new_picutre.style.left = "38%";
    document.getElementById("basic_face_container").appendChild(new_picutre);
}
function glasses(img_src) {
    let new_picutre = document.createElement('img');
    new_picutre.src = img_src;
    new_picutre.style.zIndex = "4";
    new_picutre.style.width = '237px';  
    new_picutre.style.position = "absolute";         
    new_picutre.style.top = "48%"; 
    new_picutre.style.left = "35%";
    document.getElementById("basic_face_container").appendChild(new_picutre);
}
function others(img_src, img_id) {
    if(img_id == "mustache")
    {
        let new_picutre = document.createElement('img');
        new_picutre.src = img_src;
        new_picutre.style.zIndex = "3";
        new_picutre.style.width = '165px';  
        new_picutre.style.position = "absolute";         
        new_picutre.style.top = "68%"; 
        new_picutre.style.left = "38.5%";
        document.getElementById("basic_face_container").appendChild(new_picutre);
    } else if(img_id == "freckles") {
        let new_picutre = document.createElement('img');
        new_picutre.src = img_src;
        new_picutre.style.zIndex = "3";
        new_picutre.style.width = '190px';  
        new_picutre.style.position = "absolute";         
        new_picutre.style.top = "62%"; 
        new_picutre.style.left = "37.5%";
        document.getElementById("basic_face_container").appendChild(new_picutre);
    } else if(img_id == "mask") {
        let new_picutre = document.createElement('img');
        new_picutre.src = img_src;
        new_picutre.style.zIndex = "3";
        new_picutre.style.width = '275px';  
        new_picutre.style.position = "absolute";         
        new_picutre.style.top = "63%"; 
        new_picutre.style.left = "34%";
        document.getElementById("basic_face_container").appendChild(new_picutre);
    }
    
}

function game_over() {
    document.body.style.opacity = "50%";    
    document.getElementById("winning_message_div").style.display = 'block';
    start_fireworks();
}
function change_points(points) {
    let points_p = document.getElementById("points_p");
    if (points < 0) {
        points = 0;
    }
    points_p.innerText = points;

}



document.getElementById("back_to_signing").addEventListener('click', back_to_login_page => {
    self.location = "login.html";
})

document.getElementById("back_to_homepage").addEventListener('click', back_to_login_page => {
    self.location = "hoempage.html";
})