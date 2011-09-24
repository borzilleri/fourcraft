from django.conf.urls.defaults import patterns, include, url

from fourcraft.views.core import ( home )

urlpatterns = patterns('',
    url('^$', home, name='home'),
    #url('^login$', login, name='login'),
)
