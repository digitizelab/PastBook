<?php

namespace App\Events;

use App\Entities\Support;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class SupportRequestReceived
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $support;
    /**
     * Create a new event instance.
     * @param Support $support
     */
    public function __construct(Support $support)
    {
        $this->support = $support;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
