<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChatBot extends Model
{
    use HasFactory;

    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'welcome_message',
        'icon',
        'background',
        'text_color',
        'helpdesk',
        'domain_id',
    ];

    public function domain()
    {
        return $this->belongsTo(Domain::class);
    }
}
