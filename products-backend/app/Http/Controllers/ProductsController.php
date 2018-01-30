<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $products = Product::orderBy('created_at', 'desc')->get();
        return response()->json($products);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    public function addProduct(Request $request) {
        $product = new Product;
        $product->name = $request->Input('name');
        $product->price = $request->Input('price');
        $product->datum = $request->Input('datum');
        $product->save();
        $response = array('response'=>'Product Added!','success'=>true);
        return $response;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $product = Product::where('id', $id)->get();
        return response()->json($product);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $product = Product::find($id);
        return response()->json($product);
    }

    public function UpdateProduct(Request $request) 
    {
        // find item
        $id = $request->Input('id');

        Product::where('id', '=', $id)->update(array(
            'name' => $request->Input('name'),
            'price' => $request->Input('price'),
            'datum' => $request->Input('datum')
        ));

        $response = array('response'=>'Product Updated!','success'=>true);
        return $response;
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        
    }

    public function DeleteProduct($id) {
        Product::where('id', $id)->delete();
        $response = array('response'=>'Product Deleted!','success'=>true);
        return $response;
    }
}