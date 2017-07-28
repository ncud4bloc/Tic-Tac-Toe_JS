var $content = $('#content');
var $title = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="gTitle"><h2>Tic-Tac-Toe</h2></div>');
var $plyrInfo = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="plyrInfo"></div>');
var $plyr1 = $('<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xs-push-3 col-sm-push-3 col-md-push-3 col-lg-push-2 pInfo" id="plyr1">Player 1:</div>');
var $name1 = $('<div class="col-xs-2 col-sm-2 col-md-2 col-lg-1 col-xs-push-3 col-sm-push-2 col-md-push-2 col-lg-push-2 pInfo" id="name1">Name 1</div>');
var $win1 = $('<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xs-push-2 col-sm-push-2 col-md-push-2 col-lg-push-2 pInfo" id="win1">Wins</div>');
var $start = $('<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xs-push-3 col-sm-push-2 col-md-push-2 col-lg-push-2" id="start">Start</div>');
var $plyr2 = $('<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xs-push-3 col-sm-push-3 col-md-push-3 col-lg-push-2 pInfo" id="plyr2">Player 2:</div>');
var $name2 = $('<div class="col-xs-2 col-sm-2 col-md-2 col-lg-1 col-xs-push-3 col-sm-push-2 col-md-push-2 col-lg-push-2 pInfo" id="name2">Name 2</div>');
var $win2 = $('<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xs-push-2 col-sm-push-2 col-md-push-2 col-lg-push-2 pInfo" id="win2">Wins</div>');
var $whosTurn = $('<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-push-3 col-sm-push-3 col-md-push-3 col-lg-push-3" id="whosTurn">Click \'Start\' to Begin</div>');
var $gameBoard = $('<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-push-3 col-sm-push-3 col-md-push-3 col-lg-push-3" id="gameBoard"></div>');
var $box11 = $('<div class="box col-xs-4 col-sm-4 col-md-4 col-lg-4" id="b11"></div>');
var $box12 = $('<div class="box col-xs-4 col-sm-4 col-md-4 col-lg-4" id="b12"></div>');
var $box13 = $('<div class="box col-xs-4 col-sm-4 col-md-4 col-lg-4" id="b13"></div>');
var $box21 = $('<div class="box col-xs-4 col-sm-4 col-md-4 col-lg-4" id="b21"></div>');
var $box22 = $('<div class="box col-xs-4 col-sm-4 col-md-4 col-lg-4" id="b22"></div>');
var $box23 = $('<div class="box col-xs-4 col-sm-4 col-md-4 col-lg-4" id="b23"></div>');
var $box31 = $('<div class="box col-xs-4 col-sm-4 col-md-4 col-lg-4" id="b31"></div>');
var $box32 = $('<div class="box col-xs-4 col-sm-4 col-md-4 col-lg-4" id="b32"></div>');
var $box33 = $('<div class="box col-xs-4 col-sm-4 col-md-4 col-lg-4" id="b33"></div>');

var $p1, $p2;
var nWins1 = 0;
var nWins2 = 0;
var count = 0;
var boxID;
var sMessage;

$content.append($title);

$content.append($plyrInfo);
    $plyrInfo.append($plyr1);
    $plyrInfo.append($name1);
    $plyrInfo.append($win1);
    $plyrInfo.append($start);
    $plyrInfo.append($plyr2);
    $plyrInfo.append($name2);
    $plyrInfo.append($win2);

$content.append($whosTurn);

$content.append($gameBoard);
    $gameBoard.append($box11);
    $gameBoard.append($box12);
    $gameBoard.append($box13);
    $gameBoard.append($box21);
    $gameBoard.append($box22);
    $gameBoard.append($box23);
    $gameBoard.append($box31);
    $gameBoard.append($box32);
    $gameBoard.append($box33);

/* -----  CSS  ----- */

$content.css({
    'width': '100%',
    'height': '785px',
    'background-color': '#2263c9',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover'
});

$title.css({
    'text-align': 'center',
    'margin-top': '-40px',
    'margin-bottom': '20px',
    'background-color': '#2263c9',
    'font-family': '"Yellowail", cursive',
    'font-size': '48px',
    'font-weight': '900'
});

$start.css({
    'height': '60px',
    'font-family': '"Lemonada", cursive',
    'font-size': '28px',
    'text-align': 'center',
    'border': '1px solid #000',
    'border-radius': '30px',
    'float': 'left',
    'margin-top': '-20px',
    'background-color': '#6cf508'
});

$plyrInfo.css({
    'height': '40px',
    'background-color': '#2263c9'
});

$('.pInfo').css({
    'height': '40px',
    'font-family': '"Lemonada", cursive',
    'font-size': '16px',
    'text-align': 'center',
    'color': '#ff0',
    'background-color': '#2263c9'
});

$whosTurn.css({
    'height': '40px',
    'font-family': '"Courgette", cursive',
    'font-size': '36px',
    'color':'#fff',
    'text-align': 'center',
    'background-color': '#fff',
    'margin-top': '10px',
    'margin-bottom': '10px',
    'background-color': '#2263c9'
});

$gameBoard.css({
    'height': '492px',
    'background-color': '#2263c9',
    'clear': 'left'
});

$('.box').css({
    'height': '160px',
    'background-color': '#7b7b81',
    'border-top': '2px solid #0606b2',
    'border-left': '2px solid #0606b2'
});

