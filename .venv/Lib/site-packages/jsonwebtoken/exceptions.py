class PyjsonwebtokenError(Exception):
    """
    Base class for all exceptions
    """

    pass


class InvalidTokenError(PyjsonwebtokenError):
    pass


class DecodeError(InvalidTokenError):
    pass


class InvalidSignatureError(DecodeError):
    pass


class ExpiredSignatureError(InvalidTokenError):
    pass


class InvalidAudienceError(InvalidTokenError):
    pass


class InvalidIssuerError(InvalidTokenError):
    pass


class InvalidIssuedAtError(InvalidTokenError):
    pass


class ImmatureSignatureError(InvalidTokenError):
    pass


class InvalidKeyError(PyjsonwebtokenError):
    pass


class InvalidAlgorithmError(InvalidTokenError):
    pass


class MissingRequiredClaimError(InvalidTokenError):
    def __init__(self, claim):
        self.claim = claim

    def __str__(self):
        return f'Token is missing the "{self.claim}" claim'


class PyJWKError(PyjsonwebtokenError):
    pass


class PyJWKSetError(PyjsonwebtokenError):
    pass


class PyJWKClientError(PyjsonwebtokenError):
    pass
