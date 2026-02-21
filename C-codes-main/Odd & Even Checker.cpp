#include <stdio.h>
int KOAT(int sayi);
int main(){
	int sayi,looper;
	
	
	while(looper!=0){
	printf("Enter the number that you wanna check.\n");
	scanf("%d",&sayi);
	printf("If the number is odd then func will print 1.\nIf the number is even then func will print 0.\n");
	
	
	printf("Enter ZERO if you want to end this program\n");
	scanf("%d",&looper);
	printf("\n\n");
	}
	
	return 0;
}
int KOAT(int sayi){
	int a;
	if(sayi%2==0){
		printf("Number %d is even.\n",sayi);
		a=0;
	}
	else{
		printf("Number %d is odd.\n",sayi);
		a=1;
	}
	return a;
}
