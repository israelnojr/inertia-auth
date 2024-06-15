<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Billings extends Model
{
    use HasFactory;

    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'plan',
        'credits',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

