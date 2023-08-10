const cards = [{num:1,type:'c',img: './cartes/1t.png'},
{num:1, type:'s',img: './cartes/1p.png'},
{num:1,type:'h',img:'./cartes/1c.png'},
{num:1,type:'d',img:'./cartes/1d.png'},
{num:2,type:'c',img:'./cartes/2t.png'},
{num:2, type:'s',img:'./cartes/2p.png'},
{num:2,type:'h',img:'./cartes/2c.png'},
{num:2,type:'d',img:'./cartes/2d.png'},
{num:3,type:'c',img:'./cartes/3t.png'},
{num:3, type:'s',img:'./cartes/3p.png'},
{num:3,type:'h',img:'./cartes/3c.png'},
{num:3,type:'d',img:'./cartes/3d.png'},
{num:4,type:'c',img:'./cartes/4t.png'},
{num:4, type:'s',img:'./cartes/4p.png'},
{num:4,type:'h',img:'./cartes/4c.png'},
{num:4,type:'d',img:'./cartes/4d.png'},
{num:5,type:'c',img:'./cartes/5t.png'},
{num:5, type:'s',img:'./cartes/5p.png'},
{num:5,type:'h',img:'./cartes/5c.png'},
{num:5,type:'d',img:'./cartes/5d.png'},
{num:6,type:'c',img:'./cartes/6t.png'},
{num:6, type:'s',img:'./cartes/6p.png'},
{num:6,type:'h',img:'./cartes/6c.png'},
{num:6,type:'d',img:'./cartes/6d.png'},
{num:7,type:'c',img:'./cartes/7t.png'},
{num:7, type:'s',img:'./cartes/7p.png'},
{num:7,type:'h',img:'./cartes/7c.png'},
{num:7,type:'d',img:'./cartes/7d.png'},
{num:8,type:'c',img:'./cartes/8t.png'},
{num:8, type:'s',img:'./cartes/8p.png'},
{num:8,type:'h',img:'./cartes/8c.png'},
{num:8,type:'d',img:'./cartes/8d.png'},
{num:9,type:'c',img:'./cartes/9t.png'},
{num:9, type:'s',img:'./cartes/9p.png'},
{num:9,type:'h',img:'./cartes/9c.png'},
{num:9,type:'d',img:'./cartes/9d.png'},
{num:10,type:'c',img:'./cartes/10t.png'},
{num:10, type:'s',img:'./cartes/10p.png'},
{num:10,type:'h',img:'./cartes/10c.png'},
{num:10,type:'d',img:'./cartes/10d.png'},
]




function Player(){
  var obj = {}
  obj.name = "player"   // ken sahhel raby nhottoha fel wejha
  obj.kaf = []          // array fih lkaf mta3 leplayer 
  obj.mekla = []        // array fih lmekla mta3 leplayer
  obj.combo = []  
  obj.choises = []   // array yet3abba bfunction esmha i7timelet te5o currentlytable w lkaf w trajja3 array of arrays fih i7timelet lkol 
  obj.plyerScore = 0
  obj.currentCard=null
  obj.playerTurn = true
  return obj
}
function Game(){
   var game = {}
   game.table = [] 
           // array fih li fo9 tawla when he get empty shkobba to the true player
   game.player = Player()         // array yetbaddel kol mayefragh kol jarya
   game.computer = Player()       // jarya toufa ki ykammel lcomputer 
   game.allCards =  pickRandom()              // feha carta machkya jarya loula ta3ty 3 lel player w arb3a fetawla w 3 lel computer
   game.jarya = 0                 // ki yefragh kaf lcomputer tetzed 1
   game.end = false 
   game.inject=onInitInject 
   game.computerRound=computerRound
   game.playerRound = playerRound
   game.injectTable=injectTableGame  
   game.updateComputerKafAndMekla =updateComputerKafAndMekla 
   game.updatePlayerKafAndMekla  =updatePlayerKafAndMekla 
   game.getchoises=getchoises
   game.resetChoices=resetChoices
   
   // ki yefregh tablou twalli true 
  // game.checkCombo=checkCombo
   return  game
}
function resetChoices(){
  this.player.currentCard=null
  this.player.choises=[]
}

