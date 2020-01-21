export class Person {
  
  private _name : string;
  public get name() : string {
    return this._name;
  }
  public set name(v : string) {
    this._name = v;
  }
  
  private _email : string;
  public get email() : string {
    return this._email;
  }
  public set email(v : string) {
    this._email = v;
  }
  
}