from rest_framework import serializers
from .models import Users, Blog, News

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = Users
        fields = ['username', 'email', 'password']

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'

class NewsSerializer(serializers.ModelSerializer):
    class Meta: 
        model = News
        fields = '__all__'

class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()