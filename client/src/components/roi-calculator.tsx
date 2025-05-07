import React, { useState, useEffect } from 'react';
import { Calculator, Users, Clock, Percent, DollarSign, Zap } from 'lucide-react';

/**
 * ROI Calculator Component
 * Interactive tool that helps users calculate potential return on investment
 * for implementing AI automation solutions
 */
interface ROICalculatorProps {
  className?: string;
  defaultValues?: {
    employees?: number;
    hourlyRate?: number;
    hoursPerWeek?: number;
    automationLevel?: number;
  };
}

export function ROICalculator({ className = '', defaultValues = {} }: ROICalculatorProps) {
  // State for form inputs
  const [employees, setEmployees] = useState(defaultValues.employees || 10);
  const [hourlyRate, setHourlyRate] = useState(defaultValues.hourlyRate || 35);
  const [hoursPerWeek, setHoursPerWeek] = useState(defaultValues.hoursPerWeek || 5);
  const [automationLevel, setAutomationLevel] = useState(defaultValues.automationLevel || 80);
  const [weeksPerYear, setWeeksPerYear] = useState(48);
  const [showResults, setShowResults] = useState(false);
  
  // State for calculated results
  const [weeklySavings, setWeeklySavings] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [fiveYearSavings, setFiveYearSavings] = useState(0);
  const [implementationCost, setImplementationCost] = useState(0);
  const [roi, setRoi] = useState(0);
  const [paybackPeriod, setPaybackPeriod] = useState(0);
  
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };
  
  const handleReset = () => {
    setShowResults(false);
  };
  
  // Calculate results when inputs change
  useEffect(() => {
    // Calculate weekly time savings (hours)
    const weeklySavedHours = employees * hoursPerWeek * (automationLevel / 100);
    
    // Calculate weekly cost savings ($)
    const weeklySaved = weeklySavedHours * hourlyRate;
    setWeeklySavings(weeklySaved);
    
    // Calculate annual and 5-year savings
    const annualSaved = weeklySaved * 52;
    setAnnualSavings(annualSaved);
    setFiveYearSavings(annualSaved * 5);
    
    // Estimate implementation cost (simplified model)
    // Base cost + per employee cost
    const baseCost = 5000;
    const perEmployeeCost = 500;
    const calculatedCost = baseCost + (employees * perEmployeeCost);
    setImplementationCost(calculatedCost);
    
    // Calculate ROI (5-year return %)
    const calculatedRoi = ((annualSaved * 5 - calculatedCost) / calculatedCost) * 100;
    setRoi(calculatedRoi);
    
    // Calculate payback period (months)
    const paybackMonths = (calculatedCost / (annualSaved / 12));
    setPaybackPeriod(paybackMonths);
  }, [employees, hourlyRate, hoursPerWeek, automationLevel]);
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  return (
    <section className={`${className}`}>
      {!showResults ? (
        <div className="w-full bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-lg">
          <form onSubmit={handleCalculate} className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Hours per week spent on marketing and sales tasks</h2>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-2">
                  <Clock className="w-6 h-6 text-indigo-500 mr-3" />
                  <span className="text-xl">{hoursPerWeek}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                  className="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6 text-center">Estimated hourly value of your time ($/hour)</h2>
                <div className="flex items-center mb-2">
                  <DollarSign className="w-6 h-6 text-indigo-500 mr-3" />
                  <span className="text-xl">${hourlyRate}</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="200"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6 text-center">Working weeks per year</h2>
                <div className="flex items-center mb-2">
                  <Clock className="w-6 h-6 text-indigo-500 mr-3" />
                  <span className="text-xl">{weeksPerYear}</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="52"
                  value={48}
                  className="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer"
                  readOnly
                />
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button 
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white text-base font-medium rounded-lg hover:bg-indigo-700 transition shadow-md"
              >
                <Zap className="w-5 h-5 mr-2" />
                Calculate My Savings
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="w-full bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-lg">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-8 text-center">Here Are Your Results</h2>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-1 flex flex-col items-center">
                <div className="rounded-full bg-indigo-100 p-3 mb-2">
                  <Clock className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="text-center">
                  <div className="uppercase font-medium text-gray-500 mb-1">Time Saved</div>
                  <div className="text-3xl font-bold text-indigo-600">
                    {(hoursPerWeek * (automationLevel/100)).toFixed(1)}
                  </div>
                  <div className="text-sm text-gray-500">hours per week</div>
                  <div className="text-2xl font-bold text-indigo-600 mt-2">
                    {(hoursPerWeek * (automationLevel/100) * 52).toFixed(0)}
                  </div>
                  <div className="text-sm text-gray-500">hours per year</div>
                </div>
              </div>
              
              <div className="col-span-1 flex flex-col items-center">
                <div className="rounded-full bg-green-100 p-3 mb-2">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-center">
                  <div className="uppercase font-medium text-gray-500 mb-1">Money Saved</div>
                  <div className="text-3xl font-bold text-green-600">
                    ${annualSavings.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">$ per year</div>
                </div>
              </div>
              
              <div className="col-span-1 flex flex-col items-center">
                <div className="rounded-full bg-amber-100 p-3 mb-2">
                  <Zap className="w-8 h-8 text-amber-600" />
                </div>
                <div className="text-center">
                  <div className="uppercase font-medium text-gray-500 mb-1">Productivity Gain</div>
                  <div className="text-3xl font-bold text-amber-600">
                    +{Math.min(Math.max(roi, 40), 90).toFixed(0)}%
                  </div>
                  <div className="text-sm text-gray-500">Efficiency</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center space-x-4">
              <button 
                onClick={handleReset}
                className="px-5 py-2 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 transition"
              >
                Recalculate
              </button>
              
              <a 
                href="/consultation" 
                className="px-5 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition shadow"
              >
                Explore our automation solutions
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}