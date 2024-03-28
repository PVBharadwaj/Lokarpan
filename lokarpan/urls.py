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
from django.urls import path, include
from django.views.generic import TemplateView
# from lokarpan.views import *
# from userprofile.views import *
from userprofile import views
from annualreports import annualreportsviews
from other_reports import additionalreportsviews
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers
# from django.conf.urls import url

router = routers.DefaultRouter()
router.register(r'board', views.BoardViewSet, 'Board')
router.register(r'staff', views.StaffViewSet, 'Staff')
router.register(r'educators', views.EducatorsViewSet, 'Educators')
router.register(r'fellows', views.FellowViewSet, 'Fellows')
router.register(r'annualreports', annualreportsviews.AnnualReports, 'AnnualReports')
router.register(r'additionalreports', additionalreportsviews.Report, 'AdditionalReports')


# urlpatterns = [
# path('board/', views.about_board, name="About Board"),
# path('staff/', views.about_staff, name="About Staff"),
# path('educators/', views.about_interns, name="About Interns"),
# path('fellows/', views.about_fellows, name="About Fellows"),


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),





    # path('', TemplateView.as_view(template_name='index.html')),
    # path('board/', about_board.as_view(), name="about board"),
    # path('staff/', about_staff.as_view(), name="about staff"),
    # path('educators/', about_interns.as_view(), name="about educators"),
    # path('fellows/', about_fellows.as_view(), name="about fellows"),

    # path('', TemplateView.as_view(template_name='index.html')),
    # path('index.html', TemplateView.as_view(template_name='index.html')),
    # path('about.html', TemplateView.as_view(template_name='about.html')),
    # path('staff/', about_staff.as_view(), name="About Staff"),
    # path('fellow/', about_fellows, name="About Fellow"),
    # path('interns/', about_interns, name="About Interns"),
    # path('board/', about_board, name="About Boards"),
    # path('global-reports.html', annual_reports, name="Annual Reports"),
    # path('education.html', TemplateView.as_view(template_name='education.html')),
    # path('history.html', TemplateView.as_view(template_name='history.html')),
    # path('privacy-policy.html', TemplateView.as_view(template_name='privacy-policy.html')),
    # path('support.html', TemplateView.as_view(template_name='support.html')),
    # path('support-being-a-volunteer.html', TemplateView.as_view(template_name='support-being-a-volunteer.html')),
    # path('support-volunteer.html', TemplateView.as_view(template_name='support-volunteer.html')),
    # path('support-our-supporters.html', TemplateView.as_view(template_name='support-our-supporters.html')),
    # path('support-donate.html', TemplateView.as_view(template_name='support-donate.html')),
    # path('mission.html', TemplateView.as_view(template_name='mission.html')),
    # path('rural-education.html', TemplateView.as_view(template_name='rural-education.html')),
    # path('terms-of-use.html', TemplateView.as_view(template_name='terms-of-use.html')),
    # path('report-page.html', other_reports, name="Other Reports"),
]
#  ]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
