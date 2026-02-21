/*
area of circle
*/

#include <stdio.h>

int main(){
int r;
//define a float value, and get pi value
float pi=3.14159;
//define a float value and get two number
float daire_alani;
float r=2;

printf ( "Enter a number that will present the radious of the circle.\n " );
scanf( "%d", &r);



daire_alani=pi*r*r;

//print the vlaues
printf("PI  =%f \n",pi);
printf("r   =%d \n",r);
printf("Area=%f \n",daire_alani);

return 0;
}
