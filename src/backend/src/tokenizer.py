from auth0.v3.authentication import GetToken
from auth0.v3.management import Auth0


# TODO: handle login requests VIA this class for getting login tokens
class tokenized:
    def __init__(self):
        domain = 'weight-app.eu.auth0.com'
        get_token = GetToken(domain)
        client_id = '87DuUuEzbksAUkSCdWh18CVOzrVwIieS'
        client_secret = 'bjJtLhiW04dgFHXVZYzUNDv38BNCgkQpEcP-M_OMH7AzWgW7ayEwZ7mY_VyUpbTi/'
        token = get_token.client_credentials(client_id=client_id,
                                             client_secret=client_secret,
                                             audience=('https://{}/api/v2/'.format(domain)))['access_token']
        self.APP = Auth0(domain, token)
        print(token)

    # TODO: self.APP request to get token for login
    def get_token(self, login):

