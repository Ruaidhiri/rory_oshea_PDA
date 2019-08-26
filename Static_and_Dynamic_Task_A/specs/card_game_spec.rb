require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game.rb')
require_relative('../card.rb')

class TestCardGame < MiniTest::Test

  def setup
      @game = CardGame.new
      @card1 = Card.new('clubs', 1)
      @card2 = Card.new('hearts', 3)
      @card3 = Card.new('spades', 13)
  end

  def test_card_suit
    assert_equal('clubs', @card1.suit)
  end

  def test_card_value
    assert_equal(13, @card3.value)
  end

  def test_checkforAce_true
    result = @game.checkforAce(@card1)
    assert_equal(true, result)
  end

  def test_checkforAce_false
    result = @game.checkforAce(@card2)
    assert_equal(false, result)
  end

  def test_highest_card
    result = @game.highest_card(@card1, @card2)
    assert_equal(@card2, result)
  end

  def test_cards_total
      cards = [@card1, @card2, @card3]
      result = CardGame.cards_total(cards)
    assert_equal("You have a total of 17", result)
  end

end
