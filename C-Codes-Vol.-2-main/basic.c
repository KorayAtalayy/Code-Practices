#include <stdio.h>
int main(){
	int num=12;
	int *ptrnum=&num;
	ptrnum=&num;
	printf("%d\n",ptrnum);
	printf("%d\n",&num);
	printf("%d\n",*ptrnum);
	printf("%d\n",num);
	
	
	printf("%d\n",&*ptrnum);
	printf("%d\n",*&ptrnum);
	return 0;
}
