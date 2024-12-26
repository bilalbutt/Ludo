$( document ).ready(function() {
	Initialize();
	Settings();
});

function Initialize(){
	GSixes = 0;		RSixes = 0;
	BSixes = 0;		YSixes = 0;
	SetPlayers();
	$( "div" ).each(function( index ) {	
		if( $(this).attr("data-blocksp") ){			
			//$( this ).text( $(this).attr("data-blockno") );
			$( this ).append( "<span>" + $(this).attr("data-blockno") + "</span>" );
		}else{
			if ( $(this).attr("data-blockno") == 105 || $(this).attr("data-blockno") == 205 || $(this).attr("data-blockno") == 305 || $(this).attr("data-blockno") == 405 ) {
				$( this ).children('span').text( $(this).attr("data-blockno") );
			}else{
				if( $(this).attr("data-blockno") ){
					$( this ).append( "<span>" + $(this).attr("data-blockno") + "</span>" );
					//$( this ).text( $(this).attr("data-blockno") );
				}				
			}			
		}
	});	
}

function Settings(){
	var DivSixes = $(".sixes").height();
	var players = $(".players").height();
	var SettingHeading = $(".move_h1").height();
	var SixPlayer = DivSixes + players + SettingHeading + 44;
	var Conthg = $(".cont").css("height");
	Conthg = Conthg.replace("px","");
	var Diff = Conthg - SixPlayer;
	//console.log( "DivSixes; " + DivSixes + "\nPlayers; " + players + "\nCont height; " + Conthg + "\nSettingHeading; " + SettingHeading +  "\nDiff; " + Diff);
	$(".moves").css("height", Diff );
	if ( $( window ).width() > 1024 ){
		$( ".cont" ).css("overflow","visible");
		$( ".setting-btt" ).fadeOut();
		$( ".setting h3" ).fadeOut();
	}
}

function ReInitialize(){
	GSixes = 0;		RSixes = 0;
	BSixes = 0;		YSixes = 0;
	SetPlayers();
	var DivSixes = $(".sixes").height();
	var players = $(".players").height();
	var Conthg = $(".cont").css("height");
	Conthg = Conthg.replace("px","");	
	var DivHeight = (Conthg - ( DivSixes + players )) - 220;

	console.log( "Conthg: " +  Conthg + "| DivHeight: " + DivHeight);

	$(".moves").css("height", DivHeight );
}

/* Generic Funstions */
function ShowHidePiece(PieceOf,Status){
	$( "div" ).each(function( index ) {
		var PieceName = $(this).attr("data-piece");
		if( PieceName == PieceOf + '1' || PieceName == PieceOf + '2' || PieceName == PieceOf + '3' || PieceName == PieceOf + '4' ){
			if ( Status == 1 ){
				$(this).css("visibility", "visible");
			}else{
				$(this).css("visibility", "hidden");
			}
		}
	});
}

function MoveTo(Piece,BlockToMove){	
	//console.clear();
	//console.log( "Piece : " +  Piece + " | Block To Move : " + BlockToMove );	
	WriteMoves(Piece,BlockToMove);	
	var block = $( "div[data-blockno='" + BlockToMove + "']" );
	var offset = block.offset();
	ptop = offset.top + 10;
	pleft = offset.left + 10;
	console.log( ptop + " | " + pleft );
	$( "div[data-piece='" + Piece + "']" ).animate({ top: ptop, left:  pleft }, 100, function() {});
}

function DoBeat(tempb,Pno,BlockNo,PieceLetter){
	if (tempb != 0 ){		
		if ( tempb == BlockNo ){			
			switch(PieceLetter+Pno) {
				case "g1":
					var top = '40px'; var left = '40px';
				break;
				case "g2":
					var top = '40px'; var left = '300px';
				break;
				case "g3":
					var top = '270px'; var left = '40px';
				break;
				case "g4":
					var top = '270px'; var left = '300px';
				break;
				
				case "b1":
					var top = '630px'; var left = '640px';
				break;
				case "b2":
					var top = '630px'; var left = '920px';
				break;
				case "b3":
					var top = '880px'; var left = '640px';
				break;
				case "b4":
					var top = '880px'; var left = '920px';
				break;
				
				case "r1":
					var top = '400px'; var left = '640px';
				break;
				case "r2":
					var top = '40px'; var left = '920px';
				break;
				case "r3":
					var top = '270px'; var left = '640px';
				break;
				case "r4":
					var top = '270px'; var left = '920px';
				break;
				
				case "y1":
					var top = '630px'; var left = '40px';
				break;
				case "y2":
					var top = '630px'; var left = '300px';
				break;
				case "y3":
					var top = '880px'; var left = '40px';
				break;
				case "y4":
					var top = '880px'; var left = '300px';
				break;
			}
			//console.log( "do beat | Piece to move to home : " + PieceLetter + Pno );
			WriteMsg (PieceLetter, " " + PieceLetter.toUpperCase() + Pno + " goes to home!");
			$( "div[data-piece='" + PieceLetter + Pno + "']" ).attr( "data-piece-blockno", "0" );
			$( "div[data-piece='" + PieceLetter + Pno + "']" ).attr( "data-home", "1" );
			$( "div[data-piece='" + PieceLetter + Pno + "']" ).animate({ top: top, left:  left }, 100, function() {});
		}
	}
}

function SetPiecesZindex(Piece){
	//console.log( Piece );
	if ( Piece == 'g' ){
		var p1 = $( "div[data-piece='g1']" );
		var p2 = $( "div[data-piece='g2']" );
		var p3 = $( "div[data-piece='g3']" );
		var p4 = $( "div[data-piece='g4']" );
		var p_dice = $( ".g-dice-val" );
		var PCol = "#000";
	}	
	if ( Piece == 'r' ){
		var p1 = $( "div[data-piece='r1']" );
		var p2 = $( "div[data-piece='r2']" );
		var p3 = $( "div[data-piece='r3']" );
		var p4 = $( "div[data-piece='r4']" );
		var p_dice = $( ".r-dice-val" );
		var PCol = "#000";
	}
	if ( Piece == 'b' ){
		var p1 = $( "div[data-piece='b1']" );
		var p2 = $( "div[data-piece='b2']" );
		var p3 = $( "div[data-piece='b3']" );
		var p4 = $( "div[data-piece='b4']" );
		var p_dice = $( ".b-dice-val" );
		var PCol = "#000";
	}
	if ( Piece == 'y' ){
		var p1 = $( "div[data-piece='y1']" );
		var p2 = $( "div[data-piece='y2']" );
		var p3 = $( "div[data-piece='y3']" );
		var p4 = $( "div[data-piece='y4']" );
		var p_dice = $( ".y-dice-val" );
		var PCol = "#000";
	}
	var pieces = ["g", "b", "y", "r"];
	for (a=0;a<=(pieces.length-1);a++ ){
		for (b=1;b<=4;b++){
			$( "div[data-piece='" + pieces[a] + b + "']" ).animate({ zIndex: 1 }, 100, function() {});
			$( "div[data-piece='" + pieces[a] + b + "']" ).css( "border-color", "#fff" );
			$( "." + pieces[a] + "-dice-val" ).css( "color", "#FFF" );
		}
	}
		
	for (b = 1;b<=4;b++){
		$( "div[data-piece='" + Piece + b + "']" ).animate({ zIndex: 6, borderColor: "#FFFFFF"}, 100, function() {});
		$( "div[data-piece='" + Piece + b + "']" ).css( "border-color", "#000" );
	}
	
	/*
	p1.animate({ zIndex: 6, borderColor: "#FFFFFF"}, 100, function() {});
	p1.css( "border-color", "#000" );
	
	p2.animate({ zIndex: 6, borderColor: "#FFFFFF"}, 100, function() {});
	p2.css( "border-style", "double" );
	p2.css( "border-color", "#000" );
	
	p3.animate({ zIndex: 6, borderColor: "#FFFFFF"}, 100, function() {});
	p3.css( "border-style", "double" );
	p3.css( "border-color", "#000" );
	
	p4.animate({ zIndex: 6, borderColor: "#FFFFFF"}, 100, function() {});	
	p4.css( "border-style", "double" );
	p4.css( "border-color", PCol );
	*/
		
	p_dice.css( "color", "#000" );
}

