
            
            var wordBank = [ 'a', 'b','g'];
             var wins = 0;
             var loss = 0;
             var wrongletter = [];
             var guessesLeft = 9;
             var letterGuessed= [];
            var computerGuess = [];
            
            function startGame(){
            
            
            
             randword = wordBank[Math.floor(Math.random()* wordBank.length)];
            
                 for(var i=0; i < randword.length; i++)
            {
              computerGuess.push('_');
            }
             document.getElementById('word-blanks').textContent = computerGuess.join(" ");
            
             wrongletter = [];
             guessesLeft=10;
            
            
             document.getElementById('guesses-let').textContent=guessesLeft;
            
            }
            function winLose()
            {
            if (winCounter === randWord.length)
            {
            alert('winner');
            }
            else if (guessesLeft===0)
            {
            alert('Loser');
            }
            }
            document.onekeyup=function(event)
            {
                userGuesses=event.key;
                if (randword.indexOf(userGuesses)> -1)
                {
                    for (var i=0; i < randword.length; i++)
                    {
                        if (randword[i] === userGuesses)
                        {
                            computerGuess[i]=userGuesses
                            winCounter++;
                            winLose();
                        }
                    }
                }
                else
                {
                    wrongletter.push(userGuesses);
                    guessesLeft--;
                    winLose();
                }
            }
            
             
            startGame()
            
            
            
            
      
            
            
            