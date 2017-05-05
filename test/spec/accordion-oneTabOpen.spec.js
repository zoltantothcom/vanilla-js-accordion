describe('ACCORDION - ONE TAB OPEN', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = fixturePath;
        loadFixtures(accordionFixture);

        this.accordion = new Accordion({
            element: 'accordion',
            oneOpen: true,
            openTab: 2
        });
    });

    describe('accordion properties and behavior', function() {
        it('should open the 2nd tab when openTab set to 2', function() {
            expect( $('#accordion > div')[0] ).toHaveCss({ height: '0px' });
            expect( $('#accordion > div')[1] ).toBeVisible();
            expect( $('#accordion > div')[2] ).toHaveCss({ height: '0px' });
        });

        it('should open the clicked tab', function() {
            var button = $('#accordion > button')[0],
                content = $('#accordion > div')[0];

            expect(content).toHaveCss({ height: '0px' });

            var spyEvent = spyOnEvent(button, 'click');

            button.click();

            expect('click').toHaveBeenTriggeredOn(button);
            expect(spyEvent).toHaveBeenTriggered();

            expect(content).toBeVisible();
        });
    });
});