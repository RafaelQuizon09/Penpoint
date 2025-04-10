from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Users(AbstractUser):
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

class Blog(models.Model):
    blogID = models.AutoField(primary_key=True)
    blogTitle = models.CharField(max_length=100)
    blogContent = models.CharField(max_length=20000)
    blogCreatedat = models.DateField()
    userID = models.ForeignKey(Users, on_delete=models.CASCADE)
    def __str__(self):
        return self.blogTitle

class News(models.Model):
    newsID = models.AutoField(primary_key=True)
    newsTitle = models.CharField(max_length=2048)
    newsFrom = models.CharField(max_length=100)
    newsDate = models.DateField()
    newsDescription = models.CharField(max_length=20000)
    newsLink = models.CharField(max_length=200)
    userID = models.ForeignKey(Users, on_delete=models.CASCADE)
    def __str__(self):
        return self.newsTitle
    
