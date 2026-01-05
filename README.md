# Threaded insert calculator

A simple Javascript widget to calculate optimal hole diameters for threaded heated inserts used in 3D printing.

# What does it do?

Threaded inserts are great, but the ones with proper documentation somehow cost far more than the exact same noname ones. Finding the correct hole diameter for the latter is always guesswork. The required size also changes depending on the filament being used.

This little widget calculates the correct diameter for any size of insert, from 1 to 20 millimeters. It factors in the natural shrinkage of holes in various materials. The numbers are based on experience.

I might turn this into a mobile app later.

# How to use?

1. Open the HTML in your browser
2. Enter the type of filament you're working with
3. Enter the outer diameter of the threaded insert
4. Get the actual diameter of your hole
5. Use this number in your CAD application

# How can you help?

For each material, a range of shrinkage figures was established. If you disagree with these values, or would like to add a new material, please let me know or make a PR.

