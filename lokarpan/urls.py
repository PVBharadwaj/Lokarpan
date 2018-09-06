"""lokarpan URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import path
from django.views.generic import TemplateView
from lokarpan.views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('index.html', TemplateView.as_view(template_name='index.html')),
    path('about.html', TemplateView.as_view(template_name='about.html')),
    path('about-staff.html', about_staff, name="About Staff"),
    path('about-fellow.html', about_fellows, name="About Fellow"),
    path('about-interns.html', about_interns, name="About Interns"),
    path('about-board.html', about_board, name="About Boards"),
    path('annual-report.html', annual_reports, name="Annual Reports"),
    path('education.html', TemplateView.as_view(template_name='education.html')),
    path('history.html', TemplateView.as_view(template_name='history.html')),
    path('privacy-policy.html', TemplateView.as_view(template_name='privacy-policy.html')),
    path('support.html', TemplateView.as_view(template_name='support.html')),
    path('support-being-a-volunteer.html', TemplateView.as_view(template_name='support-being-a-volunteer.html')),
    path('support-volunteer.html', TemplateView.as_view(template_name='support-volunteer.html')),
    path('support-our-supporters.html', TemplateView.as_view(template_name='support-our-supporters.html')),
    path('support-donate.html', TemplateView.as_view(template_name='support-donate.html')),
    path('mission.html', TemplateView.as_view(template_name='mission.html')),
    path('rural-education.html', TemplateView.as_view(template_name='rural-education.html')),
    path('terms-of-use.html', TemplateView.as_view(template_name='terms-of-use.html')),
    path('report-page.html', other_reports, name="Other Reports"),

]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
