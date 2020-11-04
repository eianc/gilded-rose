export const isInRange = (min: number, max: number, element: number) => {
    return (min < element && element <= max);
}