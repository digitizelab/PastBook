<?php

if (!function_exists('createAirtableRecord')) {

    function createAirtableRecord(array $payload)
    {
        $client = new \GuzzleHttp\Client();
        try {
            $response = $client->request('POST', env('AIRTABLE_URL'), [
                'headers' => [
                    'Authorization' => 'Bearer ' . env('AIRTABLE_KEY')
                ],
                'json' => ["fields" => $payload]
            ]);

            return $response;
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            //TODO Handle the error
        }
    }
}