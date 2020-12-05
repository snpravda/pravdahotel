from django.db import models

# Create your models here.

class Person(models.Model):
    phone = models.CharField(max_length=20)

    def __str__(self):
        return self.phone

class Room(models.Model):
    ROOM_CHOICES = [
        ('r1', 'Good'),
        ('r2', 'Family'),
        ('r3', 'Lux'),
    ]

    room = models.CharField(choices=ROOM_CHOICES, max_length=100)

    def __str__(self):
        return self.room

class Notebook(models.Model):
    check_in = models.DateField()
    check_out = models.DateField()
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id)
