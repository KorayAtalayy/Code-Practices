#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int rolldice();
enum STATUS {CONTINUE,WIN,LOSE};
int main(){
	int sum,winsum=6,losesum=10;
	enum STATUS gamestatus=CONTINUE;
	char approve;
	srand(time(NULL));
	
	while(gamestatus==CONTINUE){
		sum=rolldice();
		if(sum==winsum){
			gamestatus=WIN;
		}
		else if(sum==losesum){
			gamestatus=LOSE;
			
		}
		else{
			gamestatus=CONTINUE;
		}
		printf("You rolled %d\n",sum);
		switch(gamestatus){
		case CONTINUE:
	printf("You can continue to the game. Press enter.\n");

	scanf("%c",&approve);
	break;
	case WIN:
	printf("You won the game.\n");

	return 0;
	break;
	case LOSE:
	printf("You lost the game.\n");

	return 0;
	break;	
			}	
		}
		
	return 0;
}

int rollDice() {
int die1; /* first die */
int die2; /* second die */
int workSum; /* sum of dice */
die1 = 1 + ( rand() % 6 ); /* pick random die1 value */
die2 = 1 + ( rand() % 6 ); /* pick random die2 value */
workSum = die1 + die2; /* sum die1 and die2 */

return workSum;
}
