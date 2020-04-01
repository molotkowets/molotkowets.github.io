<?php

define("HOST", "ss378577.mysql.tools");
define("USER", "ss378577_db");
define("PASSWORD", "xKhy9fcu");
define("DBNAME", "ss378577_db");
define("CHARSET", "utf8");
 
//Base connect
$link = mysqli_connect(HOST, USER, PASSWORD, DBNAME) 
    or die("Ошибка " . mysqli_error($link));

//Check table exist 
    $query = mysqli_query($link, "SELECT * FROM clients LIMIT 1");
    $result = mysqli_fetch_row($query);

//If table not exist - create
if($result == null)
{
$query ="CREATE Table clients
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(200) NOT NULL
)";

$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));
}

//Save fields of the form
    $email = htmlentities(mysqli_real_escape_string($link, $_POST['email']));
    $text = htmlentities(mysqli_real_escape_string($link, $_POST['comments']));

//Check email in base, if base no containe email, insert one
    $checkEmailInBase = mysqli_query($link, "SELECT * FROM clients WHERE email = '$email' LIMIT 1");
    
if(mysqli_num_rows($checkEmailInBase) < 1)
{
    $query = "INSERT INTO clients VALUES(NULL, '$email')";
    $result = mysqli_query($link, $query) or die("Ошибкa " . mysqli_error($link)); 
}
//Send mail
    mail("websomnium@gmail.com", $email, $text);
    
//Close connection
mysqli_close($link);

//Redirect to the page
header("Location:index.php");

?>