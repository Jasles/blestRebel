from django.db import models


class TeamMember(models.Model):
    name = models.CharField(max_length=255)
    photo_url = models.CharField(max_length=400)
    role = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Requests(models.Model):
    name = models.CharField(max_length=255)
    email= models.CharField(max_length=255)
    phone_number = models.CharField(max_length=400, null=True)
    need= models.CharField(max_length=1000, null=True)

        
    def __str__(self):
        return self.name

class Comment (models.Model):
    name = models.CharField(max_length=255)
    comment= models.CharFeild(max_length=200)

      def __str__(self):
        return self.name
