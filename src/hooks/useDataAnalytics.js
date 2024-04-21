import { useState, useEffect } from 'react';

const useDataAnalytics = () => {
    const [data, setData] = useState([]);
    const [statistics, setStatistics] = useState([]);

    // Function to fetch relevant data, In this case we are fetching the data from provided json file
    const fetchData = async () => {
        const response = await fetch('/Wine-Data.json');
        const wineData = await response.json();
        setData(wineData);
    }

    // Utility function to calculate mean (All functions round off to nearest 3 decimal places)
    const calculateMean = (data) => {
        if (!data || data.length === 0) return 0;
        const sum = data.reduce((acc, curr) => acc + curr, 0);
        const mean = sum / data.length
        return mean.toFixed(3);
    };

    // Utility function to calculate median
    const calculateMedian = (data) => {
        if (!data || data.length === 0) return 0;
        const sortedData = data.slice().sort((a, b) => a - b);
        const mid = Math.floor(sortedData.length / 2);
        let median;
        if (sortedData.length % 2 === 0) {
            median = (sortedData[mid - 1] + sortedData[mid]) / 2;
        } else {
            median = sortedData[mid];
        }
        return median.toFixed(3);
    };

    // Utility function to calculate mode
    const calculateMode = (data) => {
        if (!data || data.length === 0) return 0;
        const counts = {};
        data.forEach((val) => {
            counts[val] = (counts[val] || 0) + 1;
        });
        let mode;
        let maxCount = 0;
        Object.entries(counts).forEach(([key, value]) => {
            if (value > maxCount) {
                mode = key;
                maxCount = value;
            }
        });
        return parseFloat(mode).toFixed(3);
    };

    // main function to calculate stats
    const calculateStatistics = (data) => {

        // creating a map with alcochol class as the key and the relevant object in that class as the value
        const groupedData = {};

        data.forEach((entry) => {
            const alcoholClass = Number(entry.Alcohol);
            if (!groupedData[alcoholClass]) {
                groupedData[alcoholClass] = [];
            }
            groupedData[alcoholClass].push({
                flavanoids: Number(entry.Flavanoids),
                gamma: Number((entry.Ash * entry.Hue) / entry.Magnesium)
            });
        });

        const statistics = {};
        // calculating mean,median,mode for each class
        Object.entries(groupedData).forEach(([alcoholClass, data]) => {
            statistics[alcoholClass] = {
                flavanoids: {
                    mean: calculateMean(data.map(entry => entry.flavanoids)),
                    median: calculateMedian(data.map(entry => entry.flavanoids)),
                    mode: calculateMode(data.map(entry => entry.flavanoids))
                },
                gamma: {
                    mean: calculateMean(data.map(entry => entry.gamma)),
                    median: calculateMedian(data.map(entry => entry.gamma)),
                    mode: calculateMode(data.map(entry => entry.gamma))
                }
            };
        });

        return statistics;
        
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // calculating the stats after data is fetched
        if (data.length > 0) {
            const stats = calculateStatistics(data);
            setStatistics(stats);
        }

    }, [data]);

    return statistics;
}

export default useDataAnalytics;
