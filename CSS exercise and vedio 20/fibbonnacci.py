import matplotlib.pyplot as plt
import numpy as np

def fibonacci(n):
    series = [0, 1]
    for i in range(2, n):
        series.append(series[i-1] + series[i-2])
    return series[:n]

def draw_fibonacci_spiral(n):
    fib = fibonacci(n)
    angle = 90  # Each quarter turn

    # Initialize position and direction
    x, y = 0, 0
    dx, dy = 1, 0  # Initial direction

    plt.figure(figsize=(8, 8))

    for i in range(1, n):
        radius = fib[i]
        theta = np.linspace(0, np.pi/2, 90)
        if dx == 1 and dy == 0:   # Right
            x_arc = x + radius * np.cos(theta)
            y_arc = y + radius * np.sin(theta)
            x += radius
        elif dx == 0 and dy == 1: # Up
            x_arc = x - radius * np.sin(theta)
            y_arc = y + radius * np.cos(theta)
            y += radius
        elif dx == -1 and dy == 0: # Left
            x_arc = x - radius * np.cos(theta)
            y_arc = y - radius * np.sin(theta)
            x -= radius
        else:  # Down
            x_arc = x + radius * np.sin(theta)
            y_arc = y - radius * np.cos(theta)
            y -= radius

        plt.plot(x_arc, y_arc, 'b')  # Draw arc

        # Update direction (rotate 90° CCW)
        dx, dy = -dy, dx

    plt.axis("equal")
    plt.title("Fibonacci Spiral")
    plt.show()

# Example
draw_fibonacci_spiral(81)
