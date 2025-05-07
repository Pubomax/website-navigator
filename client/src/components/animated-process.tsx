import React, { useState, useEffect, useRef } from 'react';

/**
 * Animated Process Diagram Component
 * 
 * An interactive, animated visualization of business process flows
 * that helps users understand complex workflows with step-by-step animations
 */

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon?: string;
  duration?: number; // Animation duration in ms
  delay?: number; // Animation delay in ms
}

interface ProcessConnection {
  from: string;
  to: string;
  label?: string;
}

interface AnimatedProcessProps {
  steps: ProcessStep[];
  connections: ProcessConnection[];
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  autoPlay?: boolean;
  autoPlayDelay?: number; // ms between steps in autoplay
}

export function AnimatedProcess({
  steps,
  connections,
  orientation = 'horizontal',
  className = '',
  autoPlay = false,
  autoPlayDelay = 3000
}: AnimatedProcessProps) {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [animatingConnection, setAnimatingConnection] = useState<string | null>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  // Initialize animation on mount
  useEffect(() => {
    if (steps.length > 0) {
      setActiveStep(steps[0].id);
    }
    
    // Set up intersection observer for animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !activeStep && steps.length > 0) {
            setActiveStep(steps[0].id);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (processRef.current) {
      observer.observe(processRef.current);
    }
    
    return () => {
      if (processRef.current) {
        observer.unobserve(processRef.current);
      }
      
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, []);
  
  // Progress to next step
  const progressToNextStep = () => {
    if (!activeStep) return;
    
    // Get next step based on connections
    const currentConnection = connections.find(conn => conn.from === activeStep);
    
    if (currentConnection) {
      setCompletedSteps(prev => [...prev, activeStep]);
      setAnimatingConnection(`${currentConnection.from}-${currentConnection.to}`);
      
      // Delay setting next active step to allow for connection animation
      setTimeout(() => {
        setActiveStep(currentConnection.to);
        setAnimatingConnection(null);
      }, 1000);
    } else {
      // No next step, reset to beginning if all steps completed
      const allStepIds = steps.map(step => step.id);
      const allCompleted = allStepIds.every(id => 
        id === activeStep || completedSteps.includes(id)
      );
      
      if (allCompleted) {
        resetAnimation();
      }
    }
  };
  
  // Start autoplay animation
  useEffect(() => {
    if (autoPlay && activeStep) {
      autoPlayRef.current = setTimeout(() => {
        progressToNextStep();
      }, autoPlayDelay);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [autoPlay, activeStep, autoPlayDelay]);
  
  // Reset animation
  const resetAnimation = () => {
    setCompletedSteps([]);
    setActiveStep(steps.length > 0 ? steps[0].id : null);
    setAnimatingConnection(null);
  };
  
  // Get step status
  const getStepStatus = (stepId: string) => {
    if (completedSteps.includes(stepId)) {
      return 'completed';
    }
    if (activeStep === stepId) {
      return 'active';
    }
    return 'pending';
  };
  
  // Render connection line between steps
  const renderConnection = (connection: ProcessConnection) => {
    const isActive = animatingConnection === `${connection.from}-${connection.to}`;
    const isCompleted = completedSteps.includes(connection.from) && 
                       (completedSteps.includes(connection.to) || activeStep === connection.to);
    
    return (
      <div 
        key={`${connection.from}-${connection.to}`}
        className={`connection ${orientation === 'horizontal' ? 'horizontal' : 'vertical'} ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
        aria-hidden="true"
      >
        <div className="connection-line">
          <div className="connection-progress"></div>
        </div>
        {connection.label && (
          <div className="connection-label">{connection.label}</div>
        )}
      </div>
    );
  };
  
  return (
    <div 
      ref={processRef}
      className={`animated-process ${orientation} ${className}`}
      role="region"
      aria-label="Process visualization"
    >
      <div className="process-controls mb-4">
        <button
          onClick={resetAnimation}
          className="reset-button px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md flex items-center"
          aria-label="Reset process animation"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reset
        </button>
      </div>
      
      <div className={`process-diagram ${orientation}`}>
        {steps.map((step, index) => {
          const status = getStepStatus(step.id);
          
          return (
            <div 
              key={step.id}
              className={`process-step ${status} ${orientation === 'horizontal' ? 'flex-col' : 'flex-row'}`}
              style={{
                animationDelay: `${step.delay || index * 200}ms`,
                animationDuration: `${step.duration || 500}ms`,
              }}
            >
              <div className="step-container">
                <div
                  className={`step-indicator ${status}`}
                  onClick={() => setActiveStep(step.id)}
                >
                  {status === 'completed' ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                
                <div className="step-content">
                  <h3 className={`step-title ${status}`}>{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
              
              {index < steps.length - 1 && connections.some(conn => conn.from === step.id) && 
                renderConnection(connections.find(conn => conn.from === step.id)!)}
            </div>
          );
        })}
      </div>
      
      <style>{`
        .animated-process {
          font-family: sans-serif;
        }
        
        .process-diagram {
          display: flex;
          position: relative;
        }
        
        .process-diagram.horizontal {
          flex-direction: row;
        }
        
        .process-diagram.vertical {
          flex-direction: column;
        }
        
        .process-step {
          display: flex;
          align-items: center;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.5s ease forwards;
        }
        
        .process-step.active .step-indicator {
          background-color: #3b82f6;
          color: white;
          transform: scale(1.1);
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3);
        }
        
        .process-step.completed .step-indicator {
          background-color: #10b981;
          color: white;
        }
        
        .step-container {
          position: relative;
          margin: 1rem;
          transition: all 0.3s ease;
        }
        
        .step-indicator {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .step-title {
          font-weight: 600;
          transition: color 0.3s ease;
        }
        
        .step-title.active {
          color: #3b82f6;
        }
        
        .step-title.completed {
          color: #10b981;
        }
        
        .step-description {
          color: #6b7280;
          font-size: 0.875rem;
          margin-top: 0.5rem;
          max-width: 200px;
        }
        
        .connection {
          position: relative;
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .connection.horizontal {
          margin: 0 -0.5rem;
        }
        
        .connection.vertical {
          margin: -0.5rem 0;
          height: 3rem;
          transform: rotate(90deg);
          transform-origin: center;
        }
        
        .connection-line {
          height: 2px;
          background-color: #e5e7eb;
          width: 100%;
          position: relative;
          overflow: hidden;
        }
        
        .connection-progress {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          background-color: #3b82f6;
          transition: width 1s ease;
        }
        
        .connection.active .connection-progress {
          width: 100%;
        }
        
        .connection.completed .connection-progress {
          width: 100%;
          background-color: #10b981;
        }
        
        .connection-label {
          position: absolute;
          top: -1.5rem;
          font-size: 0.75rem;
          color: #6b7280;
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      {/* Demo content - this would be dynamic in a real implementation */}
      <div className="mt-8">
        <button 
          className={`px-5 py-2 bg-blue-600 text-white rounded-md ${activeStep === steps[steps.length - 1]?.id && completedSteps.length === steps.length - 1 ? 'visible' : 'invisible'}`}
          onClick={resetAnimation}
        >
          See how it works again
        </button>
      </div>
    </div>
  );
}

// Example usage:
export const AutomationProcessExample = () => {
  const steps = [
    {
      id: 'assessment',
      title: 'Process Assessment',
      description: 'We analyze your current workflows to identify automation opportunities'
    },
    {
      id: 'design',
      title: 'Solution Design',
      description: 'Custom AI automation solution tailored to your business needs'
    },
    {
      id: 'implementation',
      title: 'Implementation',
      description: 'Expert implementation and integration with your existing systems'
    },
    {
      id: 'training',
      title: 'Training & Support',
      description: 'Comprehensive training and ongoing support'
    }
  ];
  
  const connections = [
    { from: 'assessment', to: 'design', label: '2-3 weeks' },
    { from: 'design', to: 'implementation', label: '3-4 weeks' },
    { from: 'implementation', to: 'training', label: '1-2 weeks' }
  ];
  
  return (
    <AnimatedProcess 
      steps={steps} 
      connections={connections} 
      autoPlay={true}
      autoPlayDelay={2000}
      className="max-w-4xl mx-auto"
    />
  );
};