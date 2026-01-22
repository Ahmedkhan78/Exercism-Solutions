# Module docstring explaining the purpose of the program
"""Functions used in preparing Guido's gorgeous lasagna.
"""

# Define your constants
EXPECTED_BAKE_TIME = 40  # Expected time for baking the lasagna

# Function to calculate the remaining bake time
def bake_time_remaining(bake_time):
    """Calculate the bake time remaining.

    :param bake_time: int - baking time already elapsed.
    :return: int - remaining bake time (in minutes) derived from 'EXPECTED_BAKE_TIME'.

    This function calculates how many more minutes the lasagna needs to bake.
    """
    return EXPECTED_BAKE_TIME - bake_time

# Function to calculate preparation time based on number of layers
def preparation_time_in_minutes(number_of_layers):
    """Calculate preparation time based on the number of layers.

    :param number_of_layers: int - the number of layers in the lasagna.
    :return: int - time taken for preparation in minutes.
    
    This function assumes each layer takes 2 minutes to prepare.
    """
    return number_of_layers * 2

# Function to calculate total elapsed time (preparation + baking)
def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """Calculate the elapsed cooking time.

    :param number_of_layers: int - the number of layers in the lasagna.
    :param elapsed_bake_time: int - elapsed cooking time.
    :return: int - total time elapsed (in minutes) preparing and cooking.

    This function calculates the total time, considering preparation time and the time already spent baking.
    """
    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time