<?php

namespace App\Http;

use Illuminate\Http\JsonResponse;

trait ApiResponse
{

    /**
     * Build the response to be sent
     * @param string $message
     * @param mixed $data
     * @param bool $success
     * @param int $responseCode
     * @return JsonResponse
     */
    public function jsonResponse(string $message, $data, bool $success = true, int $responseCode = 200): JsonResponse
    {
        return response()->json(['message' => $message, $this->getPayloadType($success) => $data], $responseCode);
    }


    /**
     * Switches the payload type to success for failed
     * @param $success
     * @return string
     */
    protected function getPayloadType($success): string
    {
        if ($success) {
            return 'data';
        }
        return 'errors';
    }


}