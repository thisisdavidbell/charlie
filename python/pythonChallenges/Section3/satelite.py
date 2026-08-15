import math

diameterMiles = float(input("what is the distance between point a and point b in miles ?"))
diameterKilometers = diameterMiles * 1.6
flightPathLength = diameterKilometers * math.pi
distanceKilometers = flightPathLength / 2
print("the flight path length is ", math.floor(distanceKilometers), "kilometers")