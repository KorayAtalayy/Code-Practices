#include<stdio.h>  
#include<stdlib.h>  
#include <time.h>
int main()  
{  
    srand(time(0));
    int i;  
     
    printf("10 Random Numbers =>\n");      
         
    for(i=0;i<10;i++)  
    {  
        printf("%d ",1+(rand()%1234));  
    }  
     
    printf("\n");  
    return 0;
}
