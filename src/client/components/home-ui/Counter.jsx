import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: 'Positive Reviews', value: 300 },
  { label: 'Happy Customers', value: 850 },
  { label: 'Locations', value: 6 },
];

function Counter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="w-full flex items-center justify-center px-4 pt-10">
      <div className="flex flex-col md:grid md:grid-cols-3 gap-8 w-full max-w-6xl text-center">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className={`relative pb-6 md:pb-0 ${idx !== stats.length - 1 ? 'md:border-r-2 md:border-gray-300' : ''}`}
          >
            <h2 className="text-[40px] md:text-[80px] text-white font-serif opacity-60 leading-none">
              {inView ? <CountUp end={item.value} duration={3} /> : 0}+
            </h2>
            <p className="mt-2 text-sm md:text-base text-white opacity-60">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Counter;