function SetPiecesDisabled(Piece){
	//console.log( Piece );
	if ( Piece == 'b' ){
		var p1 = $( "div[data-piece='b1']" );
		var p2 = $( "div[data-piece='b2']" );
		var p3 = $( "div[data-piece='b3']" );
		var p4 = $( "div[data-piece='b4']" );
	}
	if ( Piece == 'g' ){
		var p1 = $( "div[data-piece='g1']" );
		var p2 = $( "div[data-piece='g2']" );
		var p3 = $( "div[data-piece='g3']" );
		var p4 = $( "div[data-piece='g4']" );
	}	
	if ( Piece == 'r' ){
		var p1 = $( "div[data-piece='r1']" );
		var p2 = $( "div[data-piece='r2']" );
		var p3 = $( "div[data-piece='r3']" );
		var p4 = $( "div[data-piece='r4']" );
	}
	if ( Piece == 'y' ){
		var p1 = $( "div[data-piece='y1']" );
		var p2 = $( "div[data-piece='y2']" );
		var p3 = $( "div[data-piece='y3']" );
		var p4 = $( "div[data-piece='y4']" );
	}
	var pieces = ["g", "b", "y", "r"];
	for (a=0;a<=(pieces.length-1);a++ ){
		for (b=1;b<=4;b++){
			$( "div[data-piece='" + pieces[a] + b + "']" ).attr( "data-disabled", "disabled" );
		}
	}
	p1.attr( "data-disabled", "enabled" );
	p2.attr( "data-disabled", "enabled" );
	p3.attr( "data-disabled", "enabled" );
	p4.attr( "data-disabled", "enabled" );
}

function WriteMoves(piece,MoveTo){
	var MoveToPos = '';
	var DiceVal = $(".dice").text();
	
	console.log ( DiceVal + "\n");
	
	if ( MoveTo == 105 || MoveTo == 205 || MoveTo == 305 || MoveTo == 405 ){
		MoveToPos = ' goes home';
	}else{
		if ( DiceVal == 6 ){
			MoveToPos = " moves to " + MoveTo + " <br />and takes another turn!";
		}else{
			MoveToPos = " moves to block " + MoveTo;
		}
	}
	$(".moves").prepend( '<p class="'+ piece + '">' + piece.toUpperCase() + MoveToPos + "!</p>" );
}

function WriteMsg(piece,MsgType){
	
	// MsgType Details
	// 0 = Skip Move
	var Msg = "";
	var PieceName = "";
	
	if ( piece == 'g' ){
		PieceName = "reen";
	}
	if ( piece == 'r' ){
		PieceName = "ed";
	}
	if ( piece == 'b' ){
		PieceName = "lue";
	}
	if ( piece == 'y' ){
		PieceName = "ellow";
	}
	
	if ( MsgType == 0 ){	
		Msg = " Skips a move!";
	}else{
		Msg = MsgType;
	}
	
	$(".moves").prepend( '<p class="'+ piece + '">' + piece.toUpperCase() + PieceName + Msg + "</p>" );
}

function SetRole(Piece,Players){
	var dices = [];	
	if ( Piece == 'g'){		
		if ( Players == 2 ){		
			dices[0] = 'hidden';	// G
			dices[1] = 'hidden';	// R
			dices[2] = 'visible';	// B
			dices[3] = 'hidden';	// Y
		}
		if ( Players == '3a' || Players == 4 ){
			dices[0] = 'hidden';	// G
			dices[1] = 'visible';	// R
			dices[2] = 'hidden';	// B
			dices[3] = 'hidden';	// Y
		}
		if ( Players == '3b' ){
			dices[0] = 'hidden';	// G
			dices[1] = 'hidden';	// R
			dices[2] = 'visible';	// B
			dices[3] = 'hidden';	// Y
		}
	}	
	if ( Piece == 'r'){		
		if ( Players == '3a' || Players == 4 ){
			dices[0] = 'hidden';	// G
			dices[1] = 'hidden';	// R
			dices[2] = 'visible';	// B
			dices[3] = 'hidden';	// Y
		}
	}	
	if ( Piece == 'b'){
		if ( Players == 2 || Players == '3a' ){		
			dices[0] = 'visible';	// G
			dices[1] = 'hidden';	// R
			dices[2] = 'hidden';	// B
			dices[3] = 'hidden';	// Y
		}
		if ( Players == '3b' || Players == 4 ){
			dices[0] = 'hidden';	// G
			dices[1] = 'hidden';	// R
			dices[2] = 'hidden';	// B
			dices[3] = 'visible';	// Y
		}		
	}	
	if ( Piece == 'y'){		
		if ( Players == '3b' || Players == 4 ){
			dices[0] = 'visible';	// G
			dices[1] = 'hidden';	// R
			dices[2] = 'hidden';	// B
			dices[3] = 'hidden';	// Y
		}
	}	
	$('.g-dice').css("visibility",dices[0]);
	$('.r-dice').css("visibility",dices[1]);
	$('.b-dice').css("visibility",dices[2]);
	$('.y-dice').css("visibility",dices[3]);	
}

function CheckSixLimit(PieceName,SixValue){	
	//console.log( "Allowed Sixes Check : " + $("#allowsixes_1").val());	
	var Players = $('.nplayers').val();
	var Piece = PieceName.substr(0,1);
	if ( $("#allowsixes_1").prop( "checked" ) ){
		var Slmt = $(".SixLimit").val();
		//console.log( Slmt + " | " + SixValue );
		if ( parseInt(SixValue) >= parseInt(Slmt) ){
			if ( Piece == 'g' ){
				GSixes = 0;
			}
			if ( Piece == 'r' ){
				RSixes = 0;
			}
			if ( Piece == 'b' ){
				BSixes = 0;
			}
			if ( Piece == 'y' ){
				YSixes = 0;
			}
			$('.' + Piece + '-dice-val').text( "" );
			WriteMsg(Piece,0);
			SetRole(Piece,Players);
		}else{
			$('.' + Piece + '-dice-val').text( "" );
			$('.' + Piece + '-dice').css("visibility","visible");
		}
	}else{
		$('.' + Piece + '-dice-val').text( "" );
		$('.' + Piece + '-dice').css("visibility","visible");
	}
}
/* Generic Funstions */

