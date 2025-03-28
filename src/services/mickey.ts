export default class MickeyService {
  static readonly phrases = [
    "H-Hey everybody! It's me, Mickey Mouse!",
    'Everybody says, "Oh, Toodles!"',
    "We've got ears! Say cheers!",
    'We\'ve used all our Mousketools! Say "Super Cheers!"',
    'What a hot dog day!',
    'Meeska, Mooska, Mickey Mouse!',
    'The telescope will help us see things far away.',
    'The mystery mouseketool is a super-duper camera!',
  ]

  public static saySomething(): string {
    const randomPhrase = MickeyService.phrases[Math.floor(Math.random() * this.phrases.length)]
    return randomPhrase
  }
}
