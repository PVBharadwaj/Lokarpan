# Generated by Django 2.1 on 2018-09-10 19:38

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import reports_page.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='addReport',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reportFile', models.FileField(upload_to='')),
                ('reportDescription', models.CharField(max_length=30)),
                ('reportAddedDate', models.DateField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='addreportCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reportCategory', models.CharField(max_length=100, unique=True)),
            ],
            options={
                'verbose_name': 'Report Category',
                'verbose_name_plural': 'Report Categories',
            },
        ),
        migrations.CreateModel(
            name='addreportCategoryCode',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reportCode', models.CharField(max_length=100, unique=True, validators=[reports_page.models.validate_hyphen])),
                ('reportCategory', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reports_page.addreportCategory')),
            ],
            options={
                'verbose_name': 'Report Code',
                'verbose_name_plural': 'Report Codes',
            },
        ),
        migrations.AddField(
            model_name='addreport',
            name='reportCategoryAndCode',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reports_page.addreportCategoryCode'),
        ),
    ]
