const cards = [{num:1,type:'c'},{num:1, type:'s'},{num:1,type:'h'},{num:1,type:'d'},
{num:2,type:'c'},{num:2, type:'s'},{num:2,type:'h'},{num:2,type:'d'},
{num:3,type:'c'},{num:3, type:'s'},{num:3,type:'h'},{num:3,type:'d'},
{num:4,type:'c'},{num:4, type:'s'},{num:4,type:'h'},{num:4,type:'d'},
{num:5,type:'c'},{num:5, type:'s'},{num:5,type:'h'},{num:5,type:'d'},
{num:6,type:'c'},{num:6, type:'s'},{num:6,type:'h'},{num:6,type:'d'},
{num:7,type:'c'},{num:7, type:'s'},{num:7,type:'h'},{num:7,type:'d'},
{num:8,type:'c'},{num:8, type:'s'},{num:8,type:'h'},{num:8,type:'d'},
{num:9,type:'c'},{num:9, type:'s'},{num:9,type:'h'},{num:9,type:'d'},
{num:10,type:'c'},{num:10, type:'s'},{num:10,type:'h'},{num:10,type:'d'},
]

function Player(){
   var obj = {}
   obj.name = "player"   // ken sahhel raby nhottoha fel wejha
   obj.kaf = []          // array fih lkaf mta3 leplayer 
   obj.mekla = []        // array fih lmekla mta3 leplayer
   obj.combo = []    // array yet3abba bfunction esmha i7timelet te5o currentlytable w lkaf w trajja3 array of arrays fih i7timelet lkol 
   obj.plyerScore = 0
   obj.playerTurn = true
   return obj
}
function Game(){
    var game = {}
    game.table = []                // array fih li fo9 tawla when he get empty shkobba to the true player
    game.player = Player()         // array yetbaddel kol mayefragh kol jarya
    game.computer = Player()       // jarya toufa ki ykammel lcomputer 
    game.allCards = []             // feha carta machkya jarya loula ta3ty 3 lel player w arb3a fetawla w 3 lel computer                            
    game.jarya = 0                 // ki yefragh kaf lcomputer tetzed 1
    game.end = false               // ki yefregh tablou twalli true 
    
    return  game    
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
 var gameGenerate = {}
//$("#start").click(function(){
    function test(){
    var game1 = Game()
    game1.allCards = pickRandom()
    game1.player.kaf = game1.allCards.slice(0,3)
    game1.allCards.splice(0,3)
    game1.table = game1.allCards.slice(0,4)
    game1.allCards.splice(0,4)
    game1.computer.kaf = game1.allCards.slice(0,3)
    game1.allCards.splice(0,3)
    game1.computer.playerTurn = false
        Object.assign(gameGenerate,game1)
}

