from django.shortcuts import render
from .models import Movies , Category , Like
from django.db.models import Count
from Comment.forms import CommentForm
from Subscription.models import Subscription
from Comment.models import Comment
from blog.models import Post





def home(request):
    movie = Movies.objects.all()
    subscription = Subscription.objects.all()
    category = Category.objects.annotate(
        movie_count = Count("movies")
    )[0:8]
    popular_movies = Movies.objects.filter(movie_or_not="سنمایی").order_by("-like_counts")[0:8]
    popular_series = Movies.objects.filter(movie_or_not="سریال").order_by("-like_counts")[0:8]
    feature_movie = Movies.objects.filter(movie_or_not="سنمایی").order_by("-like_counts")
    comment = Comment.objects.all()
    blog = Post.objects.all().order_by("-created")
    return render(request,"web/home.html",{"movie":movie,
                                           "fe":feature_movie,
                                           "ps":popular_series,
                                           "pm":popular_movies,
                                           "cate":category,
                                           "su":subscription,
                                           "co":comment,
                                           "blog":blog,
                                           })



def detail(request , movie_id):
    movie = Movies.objects.get(id=movie_id)
    movies = Movies.objects.filter(category=movie.category)
    return render(request,"web/detail.html",{"m":movie,"mr":movies})



def all_movies(request):
    movie = Movies.objects.all()
    return render(request,"web/all.html",{"movie":movie})



def category_page(request , category_id):
    category = Category.objects.get(id=category_id)
    category_page = Movies.objects.filter(category=category)
    return render(request,"web/category.html",{"ct":category_page})