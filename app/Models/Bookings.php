<?php

namespace App\Models;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Bookings extends Model
{
    use HasFactory;

    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'date',
        'slot',
        'email',
        'customer_id',
        'domain_id',
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}
