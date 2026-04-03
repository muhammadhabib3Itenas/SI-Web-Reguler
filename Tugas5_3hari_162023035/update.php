<?php
include 'config/database.php';

$id = $_GET['id'];
$data = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM users WHERE id=$id"));

$error = "";

if (isset($_POST['update'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];

    if (empty($username) || empty($email)) {
        $error = "Please fill all fields";
    }
    elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = "Invalid email";
    }
    else {
        mysqli_query($conn, "UPDATE users SET username='$username', email='$email' WHERE id=$id");
        header("Location: read.php");
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
    <h2>Update User</h2>

    <form method="POST">
        <input type="text" name="username" value="<?= $data['username'] ?>">
        <input type="text" name="email" value="<?= $data['email'] ?>">

        <?php if($error): ?>
            <div class="error"><?= $error ?></div>
        <?php endif; ?>

        <button class="btn" name="update">Update</button>
    </form>

    <div class="nav">
        <a href="create.php">CREATE</a>
        <a href="read.php">READ</a>
    </div>
</div>

</body>
</html>