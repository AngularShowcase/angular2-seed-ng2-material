import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it
} from 'angular2/testing_internal';
import {Component, View} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {AboutCmp} from './about';
import {PeopleList} from '../../services/people_list';

export function main() {
  describe('About component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.overrideTemplate(TestComponent, '<div><about></about></div>')
          .createAsync(TestComponent)
          .then((rootTC) => {
            rootTC.detectChanges();

            let aboutInstance = rootTC.debugElement.componentViewChildren[0].componentInstance;
            let aboutDOMEl = rootTC.debugElement.componentViewChildren[0].nativeElement;
            let nameListLen = function () {
              return aboutInstance.list.names.length;
            };

            expect(aboutInstance.list).toEqual(jasmine.any(PeopleList));
            expect(nameListLen()).toEqual(4);
            expect(DOM.querySelectorAll(aboutDOMEl, 'li').length).toEqual(nameListLen());

            aboutInstance.addName({value: 'Minko'});
            rootTC.detectChanges();

            expect(nameListLen()).toEqual(5);
            expect(DOM.querySelectorAll(aboutDOMEl, 'li').length).toEqual(nameListLen());

            expect(DOM.querySelectorAll(aboutDOMEl, 'li')[4].textContent).toEqual('Minko');
          });
      }));
  });
}

@Component({providers: [PeopleList], selector: 'test-cmp'})
@View({directives: [AboutCmp]})
class TestComponent {}
