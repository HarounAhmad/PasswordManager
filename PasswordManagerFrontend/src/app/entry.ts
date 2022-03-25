export class Entry {
  id: string = '';
  title: string = '';
  url: string = '';
  loginText: string = '';
  password: string = '';


  EntrytoString(): string {
    return "" + this.id + "\n" + this.title + "\n" + this.url + "\n" + this.loginText + "\n" + this.password
  }

}
