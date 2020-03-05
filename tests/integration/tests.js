const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  // it should update the display of the running total when a button is pressed
  it('should update the display when number buttons are pressed', function(){
    running_total = element(by.css("#running_total"))
    element(by.css("#number2")).click()
    element(by.css("#number2")).click()
    element(by.css("#number3")).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('223')
  })

  // it should update the display with the result of the operation
  it('should update the display when an operation is completed', function(){
    element(by.css('#running_total'))
    element(by.css('#number9')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number9')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('81')
  })

  // it should be able to chain multiple operators together
  it('should be able to complete multiple operations', function(){
    element(by.css('#running_total'))
    element(by.css('#number2')).click()
    element(by.css('#number3')).click()
    element(by.css('#operator_add')).click()
    element(by.css('#number4')).click()
    element(by.css('#operator_subtract')).click()
    element(by.css('#number6')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number7')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number9')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('27')
  })


  // it should be able to display positive, negative, decimals and very large numbers
  it('should be able to display positive, negative, decimals and very large numbers', function(){
    element(by.css('running_total'))
    element(by.css('#number7')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('7')
    element(by.css('#operator_subtract')).click()
    element(by.css('#number9')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('-2')
    element(by.css('#operator_divide')).click()
    element(by.css('#number3')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('-0.6666666666666666')
    element(by.css('#clear')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('9999800001')
  })

  // it should be able to handle any exceptional calculations, such as dividing by zero and then displaying undefined to the user
  it('should be able to handle dividing by zero', function(){
    element(by.css('#running_total'))
    element(by.css('#number1')).click()
    element(by.css('#number0')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number0')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('undefined')
  })

});
