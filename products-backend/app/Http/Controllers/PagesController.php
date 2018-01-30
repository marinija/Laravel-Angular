<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    //
    public function products() {
        $title = 'Welcome To Laravel!';

        return view('pages.products')->with('title',$title);
    }
}
