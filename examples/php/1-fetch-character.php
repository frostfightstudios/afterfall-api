<?php
    
    function getCharacterByName($name){
        $response = request('https://api.playafterfall.com/v3/api/search/character/name/' . $name);
        $responseArray = json_decode($response);
        $title = request('https://api.playafterfall.com/v3/api/title/' . $responseArray['title_id']);

    }
    
    function request($url){
        $headers = [
            'Accept: application/json',
            'Authorization: Bearer <token>' // Add your Token here!
        ];
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($curl);
        curl_close($curl);
        return $response;
    }