$box13.css({
    'border-right': '2px solid #0606b2'
});

$box23.css({
    'border-right': '2px solid #0606b2'
});

$box31.css({
    'border-bottom': '2px solid #0606b2'
});

$box32.css({
    'border-bottom': '2px solid #0606b2'
});

$box33.css({
    'border-right': '2px solid #0606b2',
    'border-bottom': '2px solid #0606b2'
});




/* -----  Functions  ----- */

var initPlayers = function(){
    $p1 = prompt('Enter Player 1 name');
    $p2 = prompt('Enter Player 2 name');
};

function Player(pName,pIcon,pTurn,pSquares,pVictory,pWins){
    this.name = pName;
    this.icon = pIcon;
    this.squares = pSquares;
    this.victory = pVictory;
    this.wins = pWins;
}


/* -----  Function Calls  ----- */

$(function(){
    
    $start.on('click',function(){
        $('.box').on('click');
        $('.box').css({
                'background-image': 'none',
                'background-color': '#7b7b81'
            });
        initPlayers();
        var $gamer1 = new Player($p1,"X","yes",[],"no",0);
        var $gamer2 = new Player($p2,"O","no",[],"no",0);
        sMessage = $gamer1.name + "\'s Turn";
        $whosTurn.text(sMessage);
        $name1.text($p1);
        $name2.text($p2);
        $win1.text('Wins: ' + nWins1);
        $win2.text('Wins: ' + nWins2);
        
        var putDown = function(clickedBox,boxNum){
            count ++;
            clickedBox.css({
                'background-repeat': 'no-repeat',
                'background-position': 'center',
                'background-size': 'cover'
            });
            if(count % 2 !== 0){
                clickedBox.css({
                    'background-image': 'url(../IMAGES/x2.png)'
                });
                $gamer1.squares.push(boxNum);
                if($gamer1.victory !== 'yes'){
                    sMessage = $gamer2.name + "\'s Turn";
                    $whosTurn.text(sMessage);
                }
                victory($gamer1,count);
            } else {
                clickedBox.css({
                    'background-image': 'url(../IMAGES/o2.png)'
                });
                $gamer2.squares.push(boxNum);
                if($gamer2.victory !== 'yes'){
                    sMessage = $gamer1.name + "\'s Turn";
                    $whosTurn.text(sMessage);
                }
                victory($gamer2,count);
            }
        };
        
        var victory = function(gamer,countNum){
            if(
                (gamer.squares.indexOf(11) != -1) && (gamer.squares.indexOf(12) != -1) && (gamer.squares.indexOf(13) != -1) || (gamer.squares.indexOf(21) != -1) && (gamer.squares.indexOf(22) != -1) && (gamer.squares.indexOf(23) != -1) || (gamer.squares.indexOf(31) != -1) && (gamer.squares.indexOf(32) != -1) && (gamer.squares.indexOf(33) != -1) || (gamer.squares.indexOf(11) != -1) && (gamer.squares.indexOf(21) != -1) && (gamer.squares.indexOf(31) != -1) || (gamer.squares.indexOf(12) != -1) && (gamer.squares.indexOf(22) != -1) && (gamer.squares.indexOf(32) != -1) || (gamer.squares.indexOf(13) != -1) && (gamer.squares.indexOf(23) != -1) && (gamer.squares.indexOf(33) != -1) || (gamer.squares.indexOf(11) != -1) && (gamer.squares.indexOf(22) != -1) && (gamer.squares.indexOf(33) != -1) ||(gamer.squares.indexOf(13) != -1) && (gamer.squares.indexOf(22) != -1) && (gamer.squares.indexOf(31) != -1)){
                    gamer.victory = 'yes';
                    sMessage = gamer.name + ' wins!';
                    $gamer1.squares = [];
                    $gamer2.squares = [];
                    gamer.wins ++;
                    if(count % 2 == 0){
                        nWins2 ++;
                        $win2.text('Wins: ' + nWins2);     
                    } else {
                        nWins1 ++;
                        $win1.text('Wins: ' + nWins1);
                    }
                    count = 0;
                    $('.box').off('click');
                } else if (count == 9) {
                    gamer.victory = 'no';
                    sMessage = 'Game is a draw';
                    $gamer1.squares = [];
                    $gamer2.squares = [];
                    count = 0;
                    $('.box').off('click');
                }
                $whosTurn.text(sMessage);
        };
    
        $box11.one('click',function(){
            boxID = 11;
            putDown($box11,boxID);
        });
    
        $box12.one('click',function(){
            boxID = 12;
            putDown($box12,boxID);
        });
    
        $box13.one('click',function(){
            boxID = 13;
            putDown($box13,boxID);
        });
        
        $box21.one('click',function(){
            boxID = 21;
            putDown($box21,boxID);
        });
    
        $box22.one('click',function(){
            boxID = 22;
            putDown($box22,boxID);
        });
    
        $box23.one('click',function(){
            boxID = 23;
            putDown($box23,boxID);
        });
        
        $box31.one('click',function(){
            boxID = 31;
            putDown($box31,boxID);
        });
    
        $box32.one('click',function(){
            boxID = 32;
            putDown($box32,boxID);
        });
    
        $box33.one('click',function(){
            boxID = 33;
            putDown($box33,boxID);
        });
    }); 
});