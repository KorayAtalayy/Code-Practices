#include <stdio.h>
int recursion(int n){
	int counter,result=1;
	for(counter=n;counter>=1;counter--){
		result*=counter;
	}
	return result;
}

int main(){
	int n;
	printf("enter the number you want\n");
	scanf("%d",&n);
	
	printf("result: %d",recursion(n));
	
	return 0;
}