function getchoises(e,id){
  console.log("eele",e);
$(`#${id}`).addClass("avtive");
console.log("currentCard",this.player.currentCard);
console.log("choises",this.player.choises);
console.log(this.player.choises.indexOf(e)===-1&&this.player.currentCard);



if(this.player.choises.indexOf(e)===-1&&this.player.currentCard){
  this.player.choises.push(e)
  }

}
pickRandom = function(){
   var n = cards.length
   var arr = []
   Object.assign(arr,cards)
   var randomCard = []
   for(var i = 0; i < 40; i++){
       randomPick =  Math.floor(Math.random() * n)
       randomCard.push(arr[randomPick])
       n = n - 1
       arr.splice(randomPick,1)
   }
   return randomCard
}
function updatePlayerKafAndMekla(){
  var that=this
  var kafPlayerContainer=$('#player_Container')
  console.log('kafPlayerContainer',kafPlayerContainer)
  kafPlayerContainer.empty()
  console.log("updatePlayerKafAndMekla",this.player.kaf)
  each(this.player.kaf,function(e){
  console.log(e);
    var cid =e.type+e.num
    kafPlayerContainer.append(`<img  id="${cid}"  class="cardTablePlayer" alt="${cid}" src=${e.img}>`)
  })
  $(`#reset`).click(that.resetChoices)
  console.log("inject",this.table)
  $(".tapis").empty()
  each(this.table,function(e){
    var cardElement= e.type+e.num
    $(".tapis").append(`<img id=${cardElement} class="cardTable" src=${e.img}>`)
    $(`#${cardElement}`).click(function(){
      that.getchoises(e)
    })
  })
}
function updateComputerKafAndMekla(){
  var kafComputerContainer=$('#computer_Container')
  kafComputerContainer.empty()
  console.log("computer kaf", this.computer.kaf)
 
  each(this.computer.kaf,function(e){
  
    var cid =e.type+e.num
    kafComputerContainer.append(`<img  id="${cid}" class="cardTableComputer" src="${e.img}">`)
  })
  $(".tapis").empty()
  each(this.table,function(e){
    $(".tapis").append(`<img class="cardTable" src=${e.img}>`)
  })
}
function playerRound(e){
  this.player.currentCard=e
  console.log("player")

  var currentCard=(this.player.kaf).indexOf(e)

  var copy=[...this.player.choises]
  var combo=foundComboOfOneCard3(this.player.currentCard,copy)
  if(combo.length){
    for(var i = 0; i < combo.length; i++){
      this.table.splice((this.table).indexOf(combo[i]),1)
  
    }
    var spliced = this.player.kaf[currentCard]
    this.player.kaf.splice(currentCard,1)
    console.log(this.player.kaf)
      this.player.mekla.push(spliced)
      this.updatePlayerKafAndMekla()
      this.computerRound()
      return
}

alert("please choose the right combo")
var spliced = this.player.kaf[currentCard]
this.player.kaf.splice(currentCard,1)
console.log(this.player.kaf)
  this.table.push(spliced)
  this.updatePlayerKafAndMekla()
  this.computerRound()
  return
}
function computerRound(){
//   console.log(e);
// console.log(this.computer.kaf);
 
  console.log("combo",combo)
  for (let j = 0; j < this.computer.kaf.length; j++) {
    var currentCard=(this.computer.kaf).indexOf(this.computer.kaf[j])
  var copy=[...this.table]
  var combo=foundComboOfOneCard3(this.computer.kaf[j],copy)
 
  if(combo.length){
   for(var i = 0; i < combo.length; i++){
     this.table.splice((this.table).indexOf(combo[i]),1)
 
   }
   console.log("table card", this.table)

  }

}
var spliced = this.computer.kaf[this.computer.kaf.length-1]
this.computer.kaf.splice(this.computer.kaf.length-1,1)
this.table.push(spliced)
this.updateComputerKafAndMekla()
 console.log(combo);

}
// function checkCombo(){
//   var id = getId()
//   this.player.kaf
// }
function pushCard(e){

}

function onInitInject(){
  var kafPlayerContainer=$('#player_Container')
  var kafComputerContainer=$('#computer_Container')
  kafPlayerContainer.empty()
  kafComputerContainer.empty()
  var that=this
  this.player.kaf = this.allCards.slice(0,3)
  this.allCards.splice(0,3)
  this.computer.kaf = this.allCards.slice(0,3)
  this.allCards.splice(0,3)
  
  console.log("this",this);
  console.log("kafPlayerContainer",kafPlayerContainer)
  console.log("kafComputerContainer",kafComputerContainer)
  console.log("this.computer.kaf",this.computer.kaf)
  
  
  each(this.player.kaf,function(e){
    var current =e.type+e.num
    // var func=this.getId

    kafPlayerContainer.append(`<img  id="${current}"  class="cardTablePlayer" alt="${current}" src=${e.img}>`)
  $(`#${current}`).click(function(){
    that.player.currentCard=e
  setTimeout(function () {
    that.playerRound(e)
  }, 5000);
  })
  })
  
  each(this.computer.kaf,function(e){
  
    var cid =e.type+e.num
    kafComputerContainer.append(`<img  id="${cid}" alt="${cid}" class="cardTableComputer" src="${e.img}">`)
    $(`#${cid}`).click(function(){
      that.computerRound(e)
      })
  })
}


