from django.conf.urls.defaults import patterns, include, url

from fourcraft.views.core import ( home )

urlpatterns = patterns('',
    url('^fourcraft/$', home, name='home'),
    #url('^fourcraft/login$', login, name='login'),
)