class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    //this.title.hide();
    //this.question.hide();
   // this.option1.hide();
    //this.option2.hide();
    //this.option3.hide();
    //this.option4.hide();
   //write code to change the background color here
    background("white");
    //write code to show a heading for showing the result of Quiz
    this.title2 = createElement('h1');
    this.title2.html("Your Result");
    //call getContestantInfo( ) here
    
    if (allContestant !== undefined){
      fill("Light Blue");
      textSize(20);
      text("Note : The Contestant Who answered Correct are Highlighted in GreenColor! ",130, 230);
    }

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    for (var plr in allContestant){
        var correctAns = "1";
        if (corretAns === allContestant[plr].answer)
        fill(green)
        else
        fill(red);
    }
  }

}
