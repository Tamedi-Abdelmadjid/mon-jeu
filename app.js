// 'use strict'
//Création du canvas et du context
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const context = canvas.getContext('2d');

// Définition de la taille du canvas
 canvas. width = window.innerWidth;
 canvas.height= window.innerHeight;

// const button = document.createElement('button');
// document.canvas.appendChild(button)

// Définition du background

const backgroundImg = new Image ();
backgroundImg.src = 'map-village.jpg';


// Définition du sprite

const sprite = new Image();
sprite.src = 'sprite.png';




//Données du sprite
const player = {
    x:1,
    y:420,
    vitesse:3,
    width:32,
    height:48,
    imageX:0,
    imageY:0,
    aBougé:false
}
function afficherSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    context.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}




//définition des mouvements 
const keys = []
window.addEventListener('keydown', function (e){
    keys [0]= e.key
    // console.log(keys)   
    player.aBougé = true;
    

})
addEventListener('keyup', function(e){
     delete keys[0];
     player.aBougé = false;
})

function bouger (a,b){
    if(player.x + a > 0){
        player.x += a * player.vitesse
        // console.log(player.X)
    }
    if(player.y + b > 0){
        player.y += b * player.vitesse
    }
}
//Bouger mon sprite et gestion des collisions
function bougerSprite (){
    
    if (keys[0] == ['ArrowUp']){
        bouger(0,-1)
        player.imageY = 3
        
        // console.log('haut')
     }
    if (keys [0] == ['ArrowDown'] && player.y < 800-player.height){
        bouger(0, 1)
        player.imageY = 0
        // console.log('bas')
    }   
    if (keys [0] ==['ArrowLeft']){
        bouger(-1, 0);
        // console.log('gauche')
        player.imageY = 1
    }   
    if (keys [0] ==['ArrowRight'] && player.x < 1530-player.width){
        bouger(1, 0);
        player.imageY = 2
     }   
}
//Fonction pour animer le sprite

function animationDuSprite(){
    if(player.imageX<3 && player.aBougé){
        player.imageX++;
        // console.log(player.x)
        // console.log(player.y)
    }else {
        player.imageX =0;
    }
}


//Gestion des animations
let secondes = parseFloat(document.getElementById('secondes').textContent);
let debut = document.getElementById('debut');

let compteur = setInterval(function(){
    secondes--;
    // console.log('compteur')
    document.getElementById('secondes').textContent = secondes;
    // console.log(secondes)

    if (secondes <= 0){
        clearInterval(compteur);
        debut.remove()
    }
},1000)

// Gestion Des indices et des éléments du CV

// let test = document.getElementById('test').style;
let départ = document.getElementById('départ').style;
let panneau = document.getElementById('panneau').style;
let poule = document.getElementById('poule').style;
let barque = document.getElementById('barque').style;
let arbre = document.getElementById('arbre').style;
let maison1 = document.getElementById('maison1').style;
let maison2 = document.getElementById('maison2').style;
let cheval = document.getElementById('cheval').style;
let sapin = document.getElementById('sapin').style;
let fleur = document.getElementById('fleur').style;
let panneau2 = document.getElementById('panneau2').style;

// let monCss = test.style;
// let debut = test.style;
// let poule = test.style;
// let barque= test.style;
// let arbre = test.style;
// let maison1 = test.style;
// let maison2 = test.style;
// let  = test.style;
// let  = test.style;
// let  = test.style;
function affiche(){
    // if(player.x>=169 && player.x<=250 && player.y>=340 && player.y<=380){
       
    //     test.display ="block";
    //     // console.log(test)
    // }else {
    //     test.display = 'none'
    // }
    if(player.x == 1 && player.y==420 ){
       
        départ.display ="block";
        // console.log(test)
    }else {
        départ.display = 'none'
    }
    if(player.x>=73 && player.x<=112 && player.y>=378 && player.y <=420){
       
        panneau.display ="block";
        // console.log(test)
    }else {
        panneau.display = 'none'
    }
    if(player.x>=46 && player.x<=76 && player.y>=624 && player.y<=645){
       
        poule.display ="block";
        // console.log(test)
    }else {
        poule.display = 'none'
    }
    if(player.x>=420 && player.x<=535 && player.y>=522 && player.y<=546){
       
        barque.display ="block";
        // console.log(test)
    }else {
        barque.display = 'none'
    }
    if(player.x>=625 && player.x<=725 && player.y>=384 && player.y<=420){
       
        arbre.display ="block";
        // console.log(test)
    }else {
        arbre.display = 'none'
    }
    if(player.x>=1090 && player.x<= 1132 && player.y>=642 && player.y<= 663){
       
        maison1.display ="block";
        // console.log(test)
    }else {
        maison1.display = 'none'
    }
    if(player.x>=1378 && player.x<= 1435 && player.y>=633 && player.y<= 675){
       
        maison2.display ="block";
        // console.log(test)
    }else {
        maison2.display = 'none'
    }
    if(player.x>=799 && player.x<= 874 && player.y>=63 && player.y<= 102){
       
        cheval.display ="block";
        // console.log(test)
    }else {
        cheval.display = 'none'
    }
    if(player.x>=1243 && player.x<= 1303 && player.y>=339 && player.y<= 372){
       
        sapin.display ="block";
        // console.log(test)
    }else {
        sapin.display = 'none'
    }
    if(player.x>=1369 && player.x<= 1402 && player.y>=183 && player.y<= 204){
       
        fleur.display ="block";
        // console.log(test)
    }else {
        fleur.display = 'none'
    }
} 

//Fonction pour l'indice au panneau
let panneau3;
function afficherIndice(){
    panneau3 = window.setTimeout(afficherPanneau, 15000)
}
function afficherPanneau(){
    panneau2.display = "block"
}


// fonction générale pour l'affichage

function affichage(){
    context.clearRect(0,0,canvas.width,canvas.height)
    context.drawImage(backgroundImg,0,0,1530,800)
    afficherSprite(sprite,player.width*player.imageX,player.height*player.imageY,player.width,player.height,player.x,player.y,player.width,player.height)

    bougerSprite()

    animationDuSprite()

    affiche()

    afficherIndice()
    
    requestAnimationFrame(affichage)
}
affichage();



