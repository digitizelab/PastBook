<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Eloquent\EloquentSupportRepository;
use App\Repositories\Contracts\SupportRepositoryInterface;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register any repository services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(SupportRepositoryInterface::class, EloquentSupportRepository::class);
    }
}
