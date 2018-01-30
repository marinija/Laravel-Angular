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

Route::get('/', 'PagesController@products');
Route::post('/addproduct', 'ProductsController@addProduct');
Route::post('/editproduct', 'ProductsController@UpdateProduct');
Route::get('/deleteproduct/{id}', 'ProductsController@DeleteProduct');
Route::resource('products', 'ProductsController');

