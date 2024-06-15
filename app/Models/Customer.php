<?php

namespace App\Models;

use App\Models\Domain;
use App\Models\Bookings;
use App\Models\ChatRoom;
use App\Models\CustomerResponses;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Customer extends Model
{
    use HasFactory;

    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'email',
        'domain_id',
    ];

    public function domain()
    {
        return $this->belongsTo(Domain::class);
    }

    public function questions()
    {
        return $this->hasMany(CustomerResponses::class);
    }

    public function chatRooms()
    {
        return $this->hasMany(ChatRoom::class);
    }

    public function bookings()
    {
        return $this->hasMany(Bookings::class);
    }
}

