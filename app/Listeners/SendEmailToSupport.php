<?php

namespace App\Listeners;

use App\Events\SupportRequestReceived;
use App\Mail\SupportRequest;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;

class SendEmailToSupport
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Queue the mail to be send to the support email address
     *
     * @param  SupportRequestReceived  $event
     * @return void
     */
    public function handle(SupportRequestReceived $event)
    {
        //We'll email the user about the new support request here
        Mail::to(env('SUPPORT_MAIL'))->queue(new SupportRequest($event->support));
    }
}
