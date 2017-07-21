<?php

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class SupportTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * @test
     * @group support
     */
    public function any_user_can_post_a_support_request()
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
     * @test
     * @group support
     */
    public function all_the_fields_are_required_to_create_a_support_request()
    {
        $ticketData = $this->templateTicket();
        unset($ticketData['name']);
        $response = $this->post('/api/support', $ticketData);
        $response->assertJsonStructure([
            'message',
            'errors'
        ])
            ->assertStatus(422);

        $this->assertDatabaseMissing('support', ['subject' => $ticketData['subject']]);
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