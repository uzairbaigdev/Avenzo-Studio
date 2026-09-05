import React, { useState, useEffect } from 'react';

/**
 * SVG Icons matching workflow nodes & services
 */
function Icon({ children, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const ConsultationIcon = (props) => (
  <Icon {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </Icon>
);

const DesignIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a7 7 0 1 0 7 7" />
  </Icon>
);

const CodeIcon = (props) => (
  <Icon {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </Icon>
);

const IntegrationIcon = (props) => (
  <Icon {...props}>
    <rect x="2" y="2" width="8" height="8" rx="2" />
    <rect x="14" y="2" width="8" height="8" rx="2" />
    <rect x="14" y="14" width="8" height="8" rx="2" />
    <rect x="2" y="14" width="8" height="8" rx="2" />
  </Icon>
);

const RocketIcon = (props) => (
  <Icon {...props}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.26-1.5 1.76-2.35L4.5 16.5z" />
    <path d="M12 15l-3-3 8.5-8.5a2.12 2.12 0 0 1 3 3L12 15z" />
  </Icon>
);

export default function UnifiedThemeWorkflowSlider() {
  const [activeStep, setActiveStep] = useState(0);
  const [signalState, setSignalState] = useState('transmitting');

  const services = [
    {
      id: 0,
      stepNumber: "01",
      title: "Discovery & Strategy",
      description: "Analyzing business processes and creating custom AI blueprints.",
      icon: ConsultationIcon,
      statusTag: "Consultation"
    },
    {
      id: 1,
      stepNumber: "02",
      title: "UI/UX Architecture",
      description: "Designing intuitive interfaces paired with structured data logic.",
      icon: DesignIcon,
      statusTag: "Wireframing"
    },
    {
      id: 2,
      stepNumber: "03",
      title: "Custom Development",
      description: "Writing scalable JavaScript & Python code with fallback routines.",
      icon: CodeIcon,
      statusTag: "Code Engine"
    },
    {
      id: 3,
      stepNumber: "04",
      title: "API & System Integration",
      description: "Connecting databases, webhooks, and AI into unified pipelines.",
      icon: IntegrationIcon,
      statusTag: "Pipeline"
    },
    {
      id: 4,
      stepNumber: "05",
      title: "Deployment & Launch",
      description: "Continuous automated payload testing before live release.",
      icon: RocketIcon,
      statusTag: "Production"
    }
  ];

  useEffect(() => {
    const transmitTimer = setTimeout(() => {
      setSignalState('switching');
    }, 1800);

    const switchTimer = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % services.length);
      setSignalState('transmitting');
    }, 2400);

    return () => {
      clearTimeout(transmitTimer);
      clearTimeout(switchTimer);
    };
  }, [activeStep]);

  const currentService = services[activeStep];

  return (
    <section className="relative w-full bg-[#07080a] py-28 px-6 lg:px-12 text-white font-sans overflow-hidden">
      
      {/* Background Glow - Matching FourthSection Gold Ambient Tone */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#D9A94E]/10 blur-[160px]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: Heading & Dynamic Workflow List */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              How our workflow <br />
              <span className="text-[#D9A94E]">delivers results</span>
            </h2>

            <p className="text-base text-neutral-400 leading-relaxed">
              Every step of our service pipeline processes data sequentially, sending seamless signals from initial concept to launch.
            </p>

            {/* List of Service Steps */}
            <div className="space-y-3 pt-2">
              {services.map((service, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={service.id}
                    onClick={() => {
                      setActiveStep(idx);
                      setSignalState('transmitting');
                    }}
                    className="cursor-pointer group flex items-center gap-4 transition-all duration-300"
                  >
                    <span className={`font-mono text-xs font-bold transition-colors ${isActive ? 'text-[#D9A94E]' : 'text-neutral-600'}`}>
                      {service.stepNumber}
                    </span>
                    <div className="flex-1">
                      <h3 className={`text-sm font-semibold transition-colors ${isActive ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'}`}>
                        {service.title}
                      </h3>
                    </div>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D9A94E] shadow-[0_0_8px_#D9A94E] animate-ping" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE: Compact Single-Box Slider */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full rounded-3xl border border-white/10 bg-[#0E1015]/90 shadow-2xl overflow-hidden flex flex-col justify-between p-6 sm:p-8">
              
              {/* Slider Header */}
              <div className="relative z-20 flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#D9A94E] animate-pulse" />
                  <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider">
                    Service Stage {currentService.stepNumber} / 05
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {services.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setActiveStep(idx);
                        setSignalState('transmitting');
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeStep === idx ? 'w-5 bg-[#D9A94E] shadow-[0_0_8px_#D9A94E]' : 'w-1.5 bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* SLIDE PAGE CONTAINER */}
              <div className="relative w-full h-full my-auto overflow-hidden flex items-center">
                <div
                  className="w-full flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${activeStep * 100}%)` }}
                >
                  {services.map((service) => {
                    const ServiceIcon = service.icon;
                    return (
                      <div key={service.id} className="min-w-full flex justify-center items-center px-4">
                        
                        {/* COMPACT ISOLATED SERVICE CARD */}
                        <div className="relative w-full max-w-[280px] sm:max-w-[310px] rounded-2xl border border-white/10 bg-[#14171F] p-5 shadow-2xl flex flex-col items-center text-center">
                          
                          {/* Compact Signal Connectors */}
                          <div className="absolute -left-2.5 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-[#D9A94E] flex items-center justify-center text-black font-extrabold text-[9px] shadow-sm">
                            in
                          </div>
                          <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-[#D9A94E] flex items-center justify-center text-black font-extrabold text-[9px] shadow-sm">
                            out
                          </div>

                          {/* ANIMATED SIGNAL TRAVELLING INSIDE CARD */}
                          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-[#D9A94E]/20 pointer-events-none" />
                          <div
                            className={`absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[#D9A94E] shadow-[0_0_12px_#D9A94E] transition-all duration-1000 ${
                              signalState === 'switching' ? 'left-[92%] opacity-0' : 'left-[8%] opacity-100'
                            }`}
                          />

                          {/* Service Icon */}
                          <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0E1015] border border-white/10 text-[#D9A94E] shadow-inner mb-3">
                            <ServiceIcon className="h-6 w-6" />
                          </div>

                          {/* Compact Service Content */}
                          <span className="text-[10px] font-mono text-[#D9A94E] uppercase tracking-widest mb-0.5">
                            {service.statusTag}
                          </span>
                          <h3 className="text-lg font-bold text-white mb-1.5">
                            {service.title}
                          </h3>
                          <p className="text-xs text-neutral-300 leading-relaxed">
                            {service.description}
                          </p>

                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Slider Footer */}
              <div className="relative z-20 border-t border-white/10 pt-3 flex items-center justify-between font-mono text-[11px] text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="text-[#D9A94E] font-bold">● Signal Active</span>
                  <span>— Transmitting...</span>
                </div>
                <span>Page {activeStep + 1} of {services.length}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}