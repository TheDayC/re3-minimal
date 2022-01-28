export function healthColor(hp: string): string {
    const hpNumber = parseFloat(hp);

    if (hpNumber <= 66 && hpNumber > 33) {
        return 'yellow';
    } else if (hpNumber <= 33 && hpNumber > 0) {
        return 'red';
    } else {
        return 'green';
    }
}

export function healthPercentage(currentHealth: number, maxHealth: number, decimalPlaces: number): string {
    const healthPc = `${(100 * currentHealth) / maxHealth}`;

    return parseFloat(healthPc).toFixed(decimalPlaces);
}
