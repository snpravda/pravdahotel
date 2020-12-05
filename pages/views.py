from django.shortcuts import render, redirect
from .models import *

# Create your views here.

def get_room_id(post):
    if post.get('r1'):
        return 'r1'
    elif post.get('r2'):
        return 'r2'
    else:
        return 'r3'


def handler404(request, *args, **kwargs):
    return redirect('/')


def index(request):
    if request.method == "GET":
        return render(request, 'index.html')
    return render(request, 'index.html')


def about_us(request):
    if request.method == "GET":
        return render(request, 'aboutUs.html')
    return render(request, 'aboutUs.html')


def book(request):
    if request.method == "GET":
        return render(request, 'book.html')
    if request.method == "POST":
        try:
            person = Person.objects.filter(phone=request.POST['phone']).first()
            if not person:
                person = Person.objects.create(phone=request.POST['phone'])
            room_id = get_room_id(request.POST)
            room = Room.objects.filter(room=room_id).first()
            check_in = request.POST['arrive']
            check_out = request.POST['departure']
            Notebook.objects.create(check_in=check_in, check_out=check_out, person=person, room=room)
        except:
            pass
        return render(request, 'book.html')
    return render(request, 'book.html')


def gallery(request):
    if request.method == "GET":
        return render(request, 'gallery.html')
    return render(request, 'gallery.html')