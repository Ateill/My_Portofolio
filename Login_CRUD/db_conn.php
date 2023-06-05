<?php

$surename = "localhost";
$username = "root";
$password = "";

$db_name = "pekerja_db";

$conn = mysqli_connect($surename, $username, $password, $db_name);

if(!$conn) {
    echo "Connection failed!";
}