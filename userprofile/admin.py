from django.contrib import admin
from .models import UserProfile
from annualreports.models import *
from other_reports.models import *
from reports_page.models import *

admin.site.register(UserProfile)
admin.site.register(AnnualReport)
admin.site.register(Report)
admin.site.register(addreportCategory)
admin.site.register(addreportCategoryCode)
admin.site.register(addReport)


class AddReportAdmin(admin.ModelAdmin):
    exclude = ('reportCategory', 'reportCode')
