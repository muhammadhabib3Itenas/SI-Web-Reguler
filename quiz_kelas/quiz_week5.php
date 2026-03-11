<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabel 5x5 menggunakan PHP</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p> 
        <span class="highlight">162023035 - Muhammad Habib</span>. 
    </p>

    <table>
        <?php
            for ($baris = 1; $baris <= 5; $baris++) {
                echo "<tr class='baris-" . $baris . "'>";
                for ($kolom = 1; $kolom <= 5; $kolom++) {
                    echo "<td>" . $baris . "," . $kolom . "</td>";
                }
                echo "</tr>";
            }
        ?>
    </table>

</body>
</html>