<?php

namespace App\Listeners;

use App\Events\SupportRequestReceived;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class CreateAirtableRecord implements ShouldQueue
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
     * Persist the record in Airtable - will be added to the queue
     *
     * @param  SupportRequestReceived $event
     * @return void
     */
    public function handle(SupportRequestReceived $event)
    {
        $data = [
            'name' => $event->support->name,
            'email' => $event->support->email,
            'subject' => $event->support->subject,
            'description' => $event->support->description
        ];
        createAirtableRecord($data);
    }
}
