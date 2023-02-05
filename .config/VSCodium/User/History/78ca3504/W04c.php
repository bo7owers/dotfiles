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
        ?>
        <h1>
            <?php 
            if ($read) {
                 $message = "You have read"  $name;
                } 
            ?>"
        </h1>
		
    </body>
</html>

