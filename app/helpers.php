<?php

if (!function_exists('createAirtableRecord')) {

    /**
     * Persist the support request in Airtable
     * @param array $payload
     * @return mixed
     */
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

            return json_decode($response->getBody()->getContents());
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            //TODO Handle the error
        }
    }
}

if (!function_exists('getRecentInstagramMedia')) {

    /**
     * Get recent media feed of the authenticated user
     * @param string $access_token
     * @param int $limit
     * @param string|null $max_id
     * @return mixed
     */
    function getRecentInstagramMedia(string $access_token, int $limit = 10, string $max_id = null)
    {
        $params = [
            'access_token' => $access_token,
            'count' => $limit,
        ];

        if (isset($max_id)) {
            $params['max_id'] = $max_id;
        }

        $client = new \GuzzleHttp\Client();
        try {
            $response = $client->request('GET',
                "https://api.instagram.com/v1/users/self/media/recent?" . http_build_query($params));
            $payload = \GuzzleHttp\json_decode($response->getBody()->getContents());
            return $payload;
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            //TODO Handle the error
        }
    }
}