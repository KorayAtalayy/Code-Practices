#include <stdio.h>
enum sehirler   {
				placeholder,ordu,ankara,artvin,gaziantep,bursa,bolu,kastamonu
				};

int main(){
	enum sehirler memleket;
	memleket=kastamonu;
	printf("%d, ilin sirasi\n",memleket);
	
	return 0;
}
