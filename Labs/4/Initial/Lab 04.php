<!DOCTYPE html>
<html lang="en">
<head>
?>
   <meta charset="utf-8">
   <title>Lab 04</title>         
    <style>
        main {
           position: relative;   
        }
        span {
            height: 40px;
            width: 40px;
            border: solid black 1px;
            margin:1px;
            display: inline-block;
            
            position: absolute;
        }
    </style>   
</head>
<body>
<main>
<?php
echo "<h1> Using iterator: ".$iterator."</h1>";

YOUR CODE GOES HERE
<?php
include('rainbowiterator.php');
$red=0;
$green=0;
$blue=0;
for($red=0;$red<=255;$red+=$iterator)
   for($blue=0;$blue<=255;$blue+=$iterator)
       for($green=0;$green<=255;$green+=$iterator)
       {          
           $hexred = sprintf('%02x', $red);
           $hexgreen=sprintf('%02x', $green);
           $hexblue=sprintf('%02x', $blue);
           echo "<span style='background-color:rgb($red,$green,$blue);' title=#$hexred$hexgreen$hexblue>#$hexred$hexgreen$hexblue</span>";
       }


</main>
</body>
</html>    