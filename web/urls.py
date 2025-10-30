from django.urls import path
from .views import *


app_name="web"


urlpatterns = [
    path("",home,name="home"),
    path("detail/<int:movie_id>/",detail,name="detail"),
    path("all-movies/",all_movies,name="all"),
    path("category/<int:category_id>/",category_page,name="category"),
]