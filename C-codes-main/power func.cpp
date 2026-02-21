#include <stdio.h>
#include <math.h>
int pow(int base,int expo){
	int alfa=1;
	for(int i=1;i<=expo;i++){
		alfa=alfa*base;
	}
	return alfa;
}
int main(){
	printf("%d",pow(4,3));
	
	
	return 0;
}
