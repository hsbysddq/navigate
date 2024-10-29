<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Home');
// });

Route::inertia('/', 'Home');
Route::inertia('/blog', 'Blog');
Route::inertia('/login', 'Login');
Route::inertia('/sekolah', 'Sekolah');
Route::inertia('/kalender', 'Kalender');
Route::inertia('/perbandingan', 'Perbandingan');
