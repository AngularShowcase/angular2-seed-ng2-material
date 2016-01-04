import {PeopleList,Person} from './people_list';

export function main() {
  describe('PeopleList Service', () => {
    let nameList;

    beforeEach(() => {
      nameList = new PeopleList;
    });

    it('should return the list of people', () => {
      let people = nameList.get();
      people.forEach((p:Person) => {
        expect(p.name).toBeDefined();
        expect(p.image).toBeDefined();
      });
      expect(people).toEqual(jasmine.any(Array));
    });
  });
}
