from django.shortcuts import render

from userprofile import models
from annualreports import models as annualreportmodels
from reports_page import models as reportpagemodels
from other_reports import models as otherreportsmodel

import pprint


def about_board(request):
    values = {
        "values": models.UserProfile.objects.filter(UserType='Board').order_by('Year', 'Name')
    }
    return render(request, 'about-board.html', values)


def about_staff(request):
    values = {
        "values": models.UserProfile.objects.filter(UserType='Staff').order_by('Year', 'Name')
    }
    return render(request, 'about-staff.html', values)


def about_interns(request):
    values = {
        "values": models.UserProfile.objects.filter(UserType='Intern').order_by('-Year', 'Name')
    }
    return render(request, 'about-interns.html', values)


def about_fellows(request):
    values = {
        "values": models.UserProfile.objects.filter(UserType='Fellow').order_by('-Year', 'Name')
    }
    return render(request, 'about-fellow.html', values)


def annual_reports(request):
    values = {
        "firstvalue": annualreportmodels.AnnualReport.objects.all().order_by('-year').first(),
        "values": annualreportmodels.AnnualReport.objects.all().order_by('-year').exclude(
            year=annualreportmodels.AnnualReport.objects.all().order_by('-year').first().year),
        "otherreports": otherreportsmodel.Report.objects.all().values()[0]
    }

    return render(request, 'global-reports.html', values)


def other_reports(request):
    reportCategoryAndCodeList = reportpagemodels.addReport.objects.all().order_by("-reportAddedDate")

    reportCategoriesAvailaible = reportpagemodels.addreportCategory.objects.only("reportCategory")

    reportCategories = []
    reportCodes = []

    for reportCategoryAndCode in reportCategoryAndCodeList:
        # print(reportCategoryAndCode.reportCategoryAndCode)
        reportCategoryAndCode = str(reportCategoryAndCode.reportCategoryAndCode)
        reportCategories.append(reportCategoryAndCode.split('-')[0])
        reportCodes.append(reportCategoryAndCode.split('-')[1])

    values = {
        "reportCategories": reportCategories,
        "reportCodes": reportCodes,
        "values": reportpagemodels.addReport.objects.all().order_by("-reportAddedDate"),
        "reportCategoriesAvailaible": reportCategoriesAvailaible,
        "annualReports": annualreportmodels.AnnualReport.objects.all().order_by("-addedDate").values()
    }

    # pprint.pprint(values['annualReports'])

    return render(request, 'report-page.html', values)
