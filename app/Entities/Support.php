<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class Support extends Model
{
    /**
     * Overriding the table name
     * @var string
     */
    protected $table = 'support';


    /**
     * Allowed fields for mass assignment
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'subject',
        'description'
    ];
}