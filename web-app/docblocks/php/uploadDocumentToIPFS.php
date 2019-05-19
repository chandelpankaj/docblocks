<?php
    require_once('IPFS.php');
    $file_tmp = $_FILES['file']['tmp_name'];

    $Vdata = file_get_contents($file_tmp);

    try{
        $ipfs = new IPFS("localhost", "8080", "5001");
        $hash = $ipfs->add($Vdata);
        echo $hash;
    }
    catch(Exception $e){
        echo $e->getMessage();
    }

?>