function RollDice(Home){
	SetPiecesZindex(Home);
	var Players = $('.nplayers').val();	
	var DiceNumber = 1 + Math.floor(Math.random() * 6);
	//var DiceNumber = 6;
	$( '.dice' ).text( DiceNumber );	
	
	$('.r-dice-val').text( "" );
	$('.g-dice-val').text( "" );
	$('.b-dice-val').text( "" );
	$('.y-dice-val').text( "" );
	
	var b1 = $( "div[data-piece='b1']" ).attr( "data-home" );
	var b2 = $( "div[data-piece='b2']" ).attr( "data-home" );
	var b3 = $( "div[data-piece='b3']" ).attr( "data-home" );
	var b4 = $( "div[data-piece='b4']" ).attr( "data-home" );
	
	var g1 = $( "div[data-piece='g1']" ).attr( "data-home" );
	var g2 = $( "div[data-piece='g2']" ).attr( "data-home" );
	var g3 = $( "div[data-piece='g3']" ).attr( "data-home" );
	var g4 = $( "div[data-piece='g4']" ).attr( "data-home" );
	
	var r1 = $( "div[data-piece='r1']" ).attr( "data-home" );
	var r2 = $( "div[data-piece='r2']" ).attr( "data-home" );
	var r3 = $( "div[data-piece='r3']" ).attr( "data-home" );
	var r4 = $( "div[data-piece='r4']" ).attr( "data-home" );
	
	var y1 = $( "div[data-piece='y1']" ).attr( "data-home" );
	var y2 = $( "div[data-piece='y2']" ).attr( "data-home" );
	var y3 = $( "div[data-piece='y3']" ).attr( "data-home" );
	var y4 = $( "div[data-piece='y4']" ).attr( "data-home" );
	
	if ( Home == 'g' ){
		$('.dice').css("background-color", "#228B22");
		$('.g-dice-val').text( DiceNumber );
		$('.g-dice').css("visibility","hidden");
		
		var HomeCount = 0;
		var GoneHome = 0;
		if ( g1 == 1 ){ HomeCount++; }
		if ( g2 == 1 ){ HomeCount++; }
		if( g3 == 1 ){ HomeCount++; }
		if( g4 == 1 ){ HomeCount++; }
		
		if ( g1 == 2 ){ GoneHome++; }
		if ( g2 == 2 ){ GoneHome++; }
		if( g3 == 2 ){ GoneHome++; }
		if( g4 == 2 ){ GoneHome++; }
		console.log ( "Home Count : " + HomeCount + " Gone Home : " + GoneHome );
		
		if ( g1 == 1 && g2 == 1 && g3 == 1 && g4 == 1 || HomeCount >= 1){
			if ( DiceNumber != 6   ){
				$('.g-dice').css("visibility","hidden");
				if ( Players == 2 ){
					$('.g-dice').css("visibility","hidden");
					if ( HomeCount == 4 ){
						$('.b-dice').css("visibility","visible");
					}
				}
				if ( Players == '3a' ){
					$('.g-dice').css("visibility","hidden");
					$('.r-dice').css("visibility","visible");
					$('.b-dice').css("visibility","hidden");
				}
				if ( Players == '3b' ){
					$('.g-dice').css("visibility","hidden");
					$('.b-dice').css("visibility","visible");
					$('.y-dice').css("visibility","hidden");
				}
				if ( Players == '4' ){
					$('.g-dice').css("visibility","hidden");
					$('.r-dice').css("visibility","visible");
					$('.b-dice').css("visibility","hidden");
					$('.y-dice').css("visibility","hidden");
				}
			}
		}
		
		
	}
	if ( Home == 'r' ){
		$('.dice').css("background-color", "#F00");
		$('.r-dice-val').text( DiceNumber );
		$('.r-dice').css("visibility","hidden");
		
		var HomeCount = 0;
		var GoneHome = 0;
		if( r1 == 1 ){ HomeCount++; }
		if( r2 == 1 ){ HomeCount++; }
		if( r3 == 1 ){ HomeCount++; }
		if( r4 == 1 ){ HomeCount++; }
		
		if ( r1 == 2 ){ GoneHome++; }
		if ( r2 == 2 ){ GoneHome++; }
		if( r3 == 2 ){ GoneHome++; }
		if( r4 == 2 ){ GoneHome++; }
		console.log ( "HomeCount : " + HomeCount + " GoneHome : " + GoneHome );
		
		if ( r1 == 1 && r2 == 1 && r3 == 1 && r4 == 1 || HomeCount >= 1){
			if ( DiceNumber != 6 ){
				$('.r-dice').css("visibility","hidden");				
				if ( Players == '3a' ){
					$('.g-dice').css("visibility","hidden");
					$('.r-dice').css("visibility","hidden");
					$('.b-dice').css("visibility","visible");					
				}
				if ( Players == '4' ){
					$('.g-dice').css("visibility","hidden");					
					$('.r-dice').css("visibility","hidden");
					$('.b-dice').css("visibility","visible");
					$('.y-dice').css("visibility","hidden");
				}
			}
		}
	}		
	if ( Home == 'b' ){
		$('.dice').css("background-color", "#06F");
		$('.b-dice-val').text( DiceNumber );
		$('.b-dice').css("visibility","hidden");
		
		var HomeCount = 0;
		var GoneHome = 0;
		if ( b1 == 1 ){ HomeCount++; }
		if ( b2 == 1 ){ HomeCount++; }
		if( b3 == 1 ){ HomeCount++; }
		if( b4 == 1 ){ HomeCount++; }
		
		if ( b1 == 2 ){ GoneHome++; }
		if ( b2 == 2 ){ GoneHome++; }
		if( b3 == 2 ){ GoneHome++; }
		if( b4 == 2 ){ GoneHome++; }
		console.log ( "HomeCount : " + HomeCount + " GoneHome : " + GoneHome );
		
		if  ( b1 == 1 && b2 == 1 && b3 == 1 && b4 == 1 || HomeCount >= 1){
			if ( DiceNumber != 6 ){
				$('.b-dice').css("visibility","hidden");
				if ( Players == 2 ){
					if ( HomeCount == 4 ){
						$('.g-dice').css("visibility","visible");
					}
					$('.b-dice').css("visibility","hidden");
				}
				if ( Players == '3a' ){
					$('.g-dice').css("visibility","visible");
					$('.r-dice').css("visibility","hidden");
					$('.b-dice').css("visibility","hidden");
				}
				if ( Players == '3b' ){
					$('.g-dice').css("visibility","hidden");
					$('.b-dice').css("visibility","hidden");
					$('.y-dice').css("visibility","visible");
				}
				if ( Players == '4' ){
					$('.g-dice').css("visibility","hidden");					
					$('.r-dice').css("visibility","hidden");
					$('.b-dice').css("visibility","hidden");
					$('.y-dice').css("visibility","visible");
				}
			}
		}
		
	}
	if ( Home == 'y' ){
		$('.dice').css("background-color", "#fd0");
		$('.y-dice-val').text( DiceNumber );
		$('.y-dice').css("visibility","hidden");
		
		var HomeCount = 0;
		var GoneHome = 0;
		if( y1 == 1 ){ HomeCount++; }
		if( y2 == 1 ){ HomeCount++; }
		if( y3 == 1 ){ HomeCount++; }
		if( y4 == 1 ){ HomeCount++; }
		
		if( y1 == 2 ){ GoneHome++; }
		if( y2 == 2 ){ GoneHome++; }
		if( y3 == 2 ){ GoneHome++; }
		if( y4 == 2 ){ GoneHome++; }
		console.log ( "HomeCount : " + HomeCount + " GoneHome : " + GoneHome );
		
		if ( y1 == 1 && y2 == 1 && y3 == 1 && y4 == 1 || HomeCount >= 1){
			if ( DiceNumber != 6 ){
				$('.y-dice').css("visibility","hidden");				
				if ( Players == '3b' ){
					$('.g-dice').css("visibility","visible");
					$('.y-dice').css("visibility","hidden");
					$('.b-dice').css("visibility","hidden");
				}
				if ( Players == '4' ){
					$('.g-dice').css("visibility","visible");					
					$('.r-dice').css("visibility","hidden");
					$('.b-dice').css("visibility","hidden");
					$('.y-dice').css("visibility","hidden");
				}
			}
		}
	}
	SetPiecesDisabled(Home);
}

