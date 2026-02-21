#include <stdio.h>
int main()
{
int x;
for ( x = 1; x <= 14; x++ ) {
if(x<7){
int k = 0;
for (k = 0; k < x; k++)
{
     if(x%3==0){
     }else{
     printf("*");
     }
}
     printf("\n");
}
else{
int k = 0;
for (k = 0; k < 14-x; k++)
{
     if(x%3==0){
     }else{
     printf("*");
 }
}
     printf("\n");
    }
}
return 0;
}
