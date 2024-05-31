<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function index()
    {
        $roles = Role::all();
        return Inertia::render('RolesComponent', ['roles' => $roles]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        Role::create(['name' => $request->name]);

        return redirect()->route('roles.index');
    }
}