function SetPlayers(){
	var Players = $('.nplayers').val();	
	if ( Players == 0 ){
		$('.g-dice').css("visibility","hidden");
		ShowHidePiece('g',0);
		$('.b-dice').css("visibility","hidden");
		ShowHidePiece('b',0);
		$('.r-dice').css("visibility","hidden");
		ShowHidePiece('r',0);
		$('.y-dice').css("visibility","hidden");
		ShowHidePiece('y',0);
	}	
	if ( Players == 2 ){
		$('.g-dice').css("visibility","visible");
		ShowHidePiece('g',1);
		$('.b-dice').css("visibility","hidden");
		ShowHidePiece('b',1);
		$('.r-dice').css("visibility","hidden");
		ShowHidePiece('r',0);
		$('.y-dice').css("visibility","hidden");
		ShowHidePiece('y',0);
	}	
	if ( Players == '3a' ){
		$('.g-dice').css("visibility","visible");
		ShowHidePiece('g',1);
		$('.b-dice').css("visibility","hidden");
		ShowHidePiece('b',1);
		$('.r-dice').css("visibility","hidden");
		ShowHidePiece('r',1);
		$('.y-dice').css("visibility","hidden");
		ShowHidePiece('y',0);
	}	
	if ( Players == '3b' ){
		$('.g-dice').css("visibility","visible");
		ShowHidePiece('g',1);
		$('.b-dice').css("visibility","hidden");
		ShowHidePiece('b',1);
		$('.r-dice').css("visibility","hidden");
		ShowHidePiece('r',0);
		$('.y-dice').css("visibility","hidden");
		ShowHidePiece('y',1);
	}	
	if ( Players == 4 ){
		$('.g-dice').css("visibility","visible");
		ShowHidePiece('g',1);
		$('.b-dice').css("visibility","hidden");
		ShowHidePiece('b',1);
		$('.r-dice').css("visibility","hidden");
		ShowHidePiece('r',1);
		$('.y-dice').css("visibility","hidden");
		ShowHidePiece('y',1);
	}	
	if ( Players != 0 ){
		$('.nplayers').prop( "disabled", true );
		$("#allowsixes_0").prop( "disabled", true );
		$("#allowsixes_1").prop( "disabled", true );
		$(".SixLimit").prop( "disabled", true );
		
		$( "#SG" ).prop( "disabled", true );
		
		$( ".setting" ).css("right", "-310px" );
		$( ".setting-btt" ).css("right", "1px" );
	}	
}

function CheckBeatPiece(Piece){
	var Players = $('.nplayers').val();
	var BlockNo = $( "div[data-piece='" + Piece + "']" ).attr( "data-piece-blockno" );	
	var PieceLetter = Piece.substring(0,1);	
	//console.log( "Piece : " + PieceLetter + " BlockNo : " + BlockNo);
	
	// Green
	if ( Piece == 'g1' || Piece == 'g2' || Piece == 'g3' || Piece == 'g4' ){
		if ( Players == 2 ){
			// Blue
			for (a=1;a<=4;a++){
				var tempb = $( "div[data-piece='b" + a + "']" ).attr( "data-piece-blockno" );
				var SpBlock = $( "div[data-blockno='" + tempb + "']" ).attr( "data-blocksp" );
				if ( SpBlock != 1 ){
					DoBeat(tempb,a,BlockNo,'b');					
				}
			}
		}		
		if ( Players == "3a" ){
			// Blue & Red			
			for (a = 1;a<=2;a++){				
				if (a == 1 ){ var PieceLetter = "b"; }
				if (a == 2 ){ var PieceLetter = "r"; }														
				for (b=1;b<=4;b++){
					var tempb = $( "div[data-piece='" + PieceLetter + b + "']" ).attr( "data-piece-blockno" );
					var SpBlock = $( "div[data-blockno='" + tempb + "']" ).attr( "data-blocksp" );
					if ( SpBlock != 1 ){ 
						DoBeat(tempb,b,BlockNo,PieceLetter);
					}
				}
			}
		}
		if ( Players == "3b" ){
			// Yellow & Blue
			for (a = 1;a<=2;a++){				
				if (a == 1 ){ var PieceLetter = "b"; }
				if (a == 2 ){ var PieceLetter = "y"; }														
				for (b=1;b<=4;b++){
					var tempb = $( "div[data-piece='" + PieceLetter + b + "']" ).attr( "data-piece-blockno" );
					var SpBlock = $( "div[data-blockno='" + tempb + "']" ).attr( "data-blocksp" );
					if ( SpBlock != 1 ){ 
						DoBeat(tempb,b,BlockNo,PieceLetter);
					}
				}
			}
		}
		if ( Players == 4 ){
			// Red, Blue & Yellow
			for (a = 1;a<=3;a++){				
				if (a == 1 ){ var PieceLetter = "r"; }
				if (a == 2 ){ var PieceLetter = "b"; }
				if (a == 3 ){ var PieceLetter = "y"; }				
				for (b=1;b<=4;b++){
					var tempb = $( "div[data-piece='" + PieceLetter + b + "']" ).attr( "data-piece-blockno" );
					var SpBlock = $( "div[data-blockno='" + tempb + "']" ).attr( "data-blocksp" );
					if ( SpBlock != 1 ){ 
						DoBeat(tempb,b,BlockNo,PieceLetter);
					}
				}
			}
		}
	}
	
	// Red
	if ( Piece == 'r1' || Piece == 'r2' || Piece == 'r3' || Piece == 'r4' ){
		if ( Players == "3a" ){
			// Green & Blue
			for (a = 1;a<=2;a++){
				if (a == 1 ){ var PieceLetter = "g"; }
				if (a == 2 ){ var PieceLetter = "b"; }
				for (b=1;b<=4;b++){
					var tempb = $( "div[data-piece='" + PieceLetter + b + "']" ).attr( "data-piece-blockno" );
					var SpBlock = $( "div[data-blockno='" + tempb + "']" ).attr( "data-blocksp" );
					if ( SpBlock != 1 ){ 
						DoBeat(tempb,b,BlockNo,PieceLetter);
					}
				}
			}
		}
		if ( Players == 4 ){
			// Green, Blue & Yellow
			for (a = 1;a<=3;a++){
				if (a == 1 ){ var PieceLetter = "g"; }
				if (a == 2 ){ var PieceLetter = "b"; }
				if (a == 3 ){ var PieceLetter = "y"; }
				for (b=1;b<=4;b++){
					var tempb = $( "div[data-piece='" + PieceLetter + b + "']" ).attr( "data-piece-blockno" );
					var SpBlock = $( "div[data-blockno='" + tempb + "']" ).attr( "data-blocksp" );
					if ( SpBlock != 1 ){ 
						DoBeat(tempb,b,BlockNo,PieceLetter);
					}
				}
			}
		}
	}
	
	// Blue
	if ( Piece == 'b1' || Piece == 'b2' || Piece == 'b3' || Piece == 'b4' ){
		if ( Players == 2 ){
			// Green
			for (a=1;a<=4;a++){
				var tempb = $( "div[data-piece='g" + a + "']" ).attr( "data-piece-blockno" );
				var SpBlock = $( "div[data-blockno='" + tempb + "']" ).attr( "data-blocksp" );
				if ( SpBlock != 1 ){
					DoBeat(tempb,a,BlockNo,'g');					
				}
			}
		}
		if ( Players == "3a" ){
			// Green & Red
			for (a = 1;a<=2;a++){				
				if (a == 1 ){ var PieceLetter = "g"; }
				if (a == 2 ){ var PieceLetter = "r"; }														
				for (b=1;b<=4;b++){
					var tempb = $( "div[data-piece='" + PieceLetter + b + "']" ).attr( "data-piece-blockno" );
					var SpBlock = $( "div[data-blockno='" + tempb + "']" ).attr( "data-blocksp" );
					if ( SpBlock != 1 ){ 
						DoBeat(tempb,b,BlockNo,PieceLetter);
					}
				}
			}
		}
		if ( Players == "3b" ){
			// Green & Red
			for (a = 1;a<=2;a++){				
				if (a == 1 ){ var PieceLetter = "g"; }
				if (a == 2 ){ var PieceLetter = "y"; }														
				for (b=1;b<=4;b++){
					var tempb = $( "div[data-piece='" + PieceLetter + b + "']" ).attr( "data-piece-blockno" );
					var SpBlock = $( "div[data-blockno='" + tempb + "']" ).attr( "data-blocksp" );
					if ( SpBlock != 1 ){ 
						DoBeat(tempb,b,BlockNo,PieceLetter);
					}
				}
			}
		}
		if ( Players == 4 ){
			// Green, Red & Blue
			for (a = 1;a<=3;a++){				
				if (a == 1 ){ var PieceLetter = "g"; }
				if (a == 2 ){ var PieceLetter = "r"; }
				if (a == 3 ){ var PieceLetter = "y"; }
				for (b=1;b<=4;b++){
					var tempb = $( "div[data-piece='" + PieceLetter + b + "']" ).attr( "data-piece-blockno" );
					var SpBlock = $( "div[data-blockno='" + tempb + "']" ).attr( "data-blocksp" );
					if ( SpBlock != 1 ){ 
						DoBeat(tempb,b,BlockNo,PieceLetter);
					}
				}
			}
		}
	}
	
	// Yellow
	if ( Piece == 'y1' || Piece == 'y2' || Piece == 'y3' || Piece == 'y4' ){
		if ( Players == "3b" ){
			// Green & Blue
			for (a = 1;a<=2;a++){
				if (a == 1 ){ var PieceLetter = "g"; }
				if (a == 2 ){ var PieceLetter = "b"; }
				for (b=1;b<=4;b++){
					var tempb = $( "div[data-piece='" + PieceLetter + b + "']" ).attr( "data-piece-blockno" );
					var SpBlock = $( "div[data-blockno='" + tempb + "']" ).attr( "data-blocksp" );
					if ( SpBlock != 1 ){ 
						DoBeat(tempb,b,BlockNo,PieceLetter);
					}
				}
			}
		}
		if ( Players == 4 ){
			// Green, Red & Blue
			for (a = 1;a<=3;a++){
				if (a == 1 ){ var PieceLetter = "g"; }
				if (a == 2 ){ var PieceLetter = "r"; }
				if (a == 3 ){ var PieceLetter = "b"; }
				for (b=1;b<=4;b++){
					var tempb = $( "div[data-piece='" + PieceLetter + b + "']" ).attr( "data-piece-blockno" );
					var SpBlock = $( "div[data-blockno='" + tempb + "']" ).attr( "data-blocksp" );
					if ( SpBlock != 1 ){ 
						DoBeat(tempb,b,BlockNo,PieceLetter);
					}
				}
			}
		}
	}
}

