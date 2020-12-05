
from django.contrib import admin
from .models import Notebook, Room, Person
# Register your models here.


class NotebookAdmin(admin.ModelAdmin):
    list_display = (
        'check_in',
        'check_out',
        'person',
        'room',
    )

class RoomAdmin(admin.ModelAdmin):
    list_display = ('__str__',)

class PersonAdmin(admin.ModelAdmin):
    list_display = ('__str__',)


admin.site.register(Notebook, NotebookAdmin)
admin.site.register(Room, RoomAdmin)
admin.site.register(Person, PersonAdmin)



