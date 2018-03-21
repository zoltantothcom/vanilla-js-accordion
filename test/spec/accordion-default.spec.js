describe('ACCORDION - DEFAULT - DOM element passed', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = fixturePath;
        loadFixtures(accordionFixture);

        var accordion = document.getElementById('accordion');

        this.accordion = new Accordion({
            element: accordion
        });
    });

    sharedTests();
});

describe('ACCORDION - DEFAULT - ID passed', function() {
  beforeEach(function() {
      jasmine.getFixtures().fixturesPath = fixturePath;
      loadFixtures(accordionFixture);

      this.accordion = new Accordion({
          element: 'accordion'
      });
  });

    sharedTests();
});


function sharedTests() {
    describe('accordion', function() {
        it('should be defined', function() {
            expect( this.accordion ).toBeDefined();
        });

        it('markup should be present', function() {
            expect( $('#accordion') ).toBeDefined();
        });

        it('should have at least one tab', function() {
            expect( $('#accordion > button').length ).toBeGreaterThan(0);
            expect( $('#accordion > div').length ).toBeGreaterThan(0);
        });
    });

    describe('accordion classes', function() {
        it('should assign the title class to all buttons', function() {
            expect( $('#accordion > button')[0] ).toHaveClass('js-Accordion-title');
            expect( $('#accordion > button')[1] ).toHaveClass('js-Accordion-title');
            expect( $('#accordion > button')[2] ).toHaveClass('js-Accordion-title');
        });

        it('should assign the content class to all containers', function() {
            expect( $('#accordion > div')[0] ).toHaveClass('js-Accordion-content');
            expect( $('#accordion > div')[1] ).toHaveClass('js-Accordion-content');
            expect( $('#accordion > div')[2] ).toHaveClass('js-Accordion-content');
        });

        it('should have the same number of buttons and containers', function() {
            var buttons = $('#accordion > button').length;
            expect( $('#accordion > div').length ).toBe(buttons);
        });
    });

    describe('methods', function() {
        it('should have an open() method', function() {
            expect(typeof this.accordion.open).toBe('function');
        });

        it('should have a close() method', function() {
            expect(typeof this.accordion.close).toBe('function');
        });

        it('should have a destroy() method', function() {
            expect(typeof this.accordion.destroy).toBe('function');
        });

        it('.open(1) should open the 1st tab of accordion', function() {
            this.accordion.open(1);
            expect( $('#accordion > div')[0] ).toBeVisible();
        });

        it('.close(2) should close the 2nd tab of accordion', function() {
            this.accordion.open(2);
            expect( $('#accordion > div')[1] ).toBeVisible();
            this.accordion.close(2);
            expect( $('#accordion > div')[1] ).toHaveCss({ height: '0px' });
        });

        it('should do nothing after destroy()', function() {
            var button = $('#accordion > button')[0],
                content = $('#accordion > div')[0];

            expect(content).toHaveCss({ height: '0px' });

            this.accordion.destroy();

            var spyEvent = spyOnEvent(button, 'click');

            button.click();

            expect('click').toHaveBeenTriggeredOn(button);
            expect(spyEvent).toHaveBeenTriggered();

            expect(content).toHaveCss({ height: '0px' });
        });
    });
}
