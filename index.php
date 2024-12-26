<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Ludo</title>
<link rel="stylesheet" type="text/css" href="layout.css"/>
<link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet">

</head>
<body>
<div class="cont">

	<div class="board_box">
		<div class="player-piece blue b1-piece" data-piece="b1" data-home="1" data-piece-blockno="0">&nbsp;</div>
		<div class="player-piece blue b2-piece" data-piece="b2" data-home="1" data-piece-blockno="0">&nbsp;</div>
		<div class="player-piece blue b3-piece" data-piece="b3" data-home="1" data-piece-blockno="0">&nbsp;</div>
		<div class="player-piece blue b4-piece" data-piece="b4" data-home="1" data-piece-blockno="0">&nbsp;</div>
		
		<div class="player-piece yellow y1-piece" data-piece="y1" data-home="1" data-piece-blockno="0">&nbsp;</div>
		<div class="player-piece yellow y2-piece" data-piece="y2" data-home="1" data-piece-blockno="0">&nbsp;</div>
		<div class="player-piece yellow y3-piece" data-piece="y3" data-home="1" data-piece-blockno="0">&nbsp;</div>
		<div class="player-piece yellow y4-piece" data-piece="y4" data-home="1" data-piece-blockno="0">&nbsp;</div>

		<div class="player-piece green g1-piece" data-piece="g1" data-home="1" data-piece-blockno="0">&nbsp;</div>
		<div class="player-piece green g2-piece" data-piece="g2" data-home="1" data-piece-blockno="0">&nbsp;</div>
		<div class="player-piece green g3-piece" data-piece="g3" data-home="1" data-piece-blockno="0">&nbsp;</div>
		<div class="player-piece green g4-piece" data-piece="g4" data-home="1" data-piece-blockno="0">&nbsp;</div>

		<div class="player-piece red r1-piece" data-piece="r1" data-home="1" data-piece-blockno="0">&nbsp;</div>
		<div class="player-piece red r2-piece" data-piece="r2" data-home="1" data-piece-blockno="0">&nbsp;</div>
		<div class="player-piece red r3-piece" data-piece="r3" data-home="1" data-piece-blockno="0">&nbsp;</div>
		<div class="player-piece red r4-piece" data-piece="r4" data-home="1" data-piece-blockno="0">&nbsp;</div>	

		<div class="ludo-box ">
			<div class="home green">
				<div class="g-dice-val">&nbsp;</div>
				<input class="dice-button g-dice" name="g-dice" type="button" value="Roll Dice" onclick="RollDice('g')" />
			</div>
			<div class="block-cnt-y">
				<div class="block" data-blockno="12">&nbsp;</div>
				<div class="block" data-blockno="13">&nbsp;</div>
				<div class="block" data-blockno="14">&nbsp;</div>
				<div class="block" data-blockno="11">&nbsp;</div>
				<div class="block red" data-blockno="200">&nbsp;</div>
				<div class="block red" data-blockno="15" data-blocksp="1">&nbsp;</div>
				<div class="block red" data-blockno="10" data-blocksp="1">&nbsp;</div>
				<div class="block red" data-blockno="201">&nbsp;</div>
				<div class="block" data-blockno="16">&nbsp;</div>
				<div class="block" data-blockno="9">&nbsp;</div>
				<div class="block red" data-blockno="202">&nbsp;</div>
				<div class="block" data-blockno="17">&nbsp;</div>
				<div class="block" data-blockno="8">&nbsp;</div>
				<div class="block red" data-blockno="203">&nbsp;</div>
				<div class="block" data-blockno="18">&nbsp;</div>
				<div class="block" data-blockno="7">&nbsp;</div>
				<div class="block red" data-blockno="204">&nbsp;</div>
				<div class="block" data-blockno="19">&nbsp;</div>
			</div>
			<div class="home red">
				<div class="r-dice-val">&nbsp;</div>
				<input class="dice-button r-dice" name="r-dice" type="button" value="Roll Dice" onclick="RollDice('r')" />
			</div>
			<div class="clearfix">&nbsp;</div>
			<div class="block-cnt-x">
				<div class="block" data-blockno="1">&nbsp;</div>
				<div class="block green" data-blockno="2" data-blocksp="1">&nbsp;</div>
				<div class="block" data-blockno="3">&nbsp;</div>
				<div class="block" data-blockno="4">&nbsp;</div>
				<div class="block" data-blockno="5">&nbsp;</div>
				<div class="block" data-blockno="6">&nbsp;</div>
				<div class="block" data-blockno="52">&nbsp;</div>
				<div class="block green" data-blockno="100">&nbsp;</div>
				<div class="block green" data-blockno="101">&nbsp;</div>
				<div class="block green" data-blockno="102">&nbsp;</div>
				<div class="block green" data-blockno="103">&nbsp;</div>
				<div class="block green" data-blockno="104">&nbsp;</div>
				<div class="block" data-blockno="51">&nbsp;</div>
				<div class="block" data-blockno="50">&nbsp;</div>
				<div class="block green" data-blockno="49" data-blocksp="1">&nbsp;</div>
				<div class="block" data-blockno="48">&nbsp;</div>
				<div class="block" data-blockno="47">&nbsp;</div>
				<div class="block" data-blockno="46">&nbsp;</div>
			</div>
			<div class="all-home">
				<div class="gome-block-red" data-blockno="205"><span>&nbsp;</span></div>
				<div class="gome-block-yellow" data-blockno="405"><span>&nbsp;</span></div>
				<div class="gome-block-green" data-blockno="105"><span>&nbsp;</span></div>
				<div class="gome-block-blue" data-blockno="305"><span>&nbsp;</span></div>
				<div class="dice">&nbsp;</div>
			</div>
			<div class="block-cnt-x">
				<div class="block" data-blockno="20">&nbsp;</div>
				<div class="block" data-blockno="21">&nbsp;</div>
				<div class="block" data-blockno="22">&nbsp;</div>
				<div class="block blue" data-blockno="23" data-blocksp="1">&nbsp;</div>
				<div class="block" data-blockno="24">&nbsp;</div>
				<div class="block" data-blockno="25">&nbsp;</div>
				<div class="block blue" data-blockno="304">&nbsp;</div>
				<div class="block blue" data-blockno="303">&nbsp;</div>
				<div class="block blue" data-blockno="302">&nbsp;</div>
				<div class="block blue" data-blockno="301">&nbsp;</div>
				<div class="block blue" data-blockno="300">&nbsp;</div>
				<div class="block" data-blockno="26">&nbsp;</div>
				<div class="block" data-blockno="32">&nbsp;</div>
				<div class="block" data-blockno="31">&nbsp;</div>
				<div class="block" data-blockno="30">&nbsp;</div>
				<div class="block" data-blockno="29">&nbsp;</div>
				<div class="block blue" data-blockno="28" data-blocksp="1">&nbsp;</div>
				<div class="block" data-blockno="27">&nbsp;</div>
			</div>
			<div class="clearfix">&nbsp;</div>
			<div class="home yellow">
				<div class="y-dice-val">&nbsp;</div>
				<input class="dice-button y-dice" name="y-dice" type="button" value="Roll Dice" onclick="RollDice('y')" />
			</div>
			<div class="block-cnt-y">
				<div class="block" data-blockno="45">&nbsp;</div>
				<div class="block yellow" data-blockno="404">&nbsp;</div>
				<div class="block" data-blockno="33">&nbsp;</div>
				<div class="block" data-blockno="44">&nbsp;</div>
				<div class="block yellow" data-blockno="403">&nbsp;</div>
				<div class="block" data-blockno="34">&nbsp;</div>
				<div class="block" data-blockno="43">&nbsp;</div>
				<div class="block yellow" data-blockno="402">&nbsp;</div>
				<div class="block" data-blockno="35">&nbsp;</div>
				<div class="block" data-blockno="42">&nbsp;</div>
				<div class="block yellow" data-blockno="401">&nbsp;</div>
				<div class="block yellow" data-blockno="36" data-blocksp="1">&nbsp;</div>
				<div class="block yellow" data-blockno="41" data-blocksp="1">&nbsp;</div>
				<div class="block yellow" data-blockno="400">&nbsp;</div>
				<div class="block" data-blockno="37">&nbsp;</div>
				<div class="block" data-blockno="40">&nbsp;</div>
				<div class="block" data-blockno="39">&nbsp;</div>
				<div class="block" data-blockno="38">&nbsp;</div>
			</div>
			<div class="home blue">
				<div class="b-dice-val">&nbsp;</div>
				<input class="dice-button b-dice" name="b-dice" type="button" value="Roll Dice" onclick="RollDice('b')" />
			</div>
		</div>
	</div>
	
	<div class="setting_cnt">
		<div class="setting-btt box-shadow1">
			<h1><< Settings</h1>
		</div>
		<div class="setting box-shadow1">
			<h3>>></h3>
			<div class="sixes">
				<h1>Settings</h1>
				<label><input type="radio" name="allowsixes" checked="checked" value="1" id="allowsixes_0" />Unlimited Sixes</label><br />
				<label><input type="radio" name="allowsixes" value="1" id="allowsixes_1" />Limited Sixes&nbsp;&nbsp;&nbsp;
					<select name="SixLimit" class="SixLimit">
						<option selected="selected" value="0"> -- Select -- </option>
						<?php for ($a=2;$a<=10;$a++){
							echo "<option value='$a'> -- $a -- </option>";
						}?>
					</select>
				
				</label>
			</div>
			<div class="clearfix">&nbsp;</div>		
			<div class="players">
				<label>Number of Players</label>
				<select name="nplayers" class="nplayers">
					<option selected="selected" value="0"> -- Select Player -- </option>
					<option value="2"> -- 2 -- </option>
					<option value="3a"> -- 3 A -- </option>
					<option value="3b"> -- 3 B -- </option>
					<option value="4"> -- 4 -- </option>
				</select>
				<input type="button" class="start" value="Start Game" name="SG" id="SG" onclick="SetPlayers()" />
			</div>
			
			<div class="clearfix">&nbsp;</div>
			<div class="moves_cont">
				<h1 class="move_h1">Move History</h1>
				<div class="moves"></div>
			</div>
		</div>
	</div>

</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script> 
<script type="text/javascript" src="functions.js"></script>
</body>
</html>