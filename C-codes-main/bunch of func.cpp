#include <stdio.h>
#include <math.h>
int main(){
	int a=16;
	float b=1,c=23.23,d=12.23;
	
	int sonuc=sqrt(a);
	float sonuc2=exp(b);
	float sonuc3=fabs(c);
	float sonuc4=ceil(d);
	float sonuc5=floor(d);
	float sonuc6=fmod(c,b);
	
	printf("%d\n",sonuc);
	printf("%lf\n",sonuc2);
	printf("%lf\n",sonuc3);
	printf("%lf\n",sonuc4);
	printf("%lf\n",sonuc5);
	printf("%lf\n",sonuc6);
	
	return 0;
}
