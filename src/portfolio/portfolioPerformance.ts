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
 */
export const calculatePortfolioPerformance = (initialInvestment: number, currentValue: number): PortfolioPerformance => {

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