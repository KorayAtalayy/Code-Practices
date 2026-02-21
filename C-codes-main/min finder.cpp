#include <stdio.h>
int minimum(int x,int y,int z){
	int min=x;
	if(y<min){
		min=y;
	}
	if(z<min){
		min=z;
	}
	return min;
}
int main(){
	int a,b,c;
	printf("Enter 3 numbers.\n");
	scanf("%d %d %d",&a,&b,&c);
	printf("Minimum number is: %d\n",minimum(a,b,c));
	
	
	return 0;
}
