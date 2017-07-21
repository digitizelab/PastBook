<?php

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class SupportTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * @test
     * @group feedback
     */
    public function any_user_can_post_a_feedback()
    {
        $ticketData = $this->templateTicket();
        $response = $this->post('/api/support', $ticketData);
        $response->assertJsonStructure([
            'message',
            'data' => [
                'name',
                'email',
                'subject',
                'description',
                'created_at',
                'updated_at'
            ]
        ])
            ->assertStatus(200);

        $this->assertDatabaseHas('support', ['subject' => $ticketData['subject']]);
    }

    /**
     * Return sample support ticket for testing
     * @return array
     */
    protected function templateTicket()
    {
        $data = [
            'name' => 'Nishan K',
            'email' => 'nishan.karunarathna@gmail.com',
            'subject' => str_random(20),
            'description' => 'Test Request Description'
        ];
        return $data;
    }
}