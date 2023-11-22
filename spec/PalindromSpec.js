describe('Palindrom', function () {
  it('Null is not Palindrom', function () {
    expect(isPalindrom(null)).toBe(false)
  })

  it('Empty String is not Palindrom', function () {
    expect(isPalindrom('')).toBe(false)
  })

  it('One char is Palindrom', function () {
    expect(isPalindrom('a')).toBe(true)
  })

  it('Two same chars is Palindrom', function () {
    expect(isPalindrom('aa')).toBe(true)
  })

  it('Two differit chars is not Palindrom', function () {
    expect(isPalindrom('ab')).toBe(false)
  })

   it('three chars same as their reverse is Palindrom', function () {
     expect(isPalindrom('aba')).toBe(true)
   })


})
