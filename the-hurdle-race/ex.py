def hurdle_race(k, height):
    higher_number = max(height) if len(height) > 0 else 0
    potions = higher_number - k

    if potions <= 0:
        return 0
    else:
        return potions


if __name__ == "__main__":
    print(hurdle_race(4, [1, 6, 3, 5, 2]))
    print(hurdle_race(7, [2, 5, 4, 5, 2]))
    print(hurdle_race(7, []))
