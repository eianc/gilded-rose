export const decreaseValue = (x: number, y: number) => {
    const difference = x - y;
    return difference > 0 ? difference : 0;
};

export const increaseValue = (x: number, y: number, limit: number) => {
    const sum = x + y;
    return sum > limit ? limit : sum;
}
