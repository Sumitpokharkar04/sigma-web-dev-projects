import matplotlib.pyplot as plt

def collatz_sequence(n):
    sequence = [n]

    while n != 1:
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
        sequence.append(n)
    return sequence

# Get user input
start = int(input("Enter starting number: "))
sequence = collatz_sequence(start)

# Print sequence
print("Collatz sequence:")
print(sequence)

# Plotting
plt.plot(range(len(sequence)), sequence, marker='o', linestyle='-', color='blue')
plt.title(f"Collatz Sequence Starting at {start}")
plt.xlabel("Step")
plt.ylabel("Value")
plt.grid(True)
plt.tight_layout()
plt.show()

