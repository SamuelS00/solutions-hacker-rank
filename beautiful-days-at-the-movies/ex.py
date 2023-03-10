def beautifulDays(i, j, k):
    r = range(i, j + 1)
    count_beautiful_days = 0

    for n in r:
        n_reversed = int(str(n)[::-1])
        result = abs(n - n_reversed) / k

        if result.is_integer():
            count_beautiful_days += 1

    return count_beautiful_days


if __name__ == "__main__":
    print(beautifulDays(20, 23, 6))