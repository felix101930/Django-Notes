from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Note(models.Model):
    # django uses an orm to interact with the database
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True) # auto add the current time when the object is created
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notes')
    
    
    def __str__(self):
        return self.title