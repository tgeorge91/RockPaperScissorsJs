$(document).ready(function() {
  
  var selection;
  var computerSelection;
  var imgPath = 'http://timtvmedia.com/rps/';
  var result;
  
  $('#start-over').click(function() {
    selection = null;
    computerSelection = null;
    result = null;
    $('#fight-left').attr('src', imgPath + 'rock-left.png');
    $('#fight-right').attr('src', imgPath + 'rock-right.png');
    $('#selection-wrapper').fadeIn();
    $('#fight').hide();
    $('#result').hide();
    $('#start-over').hide();
    $('#result').text('');
  });
  
  $('.selection').click(function() {
    selection = $(this).data('selection');
    $('#selection-wrapper').fadeOut(500, function() {
      $('#fight').fadeIn(500, function() {
        var random = Math.floor((Math.random() * 3) + 1);
        switch (random) {
          case 1:
            computerSelection = 'rock';
            break;
          case 2:
            computerSelection = 'paper';
            break;
          case 3:
            computerSelection = 'scissors';
            break;
        }
        
        $('#fight-left, #fight-right').effect('bounce', { times: 1 }, 450);
        $('#fight-left, #fight-right').effect('bounce', { times: 1 }, 450);
        $('#fight-left, #fight-right').effect('bounce', { times: 1 }, 450);
        
        setTimeout(function() {
          $('#fight-left').attr('src', imgPath + selection + '-left.png');
          $('#fight-right').attr('src', imgPath + computerSelection + '-right.png');
          
          if (selection === computerSelection) {
            result = 'You tied!';
          } else if (selection === 'rock') {
            if (computerSelection === 'paper') {
              result = 'You lose!';  
            } else if (computerSelection === 'scissors') {
              result = 'You win!';
            }
          } else if (selection === 'paper') {
            if (computerSelection === 'rock') {
              result = 'You win!';  
            } else if (computerSelection === 'scissors') {
              result = 'You lose!';
            }
          } else if (selection === 'scissors') {
            if (computerSelection === 'paper') {
              result = 'You win!';  
            } else if (computerSelection === 'rock') {
              result = 'You lose!';
            }
          }
          
          $('#result').text(result);
          $('#result').fadeIn();
          $('#start-over').fadeIn();
          
        }, 1350)
        
        
      });
    });
  });
  
});