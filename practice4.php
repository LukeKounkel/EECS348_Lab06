<?php
    $size = intval($_POST['size']);
    
    echo "<table border='1' cellspacing='0' cellpadding='5'>";
    
    // generate first row
    echo "<tr><th></th>"; // Top-left corner is empty
    for ($i = 1; $i <= $size; $i++) {
        echo "<th>$i</th>"; // column header
    }
    echo "</tr>";

    // generate all remaining rows with nested for loops
    for ($i = 1; $i <= $size; $i++) {
        echo "<tr>";
        echo "<th>$i</th>"; // Row header
        for ($j = 1; $j <= $size; $j++) {
            echo "<td>" . ($i * $j) . "</td>"; // Multiplication result
        }
        echo "</tr>";
    }
    echo "</table>";
?>
