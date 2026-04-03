<?php
include 'config/database.php';

$error = "";
$success = "";

if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];

    if (empty($username) || empty($email)) {
        $error = "Please fill all fields";
    }
    elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = "Invalid email address";
    }
    else {
        $check = mysqli_query($conn, "SELECT * FROM users WHERE email='$email'");

        if (mysqli_num_rows($check) > 0) {
            $error = "This email is already registered";
        } else {
            mysqli_query($conn, "INSERT INTO users VALUES('', '$username', '$email')");
            $success = "User has been successfully inserted";
        }
    }
}
?>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>

<div class="container">
    <h2>Create Data</h2>

    <form method="POST">
        <input type="text" name="username" placeholder="Your name">
        <input type="text" name="email" placeholder="Your email">

        <?php if($error): ?>
            <div class="error"><?= $error ?></div>
        <?php endif; ?>

        <?php if($success): ?>
            <div class="success"><?= $success ?></div>
        <?php endif; ?>

        <button class="btn" name="submit">Insert</button>
    </form>

    <div class="nav">
        <a href="create.php">CREATE</a>
        <a href="read.php">READ</a>
    </div>
</div>

</body>
</html>