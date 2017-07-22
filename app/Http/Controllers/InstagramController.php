<?php

namespace App\Http\Controllers;

use App\Http\ApiResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;

class InstagramController extends Controller
{
    /**
     * Generalized trait which helps to respond consistent json
     */
    use ApiResponse;


    /**
     * Fetches and returns authenticated users media
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getMedia(Request $request): JsonResponse
    {
        try {

            $this->validate($request, [
                'limit' => 'required|integer',
                'max_id' => 'string',
            ]);

            $access_token = $request->cookie('instagram_token');

            if (!$access_token) {
                return $this->jsonResponse('Error fetching Instagram photos', 'Missing Instagram cookie', false,
                    404);
            }

            $photos = getRecentInstagramMedia($access_token, $request->limit, $request->max_id);

            return $this->jsonResponse('Instagram recent media', $photos);

        } catch (ValidationException $e) {
            return $this->jsonResponse($e->getMessage(), $e->validator->getMessageBag(), false, 422);
        } catch (\Exception $e) {
            return $this->jsonResponse('Error fetching Instagram photos', $e->getMessage(), false,
                422);
        }
    }
}