function injectTableGame(){
     this.table = this.allCards.slice(0,4)
    this.allCards.splice(0,4)
    var that=this
    each(this.table,function(e){
      var cardElement= e.type+e.num
      $(".tapis").append(`<img id=${cardElement} class="cardTable" src=${e.img}>`)
      $(`#${cardElement}`).click(function(){
        that.getchoises(e,cardElement)
      })
    })
}

 
// $('.carte').click(function(){
//   console.log('happy birthday firas')
// })

var gameGenerate =Game()
console.log(gameGenerate);
gameGenerate.inject()
gameGenerate.injectTable()
// //$("#start").click(function(){
//    function test(){
//    var game1 = Game()
//    game1.allCards = pickRandom()
//    game1.player.kaf = game1.allCards.slice(0,3)
//    game1.allCards.splice(0,3)
//    game1.table = game1.allCards.slice(0,4)
//    game1.allCards.splice(0,4)
//    game1.computer.kaf = game1.allCards.slice(0,3)
//    game1.allCards.splice(0,3)
//    game1.computer.playerTurn = false
//        Object.assign(gameGenerate,game1)
// }

// function onInitInject(){
//    var kafPlayerContainer=$('#player_Container')
//    var kafComputerContainer=$('#computer_Container')



// }




function dinari(arr){
    var din=0
    for(var i=0;i<arr.length;i++){
        if (arr[i].type==='d'){
            din=din+1
        }
    }
    if(din>5){
        return 1
    }
    return 0
    
}


function bermila(arr){
    var ber=0
    for(var i=0;i<arr.length;i++){
        if (arr[i].num===7){
            ber=ber+1
        }
    }
    if( ber>2 ){
        return 1
    }
    else if (ber===2){
        ber=0
         for(var i=0;i<arr.length;i++){
        if (arr[i].num===6){
            ber=ber+1
        }
    }
    if (ber>2){
        return 1}
  
    return 0
    }
    return 1
 
}

function haya (arr){
    var hay =0
    for(var i=0;i<arr.length;i++){
        if (arr[i].type==='d' && arr[i].num===7){
            return hay=1
        }
    }
    return hay  
}



function carta (arr){
    if( arr.length>20){
        return 1
    }
    return 0
}

function score(arr){
    sc= carta (arr)+ haya (arr)+bermila(arr)+dinari(arr)
    return sc
}




function each(coll, func) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
      }
    } else {
      for (var key in coll) {
        func(coll[key], key);
      }
    }
  }
  
 
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
      // notice we added the index here
      if (predicate(element, index)) {
        // notice we added the index here
        acc.push(element);
      }
    });
    return acc;
  }


function tableReduce(card,table){
    return filter(table,function(element){
        return card.num >= element.num
    })

}
function eachCardReduce(kaf,table){ 
    var result = []
    for(var i = 0; i < kaf.length; i++){           // ta3mel reduce lel array trajja3 array of arrays
        result.push(tableReduce(kaf[i],table))
    }
    return result
}
function foundComboOfOneCard3(card,arr){   
              // second parameter would take the output of eachCardReduce
  for(var i = 0; i < arr.length ; i++){

    if(arr[i].num===card.num){
      return [arr[i]]
    }
  }
    arr.push(0)
    var x = 0
    var combo = []
    var result = []
    for(var i = 0; i < arr.length - 1; i++){
      
        for(var j = i+1; j < arr.length; j++){
            for(var l = j+1; l < arr.length; l++){
                
                if(card.num === arr[i].num + arr[j].num +arr[l].num && x !== arr[i].num + arr[j].num +arr[l].num){
                    x = arr[i].num + arr[j].num +arr[l].num
                    combo.push(arr[i])
                    combo.push(arr[j])                                   /* mahyech mrigla barcha */
                    combo.push(arr[l])
                    result.push(...combo)
                    combo = []
                }
                else if(card.num === arr[i].num + arr[j].num && x !== arr[i].num + arr[j].num){
                    x = arr[i].num + arr[j].num
                    combo.push(arr[i])
                    combo.push(arr[j])
                    result.push(...combo)
                    combo = []
                }
                else if(card.num === arr[i].num && x !== arr[i].num){
                    x = arr[i].num
                    combo.push(arr[i])
                    combo.push(arr[j])
                    result.push(...combo)
                    combo = []

                }

            }
        }
    }
    return result 
}

function shkobba(obj){
   if(obj.jarya !== 0 && obj.table.length === 0){
    if(obj.player.playerTurn){
      obj.player.score++
    }
    else if(obj.computer.playerTurn){
      obj.computer.score++
    }
   }
}

function injectCards(obj){
                                                    //
}
