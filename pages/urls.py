from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about_us/', views.about_us, name='about_us'),
    path('gallery/', views.gallery, name='gallery'),
    path('book/', views.book, name='book'),
]