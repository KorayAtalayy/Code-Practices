// Tek doðal sayýnýn n terimlerini ve toplamlarýný görüntülemek için C'de bir program yazýn.
#include <stdio.h>
int main(){
	int a,b,fac=1,c;
	printf("Enter the number: \n");
	scanf("%d",&a);
	
	for(b=1;b<=a;b++){
		fac=fac*b;
	}
		
	printf("This is the number taken from factorial: %d\nFactorial: %d\n",a,fac);
	
	return 0;
}
