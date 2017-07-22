<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Match all routes except api to index so that react router and do frontend routing
Route::get("{url}",  function() {
    return view("app");
})->middleware(['web'])->where("url", "^((?!api|authenticate).)*$");

Route::get("/authenticate/instagram", ['uses' => 'SocialController@instragram'])->name('web.get.instagram');
Route::get("/authenticate/instagram/callback", ['uses' => 'SocialController@instragramCallback'])->name('web.get.instagram.callback');