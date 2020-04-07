from django.shortcuts import render

# Create your views here.
# tunr_app/views.py
from rest_framework import viewsets

from .serializers import TeamMemberSerializer, RequestsSerializer, CommentSerializer
from .models import TeamMember, Requests, Comment


class TeamMemberView(viewsets.ModelViewSet):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer

class RequestsView(viewsets.ModelViewSet):
    queryset = Requests.objects.all()
    serializer_class = RequestsSerializer

class CommentView(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

