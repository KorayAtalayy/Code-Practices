#include <stdio.h>
int main() {
    int n, reversedN = 0, remainder, originalN;
    printf("Number: ");
    scanf("%d", &n);
    originalN = n;
 
    while (n != 0) {
        remainder = n % 10;
        reversedN = reversedN * 10 + remainder;
        n /= 10;
    }
 	
    if (originalN == reversedN)
        printf("%d is a palindromic number.", originalN);
    else
        printf("%d is not a palindromic number.", originalN);
 
    return 0;
}
