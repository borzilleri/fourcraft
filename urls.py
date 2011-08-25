from django.conf.urls.defaults import patterns, include, url

from fourcraft.views.core import ( home )
from fourcraft.views.auth import ( login )

urlpatterns = patterns('',
    url('^fourcraft/$', home, name='home'),
    url('^fourcraft/login$', login, name='login'),
)
