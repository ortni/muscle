export class DateFormater {
  static month = {
    short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  };
  static short(d) {
    const y = d.getFullYear();
    const m = this.month.short[d.getMonth()];
    return `${m}, ${y}`;
  }
}
