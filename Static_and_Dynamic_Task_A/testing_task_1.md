### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame


  def checkforAce(card) # not error, but should probably use snake_case
    if card.value = 1 # '==' operand needs to be used
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #should be 'def', not 'dif'. Comma needed between card1, card2 arguments
  if card1.value > card2.value
    return card #should be card1
  else
    return card2
  end
end
end # Final 'end' not needed

def self.cards_total(cards) # Would be better as an instance method, not a class method.
  total # total is undefined, should be 'total = 0'
  for card in cards
    total += card.value
    return "You have a total of" + total # total will be an integer, needs to be converted to string to be added onto statement. Return statement needs to be after end statement or will not cycle through rest of cards. Not an error, but should have space after of, ie "You have a total of " for readability.
  end
end
```
# Needs end statement for class
