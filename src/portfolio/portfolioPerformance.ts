interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}

/**
 * Calculates the portfolios performance based on the percent chance of the initial investment 
 * @param initialInvestment - Initial investment made
 * @param currentValue - Current value of the portfolio 
 * @returns The calculated portfolio with its performance
 * @throws Will throw Error if initialInvestment isn't a number greater than 0
 */
export const calculatePortfolioPerformance = (initialInvestment: number, currentValue: number): PortfolioPerformance => {

    /*
    I might be mistaken but I believe typeOf would already check for null and Nan, so you can probably get away with just the typeOf and smaller than zero check
    You may also want to consider supporting multiple different error messages such as "must be a number".
    */
    if (initialInvestment == null ||
        isNaN(initialInvestment) ||
        typeof initialInvestment !== 'number' ||
        initialInvestment <= 0
    ) {
        throw new Error("Initial investment must be a number greater than 0.");
    }

    const profitOrLoss = currentValue - initialInvestment;
    const percentageChange = (profitOrLoss / initialInvestment) * 100;

    /**
     * Determines the portfolio status based on the changed percentage of the investment
     * @param percentageChange 
     * @returns A status string indicating the state of the portfolio 
     */
    const getPerformanceSummary = (percentageChange: number): string => {
        switch (true) {
            case percentageChange >= 30:
                return "Excellent performance! Your investments are doing great.";
            case percentageChange >= 10:
                return "Solid gain. Keep monitoring your investments.";
            case percentageChange > 0:
                return "Modest gain. Your portfolio is growing slowly.";
            case percentageChange === 0:
                return "No change. Your portfolio is steady.";
            case percentageChange >= -10:
                return "Minor loss. Stay calm and review your options.";
            default:
                return "Significant loss. Review your portfolio strategy.";
        }
    };

    const performanceSummary = getPerformanceSummary(percentageChange);

    const calculatedPortfolio: PortfolioPerformance = {
        initialInvestment: initialInvestment,
        currentValue: currentValue,
        profitOrLoss: profitOrLoss,
        percentageChange: percentageChange,
        performanceSummary: performanceSummary
    }

    return calculatedPortfolio
}