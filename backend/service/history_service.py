from foodPrepIt.models import Food

def get_history():
    history_list = Food.objects.all()
    return history_list