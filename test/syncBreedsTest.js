const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');
const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
const expectedDesc2 = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner."

describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {
    // We expect it to be a function, but will it be?
    assert.isTrue(breedDetails("Bombay") === expectedDesc);
  });

  it('returns breed details for the Balinese breed', () => {
    assert.isTrue(breedDetails("Balinese") === expectedDesc2);
  })

  it('returns undefined when not given breed', () => {
    assert.isTrue(breedDetails() === undefined);
  })
});
