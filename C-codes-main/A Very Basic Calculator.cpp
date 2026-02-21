#include <stdio.h>
int main () { 
char operator1;
double n1, n2;
printf("Enter an operator (+,-, *, /): ");
scanf("%c", & operator1);
printf("Enter two operands: ");
scanf("%lf %lf",&n1, &n2);

switch(operator1) {
case '+':
printf("%.1lf + %.1lf = %.1lf",n1, n2, n1+n2);
break;

case '-':
printf("%.1lf- %.1lf = %.1lf",n1, n2, n1-n2);
break;

case '*':
printf("%.1lf * %.1lf = %.1lf",n1, n2, n1*n2);
break;

case '/':
printf("%.1lf / %.1lf = %.1lf",n1, n2, n1/n2);
break;

default:
printf("Error! operator is not");
}
return 0;
}
