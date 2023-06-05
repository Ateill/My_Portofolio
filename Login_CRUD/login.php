<?php

session_start();
include "db_conn.php";

if (isset($_POST['user_name']) && isset($_POST['password'])) {
    function validate($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $uname = $_POST['user_name'];
    $pass = $_POST['password'];

    if (empty($uname)) {
        header("Location: index.php?error=Username is required");
        exit();
    } if (empty($pass)){
        header("Location: index.php?error=Password is required");
        exit();
    } else {
        $sql = "SELECT * FROM pekerja WHERE username='$uname' AND password='$pass' ";

        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result)) {
            $row = mysqli_fetch_assoc($result);

            if ($row['username'] === $uname && $row['password'] === $pass) {
                $_SESSION['username'] = $row['username'];
                $_SESSION['name'] = $row['name'];
                $_SESSION['id'] = $row['id'];
                header("Location: home.php");
                exit();         
            } else {
                header("Location: index.php?error=Incorrect username or password");
                exit();
            }
        }
    }
} else {
    header("Location: index.php");
    exit();
}
?>