<?php

namespace App\Http\Controllers;

use App\Http\ApiResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Laravel\Socialite\Two\InvalidStateException;

class SocialController extends Controller
{
    /**
     * Generalized trait which helps to respond consistent json
     */
    use ApiResponse;


    /**
     * Redirect to Instagram auth page
     * @return mixed
     */
    public function instragram()
    {
        return Socialite::with('instagram')->redirect();
    }

    /**
     * Receive the Instagram callback and send cookie with the access token
     * @param Request $request
     * @return $this
     */
    public function instragramCallback(Request $request)
    {
        $user = Socialite::driver('instagram')->user();
        $accessTokenResponseBody = $user->accessTokenResponseBody;
        return redirect(url('/photo-book'))->cookie('instagram_token', $accessTokenResponseBody['access_token']);
    }
}
