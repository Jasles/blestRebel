from django.contrib import admin

# Register your models here.
from .models import Requests
from .models import TeamMemeber

admin.site.register(Requests)
admin.site.register(TeamMemeber)