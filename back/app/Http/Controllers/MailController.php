<?php

namespace App\Http\Controllers;

use App\Models\Mail;
use Illuminate\Http\Request;

class MailController extends Controller
{
    public function save(Request $request)
    {
        // Validação dos dados recebidos
        $validatedData = $request->validate([
            'email' => 'required|email',
            'nome' => 'required|string',
            'telefone' => 'required|string',
            'time' => 'required|string',
        ]);

        // Verifica se o telefone já existe no banco de dados
        $count = Mail::where('mail_telefone', $validatedData['telefone'])->count();
        
        if ($count == 0) {
            // O telefone não existe no banco, podemos realizar a inserção
            $mail = new Mail();
            $mail->mail_email = $validatedData['email'];
            $mail->mail_nome = $validatedData['nome'];
            $mail->mail_telefone = $validatedData['telefone'];
            $mail->mail_obs = $validatedData['time'];
            
            if ($mail->save()) {
                // Os dados foram inseridos com sucesso
                $response = ['success' => true, 'message' => 'E-mail e dados salvos com sucesso!'];
            } else {
                // Ocorreu um erro ao inserir os dados
                $response = ['success' => false, 'message' => 'Erro ao salvar os dados.'];
            }
        } else {
            // O telefone já existe no banco
            $response = ['success' => false, 'message' => 'O telefone já existe no banco de dados.'];
        }
        
        return response()->json($response);
    }
}