function DeclareWinner(){
	var Players = $('.nplayers').val();
	
	if ( Players == 2 ){
		//Green
		var G_Home1 = $("div[data-piece='g1']").attr( "data-home" );
		var G_Home2 = $("div[data-piece='g2']").attr( "data-home" );
		var G_Home3 = $("div[data-piece='g3']").attr( "data-home" );
		var G_Home4 = $("div[data-piece='g4']").attr( "data-home" );
		if ( G_Home1 == 2 && G_Home2 == 2 && G_Home3 == 2 && G_Home4 == 2 ){
			alert ( " Winner Green! " );
			ReInitialize();
		}
		
		//Blue
		var B_Home1 = $("div[data-piece='b1']").attr( "data-home" );
		var B_Home2 = $("div[data-piece='b2']").attr( "data-home" );
		var B_Home3 = $("div[data-piece='b3']").attr( "data-home" );
		var B_Home4 = $("div[data-piece='b4']").attr( "data-home" );
		if ( B_Home1 == 2 && B_Home2 == 2 && B_Home3 == 2 && B_Home4 == 2 ){
			alert ( " Winner Blue! " );
			ReInitialize();
		}
	}
	
	if ( Players == "3a" ){
		//Green
		var G_Home1 = $("div[data-piece='g1']").attr( "data-home" );
		var G_Home2 = $("div[data-piece='g2']").attr( "data-home" );
		var G_Home3 = $("div[data-piece='g3']").attr( "data-home" );
		var G_Home4 = $("div[data-piece='g4']").attr( "data-home" );
		if ( G_Home1 == 2 && G_Home2 == 2 && G_Home3 == 2 && G_Home4 == 2 ){
			alert ( " Winner Green! " );
			ReInitialize();
		}
		
		//Blue
		var B_Home1 = $("div[data-piece='b1']").attr( "data-home" );
		var B_Home2 = $("div[data-piece='b2']").attr( "data-home" );
		var B_Home3 = $("div[data-piece='b3']").attr( "data-home" );
		var B_Home4 = $("div[data-piece='b4']").attr( "data-home" );
		if ( B_Home1 == 2 && B_Home2 == 2 && B_Home3 == 2 && B_Home4 == 2 ){
			alert ( " Winner Blue! " );
			ReInitialize();
		}
		
		//Red
		var R_Home1 = $("div[data-piece='r1']").attr( "data-home" );
		var R_Home2 = $("div[data-piece='r2']").attr( "data-home" );
		var R_Home3 = $("div[data-piece='r3']").attr( "data-home" );
		var R_Home4 = $("div[data-piece='r4']").attr( "data-home" );
		if ( R_Home1 == 2 && R_Home2 == 2 && R_Home3 == 2 && R_Home4 == 2 ){
			alert ( " Winner Red! " );
			ReInitialize();
		}
		
	}
	
	if ( Players == "3b" ){
		//Green
		var G_Home1 = $("div[data-piece='g1']").attr( "data-home" );
		var G_Home2 = $("div[data-piece='g2']").attr( "data-home" );
		var G_Home3 = $("div[data-piece='g3']").attr( "data-home" );
		var G_Home4 = $("div[data-piece='g4']").attr( "data-home" );
		if ( G_Home1 == 2 && G_Home2 == 2 && G_Home3 == 2 && G_Home4 == 2 ){
			alert ( " Winner Green! " );
			ReInitialize();
		}
		
		//Blue
		var B_Home1 = $("div[data-piece='b1']").attr( "data-home" );
		var B_Home2 = $("div[data-piece='b2']").attr( "data-home" );
		var B_Home3 = $("div[data-piece='b3']").attr( "data-home" );
		var B_Home4 = $("div[data-piece='b4']").attr( "data-home" );
		if ( B_Home1 == 2 && B_Home2 == 2 && B_Home3 == 2 && B_Home4 == 2 ){
			alert ( " Winner Blue! " );
			ReInitialize();
		}
		
		//Yellow
		var Y_Home1 = $("div[data-piece='y1']").attr( "data-home" );
		var Y_Home2 = $("div[data-piece='y2']").attr( "data-home" );
		var Y_Home3 = $("div[data-piece='y3']").attr( "data-home" );
		var Y_Home4 = $("div[data-piece='y4']").attr( "data-home" );
		if ( Y_Home1 == 2 && Y_Home2 == 2 && Y_Home3 == 2 && Y_Home4 == 2 ){
			alert ( " Winner Yellow! " );
			ReInitialize();
		}
		
	}
	
	if ( Players == 4 ){
		//Green
		var G_Home1 = $("div[data-piece='g1']").attr( "data-home" );
		var G_Home2 = $("div[data-piece='g2']").attr( "data-home" );
		var G_Home3 = $("div[data-piece='g3']").attr( "data-home" );
		var G_Home4 = $("div[data-piece='g4']").attr( "data-home" );
		if ( G_Home1 == 2 && G_Home2 == 2 && G_Home3 == 2 && G_Home4 == 2 ){
			alert ( " Winner Green! " );
			ReInitialize();
		}
		
		//Blue
		var B_Home1 = $("div[data-piece='b1']").attr( "data-home" );
		var B_Home2 = $("div[data-piece='b2']").attr( "data-home" );
		var B_Home3 = $("div[data-piece='b3']").attr( "data-home" );
		var B_Home4 = $("div[data-piece='b4']").attr( "data-home" );
		if ( B_Home1 == 2 && B_Home2 == 2 && B_Home3 == 2 && B_Home4 == 2 ){
			alert ( " Winner Blue! " );
			ReInitialize();
		}
		
		//Red
		var R_Home1 = $("div[data-piece='r1']").attr( "data-home" );
		var R_Home2 = $("div[data-piece='r2']").attr( "data-home" );
		var R_Home3 = $("div[data-piece='r3']").attr( "data-home" );
		var R_Home4 = $("div[data-piece='r4']").attr( "data-home" );
		if ( R_Home1 == 2 && R_Home2 == 2 && R_Home3 == 2 && R_Home4 == 2 ){
			alert ( " Winner Red! " );
			ReInitialize();
		}
		
		//Yellow
		var Y_Home1 = $("div[data-piece='y1']").attr( "data-home" );
		var Y_Home2 = $("div[data-piece='y2']").attr( "data-home" );
		var Y_Home3 = $("div[data-piece='y3']").attr( "data-home" );
		var Y_Home4 = $("div[data-piece='y4']").attr( "data-home" );
		if ( Y_Home1 == 2 && Y_Home2 == 2 && Y_Home3 == 2 && Y_Home4 == 2 ){
			alert ( " Winner Yellow! " );
			ReInitialize();
		}
		
	}	
}

