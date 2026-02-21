import math

# Define the list of points
points = [(1, 2), (3, 4), (5, 6), (7, 8)]  # Example points (x, y)

# Function to calculate Euclidean distance between two points
def euclideanDistance(point1, point2):
    return math.sqrt((point2[0] - point1[0])**2 + (point2[1] - point1[1])**2)

# Calculate distances between every pair of points and store in a list
distances = []
for i in range(len(points)):
    for j in range(i+1, len(points)):
        dist = euclideanDistance(points[i], points[j])
        distances.append(dist)

# Find and print the minimum distance
min_distance = min(distances)
print(f"The minimum distance is: {min_distance}")