<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreRequest;
use App\Models\Person;
use App\Models\User;

class UserController extends Controller
{
    public function store(StoreRequest $request)
    {
        $data =  $request->validated();
        User::firstOrCreate([
            'email' => $data['email']
        ], $data);
        return $data;
    }
}
