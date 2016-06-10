# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('artvin', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='brigade',
            name='number',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='taskmaster',
            name='email',
            field=models.EmailField(max_length=254),
        ),
    ]
