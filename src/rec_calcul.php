<?php

function Rec_Calcul($value){

    $pdo = new PDO('mysql:host=locahost;dbname=calculatrice','root','');
    $stmt = $pdo->prepare("INSERT INTO calcul ('','valeur') VALUES ('','$value')");
    $stmt->execute();

}

function Show_Calcul(){

    $pdo = new PDO('mysql:host=locahost;dbname=calculatrice','root','');
    $stmt = $pdo->prepare("SELECT valeur FROM calcul ORDER BY 'id' ASC");
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    
    return ($result);
}





?>