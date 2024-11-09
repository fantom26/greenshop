export class DateManager {
  static getCurrentDate() {
    return new Date().getFullYear();
  }

  static generateDays(daysCount: number) {
    const expires = new Date();

    // n days after today
    expires.setDate(expires.getDate() + daysCount);

    return expires;
  }
}
