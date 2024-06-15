<?php

namespace App\Models;

use App\Models\ChatRoom;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ChatMessage extends Model
{
    use HasFactory;

    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'message',
        'role',
        'seen',
        'chat_room_id',
    ];

    public function chatRoom()
    {
        return $this->belongsTo(ChatRoom::class);
    }
}

