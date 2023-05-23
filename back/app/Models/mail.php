<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mail extends Model
{
    protected $table = 'savemail';
    protected $primaryKey = 'mail_id';
    public $timestamps = false;
}
