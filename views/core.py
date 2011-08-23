from django.shortcuts import render_to_response
from django.template import RequestContext

def _lookup_template(name):
    """ Potential support for themes, in theory.
    """
    theme = 'default'
    return '%s/%s.html' % (theme, name)

def home(request):
    """
    1: Detect if the user is logged in.
    1a: If so, pull their user data.
    2: Pull map render data
    3: Render template
    4: ???
    5: Profit!
    """
    return render_to_response(_lookup_template('home'), context_instance=RequestContext(request))

