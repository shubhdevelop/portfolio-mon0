import { useRef, useEffect } from "react";
import { cn } from "../utils/utils";

class Wave {
    // --- Public Properties (Configurable) ---
    public maxAmplitude: number;
    public length: number;
    public frequency: number;
    public bgOpacity: number;
    public y: number;
    public bgColor: string; // <-- Add bgColor property

    // --- Public Properties (State) ---
    public amplitude: number;
    public increment: number;

    // --- Private Properties (Internal) ---
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private frameCallback: () => void;
    private animationFrameId: number | null = null;

    constructor(
        canv: HTMLCanvasElement,
        maxAmplitude: number = 100,
        length: number = 100,
        frequency: number = 8,
        bgOpacity: number = 0.03,
        y?: number,
        bgColor: string = '#000000' // <-- Add bgColor parameter with default
    ) {
        this.canvas = canv;
        const context = this.canvas.getContext('2d');

        if (!context) {
            throw new Error("Could not get 2D rendering context from canvas.");
        }
        this.ctx = context;

        this.maxAmplitude = maxAmplitude;
        this.length = length;
        this.frequency = frequency;
        this.bgOpacity = bgOpacity;
        this.bgColor = bgColor; // <-- Assign bgColor
        this.y = y ?? this.canvas.height / 2;

        this.amplitude = 0;
        this.increment = Math.random() * 360;

        this.frameCallback = () => {
            this.draw();
            this.animationFrameId = requestAnimationFrame(this.frameCallback);
        };
    }

    private draw(): void {
        const c = this.ctx;
        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;

        // --- Background Fade Effect ---
        // Use globalAlpha for the fade effect to correctly handle
        // the provided background color.
        const originalAlpha = c.globalAlpha; // Store current alpha
        c.globalAlpha = this.bgOpacity;      // Set alpha for background rect
        c.fillStyle = this.bgColor;          // Use the configurable background color
        c.fillRect(0, 0, canvasWidth, canvasHeight);
        c.globalAlpha = originalAlpha;      // Restore alpha for other drawing

        // --- Wave Styling ---
        c.strokeStyle = `hsl(${this.increment * 20}, 80%, 70%)`;
        // c.lineWidth = 2; // Optional

        // --- Draw Wave Path ---
        c.beginPath();
        c.moveTo(0, this.y);

        for (let i = 0; i < canvasWidth; i++) {
            const waveY = this.y + Math.sin(i / this.length + this.increment) * this.amplitude;
            c.lineTo(i, waveY);
        }

        c.stroke();
        // c.closePath(); // Not needed for stroke

        // --- Update State for Next Frame ---
        this.amplitude = Math.sin(this.increment) * this.maxAmplitude;
        this.increment -= this.frequency / 1000;
    }

    public animate(): void {
        if (this.animationFrameId !== null) {
            // console.warn("Animation is already running."); // Keep console less noisy
            return;
        }
        this.frameCallback();
    }

    public stop(): void {
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    }

    public setY(newY: number): void {
        this.y = newY;
    }

    public updateParameters(options: {
        maxAmplitude?: number;
        length?: number;
        frequency?: number;
        bgOpacity?: number;
        bgColor?: string; // <-- Add bgColor to update options
    }): void {
        if (options.maxAmplitude !== undefined) this.maxAmplitude = options.maxAmplitude;
        if (options.length !== undefined) this.length = options.length;
        if (options.frequency !== undefined) this.frequency = options.frequency;
        if (options.bgOpacity !== undefined) this.bgOpacity = options.bgOpacity;
        if (options.bgColor !== undefined) this.bgColor = options.bgColor; // <-- Update bgColor
    }

    // Add a method to handle resizing (updates y position)
    public resize(): void {
        if (!this.canvas) return;
        this.setY(this.canvas.height / 2);
    }
}

// --- Type definition for component props ---
interface WaveAnimationProps {
    bgColor?: string;        // e.g., '#f0f0f0', 'rgba(255, 0, 0, 0.5)', 'blue'
    bgOpacity?: number;      // Opacity for the background fade effect (0 to 1)
    maxAmplitude?: number;
    length?: number;
    frequency?: number;
    className?: string
    // Add any other configurable Wave parameters as props if desired
}


// --- Updated WaveAnimation Component ---
export function WaveAnimation({
    bgColor = '#000000', // Default background color if prop not provided
    bgOpacity = 0.03,           // Allow overriding default opacity via prop
    maxAmplitude = 30,
    length = 40,
    frequency = 30,
    className
    // Add other props if defined in WaveAnimationProps
}: WaveAnimationProps) {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const waveInstanceRef = useRef<Wave | null>(null);

    // Effect for initialization and cleanup
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Match canvas resolution to display size
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        // Create and start the wave only once
        if (!waveInstanceRef.current) {
            console.log(`Initializing Wave with canvas size: ${canvas.width}x${canvas.height}`);
            const wave = new Wave(
                canvas,
                maxAmplitude, // Pass prop or let Wave use its default
                length,       // Pass prop or let Wave use its default
                frequency,    // Pass prop or let Wave use its default
                bgOpacity,    // Pass prop or let Wave use its default
                undefined,    // y (let Wave calculate default based on height)
                bgColor       // Pass the bgColor prop
            );
            waveInstanceRef.current = wave;
            wave.animate();
        }

        // Cleanup function
        return () => {
            console.log("WaveAnimation unmounting, stopping animation.");
            waveInstanceRef.current?.stop();
            waveInstanceRef.current = null;
        };
        // Only run on mount/unmount. Prop changes are handled by the next effect.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Effect for updating wave parameters when props change
    useEffect(() => {
        if (waveInstanceRef.current) {
            // Create an options object only with props that are defined
            const updateOptions: Parameters<Wave['updateParameters']>[0] = {};
            if (bgColor !== undefined) updateOptions.bgColor = bgColor;
            if (bgOpacity !== undefined) updateOptions.bgOpacity = bgOpacity;
            if (maxAmplitude !== undefined) updateOptions.maxAmplitude = maxAmplitude;
            if (length !== undefined) updateOptions.length = length;
            if (frequency !== undefined) updateOptions.frequency = frequency;

            // Only call update if there are actual options to update
            if (Object.keys(updateOptions).length > 0) {
                waveInstanceRef.current.updateParameters(updateOptions);
            }
        }
        // Dependency array includes all props that should trigger an update
    }, [bgColor, bgOpacity, maxAmplitude, length, frequency]);


    // Effect for handling resize
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                if (entry.target === canvas) {
                    const { width, height } = entry.contentRect;
                    console.log(`Resizing Wave canvas to: ${width}x${height}`);
                    // Only update if size actually changed to avoid potential loops
                    if (canvas.width !== width || canvas.height !== height) {
                        canvas.width = width;
                        canvas.height = height;
                        waveInstanceRef.current?.resize(); // Notify wave instance
                    }
                }
            }
        });

        resizeObserver.observe(canvas);

        return () => {
            console.log("Stopping resize observer.");
            // Ensure canvas still exists before unobserving
            if (canvas) {
                resizeObserver.unobserve(canvas);
            }
            resizeObserver.disconnect();
        };
    }, []); // Runs once on mount

    return (
        <canvas
            className={cn("w-full h-[75px] block", className)} // CSS classes define layout size
            ref={canvasRef}
            style={{ backgroundColor: bgColor }} // Optional: Set CSS background for initial state
        ></canvas>
    );
}