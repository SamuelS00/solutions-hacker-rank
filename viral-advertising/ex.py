import math


def viral_advertising(n):
    shared = 5
    linked = 0
    friends = 3
    cumulative = 0

    for day in range(1, n + 1):
        linked = math.floor(shared / 2)
        cumulative += linked
        shared = linked * friends

    return cumulative


if __name__ == "__main__":
    print(viral_advertising(5))
