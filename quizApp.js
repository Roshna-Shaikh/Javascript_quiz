let username = prompt("enter your name")
      document.write("hello! " + username + " welcome to our quiz app<br>")
      let score = 0;

      let questions = [
          "What planet is known as the “Red Planet”?",
          "what is the capital of france?",
          "What is the longest river in the World?",
          "What’s the World’s tallest mountain?",
          "What is a baby cat known as?"
      ]
      let answers = [
          "mars",
          "paris",
          "nile",
          "mount everest",
          "kitten"
      ]

      //console.log(questions)
      //console.log(answers)


      for (let i = 0; i < questions.length; i++){
          userAns =   prompt(questions[i])

          userAns = userAns.toLowerCase()
          console.log(userAns)

          if(userAns === answers[i]){
              console.log("correct Answer")
              score++
          }
          else{
              console.log("wrong Answer")
          }
      }

      document.write("<br><br>")
      document.write("Your score is: " + score + " out of " + questions.length + "<br>")

      let per = score/questions.length * 100;

      document.write("Your percentage is: " + per + "% <br> ")


      if(per >= 80){
          document.write("your grade is A+")
      }
      else if(per >= 70 && per < 80){
          document.write("your grade is A")
      }
      else if(per >= 60 && per < 70){
          document.write("your grade is B")
      }
      else if(per >= 50 && per < 60){
          document.write("your grade is C")
      }
      else if(per >= 40 && per < 50){
          document.write("your grade is D")
      }
      else{
          document.write("you are fail")
      }
