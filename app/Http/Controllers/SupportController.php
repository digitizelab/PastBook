<?php

namespace App\Http\Controllers;

use App\Events\SupportRequestReceived;
use App\Http\ApiResponse;
use App\Repositories\Contracts\SupportRepositoryInterface;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class SupportController extends Controller
{
    /**
     * Generalized trait which helps to respond consistent json
     */
    use ApiResponse;

    /**
     * @var SupportRepositoryInterface
     */
    private $support;

    /**
     * SupportController constructor.
     * @param SupportRepositoryInterface $support
     */
    public function __construct(SupportRepositoryInterface $support)
    {
        $this->support = $support;
    }

    /**
     * Receive the support ticket and persist on the database
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        try {

            $this->validate($request, [
                'name' => 'required|string',
                'email' => 'required|email',
                'subject' => 'required|string',
                'description' => 'required|string'
            ]);

            $createdTicket = $this->support->create($request->all());

            event(new SupportRequestReceived($createdTicket));

            return $this->jsonResponse('Support request created successfully', $createdTicket);

        } catch (ValidationException $e) {
            return $this->jsonResponse($e->getMessage(), $e->validator->getMessageBag(), false,422);
        } catch (\Exception $e) {
            return $this->jsonResponse('Error creating support request', $e->getMessage(), false,
                422);
        }
    }
}
