import { MainPage, Pills } from "../support/page_objects/main_page";
import { pageTitle, pillGroup, selectors } from "../support/page_objects/pill_group";

describe('Tour of Heroes E2E Tests', () => {

    beforeEach(() => {
      // Visit the application before each test
      cy.visitApp()
    });
  
    it('Main Page - displayed text', () => {
      const text = 'Hello, tour-of-heroes'

      MainPage.getAngular().should('be.visible');
      cy.get(pageTitle).should('exist').and('contain.text', (text))
      cy.get('[data-cy="text-under-title]').should('not.be.empty')
    });
  
it('Pill group - Check pill group', () => {
  
      cy.get(selectors.pillGroup).invoke('text')
      .then((text) => {
        // Loop through each element from the pillGroup array

        pillGroup.forEach(expectedText => {
          // Verify that the text from the DOM contains every expected string
          expect(text).to.contain(expectedText);
        });
      });
  });

//   TO DO - nevola sa cez 
  it('Should open the correct link in a new tab', () => {
    // Get the window and set the stub to the 'open' method
    cy.window().then(win => {
      cy.stub(win, 'open').as('newTab');
    });
  
    Pills.getPills(0).click();
  
    // Verify, that 'window.open' should be called by URL and '_blank'
    cy.get('@newTab').should('be.calledWith', 'https://angular.dev', '_blank');
  });


  it('Should have the correct href and target="_blank"', () => {
    Pills.getPills(1)
      .should('have.attr', 'href', 'https://angular.dev/tutorials')
      .and('have.attr', 'target', '_blank');  // Verify that the link should open in a new tab
  });  
  });