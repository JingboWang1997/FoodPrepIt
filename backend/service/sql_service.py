from django.db import connection

def check_key_exist(title,source):
    with connection.cursor() as cursor:
        sql = "select exists(select 1 from foodPrepIt_cacherecipedetail where title=%s and sourceAPI=%s) limit 1"
        cursor.execute(sql,(title,source))
        check = cursor.fetchone()[0]
        return check

def get_db_data(items,title,source):
    with connection.cursor() as cursor:
        sql = "select " +  items +  " from foodPrepIt_cacherecipedetail where title=%s and sourceAPI=%s"
        cursor.execute(sql,(title,source))
        response = cursor.fetchone()
        return response