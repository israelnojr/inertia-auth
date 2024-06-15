<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HelpDesk extends Model
{
    use HasFactory;

    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'question',
        'answer',
        'domain_id',
    ];

    public function domain()
    {
        return $this->belongsTo(Domain::class);
    }
}

