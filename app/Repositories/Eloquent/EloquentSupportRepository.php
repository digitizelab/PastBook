<?php namespace App\Repositories\Eloquent;

use App\Entities\Support;
use App\Repositories\Contracts\SupportRepositoryInterface;

class EloquentSupportRepository extends EloquentRepository implements SupportRepositoryInterface
{

    /**
     * Specify Model class name
     *
     * @return mixed
     */
    function model(): string
    {
        return Support::class;
    }

}