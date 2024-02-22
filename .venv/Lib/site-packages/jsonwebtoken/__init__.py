from .api_jwk import PyJWK, PyJWKSet
from .api_jws import (
    PyJWS,
    get_algorithm_by_name,
    get_unverified_header,
    register_algorithm,
    unregister_algorithm,
)
from .api_jwt import Pyjsonwebtoken, decode, encode
from .exceptions import (
    DecodeError,
    ExpiredSignatureError,
    ImmatureSignatureError,
    InvalidAlgorithmError,
    InvalidAudienceError,
    InvalidIssuedAtError,
    InvalidIssuerError,
    InvalidKeyError,
    InvalidSignatureError,
    InvalidTokenError,
    MissingRequiredClaimError,
    PyJWKClientError,
    PyJWKError,
    PyJWKSetError,
    PyjsonwebtokenError,
)
from .jwks_client import PyJWKClient

__version__ = "1.0.0"

__title__ = "jsonwebtoken"
__description__ = "JSON Web Token implementation in Python - Fork from PyJWT"
__url__ = "https://google.com"
__uri__ = __url__
__doc__ = f"{__description__} <{__uri__}>"

__author__ = "jo-project"
__email__ = "jo.project.0911@gmail.com"

__license__ = "GNU Lesser"
__copyright__ = "Copyright 2023 jo-project"


__all__ = [
    "PyJWS",
    "Pyjsonwebtoken",
    "PyJWKClient",
    "PyJWK",
    "PyJWKSet",
    "decode",
    "encode",
    "get_unverified_header",
    "register_algorithm",
    "unregister_algorithm",
    "get_algorithm_by_name",
    # Exceptions
    "DecodeError",
    "ExpiredSignatureError",
    "ImmatureSignatureError",
    "InvalidAlgorithmError",
    "InvalidAudienceError",
    "InvalidIssuedAtError",
    "InvalidIssuerError",
    "InvalidKeyError",
    "InvalidSignatureError",
    "InvalidTokenError",
    "MissingRequiredClaimError",
    "PyJWKClientError",
    "PyJWKError",
    "PyJWKSetError",
    "PyjsonwebtokenError",
]
