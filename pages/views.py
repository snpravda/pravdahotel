from django.shortcuts import render

# Create your views here.

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
    return render(request, 'book.html')


def gallery(request):
    if request.method == "GET":
        return render(request, 'gallery.html')
    return render(request, 'gallery.html')