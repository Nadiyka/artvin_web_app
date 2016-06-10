# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('artvin', '0002_auto_20160603_2310'),
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
            name='WorkType',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=30)),
                ('standart', models.IntegerField()),
            ],
        ),
        migrations.AddField(
            model_name='brigade',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, default=1, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='brigade',
            name='taskmaster',
            field=models.ForeignKey(to='artvin.Taskmaster'),
        ),
        migrations.AddField(
            model_name='report',
            name='workType',
            field=models.ForeignKey(to='artvin.WorkType'),
        ),
        migrations.AddField(
            model_name='area',
            name='brigade',
            field=models.ForeignKey(to='artvin.Brigade'),
        ),
    ]
