def climbingLeaderboard(ranked, player):
    rank = list(set(ranked))
    rank.sort()
    length = len(rank)
    aux = 0
    result = []

    for game in player:
        while aux < length and rank[aux] <= game:
            aux += 1  

        result.append(length - aux + 1)

    return result


if __name__ == "__main__":
    print(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]))
    print(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]))