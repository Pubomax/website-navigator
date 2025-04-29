import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Calculator, Clock, DollarSign, TimerOff, Zap } from "lucide-react";

export function WorkLessCalculator() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [weeksPerYear, setWeeksPerYear] = useState(48);
  const [showResults, setShowResults] = useState(false);
  
  // Calculate results
  const timeAutoReduction = 0.8; // 80% time reduction through automation
  const hoursSaved = hoursPerWeek * timeAutoReduction;
  const hoursSavedYearly = hoursSaved * weeksPerYear;
  const moneySaved = hoursSaved * hourlyRate * weeksPerYear;
  const focusGained = 40; // 40% focus improvement through automation
  
  const labels = {
    title: isPathFrench ? "Calculateur « Travaillez Moins »" : "Work Less Calculator",
    subtitle: isPathFrench 
      ? "Découvrez combien de temps et d'argent vous pourriez économiser grâce à l'automatisation" 
      : "Find out how much time and money you could save with automation",
    hoursLabel: isPathFrench ? "Heures par semaine passées sur les tâches de marketing et de vente" : "Hours per week spent on marketing and sales tasks",
    hourlyRateLabel: isPathFrench ? "Valeur horaire estimée de votre temps ($/heure)" : "Estimated hourly value of your time ($/hour)",
    weeksLabel: isPathFrench ? "Semaines de travail par an" : "Working weeks per year",
    calculateButton: isPathFrench ? "Calculer Mes Économies" : "Calculate My Savings",
    recalculateButton: isPathFrench ? "Recalculer" : "Recalculate",
    resultsTitle: isPathFrench ? "Voici Vos Résultats" : "Here Are Your Results",
    timeSavedTitle: isPathFrench ? "Temps Économisé" : "Time Saved",
    timeSavedWeek: isPathFrench ? "heures par semaine" : "hours per week",
    timeSavedYear: isPathFrench ? "heures par an" : "hours per year",
    moneySavedTitle: isPathFrench ? "Argent Économisé" : "Money Saved",
    moneySavedYear: isPathFrench ? "$ par an" : "$ per year",
    productivityTitle: isPathFrench ? "Gain de Productivité" : "Productivity Gain",
    learnMoreButton: isPathFrench ? "En Savoir Plus" : "Learn More",
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };
  
  const handleReset = () => {
    setShowResults(false);
  };

  return (
    <section className="py-6 sm:py-8 md:py-10 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {!showResults ? (
            <form onSubmit={handleCalculate} className="p-3 sm:p-4 md:p-5">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base mb-2">
                    {labels.hoursLabel}
                  </label>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500 mr-2 flex-shrink-0" />
                    <input
                      type="range"
                      min="1"
                      max="40"
                      value={hoursPerWeek}
                      onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                      className="flex-1 h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                    <span className="ml-2 sm:ml-3 w-10 sm:w-12 text-center font-semibold text-indigo-600 dark:text-indigo-400 text-sm sm:text-base">
                      {hoursPerWeek}
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base mb-2">
                    {labels.hourlyRateLabel}
                  </label>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500 mr-2 flex-shrink-0" />
                    <input
                      type="range"
                      min="20"
                      max="200"
                      step="5"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                      className="flex-1 h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                    <span className="ml-2 sm:ml-3 w-10 sm:w-12 text-center font-semibold text-indigo-600 dark:text-indigo-400 text-sm sm:text-base">
                      ${hourlyRate}
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base mb-2">
                    {labels.weeksLabel}
                  </label>
                  <div className="flex items-center">
                    <TimerOff className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500 mr-2 flex-shrink-0" />
                    <input
                      type="range"
                      min="30"
                      max="52"
                      value={weeksPerYear}
                      onChange={(e) => setWeeksPerYear(parseInt(e.target.value))}
                      className="flex-1 h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                    <span className="ml-2 sm:ml-3 w-10 sm:w-12 text-center font-semibold text-indigo-600 dark:text-indigo-400 text-sm sm:text-base">
                      {weeksPerYear}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 sm:mt-8 text-center">
                <button 
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition shadow-md"
                >
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  {labels.calculateButton}
                </button>
              </div>
            </form>
          ) : (
            <div className="p-3 sm:p-4 md:p-5">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg sm:text-xl font-bold text-center text-gray-800 dark:text-white mb-3 sm:mb-4"
              >
                {labels.resultsTitle}
              </motion.h3>
              
              <div className="flex flex-wrap justify-between gap-3 sm:gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex-1 bg-indigo-50 dark:bg-indigo-900/30 p-3 sm:p-4 rounded-lg text-center min-w-[100px]"
                >
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600 dark:text-indigo-400 mx-auto mb-1 sm:mb-2" />
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1 sm:mb-2 text-xs sm:text-sm">
                    {labels.timeSavedTitle}
                  </h4>
                  <div className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-0 sm:mb-1">
                    {hoursSaved.toFixed(1)}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {labels.timeSavedWeek}
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-indigo-600 dark:text-indigo-400 mt-1 sm:mt-2 mb-0 sm:mb-1">
                    {hoursSavedYearly.toFixed(0)}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {labels.timeSavedYear}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex-1 bg-green-50 dark:bg-green-900/30 p-3 sm:p-4 rounded-lg text-center min-w-[100px]"
                >
                  <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 text-green-600 dark:text-green-400 mx-auto mb-1 sm:mb-2" />
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1 sm:mb-2 text-xs sm:text-sm">
                    {labels.moneySavedTitle}
                  </h4>
                  <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400 mb-0 sm:mb-1">
                    ${moneySaved.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {labels.moneySavedYear}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex-1 bg-amber-50 dark:bg-amber-900/30 p-3 sm:p-4 rounded-lg text-center min-w-[100px]"
                >
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-amber-600 dark:text-amber-400 mx-auto mb-1 sm:mb-2" />
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1 sm:mb-2 text-xs sm:text-sm">
                    {labels.productivityTitle}
                  </h4>
                  <div className="text-xl sm:text-2xl font-bold text-amber-600 dark:text-amber-400 mb-0 sm:mb-1">
                    +{focusGained}%
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Efficiency
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-4 sm:mt-5 text-center flex flex-col sm:flex-row justify-center gap-2 sm:gap-3">
                <button 
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white text-xs sm:text-sm font-medium rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  {labels.recalculateButton}
                </button>
                
                <a 
                  href="/solutions" 
                  className="w-full sm:w-auto inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-600 text-white text-xs sm:text-sm font-medium rounded-md hover:bg-indigo-700 transition shadow-md"
                >
                  {labels.learnMoreButton}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}