#include <stdio.h>
int main()
{
    int number;


    printf("Enter a number: ");
    scanf("%d", &number);

    if(number % 2 == 0){
	printf ( "%s\n", number >= 60 ? "Passed" : "Failed" );
    }
	return 0;
}
