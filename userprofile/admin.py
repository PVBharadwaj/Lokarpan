from django.contrib import admin
from .models import UserProfile
from annualreports.models import *
from other_reports.models import *
from reports_page.models import *
from timeline.models import *

admin.site.register(UserProfile)
admin.site.register(AnnualReport)
admin.site.register(Report)
admin.site.register(addreportCategory)
admin.site.register(addreportCategoryCode)
admin.site.register(addReport)
admin.site.register(Timeline)


class AddReportAdmin(admin.ModelAdmin):
    exclude = ('reportCategory', 'reportCode')
