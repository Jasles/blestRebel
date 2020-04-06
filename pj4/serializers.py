from rest_framework import serializers

from .models import Requests, TeamMember


class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = ('id', 'name', 'photo_url', 'role')

class RequestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Requests
        fields = ('id', 'name', 'email','phone_number','need')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'name', 'comment')
        