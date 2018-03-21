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
    describe('behavior', function() {
        it('should have no open tab when openTab value is out of range', function() {
            expect( $('#accordion > div')[0] ).toHaveCss({ height: '0px' });
            expect( $('#accordion > div')[1] ).toHaveCss({ height: '0px' });
            expect( $('#accordion > div')[2] ).toHaveCss({ height: '0px' });
        });

        it('.open(99) should do nothing', function() {
            expect( $('#accordion > div')[0] ).toHaveCss({ height: '0px' });
            expect( $('#accordion > div')[1] ).toHaveCss({ height: '0px' });
            expect( $('#accordion > div')[2] ).toHaveCss({ height: '0px' });

            this.accordion.open(99);

            expect( $('#accordion > div')[0] ).toHaveCss({ height: '0px' });
            expect( $('#accordion > div')[1] ).toHaveCss({ height: '0px' });
            expect( $('#accordion > div')[2] ).toHaveCss({ height: '0px' });
        });

        it('.close(-99) should do nothing', function() {
            this.accordion.open(1);
            expect( $('#accordion > div')[0] ).toBeVisible();
            this.accordion.open(2);
            expect( $('#accordion > div')[0] ).toBeVisible();
            this.accordion.open(3);
            expect( $('#accordion > div')[0] ).toBeVisible();

            this.accordion.close(-99);

            expect( $('#accordion > div')[0] ).toBeVisible();
            expect( $('#accordion > div')[1] ).toBeVisible();
            expect( $('#accordion > div')[2] ).toBeVisible();
        });

        it('should do nothing when clicked not on title', function() {
            var button = $('#accordion .js-Accordion-title')[0],
                content = $('#accordion .js-Accordion-content')[0];

            // first scenario:
            // click on title opens and hides content
            expect(content).toHaveCss({ height: '0px' });

            var spyEvent = spyOnEvent(button, 'click');

            button.click();

            expect('click').toHaveBeenTriggeredOn(button);
            expect(spyEvent).toHaveBeenTriggered();
            expect(content).toBeVisible();

            button.click();

            expect(content).toHaveCss({ height: '0px' });

            // second scenario:
            // click happens not on title, but content container
            var spyEvent = spyOnEvent(content, 'click');

            content.click();

            expect('click').toHaveBeenTriggeredOn(content);
            expect(spyEvent).toHaveBeenTriggered();
            expect(content).toHaveCss({ height: '0px' });

            // still works on title click
            button.click();

            expect(content).toBeVisible();
        });
    });
}
