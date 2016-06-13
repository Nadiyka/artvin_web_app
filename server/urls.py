"""artvin_web_app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from rest_framework.routers import DefaultRouter
from artvin.views import TaskmasterViewSet, BrigadeViewSet, WorkerViewSet, WorkTypeViewSet, ReportViewSet, AreaViewSet, RowViewSet

router = DefaultRouter()
router.register(prefix='taskmasters', viewset=TaskmasterViewSet)
router.register(prefix='brigades', viewset=BrigadeViewSet)
router.register(prefix='workers', viewset=WorkerViewSet)
router.register(prefix='worktypes', viewset=WorkTypeViewSet)
router.register(prefix='reports', viewset=ReportViewSet)
router.register(prefix='areas', viewset=AreaViewSet)
router.register(prefix='rows', viewset=RowViewSet)

urlpatterns = router.urls
