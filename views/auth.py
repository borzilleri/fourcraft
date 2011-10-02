from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponse
from django.conf import settings
import simplejson
import urllib

def login(request):
    """TODO: probably want to actuallyt check to see if the user is logged in
    if they are, redirect back to home.
    """
    fsUrl = settings.FS_AUTH_URL + "?redirect_uri="+settings.FS_REDIR_URI+ \
            "&response_type=code&client_id="+settings.FS_ID
    response = HttpResponse()
    reponse["Location"] = fsUrl
    return response

def authenticate(request, code):
    data = urllib.urlencode({
        'grant_type': 'authorization_code',
        'client_id': settings.FS_ID,
        'client_secret': setttings.FS_SECRET,
        'redirect_uri': settings.FS_REDIR_URI,
        'code': code
        })
    url = settings.FS_ACCESS_URI+"?"+data
    json = simplejson.loads(urllib.urlopen(url).read())
    token = json['access_token']

    """TODO: Retrieve user data, and store it.
    """

    response = HttpResponse()
    response["Location"] = "/"
    return response

