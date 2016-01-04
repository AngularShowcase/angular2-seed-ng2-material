export interface Person {
  name:string;
  image:string;
}
export class PeopleList {
  people: Person[] = [
    {name: 'Dijkstra',image: 'avatar2'},
    {name: 'Knuth',   image: 'avatar3'},
    {name: 'Turing',  image: 'avatar4'},
    {name: 'Hopper',  image: 'avatar5'}
  ];

  get(): Person[] {
    return this.people;
  }

  add(value: string): void {
    this.people.push({
      name: value,
      image: `avatar${Math.ceil(Math.random() * 12)}`
    });
  }
}
