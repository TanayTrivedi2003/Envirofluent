import { useEffect, useRef, useState } from "react";

const Counter = ({ end, duration = 1500 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    animateCount();
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const animateCount = () => {
        const start = 0;
        const startTime = performance.now();

        const update = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const value = Math.floor(progress * end);
            setCount(value);

            if (progress < 1) requestAnimationFrame(update);
        };

        requestAnimationFrame(update);
    };

    return (
        <span ref={ref}>
            {count}
        </span>
    );
};

export default Counter;
