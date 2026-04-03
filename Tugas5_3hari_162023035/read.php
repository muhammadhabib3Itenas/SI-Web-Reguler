<?php
include 'config/database.php';
$data = mysqli_query($conn, "SELECT * FROM users");
$no = 1;
?>

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>

<div class="container">
    <h1>Read Data</h1>

    <?php while($row = mysqli_fetch_assoc($data)): ?>
        
        <div class="data-box box-<?= ($no % 4) + 1 ?>">
            
            <div class="name"><?= htmlspecialchars($row['username']) ?></div>
            <div class="email"><?= htmlspecialchars($row['email']) ?></div>

            <div class="actions">
                <a href="update.php?id=<?= $row['id'] ?>" class="btn-edit">Edit</a>
                <a href="delete.php?id=<?= $row['id'] ?>" 
                   class="btn-delete"
                   onclick="return confirm('Are you sure?')">
                   Delete
                </a>
            </div>

        </div>

    <?php $no++; endwhile; ?>

    <div class="nav">
        <a href="create.php">CREATE</a>
        <a href="read.php">READ</a>
    </div>
</div>

</body>
</html>
