<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>php test</title>
        <style>
            body{
                display: flex;
                align-items: center;
                justify-content: center;
            }
        </style>
    </head>
    <body>
         <?php 
         $name = "The shadow of the wind";
         $read = true;
         if ($read) {
              $message = "You have read  $name";
             } else {
                 $message ="You haven't read $name"
             } 
        ?>
        <h1>
                <?php  echo $message?>
        </h1>
		
    </body>
</html>

