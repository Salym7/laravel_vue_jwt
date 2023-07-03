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
        $user = User::where('email', $data['email'])->first();

        if ($user) return response(['error' => "User with this email already exists"], 403);

        $user = User::create($data);
        $token = auth()->tokenById($user->id);

        return response(['access_token' => $token]);
    }
}
