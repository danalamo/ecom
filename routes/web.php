<?php

use Illuminate\Support\Facades\Route;

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

//Route::view('{any}', 'welcome')->where('any','.*');
Route::get('test', function(){
  $pass = 'test';
  $user = \App\Models\User::first();
  $user->password = \Hash::make($pass);
  $user->password_plain = $pass;
  $user->save();
  dd($user->toArray());

});
Route::post('login', 'App\\Http\\Controllers\\AuthController@authenticate');
Route::post('logout', 'App\\Http\\Controllers\\AuthController@logout');

//Route::group(['namespace' => 'App\\Http\\Controllers'], function () {
//    Route::resource('inventories', 'InventoryController');
//    Route::resource('orders', 'OrderController');
//    Route::resource('products', 'ProductController');
//    Route::resource('users', 'UserController');
//  Route::get('me', 'UserController@me');
//});
Route::view('{any}', 'index')->where('any','.*');

