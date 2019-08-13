<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'article'], function() {
    Route::get('/', 'ArticleController@index');
    Route::get('{id}', 'ArticleController@show');
    Route::post('/', 'ArticleController@store');
    Route::put('{id}', 'ArticleController@update');
    Route::delete('{id}', 'ArticleController@destroy');
});

Route::group(['prefix' => 'lesson'], function() {
    Route::get('/', 'LessonController@readall');
    Route::get('{id}', 'LessonController@read');
    Route::post('/', 'LessonController@create');
    Route::put('{id}', 'LessonController@update');
    Route::delete('{id}', 'LessonController@delete');
});


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
