export const HTTP_STATUS_CODE = Object.freeze(
    {
        "SUCESS": {
            "OK": 200, 
            "CREATED": 201, 
            "ACCEPTED": 202, 
            "NON_AUTHORITATIVE_INFORMATION": 203, "NO_CONTENT": 204
        },
        "CLIENT_ERROR": {
            "BAD_REQUEST": 400,
            "UNAUTHORIZED": 401,
            "FORBIDDEN": 403,
            "NOT_FOUND": 404,
            "METHOD_NOT_ALLOWED": 405
        },
        "SERVER_ERROR": {
            "INTERNAL_SERVER_ERROR": 500,
            "NOT_IMPLEMENTED": 501,
            "BAD_GATEWAY": 502,
            "SERVICE_UNAVAILABLE": 503,
            "GATEWAY_TIMEOUT": 504
        }
    }
);