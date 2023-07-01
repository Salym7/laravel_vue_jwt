<?php

namespace App\Http\Controllers\Fruit;

use App\Http\Controllers\Controller;
use App\Http\Resources\Fruit\FruitResource;
use App\Models\Fruit;
use Illuminate\Http\Request;

class FruitController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function index()
    {
        $fruit = Fruit::all();
        return FruitResource::collection($fruit);
    }
}
