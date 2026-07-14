def find_fewest_coins(coins, target):
    if target < 0:
        raise ValueError("target can't be negative")

    if target == 0:
        return []

    dp = [float('inf')] * (target+1)
    dp[0] = 0

    parent = [-1] * (target+1)

    coins = sorted(coins)

    for i in range(1, target + 1):
        for coin in coins:
            if coin > i:
                break

            if dp[i - coin] + 1 < dp[i]:
                dp[i] = dp[i - coin] + 1
                parent[i] = coin
                
    if dp[target] == float('inf'):
        raise ValueError("can't make target with given coins")

    result = []
    current = target
    while current > 0:
        coin = parent[current]
        result.append(coin)
        current -= coin

    return sorted(result)

        
        
        
