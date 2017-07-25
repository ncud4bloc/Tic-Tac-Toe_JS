var $content = $('#content');
var $title = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="gTitle"><h2>Tic-Tac-Toe</h2></div>');
var $plyrInfo = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="plyrInfo"></div>');
var $plyr1 = $('<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xs-push-2 col-sm-push-2 col-md-push-2 col-lg-push-2 pInfo" id="plyr1">Player 1:</div>');
var $name1 = $('<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xs-push-2 col-sm-push-2 col-md-push-2 col-lg-push-2 pInfo" id="name1">Name 1</div>');
var $win1 = $('<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xs-push-2 col-sm-push-2 col-md-push-2 col-lg-push-2 pInfo" id="win1">Wins</div>');
var $plyr2 = $('<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xs-push-4 col-sm-push-4 col-md-push-4 col-lg-push-4 pInfo" id="plyr2">Player 2:</div>');
var $name2 = $('<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xs-push-4 col-sm-push-4 col-md-push-4 col-lg-push-4 pInfo" id="name2">Name 2</div>');
var $win2 = $('<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xs-push-4 col-sm-push-4 col-md-push-4 col-lg-push-4 pInfo" id="win2">Wins</div>');
var $winPlyr = $('<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xs-push-5 col-sm-push-5 col-md-push-5 col-lg-push-5" id="winPlyr">Win Player</div>');
var $whosTurn = $('<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-push-3 col-sm-push-3 col-md-push-3 col-lg-push-3" id="whosTurn">Player Turn</div>');
var $gameBoard = $('<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-push-3 col-sm-push-3 col-md-push-3 col-lg-push-3" id="gameBoard"></div>');
var $box11 = $('<div class="box col-xs-4 col-sm-4 col-md-4 col-lg-4" id="b11">B11</div>');
var $box12 = $('<div class="box col-xs-4 col-sm-4 col-md-4 col-lg-4" id="b12">B12</div>');
var $box13 = $('<div class="box col-xs-4 col-sm-4 col-md-4 col-lg-4" id="b13">B13</div>');
var $box21 = $('<div class="box col-xs-4 col-sm-4 col-md-4 col-lg-4" id="b21">B21</div>');
var $box22 = $('<div class="box col-xs-4 col-sm-4 col-md-4 col-lg-4" id="b22">B22</div>');
var $box23 = $('<div class="box col-xs-4 col-sm-4 col-md-4 col-lg-4" id="b23">B23</div>');
var $box31 = $('<div class="box col-xs-4 col-sm-4 col-md-4 col-lg-4" id="b31">B31</div>');
var $box32 = $('<div class="box col-xs-4 col-sm-4 col-md-4 col-lg-4" id="b32">B32</div>');
var $box33 = $('<div class="box col-xs-4 col-sm-4 col-md-4 col-lg-4" id="b33">B33</div>');

$content.append($title);

$content.append($plyrInfo);
    $plyrInfo.append($plyr1);
    $plyrInfo.append($name1);
    $plyrInfo.append($win1);
    $plyrInfo.append($plyr2);
    $plyrInfo.append($name2);
    $plyrInfo.append($win2);
    $plyrInfo.append($winPlyr);

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
    'height': '755px',
    /*'background-image': 'url(../IMAGES/ttt_background.jpg)',*/
    'background-color': '#2263c9',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover'
});

$title.css({
    'text-align': 'center',
    'margin-top': '-40px',
    'background-color': '#2263c9',
    'font-family': '"Yellowail", cursive',
    'font-size': '48px',
    'font-weight': '900'
});

$plyrInfo.css({
    'height': '40px',
    'background-color': '#2263c9'
});

$('.canSee').css({
    'display': 'inline-block'
});

$('.noSee').css({
    'display': 'none'
});

$('.photoClass').css({
    /*'display': 'inline-block',*/
    'position': 'relative',
    'width': '600px',
    'height': '450px',
    'border-radius': '5px',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover'
});

$('.pInfo').css({
    'height': '40px',
    'font-family': '"Lemonada", cursive',
    'text-align': 'center',
    /*'border': '1px solid #000'*/
    'background-color': '#2263c9'
});

$winPlyr.css({
    'height': '40px',
    'font-family': '"Lemonada", cursive',
    'text-align': 'center',
    'background-color': '#fff',
    'border': '1px solid #000',
    'clear': 'left'
});

$whosTurn.css({
    'height': '40px',
    'font-family': '"Lemonada", cursive',
    'text-align': 'center',
    'background-color': '#fff',
    'margin-top': '40px',
    /*'border': '1px solid #000'*/
    'background-color': '#2263c9'
});

$gameBoard.css({
    'height': '492px',
    'background-color': '#2263c9',
    /*'border': '2px solid #f00',*/
    'clear': 'left'
});

$box11.css({
    'height': '160px',
    'background-color': '#7b7b81',
    'border-top': '2px solid #0606b2',
    'border-left': '2px solid #0606b2'
});

$box12.css({
    'height': '160px',
    'background-color': '#7b7b81',
    'border-top': '2px solid #0606b2',
    'border-left': '2px solid #0606b2'
});

$box13.css({
    'height': '160px',
    'background-color': '#7b7b81',
    'border-top': '2px solid #0606b2',
    'border-left': '2px solid #0606b2',
    'border-right': '2px solid #0606b2'
});

$box21.css({
    'height': '160px',
    'background-color': '#7b7b81',
    'border-top': '2px solid #0606b2',
    'border-left': '2px solid #0606b2'
});

$box22.css({
    'height': '160px',
    'background-color': '#7b7b81',
    'border-top': '2px solid #0606b2',
    'border-left': '2px solid #0606b2'
});

$box23.css({
    'height': '160px',
    'background-color': '#7b7b81',
    'border-top': '2px solid #0606b2',
    'border-left': '2px solid #0606b2',
    'border-right': '2px solid #0606b2'
});

$box31.css({
    'height': '160px',
    'background-color': '#7b7b81',
    'border-top': '2px solid #0606b2',
    'border-left': '2px solid #0606b2',
    'border-bottom': '2px solid #0606b2'
});

$box32.css({
    'height': '160px',
    'background-color': '#7b7b81',
    'border-top': '2px solid #0606b2',
    'border-left': '2px solid #0606b2',
    'border-bottom': '2px solid #0606b2'
});

$box33.css({
    'height': '160px',
    'background-color': '#7b7b81',
    'border-top': '2px solid #0606b2',
    'border-left': '2px solid #0606b2',
    'border-right': '2px solid #0606b2',
    'border-bottom': '2px solid #0606b2'
});


/* -----  Functions  ----- */

var setButtonCol =function(){
    $('.box').css({
            'background-color': '#fff'
        });
};


/* -----  Function Calls  ----- */

$(function(){
    
    $('#b11').on('click',function(){
        setButtonCol();
        $('#box1').css({
            'background-color': '#7b7b81'
        });
        $plyr1.removeClass('canSee').addClass('noSee');
        $plyr1.removeAttr('id');
        $plyr1.attr('id','photo1');
        $('#photo1').css({
            'background-image': 'url(../IMAGES/F5E.jpg)'
        });
        $('.picture').hide("fade",1);
        $('.picture').show("fade",1000);
        $plyr1.removeClass('noSee').addClass('canSee');
    });
    
    
    
});