function DefaultDice(){
	$('.dice').css("background-color", "#FFF");
	$('.dice').text( "" );
}

$( ".setting-btt" ).click(function() {	
	$( ".setting" ).css("right", "0px" );
	$( ".setting-btt" ).css("right", "-80px" );	
});

$( ".setting h3" ).click(function() {	
	$( ".setting" ).css("right", "-310px" );
	$( ".setting-btt" ).css("right", "1px" );	
});

$( ".player-piece" ).click(function() {	
	
	var ButtonDis = $(this).attr("data-disabled");
	//console.log( ButtonDis );
	if ( ButtonDis == "enabled" ){
		var Players = $('.nplayers').val();
		var PieceName = $(this).attr( "data-piece" ) ;
		
		if ( PieceName == 'y1' || PieceName == 'y2' || PieceName == 'y3' || PieceName == 'y4' ){
			var DiceVal = $('.y-dice-val').text();
		}
		if ( PieceName == 'g1' || PieceName == 'g2' || PieceName == 'g3' || PieceName == 'g4' ){
			var DiceVal = $('.g-dice-val').text();
		}
		if ( PieceName == 'b1' || PieceName == 'b2' || PieceName == 'b3' || PieceName == 'b4' ){
			var DiceVal = $('.b-dice-val').text();
		}
		if ( PieceName == 'r1' || PieceName == 'r2' || PieceName == 'r3' || PieceName == 'r4' ){
			var DiceVal = $('.r-dice-val').text();
		}
		//console.log ( PieceName + " " + DiceVal );
				
		if ( DiceVal != "" ){
			// path piece travels
			if ( $(this).attr( "data-home" ) == 1 ){		
				
				if ( PieceName == 'r1' || PieceName == 'r2' || PieceName == 'r3' || PieceName == 'r4' ){
					if ( DiceVal == 6 ){
						$(this).attr("data-home", "0");
						$(this).attr("data-piece-blockno", "15");
						MoveTo( $(this).attr("data-piece"), 15 );
					}
				}		
				if ( PieceName == 'y1' || PieceName == 'y2' || PieceName == 'y3' || PieceName == 'y4' ){
					if ( DiceVal == 6 ){
						$(this).attr("data-home", "0");
						$(this).attr("data-piece-blockno", "41");
						MoveTo( $(this).attr("data-piece"), 41 );
					}
				}				
				if ( PieceName == 'g1' || PieceName == 'g2' || PieceName == 'g3' || PieceName == 'g4' ){
					if ( DiceVal == 6 ){
						$(this).attr("data-home", "0");
						$(this).attr("data-piece-blockno", "2");				
						MoveTo( $(this).attr("data-piece"), 2 );
					}
				}
				if ( PieceName == 'b1' || PieceName == 'b2' || PieceName == 'b3' || PieceName == 'b4' ){
					if ( DiceVal == 6 ){
						$(this).attr("data-home", "0");
						$(this).attr("data-piece-blockno", "28");
						MoveTo( $(this).attr("data-piece"), 28 );
					}
				}	
							
			}else{
				
				var BlockToMove = parseInt($(this).attr( 'data-piece-blockno' )) + parseInt(DiceVal);		
				//console.log( "Block to move : " + BlockToMove );
				
				if ( PieceName == 'r1' || PieceName == 'r2' || PieceName == 'r3' || PieceName == 'r4' ){
					var CurrentBlock = $(this).attr( 'data-piece-blockno' );
					if ( $(this).attr("data-home") == 0 ){	
						if ( CurrentBlock >= 7 && CurrentBlock <= 13 ){
							if ( BlockToMove >= 13 && BlockToMove <= 19 ) {								
								if ( BlockToMove == 13 ){
									$(this).attr("data-piece-blockno", BlockToMove);
									//console.log ( "13 else Current Block : " + CurrentBlock + " | Blocks to Move : " + BlockToMove );
									MoveTo( $(this).attr("data-piece"), BlockToMove );
								}else{
									var MiniMove = Math.abs(13 - CurrentBlock );
									var NewDiceVal = DiceVal - MiniMove;
									var ToMoveNew = 13 + 186 + parseInt(NewDiceVal);
									$(this).attr("data-piece-blockno", ToMoveNew);
									//console.log ( "13 Current Block : " + CurrentBlock + " | Moveable Blocks : " + ToMoveNew );
									MoveTo( $(this).attr("data-piece"), ToMoveNew );						
									if ( ToMoveNew == 205 ){
										MoveTo( $(this).attr("data-piece"), 205);
										//$(this).animate({ opacity: 0 }, 100, function() {});
										$(this).attr("data-home", 2);
										$(this).off("click");
									}
								}
							}else{
								$(this).attr("data-piece-blockno", BlockToMove);
								//console.log ( "26 else Current Block : " + CurrentBlock + " | Blocks to Move : " + BlockToMove );
								MoveTo( $(this).attr("data-piece"), BlockToMove );
							}
						}else if ( BlockToMove > 52 && BlockToMove <= 58 ){
							
							var MiniMove = Math.abs(52 - $(this).attr( 'data-piece-blockno' ) );
							var NewDiceVal = DiceVal - MiniMove;
							$(this).attr("data-piece-blockno", NewDiceVal);
							//console.log( "52 B CurrentBlock : " + CurrentBlock );
							MoveTo( $(this).attr("data-piece"), NewDiceVal);
							
						}else if ( BlockToMove >= 200 ){				
							var MoveableBlocks = 205 - CurrentBlock;
							if ( DiceVal == MoveableBlocks){
								$(this).attr("data-piece-blockno", 205);
								//console.log ( "205 Current Block : " + CurrentBlock + " | Moveable Blocks : " + MoveableBlocks );
								MoveTo( $(this).attr("data-piece"), 205);
								$(this).attr("data-home", 2);
								//$(this).animate({ opacity: 0 }, 100, function() {});
								$(this).off("click");
							}else if ( DiceVal < MoveableBlocks ){
								var newMoveableBlock = parseInt(CurrentBlock) + parseInt(DiceVal);
								//console.log ( "200 Current Block : " + CurrentBlock + " | Moveable Blocks : " + newMoveableBlock + " | Dice : " +  DiceVal );
								$(this).attr("data-piece-blockno", newMoveableBlock);
								MoveTo( $(this).attr("data-piece"), newMoveableBlock);
							}				
						}else {
							//console.log ( "else Current Block : " + CurrentBlock + " | BlockToMove : " + BlockToMove + " | Dice : " +  DiceVal );
							$(this).attr("data-piece-blockno", BlockToMove);
							MoveTo( $(this).attr("data-piece"), BlockToMove );
						}
					}
				}	
				if ( PieceName == 'y1' || PieceName == 'y2' || PieceName == 'y3' || PieceName == 'y4' ){		
					var CurrentBlock = $(this).attr( 'data-piece-blockno' );
					if ( $(this).attr("data-home") == 0 ){	
						if ( CurrentBlock >= 33 && CurrentBlock <= 39 ){
							if ( BlockToMove >= 39 && BlockToMove <= 45 ) {
								
								if ( BlockToMove == 39 ){
									$(this).attr("data-piece-blockno", BlockToMove);
									//console.log ( "39 else Current Block : " + CurrentBlock + " | Blocks to Move : " + BlockToMove );
									MoveTo( $(this).attr("data-piece"), BlockToMove );
								}else{
									var MiniMove = Math.abs(39 - CurrentBlock );
									var NewDiceVal = DiceVal - MiniMove;
									var ToMoveNew = 39 + 360 + parseInt(NewDiceVal);
									$(this).attr("data-piece-blockno", ToMoveNew);
									//console.log ( "26 Current Block : " + CurrentBlock + " | Moveable Blocks : " + ToMoveNew );
									MoveTo( $(this).attr("data-piece"), ToMoveNew );						
									if ( ToMoveNew == 405 ){
										MoveTo( $(this).attr("data-piece"), 405);
										//$(this).animate({ opacity: 0 }, 100, function() {});
										$(this).off("click");
									}
								}
							}else{
								$(this).attr("data-piece-blockno", BlockToMove);
								//console.log ( "26 else Current Block : " + CurrentBlock + " | Blocks to Move : " + BlockToMove );
								MoveTo( $(this).attr("data-piece"), BlockToMove );
							}
						}else if ( BlockToMove > 52 && BlockToMove <= 58 ){
							
							var MiniMove = Math.abs(52 - $(this).attr( 'data-piece-blockno' ) );
							var NewDiceVal = DiceVal - MiniMove;
							$(this).attr("data-piece-blockno", NewDiceVal);
							//console.log( "52 B CurrentBlock : " + CurrentBlock );
							MoveTo( $(this).attr("data-piece"), NewDiceVal);
							
						}else if ( BlockToMove >= 400 ){
							
							var MoveableBlocks = 405 - CurrentBlock;				
							if ( DiceVal == MoveableBlocks){
								$(this).attr("data-piece-blockno", 405);
								//console.log ( "405 Current Block : " + CurrentBlock + " | Moveable Blocks : " + MoveableBlocks );
								MoveTo( $(this).attr("data-piece"), 405);
								//$(this).animate({ opacity: 0 }, 100, function() {});
								$(this).off("click");
							}else if ( DiceVal < MoveableBlocks ){
								var newMoveableBlock = parseInt(CurrentBlock) + parseInt(DiceVal);
								//console.log ( "400 Current Block : " + CurrentBlock + " | Moveable Blocks : " + newMoveableBlock + " | Dice : " +  DiceVal );
								$(this).attr("data-piece-blockno", newMoveableBlock);
								MoveTo( $(this).attr("data-piece"), newMoveableBlock);
							}
							
						}else {
							//console.log ( "else Current Block : " + CurrentBlock + " | BlockToMove : " + BlockToMove + " | Dice : " +  DiceVal );
							$(this).attr("data-piece-blockno", BlockToMove);
							MoveTo( $(this).attr("data-piece"), BlockToMove );
						}
					}
				}	
				if ( PieceName == 'g1' || PieceName == 'g2' || PieceName == 'g3' || PieceName == 'g4' ){			
					if ( $(this).attr("data-home") == 0 ){				
						if ( BlockToMove > 52 ){
							
							var CurrentBlock = $(this).attr( 'data-piece-blockno' );
							if ( CurrentBlock >= 100 ){
								
								var MoveableBlocks = 105 - CurrentBlock;
								//console.log ( "Current Block : " + CurrentBlock + " | Moveable Blocks : " + MoveableBlocks );
								
								if ( DiceVal == MoveableBlocks){						
									$(this).attr("data-piece-blockno", 105);
									MoveTo( $(this).attr("data-piece"), 105);
									$(this).attr("data-home", 2);
									//$(this).animate({ opacity: 0 }, 100, function() {});
									$(this).off("click");
								}else if ( DiceVal < MoveableBlocks ){						
									var newMoveableBlock = parseInt(CurrentBlock) + parseInt(DiceVal);						
									//console.log ( "Current Block : " + CurrentBlock + " | Moveable Blocks : " + newMoveableBlock + " | Dice : " +  DiceVal );
									$(this).attr("data-piece-blockno", newMoveableBlock);
									MoveTo( $(this).attr("data-piece"), newMoveableBlock);
								}
								
							}else{					
								var MiniMove = Math.abs(52 - $(this).attr( 'data-piece-blockno' ) );
								var NewDiceVal = DiceVal - MiniMove;
								var ToMoveNew = 52 + 47	 + parseInt(NewDiceVal);
								$(this).attr("data-piece-blockno", ToMoveNew);
								MoveTo( $(this).attr("data-piece"), ToMoveNew );
								if ( ToMoveNew == 105 ){
									MoveTo( $(this).attr("data-piece"), 105);
									$(this).attr("data-home", 2);
									//$(this).animate({ opacity: 0 }, 100, function() {});
									$(this).off("click");
								}
							}
							
						}else{
							$(this).attr("data-piece-blockno", BlockToMove);
							MoveTo( $(this).attr("data-piece"), BlockToMove );
						}
					}
					/*
					if ( Players == 2 ){						
						$('.b-dice').css("visibility","visible");					
					}
					*/
				}	
				if ( PieceName == 'b1' || PieceName == 'b2' || PieceName == 'b3' || PieceName == 'b4' ){		
					var CurrentBlock = $(this).attr( 'data-piece-blockno' );
					if ( $(this).attr("data-home") == 0 ){
						if ( CurrentBlock >= 20 && CurrentBlock <= 26 ){
							if ( BlockToMove >26 && BlockToMove <= 32 ) {
								var MoveableBlocks = 26 - CurrentBlock;
								var MiniMove = Math.abs(26 - CurrentBlock );
								var NewDiceVal = DiceVal - MiniMove;
								var ToMoveNew = 26 + 273 + parseInt(NewDiceVal);
								$(this).attr("data-piece-blockno", ToMoveNew);
								//console.log ( "26 Current Block : " + CurrentBlock + " | Moveable Blocks : " + MoveableBlocks );
								MoveTo( $(this).attr("data-piece"), ToMoveNew );
								if ( ToMoveNew == 305 ){
									MoveTo( $(this).attr("data-piece"), 305);
									$(this).attr("data-home", 2);
									//$(this).animate({ opacity: 0 }, 100, function() {});
									$(this).off("click");
								}					
							}else{
								$(this).attr("data-piece-blockno", BlockToMove);
								//console.log ( "26 else Current Block : " + CurrentBlock + " | Blocks to Move : " + BlockToMove );
								MoveTo( $(this).attr("data-piece"), BlockToMove );					
							}
						}else if ( BlockToMove > 52 && BlockToMove <= 58 ){							
							var MiniMove = Math.abs(52 - $(this).attr( 'data-piece-blockno' ) );
							var NewDiceVal = DiceVal - MiniMove;
							$(this).attr("data-piece-blockno", NewDiceVal);
							//console.log( "52 B CurrentBlock : " + CurrentBlock );
							MoveTo( $(this).attr("data-piece"), NewDiceVal);							
						}else if ( BlockToMove >= 300 ){							
							var MoveableBlocks = 305 - CurrentBlock;				
							if ( DiceVal == MoveableBlocks){
								$(this).attr("data-piece-blockno", 305);
								//console.log ( "305 Current Block : " + CurrentBlock + " | Moveable Blocks : " + MoveableBlocks );
								MoveTo( $(this).attr("data-piece"), 305);
								$(this).attr("data-home", 2);
								//$(this).animate({ opacity: 0 }, 100, function() {});
								$(this).off("click");
							}else if ( DiceVal < MoveableBlocks ){
								var newMoveableBlock = parseInt(CurrentBlock) + parseInt(DiceVal);
								//console.log ( "300 Current Block : " + CurrentBlock + " | Moveable Blocks : " + newMoveableBlock + " | Dice : " +  DiceVal );
								$(this).attr("data-piece-blockno", newMoveableBlock);
								MoveTo( $(this).attr("data-piece"), newMoveableBlock);
							}							
						}else {
							//console.log ( "else Current Block : " + CurrentBlock + " | BlockToMove : " + BlockToMove + " | Dice : " +  DiceVal );
							$(this).attr("data-piece-blockno", BlockToMove);
							MoveTo( $(this).attr("data-piece"), BlockToMove );
						}
					}
				}	
				
			}
		
			// Clear Dice
			if ( PieceName == 'g1' || PieceName == 'g2' || PieceName == 'g3' || PieceName == 'g4' ){	
				if ( $(this).attr("data-home") == 0 || $(this).attr("data-home") == 2 ){
					if ( $('.g-dice-val').text() == 6){
						GSixes++;
						/* Normal Play */
						//$('.g-dice-val').text( "" );
						//$('.g-dice').css("visibility","visible");
						/* Normal Play */
						
						/* limited Sixes Play * /
						console.log( "Allowed Sixes Check : " + $("#allowsixes_1").val());
						if ( $("#allowsixes_1").val() > 0 ){
							var Slmt = $(".SixLimit").val();
							console.log( Slmt + " | " + GSixes );
							if ( parseInt(GSixes) >= parseInt(Slmt) ){
								GSixes = 0;
								$('.g-dice-val').text( "" );
								var pn = PieceName.substr(0,1);
								WriteMsg(pn,0);
								SetRole(pn,Players);
								console.log ( " LIMIT SIX" );
							}else{
								$('.g-dice-val').text( "" );
								$('.g-dice').css("visibility","visible");
							}
						}else{
							$('.g-dice-val').text( "" );
							$('.g-dice').css("visibility","visible");
						}
						/* limited Sixes Play */
						CheckSixLimit(PieceName,GSixes);						
					}else{
						GSixes = 0;                        
						$('.g-dice-val, .dice').text( "" );
                        $(".all-home").children('.dice').val( "" );
						var pn = PieceName.substr(0,1);
						SetRole(pn,Players);
					}
				}
			}
			if ( PieceName == 'r1' || PieceName == 'r2' || PieceName == 'r3' || PieceName == 'r4' ){
				//$('.r-dice-val').text( "" );
				if ( $(this).attr("data-home") == 0 || $(this).attr("data-home") == 2 ){
					if ( $('.r-dice-val').text() == 6){
						RSixes++;
						CheckSixLimit(PieceName,RSixes);
					}else{
						RSixes = 0;
						$('.r-dice-val').text( "" );
                        $(".all-home").children('.dice').val( "" );
						var pn = PieceName.substr(0,1);						
						SetRole(pn,Players);
					}
				}
			}				
			if ( PieceName == 'b1' || PieceName == 'b2' || PieceName == 'b3' || PieceName == 'b4' ){		
				if ( $(this).attr("data-home") == 0 || $(this).attr("data-home") == 2 ){
					if ( $('.b-dice-val').text() == 6){
						BSixes++;
						CheckSixLimit(PieceName,BSixes);
					}else{
						BSixes = 0;
						$('.b-dice-val').text( "" );
                        $(".all-home").children('.dice').val( "" );
						var pn = PieceName.substr(0,1);						
						SetRole(pn,Players);
					}
				}
			}
			if ( PieceName == 'y1' || PieceName == 'y2' || PieceName == 'y3' || PieceName == 'y4' ){
				//$('.y-dice-val').text( "" );
				if ( $(this).attr("data-home") == 0 || $(this).attr("data-home") == 2 ){
					if ( $('.y-dice-val').text() == 6){
						YSixes++;
						CheckSixLimit(PieceName,YSixes);
					}else{
						YSixes = 0;
						$('.y-dice-val').text( "" );
                        $(".all-home").children('.dice').val( "" );
						var pn = PieceName.substr(0,1);						
						SetRole(pn,Players);
					}
				}
			}
			
			CheckBeatPiece(PieceName);
			
			// Declare Winner
			DeclareWinner();
		}		
	}
});

$( ".SixLimit" ).click(function() {
	if ( $( ".SixLimit" ).val() > 0 ){
		$("#allowsixes_1").prop( "checked", true );
		$("#allowsixes_0").prop( "checked", false );
	}else{
		$("#allowsixes_0").prop( "checked", true );
		$("#allowsixes_1").prop( "checked", false );
	}
});

/*
$(document).bind('keydown',function(evt) {
	switch(evt.keyCode) {
		// Number 1 & Numeric Pad 1 ( GREEN )
		case 49: case 97:
			if ( $(".g-dice").css( "visibility") == "visible" ){
				RollDice('g');
			}
		break;		
		// Number 2 & Numeric Pad 2 ( RED )
		case 50: case 98:
			if ( $(".r-dice").css( "visibility") == "visible" ){
				RollDice('r');
			}
		break;		
		// Number 3 & Numeric Pad 3 ( BLUE )
		case 51: case 99:
			if ( $(".b-dice").css( "visibility") == "visible" ){
				RollDice('b');
			}
		break;		
		// Number 4 & Numeric Pad 4 ( YELLOW )
		case 52: case 100:
			if ( $(".y-dice").css( "visibility") == "visible" ){
				RollDice('y');
			}
		break;
	}	
});
*/