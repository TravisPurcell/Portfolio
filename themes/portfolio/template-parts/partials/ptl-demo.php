<?php include get_template_directory() . "/template-parts/partials/ptl-salary-data.php";

$p_input = $_GET["profession"];
$s_input = $_GET["state"];
$e_input = $_GET["experience"];
?>

<div class="panel_wrapper">
    <div class="panel">
        <div class="panel_left">
            <p class="number"><?php echo $_GET["experience"]; ?></p>
            <p class="text">Experience</p>
        </div>
        <div class="panel_right">
            <p class="profession"><?php echo $_GET["profession"]; ?></p>
        </div>
    </div>
    <div class="panel flex-wrap">
        <div class="panel_center">
            <p class="state"><?php echo $_GET["state"]; ?></p>
        </div>
        <div class="panel_left">
            <p class="text">Location</p>
        </div>
    </div>
    <div class="panel flex-wrap opague">
        <div class="panel_center">
            <p class="salary">
                <?php echo $result[$p_input][$s_input][$e_input];?>
            </p>
        </div>
        <div class="panel_left">
            <p class="text">Salary</p>
        </div>
    </div>
</div>


<!-- Email Send -->
<!-- Add Email to Database -->
