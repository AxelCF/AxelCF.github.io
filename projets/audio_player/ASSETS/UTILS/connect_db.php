<?php

try {
    $db = new PDO('mysql:host=141.94.22.233;dbname=AxelCF_audio_player;charset=utf8', 'AxelCF', 'Ichigo.14', [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ]);
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}
