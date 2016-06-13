# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Area',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=30)),
                ('coordinates', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Brigade',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('number', models.IntegerField(unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Report',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('date', models.CharField(max_length=4)),
            ],
        ),
        migrations.CreateModel(
            name='Row',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('bushes', models.IntegerField()),
                ('area', models.ForeignKey(to='artvin.Area')),
            ],
        ),
        migrations.CreateModel(
            name='Taskmaster',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=20)),
                ('brigade', models.ForeignKey(to='artvin.Brigade', to_field=b'number')),
            ],
        ),
        migrations.CreateModel(
            name='Worker',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100)),
                ('brigade_number', models.ForeignKey(to='artvin.Brigade', to_field=b'number')),
            ],
        ),
        migrations.CreateModel(
            name='WorkType',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=30)),
                ('standart', models.IntegerField()),
            ],
        ),
        migrations.AddField(
            model_name='report',
            name='workType',
            field=models.ForeignKey(to='artvin.WorkType'),
        ),
        migrations.AddField(
            model_name='area',
            name='brigade',
            field=models.ForeignKey(to='artvin.Brigade', to_field=b'number'),
        ),
    ]
