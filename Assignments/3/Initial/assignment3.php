<?php
   define('DBHOST',	'localhost');
   define('DBNAME',	'travel');
   define('DBUSER',	'testuser');
   define('DBPASS',	'mypassword');
   define('DBCONNSTRING','mysql:dbname=art;charset=utf8mb4;');
   ?>
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <title>Assignment 3
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" href="css/captions.css" />
      <link rel="stylesheet" href="css/bootstrap-theme.css" />
   </head>
   <body>
      <?php include 'includes/header.inc.php'; ?>
      <!-- Page Content -->
      <main class="container">
         <div class="panel panel-default">
            <div class="panel-heading">Filters
            </div>
            <div class="panel-body">
               <form action="assignment3.php" method="get" class="form-horizontal">
                  <div class="form-inline">
                     <select name="continent" class="form-control">
                        <option value="0">Select Continent
                        </option>
                        <?php /* display list of continents */
                           /*
                           public function getContinents() {
                           $database = $this->wire('database');
                           $table = $database->escapeTable($this->tableContinents);
                           $query = $database->prepare("SELECT code, name FROM `$table`");
                           return $this->fetchResult($query);
                           }
                           ?>
                     </select>
                     <select name="country" class="form-control">
                        <option value="0">Select Country
                        </option>
                        <?php /* display list of countries */ ?>
                     </select>
                     <input type="text"  placeholder="Search title" class="form-control" name=title>
                     <button type="submit" class="btn btn-primary">Filter
                     </button>
                  </div>
               </form>
            </div>
         </div>
         <ul class="caption-style-2">
            <?php 
               //  $directory = "images/square-medium/";
               //$images = glob($directory . "/*.jpg");
               try	{
               $pdo	=	new	PDO(DBCONNSTRING,DBUSER,DBPASS);
               $pdo->setAttribute(PDO::ATTR_ERRMODE,	PDO::ERRMODE_EXCEPTION);
               $sql	=	"select	*	from	imagedetails";
               $result	=	$pdo->query($sql);
               while	($row	=	$result->fetch())	{
               // echo	.$row['ArtistID']	.	"	- "	.	$row['LastName']	.	"<br/>";
               // $images = scandir("images/square-medium", 1);
               //foreach($images as $image)
               //{
               //echo $image;           
               //  display list of images ... sample below ... replace ???? with field data
               echo '<li>'
               echo '<a href="detail.php?id='.$row['ImageID'] .'" class="img-responsive">'
               echo '<img src="images/square-medium/'.$row['Path'].'" alt="'.$row['Title'].'">'
               echo '<div class="caption">'
               echo '<div class="blur"></div>'
               echo '<div class="caption-text">'
               echo '<p>'.$row['Description'].'<p>'
               echo'</div>'
               echo'</div>'
               echo'</a>'
               echo'</li>'  
               //  }     
               }
               $pdo	=	null;
               }
               catch	(PDOException	$e)	{}
               ?>
         </ul>
      </main>
      <footer>
         <div class="container-fluid">
            <div class="row final">
               <p>Copyright &copy; 2017 Creative Commons ShareAlike
               </p>
               <p>
                  <a href="#">Home
                  </a> / 
                  <a href="#">About
                  </a> / 
                  <a href="#">Contact
                  </a> / 
                  <a href="#">Browse
                  </a>
               </p>
            </div>
         </div>
      </footer>
      <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
   </body>
</html>