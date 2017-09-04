<?php include 'php/dbconn.php'; ?>

<div class="login">

    <h2><span>H I G H</span> <span style="margin-left: 15px;">S C O R E S</span></h2>


    <table class="tablescores" align="center" style="border-radius: 4px !important;">

        <tr>

            <th class="thscores">U S E R N A M E</th>
            <th class="thscores">S C O R E</th>


        </tr>

        <?php
        $query = "select * from score inner join users on users.userid=score.user order by score DESC limit 10";
        $result = mysqli_query($conn, $query);
        $count = 0;
        while ($row = mysqli_fetch_assoc($result)) {


            $count++;
            ?>

            <tr>

                <td class="tdscores"><?php echo "<span style='float:left !important; padding-left: 10px;'>" . $count . ". </span>" . $row['username']; ?></td>
                <td class="tdscores"><?php echo $row['score']; ?></td>
            </tr>

<?php } ?>


    </table>
    <br>
    <a href="index.php"><input type="submit" value="Back to game"></a>
    <br>
    <br>


</div>