# Generated by Django 3.0.5 on 2020-04-06 20:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pj4', '0004_auto_20200403_1824'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('comment', models.CharField(max_length=400)),
            ],
        ),
    ]
