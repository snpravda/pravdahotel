from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about-us/', views.about_us, name='about-us'),
    path('gallery/', views.gallery, name='gallery'),
    path('book/', views.book, name='book'),
]