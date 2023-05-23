<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
use App\Http\Controllers\MailController;

Route::post('/savemail', [MailController::class, 'save']);

Route::get('/test-db-connection', function () {
    try {
        DB::connection()->getPdo();
        return 'Conexão com o banco de dados estabelecida com sucesso!';
    } catch (\Exception $e) {
        return 'Erro ao conectar ao banco de dados: ' . $e->getMessage();
    }
});

