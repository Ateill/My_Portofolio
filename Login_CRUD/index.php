<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>LOGIN</title>
    </head>
    <body>
        <form action="login.php" method="post">
            <h2>Sign In</h2>

            <?php if(isset($_GET['error'])) { ?>
                <p class="error"> <?php echo $_GET['error'] ?></p>
            <?php } ?>

            <label>Username</label>
            <input type="text" name="user_name" placeholder="Username">

            <label>Password</label>
            <input type="password" name="password" placeholder="Password">

            <button type="submit">LOGIN</button>
        </form>
    </body>
</html>