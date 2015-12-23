<?php

namespace AppBundle\Controller\Api;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Class MessageController
 *
 * @package AppBundle\Controller\Api
 */
class MessageController extends Controller
{
    /**
     * @Route("/message", name="api.message")
     * @Method("POST")
     *
     * @return JsonResponse
     */
    public function processAction()
    {
        /** @var \Predis\Client $redis */
        $redis = $this->container->get('snc_redis.default');
        $redis->ping('hello');
        $redis->publish('processing', 'process');

        return new JsonResponse();
    }
}
