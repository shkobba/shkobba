// const cards = [{num:1,type:'c'},{num:1, type:'s'},{num:1,type:'h'},{num:1,type:'d'},
// {num:2,type:'c'},{num:2, type:'s'},{num:2,type:'h'},{num:2,type:'d'},
// {num:3,type:'c'},{num:3, type:'s'},{num:3,type:'h'},{num:3,type:'d'},
// {num:4,type:'c'},{num:4, type:'s'},{num:4,type:'h'},{num:4,type:'d'},
// {num:5,type:'c'},{num:5, type:'s'},{num:5,type:'h'},{num:5,type:'d'},
// {num:6,type:'c'},{num:6, type:'s'},{num:6,type:'h'},{num:6,type:'d'},
// {num:7,type:'c'},{num:7, type:'s'},{num:7,type:'h'},{num:7,type:'d'},
// {num:8,type:'c'},{num:8, type:'s'},{num:8,type:'h'},{num:8,type:'d'},
// {num:9,type:'c'},{num:9, type:'s'},{num:9,type:'h'},{num:9,type:'d'},
// {num:10,type:'c'},{num:10, type:'s'},{num:10,type:'h'},{num:10,type:'d'},
// ]
const cards = [
{num:1,type:'c',img: './1t.png'},
{num:1, type:'s',img: './1p.png'},{num:1,type:'h',img:'./1c.png'},{num:1,type:'d',img:'./1d.png'},
{num:2,type:'c',img:'./2t.png'},{num:2, type:'s',img:'./2p.png'},{num:2,type:'h',img:'./2c.png'},
{num:2,type:'d',img:'./2d.png'},{num:3,type:'c',img:'./3t.png'},{num:3, type:'s',img:'./3p.png'},
{num:3,type:'h',img:'./3c.png'},{num:3,type:'d',img:'./3d.png'},{num:4,type:'c',img:'./4t.png'},
{num:4, type:'s',img:'./4p.png'},{num:4,type:'h',img:'./4c.png'},{num:4,type:'d',img:'./4d.png'},
{num:5,type:'c',img:'./5t.png'},{num:5, type:'s',img:'./5p.png'},{num:5,type:'h',img:'./5c.png'},
{num:5,type:'d',img:'./5d.png'},{num:6,type:'c',img:'./6t.png'},{num:6, type:'s',img:'./6p.png'},
{num:6,type:'h',img:'./6c.png'},{num:6,type:'d',img:'./6d.png'},{num:7,type:'c',img:'./7t.png'},
{num:7, type:'s',img:'./7p.png'},{num:7,type:'h',img:'./7c.png'},{num:7,type:'d',img:'./7d.png'},
{num:8,type:'c',img:'./8t.png'},{num:8, type:'s',img:'./8p.png'},{num:8,type:'h',img:'./8c.png'},
{num:8,type:'d',img:'./8d.png'},{num:9,type:'c',img:'./9t.png'},{num:9, type:'s',img:'./9p.png'},
{num:9,type:'h',img:'./9c.png'},{num:9,type:'d',img:'./9d.png'},{num:10,type:'c',img:'1./0t.png'},
{num:10, type:'s',img:'1./0p.png'},{num:10,type:'h',img:'1./0c.png'},{num:10,type:'d',img:'1./0d.png'},
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
$("#start").click(function(){
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
})

function onInitInject(){
    var kafPlayerContainer=$('#player_Container')
    var kafComputerContainer=$('#computer_Container')

}

