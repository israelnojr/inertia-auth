<?php
namespace App\Models;

use App\Models\User;
use App\Models\ChatBot;
use App\Models\Product;
use App\Models\Campaign;
use App\Models\Customer;
use App\Models\HelpDesk;
use App\Models\FilterQuestions;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Domain extends Model
{
    use HasFactory;

    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'name',
        'icon',
        'user_id',
        'campaign_id',
    ];

    public function chatBot()
    {
        return $this->hasOne(ChatBot::class);
    }

    public function helpdesks()
    {
        return $this->hasMany(HelpDesk::class);
    }

    public function filterQuestions()
    {
        return $this->hasMany(FilterQuestions::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function customers()
    {
        return $this->hasMany(Customer::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function campaign()
    {
        return $this->belongsTo(Campaign::class);
    }
}
