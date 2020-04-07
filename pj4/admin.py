from django.contrib import admin

# Register your models here.
from .models import Requests
from .models import TeamMember
from .models import Comment

admin.site.register(Requests)
admin.site.register(TeamMember)
admin.site.register(Comment)