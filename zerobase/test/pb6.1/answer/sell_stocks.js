/**
 * @param prices {Array}
 */
function solution(prices) {
    const indexes = {};
    let minLoss = Infinity;

    for (let i = 0; i < prices.length; i++) {
        indexes[prices[i]] = i;
    }
    const sortedPrices = Object.keys(indexes).sort((a, b) => a - b);

    for (let i = 0; i < sortedPrices.length - 1; i++) {
        if (indexes[sortedPrices[i]] > indexes[sortedPrices[i + 1]]) {
            minLoss = Math.min(minLoss, prices[indexes[sortedPrices[i + 1]]] - prices[indexes[sortedPrices[i]]]);
        }
    }
    return minLoss;
}