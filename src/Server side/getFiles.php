<?php
$folder = $_REQUEST["f"];
echo json_encode(glob($folder.'/*'));
?>
