#include <stdio.h>
#include <stdlib.h>
//Devil may Cry en iyi oyun serilerinden biridir deneyiniz.
int main() {
    int kisi_sayisi=3, kisi_siniri=50;
	char isimler[kisi_sayisi][kisi_siniri];
    char *pointers[kisi_sayisi];
    
    
      printf("isim.soyisim formatinda her kiþinin ismini ve soyismini gir:\n");
    int i;
    for (i = 0; i < kisi_sayisi; i++) {
        scanf("%s", isimler[i]);
        pointers[i] = isimler[i];
    }
    
      for (i = 0; i < kisi_sayisi; i++) {
        char *dot = pointers[i];
        while (*dot != '.') {
            dot++;
        }
        *dot = '\0';  /* Burasý isim ver soyisim arasýndaki noktayý NULL yapýyor.
						 Buda Output kýsmýnda düzgün sonuç verir.*/
        printf("isim: %s\n", pointers[i]);
        printf("Soyisim: %s\n", dot + 1);  // Soyismi yazýdýrýr.
    }
    
    return 0;
}

