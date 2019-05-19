<?php
    require_once('IPFS.php');
    $fileHash = $_GET["documentHash"];
    //echo ($_GET);
    //print_r($fileHash);
    try{
        $ipfs = new IPFS("localhost", "8080", "5001");
        $file = $ipfs->cat($fileHash);
        file_put_contents("myfile.pdf", $file);
        //rename("myfile.pdf", "/var/www/html/myfile.pdf");

        header('Content-type: application/octet-stream');
        //header('Content-Disposition: attachment; filename="my.pdf"');
        echo $file;
    }
    catch(Exception $e){
        echo $e->getMessage();
    }

?>