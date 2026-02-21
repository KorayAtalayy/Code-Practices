#include <stdio.h>
int change_the_var(int n){
	return n * n * n;
}
void change_the_var_2(int *n2Ptr){
	*n2Ptr= *n2Ptr * *n2Ptr * *n2Ptr;
}
int main(){
	int n=5,n2=5;
	n=change_the_var(n);
	change_the_var_2(&n2);
	
	printf("First Func: %d  \nSecond Func: %d",n,n2);
	return 0;
}
