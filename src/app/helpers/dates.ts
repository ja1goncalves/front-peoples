export class DateHelper {
  constructor() {}

  static convertFormatBrazilianDate(date: string) {
    const day  = date.split('/')[0];
    const month  = date.split('/')[1];
    const year  = date.split('/')[2];

    return `${year}-${('0' + month).slice(-2)}-${('0' + day).slice(-2)}T00:00:00.440Z`;
  }
}
