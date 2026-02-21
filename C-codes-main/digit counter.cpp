#include <stdio.h>
int main() {
    long long n;
    int count = 0;
    printf("Number: ");
    scanf("%lld", &n);
 
 
    while (n != 0) {
        n /= 10;     // n = n/10
        ++count;
    }
 
    printf("Digit number is: %d", count);
}
