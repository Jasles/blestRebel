# tunr_app/urls.py
from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('teammember', views.TeamMemberView)
router.register('requests', views.RequestsView)
router.register('comment', views.CommentView)


urlpatterns = [
    path('', include(router.urls))

]
